"use client";

import { PropsWithChildren, useEffect, useRef, useState } from "react"

export type TerminalBlockProps = PropsWithChildren<{
    title: string,
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
        <div ref={titleRef}>+ {props.title}</div>
        {
            (observedHeight !== null && lineHeight !== null) ? 
                new Array(Math.floor((observedHeight + 1) / lineHeight + 2)).fill(0).map((_, i) => <div key={i}>|</div>)
                : <></>
                // (that (observedHeight + 1) works instead of just observedHeight was determined via trial and error)
        }
        <div className="absolute top-[3em] left-[2em]" ref={contentRef}>
            {props.children}
        </div>
    </div>
}
