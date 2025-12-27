
import { BlogPostMetadata, IBlogPostRepository } from "./blogRepository";

export class EmptyBlogPostRepository implements IBlogPostRepository {
    async getAllMetadata(): Promise<BlogPostMetadata[]> {
        return [];
    }
    async getMetadataById(id: number): Promise<BlogPostMetadata | null> {
        return null;
    }
    async getContentById(id: number): Promise<string | null> {
        return null;
    }

}