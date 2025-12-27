
import { fromMarkdown } from "mdast-util-from-markdown";
import { mathFromMarkdown } from "mdast-util-math";
import { math } from "micromark-extension-math";
import MarkdownNode from "./markdownNode";

export default function MarkdownRenderer(props: { content: string }) {
    const ast = fromMarkdown(props.content, {
        extensions: [math()],
        mdastExtensions: [mathFromMarkdown()],
    });

    return <MarkdownNode node={ast} />;
}