
import fs from "fs/promises";
import path from "path";
import yaml from "js-yaml";
import { BlogPostMetadata, IBlogPostRepository } from "./blogRepository";

type LoadedBlogPosts = { [id: number]: { metadata: BlogPostMetadata, content: string } };

function getBlogPostMetadata(filename: string, metadata: unknown): BlogPostMetadata {
    const filenameNoExt = filename.slice(0, filename.length - 3);
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
    if (!("title" in metadata) || typeof metadata.title != "string") {
        throw new Error("missing title in metadata or it has wrong type");
    }

    return {
        id: id,
        description: metadata.description,
        publishDate: new Date(Date.parse(metadata.publishDate)),
        title: metadata.title,
    };
}

export class FilesystemBlogPostRepository implements IBlogPostRepository {
    _blogPosts: LoadedBlogPosts | null;

    constructor(public path: string) {
        this._blogPosts = null;
    }

    async _getBlogPosts(): Promise<LoadedBlogPosts> {
        if (this._blogPosts != null) {
            return this._blogPosts;
        }

        this._blogPosts = {};

        const dirEnts = await fs.readdir(this.path, { withFileTypes: true });
        for (const dirEnt of dirEnts) {
            if (!dirEnt.isFile()) {
                continue;
            }
            if (!dirEnt.name.endsWith(".md")) {
                continue;
            }

            const fullPath = path.join(dirEnt.parentPath, dirEnt.name);
            const fileContent = await fs.readFile(fullPath, { encoding: "utf-8" });

            const matches = Array.from(fileContent.matchAll(/^---[\t ]*$/gm));

            if (matches.length < 2) {
                console.warn(`missing metadata separators in blog post file ${fullPath}; skipping`);
                continue;
            }
            if (matches[0].index != 0) {
                console.warn(`invalid formatting of metadata in blog post file ${fullPath} (metadata must start at beginning of file); skipping`);
                continue;
            }

            const yamlMetadataStartIndex = matches[0].index + matches[0][0].length + 1;
            const yamlMetadataEndIndex = matches[1].index;
            const contentStartIndex = matches[1].index + matches[1][0].length + 1;

            const yamlMetadata = fileContent.slice(yamlMetadataStartIndex, yamlMetadataEndIndex);
            const loadedMetadata = yaml.load(yamlMetadata, { schema: yaml.FAILSAFE_SCHEMA });

            const actualContent = fileContent.slice(contentStartIndex);

            try {
                const metadata = getBlogPostMetadata(dirEnt.name, loadedMetadata);

                this._blogPosts[metadata.id] = {
                    content: actualContent,
                    metadata: metadata,
                };
            } catch (e) {
                if (e instanceof Error) {
                    console.warn(`failed to parse metadata for file ${fullPath} (${e.message}); skipping`);
                    continue;
                }
                throw e;
            }
        }

        return this._blogPosts;
    }

    async getAllMetadata(): Promise<BlogPostMetadata[]> {
        const blogPosts = await this._getBlogPosts();
        return Object.values(blogPosts).map(record => record.metadata);
    }
    async getMetadataById(id: number): Promise<BlogPostMetadata | null> {
        const blogPosts = await this._getBlogPosts();
        return blogPosts[id]?.metadata ?? null;
    }
    async getContentById(id: number): Promise<string | null> {
        const blogPosts = await this._getBlogPosts();
        return blogPosts[id]?.content ?? null;
    }
}
