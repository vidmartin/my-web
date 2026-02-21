"use client";

import { PropsWithChildren, useEffect, useRef, useState } from "react";

export default function HomePageBlock(props: PropsWithChildren<{ idAttr: string }>) {
    const [opacity, setOpacity] = useState<number>(1.0);
    const blockRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function updateOpacity() {
            if (blockRef.current == null) {
                return;
            }

            const factor = blockRef.current.getBoundingClientRect().top / window.innerHeight;
            setOpacity(factor <= 0.75 ? 1.0 : 0.0);
        }

        updateOpacity();
        window.addEventListener("scroll", updateOpacity);
        return () => window.removeEventListener("scroll", updateOpacity);
    }, []);

    return <div className="block" id={props.idAttr} ref={blockRef} style={{ opacity: opacity }}>
        {props.children}
    </div>
}