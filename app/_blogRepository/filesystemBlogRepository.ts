
import fs from "fs/promises";
import path from "path";
import yaml from "js-yaml";
import { BlogPost, BlogPostMetadata, IBlogPostRepository } from "./blogRepository";

export class FilesystemBlogPostRepository implements IBlogPostRepository {
    constructor(private _blogDirPath: string) {}

    private _getBlogPostMetadata(filenameNoExt: string, metadata: unknown): BlogPostMetadata {
        const id = parseInt(filenameNoExt);
        if (isNaN(id)) {
            throw new Error(`expected the integer id to be the filename, but ${filenameNoExt} is not an integer`);
        }

        if (typeof metadata != "object") {
            throw new Error(`expected type object, got ${typeof metadata} instead`);
        }
        if (metadata == null) {
            throw new Error("metadata is null");
        }
        if (!("description" in metadata) || typeof metadata.description != "string") {
            throw new Error("missing description in metadata or it has wrong type");
        }
        if (!("publishDate" in metadata) || typeof metadata.publishDate != "string") {
            throw new Error("missing publishDate in metadata or it has wrong type");
        }
        if (metadata.publishDate.match(/^\d\d\d\d-\d\d-\d\d$/g) == null) {
            throw new Error("incorrect format of publishDate - expected YYYY-MM-DD");
        }
        if (!("title" in metadata) || typeof metadata.title != "string") {
            throw new Error("missing title in metadata or it has wrong type");
        }

        return {
            id: id,
            description: metadata.description,
            publishDate: metadata.publishDate,
            title: metadata.title,
        };
    }

    private async _getBlogPostFromPath(fullPath: string): Promise<BlogPost> {
        const fileContent = await fs.readFile(fullPath, { encoding: "utf-8" });

        const matches = Array.from(fileContent.matchAll(/^---[\t ]*$/gm));

        if (matches.length < 2) {
            throw new Error(`missing metadata separators in blog post file ${fullPath}; skipping`);
        }
        if (matches[0].index != 0) {
            throw new Error(`invalid formatting of metadata in blog post file ${fullPath} (metadata must start at beginning of file); skipping`);
        }

        const yamlMetadataStartIndex = matches[0].index + matches[0][0].length + 1;
        const yamlMetadataEndIndex = matches[1].index;
        const contentStartIndex = matches[1].index + matches[1][0].length + 1;

        const yamlMetadata = fileContent.slice(yamlMetadataStartIndex, yamlMetadataEndIndex);
        const loadedMetadata = yaml.load(yamlMetadata, { schema: yaml.FAILSAFE_SCHEMA });

        const actualContent = fileContent.slice(contentStartIndex);

        try {
            const metadata = this._getBlogPostMetadata(path.parse(fullPath).name, loadedMetadata);

            return {
                content: actualContent,
                metadata: metadata,
            };
        } catch (e) {
            if (e instanceof Error) {
                throw new Error(`error when trying to load blog post file ${fullPath}: ${e.message}`);
            }
            throw e;
        }
    }

    public async getAllMetadata(): Promise<BlogPostMetadata[]> {
        const ret: BlogPostMetadata[] = [];

        const dirEnts = await fs.readdir(this._blogDirPath, { withFileTypes: true });
        for (const dirEnt of dirEnts) {
            if (!dirEnt.isFile()) {
                continue;
            }
            if (!dirEnt.name.endsWith(".md")) {
                continue;
            }

            const fullPath = path.join(dirEnt.parentPath, dirEnt.name);
            try {
                const blogPost = await this._getBlogPostFromPath(fullPath);
                ret.push(blogPost.metadata);
            } catch (e) {
                if (e instanceof Error) {
                    console.warn(e.message);
                    continue;
                }
                throw e;
            }
        }
        
        return ret;
    }
    public async getMetadataById(id: number): Promise<BlogPostMetadata | null> {
        return (await this.getBlogPostById(id))?.metadata ?? null;
    }
    public async getContentById(id: number): Promise<string | null> {
        return (await this.getBlogPostById(id))?.content ?? null;
    }
    public async getBlogPostById(id: number): Promise<BlogPost | null> {
        try {
            const fullPath = path.join(this._blogDirPath, `${id}.md`);
            return await this._getBlogPostFromPath(fullPath);
        } catch (e) {
            if (e instanceof Error) {
                console.warn(e.message);
                return null;
            }
            throw e;            
        }
    }
}
