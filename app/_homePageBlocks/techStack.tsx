"use client";

import { useState } from "react";

function TechIcon(
    props: {
        src: string,
        annotation: string,
        setAnnotation: (_: string | null) => void,
        height?: string
    }
) {
    return <img
        src={props.src}
        onMouseEnter={() => props.setAnnotation(props.annotation)}
        onMouseLeave={() => props.setAnnotation(null)}
        className="tech-icon"
        style={props.height != undefined ? { height: props.height } : {}}
    />;
}

const TECHS: { src: string, annotation: string, height?: string }[] = [
    { src: "/stack/python.png", annotation: "Python" },
    { src: "/stack/csharp.png", annotation: "C#" },
    { src: "/stack/cpp.png", annotation: "C/C++" },
    { src: "/stack/git.png", annotation: "Git" },
    { src: "/stack/mysql.png", annotation: "MySQL" },
    { src: "/stack/graphql.png", annotation: "GraphQL" },
    { src: "/stack/pytorch.png", annotation: "PyTorch" },
    { src: "/stack/docker.png", annotation: "Docker" },
    { src: "/stack/gcloud.png", annotation: "Google Cloud", height: "2.5em" },
    { src: "/stack/opengl.png", annotation: "OpenGL", height: "2.5em" },
    { src: "/stack/react.png", annotation: "React" },
    { src: "/stack/rust.png", annotation: "Rust" },
    { src: "/stack/scala.png", annotation: "Scala" },
    { src: "/stack/ts.png", annotation: "TypeScript", height: "2.75em" },
    { src: "/stack/qiskit.png", annotation: "Qiskit" },
]

export default function Tech(props: { idAttr: string }) {
    const [annotation, setAnnotation] = useState<string | null>(null);

    return <div className="block" id={props.idAttr}>
        <h1>stack</h1>
        Here are some technologies (languages, libraries, frameworks, tools, etc.) I've touched over the years.
        <div className="text-center mt-5 pl-40 pr-40 relative">
            <div className="relative">
                <div style={{ position: "absolute", top: "50%", right: "100%", transform: "translateY(-50%)", textWrap: "nowrap" }}>{annotation != null ? `[${annotation}]` : ""}</div>
                {TECHS.map(
                    attrs => <TechIcon
                        key={attrs.src}
                        src={attrs.src}
                        annotation={attrs.annotation}
                        setAnnotation={setAnnotation}
                        height={attrs.height}
                    />
                )}
            </div>
            {/* <img src="/stack/python.png" className="tech-icon" />
            <img src="/stack/csharp.png" className="tech-icon" />
            <img src="/stack/cpp.png" className="tech-icon" />
            <img src="/stack/git.png" className="tech-icon" />
            <img src="/stack/mysql.png" className="tech-icon" />
            <img src="/stack/graphql.png" className="tech-icon" />
            <img src="/stack/pytorch.png" className="tech-icon" />
            <img src="/stack/docker.png" className="tech-icon" />
            <img src="/stack/gcloud.png" className="tech-icon" style={{ height: "2.5em" }} />
            <img src="/stack/opengl.png" className="tech-icon" style={{ height: "2.5em" }} />
            <img src="/stack/react.png" className="tech-icon" />
            <img src="/stack/rust.png" className="tech-icon" />
            <img src="/stack/scala.png" className="tech-icon" />
            <img src="/stack/ts.png" className="tech-icon" style={{ height: "2.75em" }} />
            <img src="/stack/qiskit.png" className="tech-icon" /> */}
        </div>
    </div>
}