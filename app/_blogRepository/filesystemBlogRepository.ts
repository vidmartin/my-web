
import { readFile } from "fs/promises";
import { BlogPostMetadata, IBlogPostRepository } from "./blogRepository";

const BLOG_POSTS: { [key: number]: BlogPostMetadata } = {
    1: {
        id: 1,
        title: "My first post",
        description: "The time to unleash my wisdom upon the world has come. An exciting time indeed!",
        publishDate: new Date(2025, 11, 11),
    },
    2: {
        id: 2,
        title: "My second post",
        description: "The time to unleash my wisdom upon the world has come. An exciting time indeed!",
        publishDate: new Date(2025, 11, 21),
    },
    3: {
        id: 3,
        title: "My third post",
        description: "The time to unleash my wisdom upon the world has come. An exciting time indeed!",
        publishDate: new Date(2025, 11, 30),
    },
    // 4: {
    //     id: 4,
    //     title: "My fourth post",
    //     description: "The time to unleash my wisdom upon the world has come. An exciting time indeed!",
    //     publishDate: new Date(2026, 1, 5),
    // },
    // 5: {
    //     id: 5,
    //     title: "My fifth post",
    //     description: "The time to unleash my wisdom upon the world has come. An exciting time indeed!",
    //     publishDate: new Date(2026, 1, 11),
    // },
}


export class FilesystemBlogPostRepository implements IBlogPostRepository {
    constructor(public path: string) {}

    async getAllMetadata(): Promise<BlogPostMetadata[]> {
        return Object.values(BLOG_POSTS);
    }
    async getMetadataById(id: number): Promise<BlogPostMetadata> {
        return BLOG_POSTS[id];
    }
    async getContentById(id: number): Promise<string> {
        const content = await readFile(`${this.path}/${id}.md`, { encoding: "utf-8" });
        return content;
    }
}
