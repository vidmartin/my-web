
export type BlogPostMetadata = {
    id: number,
    title: string,
    description: string,
    publishDate: string,
}

export type BlogPost = {
    metadata: BlogPostMetadata,
    content: string,
}

export interface IBlogPostRepository {
    getAllMetadata(): Promise<BlogPostMetadata[]>,
    getMetadataById(id: number): Promise<BlogPostMetadata | null>,
    getContentById(id: number): Promise<string | null>,
    getBlogPostById(id: number): Promise<BlogPost | null>,
}
