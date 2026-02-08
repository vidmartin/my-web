"use client";

import { useState } from "react";
import TerminalBlock from "./terminalBlock";
import MarkdownRenderer from "./markdownRenderer";

export type PaginatedTerminalBlock = {
    title: string,
    href?: string,
    content: string,
}

export function PaginatedTerminalBlocks(
    props: {
        blocks: PaginatedTerminalBlock[],
        blocksPerPage: number,
    }
) {
    const nPages = Math.max(Math.ceil(props.blocks.length / props.blocksPerPage), 1);
    const [pageIdx, setPageIdx] = useState(0);

    const blocksToShow = props.blocks.slice(
        pageIdx * props.blocksPerPage,
        (pageIdx + 1) * props.blocksPerPage
    );
    return <div>
        <div>{
            blocksToShow.map((block, i) => <TerminalBlock key={i} title={block.title} href={block.href}>
                <MarkdownRenderer content={block.content} paragraphClassNames="" />
            </TerminalBlock>)
        }</div>
        <div className="text-center">
            {true ? <span
                className="underline cursor-pointer"
                onClick={() => { if (pageIdx > 0) setPageIdx(pageIdx - 1); }}
            >&lt;</span> : <></>}
            <span className="ml-5 mr-5">{pageIdx + 1}/{nPages}</span>
            {true ? <span
                className="underline cursor-pointer"
                onClick={() => { if (pageIdx < nPages - 1) setPageIdx(pageIdx + 1); }}
            >&gt;</span> : <></>}
        </div>
    </div>
}