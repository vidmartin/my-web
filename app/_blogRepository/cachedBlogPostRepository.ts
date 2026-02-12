
import { unstable_cache } from "next/cache";
import { BlogPost, BlogPostMetadata, IBlogPostRepository } from "./blogRepository";

export class CachedBlogPostRepository implements IBlogPostRepository {
    getAllMetadata: () => Promise<BlogPostMetadata[]>
    getMetadataById: (id: number) => Promise<BlogPostMetadata | null>
    getContentById: (id: number) => Promise<string | null>
    getBlogPostById: (id: number) => Promise<BlogPost | null>

    constructor(
        private _wrapped: IBlogPostRepository,
        private _revalidate: number | false,
    ) {
        this.getAllMetadata = unstable_cache(_wrapped.getAllMetadata, [], { revalidate: _revalidate });
        this.getMetadataById = unstable_cache(_wrapped.getMetadataById, [], { revalidate: _revalidate });
        this.getContentById = unstable_cache(_wrapped.getContentById, [], { revalidate: _revalidate });
        this.getBlogPostById = unstable_cache(_wrapped.getBlogPostById, [], { revalidate: _revalidate });
    }
}