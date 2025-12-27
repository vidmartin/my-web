"use client";

import { MathJax } from "better-react-mathjax";
import "client-only";

export default function MathRenderer(props: { latex: string, inline: boolean }) {
    if (props.inline) {
        return <MathJax style={{ display: "inline-block" }}>{`\\(${props.latex}\\)`}</MathJax>
    } else {
        return <MathJax>{`\\[${props.latex}\\]`}</MathJax>;
    }
}
