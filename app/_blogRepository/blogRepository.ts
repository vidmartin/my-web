
export type BlogPostMetadata = {
    id: number,
    title: string,
    description: string,
    publishDate: Date,
}

export interface IBlogPostRepository {
    getAllMetadata(): Promise<BlogPostMetadata[]>,
    getMetadataById(id: number): Promise<BlogPostMetadata>,
    getContentById(id: number): Promise<string>,
}
