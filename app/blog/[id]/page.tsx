
import { BLOG_POST_REPOSITORY } from "@/app/globals";
import { fromMarkdown } from "mdast-util-from-markdown";
import { math } from "micromark-extension-math";
import { mathFromMarkdown } from "mdast-util-math";
import MarkdownNode from "@/app/_components/markdownNode";
import { notFound } from "next/navigation";
import MarkdownRenderer from "@/app/_components/markdownRenderer";

export default async function BlogPost(props: PageProps<"/blog/[id]">) {
    const params = await props.params;
    const id = parseInt(params.id);

    if (isNaN(id)) {
        notFound();
    }

    const metadata = await BLOG_POST_REPOSITORY.getMetadataById(id);
    const content = await BLOG_POST_REPOSITORY.getContentById(id);

    if (content == null || metadata == null) {
        notFound();
    }

    return <>
        <h1 className="text-center mt-10">{metadata.title}</h1>
        <p className="text-center">{metadata.description}</p>
        <p className="text-right mt-5 mb-5"><i>Posted {metadata.publishDate.getFullYear()}-{metadata.publishDate.getMonth()}-{metadata.publishDate.getDate()}</i></p>
        <div><MarkdownRenderer content={content} /></div>
    </>
}