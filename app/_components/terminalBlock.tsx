"use client";

import Link from "next/link";
import { PropsWithChildren, useEffect, useRef, useState } from "react"

export type TerminalBlockProps = PropsWithChildren<{
    title: string,
    href?: string,
}>;

export default function TerminalBlock(props: TerminalBlockProps) {
    const titleRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    const [observedHeight, setObservedHeight] = useState<null | number>(null);

    useEffect(() => {
        function updateObservedHeight() {
            setObservedHeight(contentRef.current?.clientHeight ?? null);
        }
        
        updateObservedHeight();
        window.addEventListener("resize", updateObservedHeight);
        return () => window.removeEventListener("resize", updateObservedHeight);
    }, []);

    const lineHeight = titleRef.current?.clientHeight ?? null;
    return <div className="relative">
        <div ref={titleRef}>+ {
            props.href !== undefined ? (<Link href={props.href}>{props.title}</Link>) : props.title
        }</div>
        <div className="absolute top-[1lh]">
            {
                (observedHeight !== null && lineHeight !== null) ?
                    new Array(Math.floor(observedHeight / lineHeight + 1)).fill(0).map((_, i) => <div key={i}>|</div>)
                    : <></>
            }
        </div>
        <div className="pl-[3ch] pt-[1lh] pb-[1lh]" ref={contentRef}>
            {props.children}
        </div>
    </div>
}
