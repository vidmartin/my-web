
import { BLOG_POST_REPOSITORY } from "@/app/globals";
import { fromMarkdown } from "mdast-util-from-markdown";
import { frontmatter } from "micromark-extension-frontmatter";
import { frontmatterFromMarkdown } from "mdast-util-frontmatter";

export default async function BlogPost(props: PageProps<"/blog/[id]">) {
    // TODO: get blog post from BLOG_POSTS and render it
    
    const params = await props.params;
    const id = parseInt(params.id);

    const metadata = await BLOG_POST_REPOSITORY.getMetadataById(id);
    const content = await BLOG_POST_REPOSITORY.getContentById(id)
    const ast = fromMarkdown(content, {
        extensions: [frontmatter(["yaml"])],
        mdastExtensions: [frontmatterFromMarkdown(["yaml"])],
    });

    return <>
        <h1 className="text-center mt-10">{metadata.title}</h1>
        <p className="text-center">{metadata.description}</p>
        <p className="text-right mt-5 mb-5"><i>Posted {metadata.publishDate.getFullYear()}-{metadata.publishDate.getMonth()}-{metadata.publishDate.getDate()}</i></p>
        <div>{JSON.stringify(ast)}</div>
    </>
}