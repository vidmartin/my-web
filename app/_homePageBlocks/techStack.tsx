
export default function Tech(props: { idAttr: string }) {
    return <div className="block" id={props.idAttr}>
        <h1>stack</h1>
        Here are some technologies (languages, libraries, frameworks, tools, etc.) I've touched over the years.
        <div className="text-center mt-5 pl-40 pr-40">
            <img src="/stack/python.png" className="tech-icon" />
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
            <img src="/stack/qiskit.png" className="tech-icon" />
        </div>
    </div>
}