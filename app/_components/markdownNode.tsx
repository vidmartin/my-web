"use client";

import { MathJax } from "better-react-mathjax";
import { Nodes } from "mdast";

export default function MarkdownNode({node}: { node: Nodes }) {
    if ("children" in node) {
        const childrenNodes = node.children.map((child, i) => <MarkdownNode key={i} node={child} />);
        if (node.type == "heading") {
            if (node.depth == 1) {
                return <h1 className="mt-10">{childrenNodes}</h1>
            } else if (node.depth == 2) {
                return <h2 className="mt-10">{childrenNodes}</h2>
            } else if (node.depth == 3) {
                return <h3 className="mt-10">{childrenNodes}</h3>
            } else {
                throw new Error(`unsupported heading depth ${node.depth}`);
            }
        } else if (node.type == "paragraph") {
            return <div className="mb-5 text-justify">{childrenNodes}</div>;
        } else if (node.type == "strong") {
            return <b>{childrenNodes}</b>;
        } else if (node.type == "emphasis") {
            return <i>{childrenNodes}</i>;
        } else if (node.type == "link") {
            return <a href={node.url}>{childrenNodes}</a>;
        } else if (node.type == "root") {
            return <>{childrenNodes}</>;
        } else {
            return <>{JSON.stringify(node)}</>; // unsupported node type
        }
    } else {
        if (node.type == "text") {
            return <>{node.value}</>;
        } else if (node.type == "inlineCode") {
            return <span className="code">{node.value}</span>
        } else if (node.type == "code") {
            return <pre className="code mb-5">{node.value}</pre>
        } else if (node.type == "image") {
            return <div className="text-center"><img
                src={node.url}
                alt={node.alt ?? undefined}
                title={node.title ?? undefined}
                className="inline"
            /></div>
        } else if (node.type == "inlineMath") {
            return <MathJax style={{ display: "inline-block" }}>{`\\(${node.value}\\)`}</MathJax>
        } else if (node.type == "math") {
            return <div className="text-center mb-5 text-2xl">
                <MathJax>{`\\[${node.value}\\]`}</MathJax>
            </div>;
        } else {
            return <>{JSON.stringify(node)}</>; // unsupported node type
        }
    }
}