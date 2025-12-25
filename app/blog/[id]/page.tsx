
import { BLOG_POST_REPOSITORY } from "@/app/globals";
import { fromMarkdown } from "mdast-util-from-markdown";
import { frontmatter } from "micromark-extension-frontmatter";
import { frontmatterFromMarkdown } from "mdast-util-frontmatter";
import { Nodes } from "mdast";

function MarkdownNode({node}: {node: Nodes}) {
    if (node.type == "heading") {
        const childrenNodes = node.children.map((child, i) => <MarkdownNode key={i} node={child} />);
        if (node.depth == 1) {
            return <h1 className="mt-10">{childrenNodes}</h1>
        } else if (node.depth == 2) {
            return <h2 className="mt-10">{childrenNodes}</h2>
        } else if (node.depth == 3) {
            return <h3 className="mt-10">{childrenNodes}</h3>
        } else {
            throw new Error(`unsupported heading depth ${node.depth}`);
        }
    } else if (node.type == "text") {
        return <>{node.value}</>;
    } else if (node.type == "paragraph") {
        const childrenNodes = node.children.map((child, i) => <MarkdownNode key={i} node={child} />);
        return <p className="mb-5 text-justify">{childrenNodes}</p>;
    } else if (node.type == "strong") {
        const childrenNodes = node.children.map((child, i) => <MarkdownNode key={i} node={child} />);
        return <b>{childrenNodes}</b>;
    } else if (node.type == "emphasis") {
        const childrenNodes = node.children.map((child, i) => <MarkdownNode key={i} node={child} />);
        return <i>{childrenNodes}</i>;
    } else if (node.type == "root") {
        const childrenNodes = node.children.map((child, i) => <MarkdownNode key={i} node={child} />);
        return <>{childrenNodes}</>;
    }
}

export default async function BlogPost(props: PageProps<"/blog/[id]">) {
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
        <div><MarkdownNode node={ast} /></div>
    </>
}