"use client";

import Link from "next/link";
import { PropsWithChildren, useEffect, useRef, useState } from "react"

export type TerminalBlockProps = PropsWithChildren<{
    title: string,
    href?: string,
    additionalTitle?: string,
}>;

export default function TerminalBlock(props: TerminalBlockProps) {
    const titleRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    const [observedHeight, setObservedHeight] = useState<null | number>(null);

    useEffect(() => {
        function updateObservedHeight() {
            setObservedHeight(contentRef.current?.getBoundingClientRect()?.height ?? null);
        }
        
        updateObservedHeight();
        window.addEventListener("resize", updateObservedHeight);
        return () => window.removeEventListener("resize", updateObservedHeight);
    }, []);

    const lineHeight = titleRef.current?.getBoundingClientRect()?.height ?? null;
    return <div className="relative">
        <div ref={titleRef}>+ {
            props.href !== undefined ? (<Link href={props.href}>{props.title}</Link>) : props.title
        }{props.additionalTitle ?? ""}</div>
        <div className="absolute top-[1lh]">
            {
                (observedHeight !== null && lineHeight !== null) ?
                    new Array(Math.round(observedHeight / lineHeight)).fill(0).map((_, i) => <div key={i}>|</div>)
                    : <></>
            }
        </div>
        <div className="pl-[3ch] pt-[1lh] pb-[1lh]" ref={contentRef}>
            {props.children}
        </div>
    </div>
}
