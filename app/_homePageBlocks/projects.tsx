
import TerminalBlock from "../_components/terminalBlock";
import { PROJECT_REPOSITORY } from "../globals";

export default async function Projects(props: { idAttr: string }) {
    const projects = await PROJECT_REPOSITORY.getAllProjects();
    projects.sort((a, b) => b.id - a.id);

    return <div className="block" id={props.idAttr}>
        <h1>projects</h1>
        Here are some personal projects of mine, including school projects.
        <div className="pl-5 pt-5">
            {projects.map(
                project => <TerminalBlock key={project.id} title={project.title}>{project.description}</TerminalBlock>
            )}
            {/* <TerminalBlock title={"2025: MyML"}>
                My custom framework for deep learning that helps me understand neural networks, built with Python and numpy. You can check it out on <a href="https://github.com/vidmartin/myml">GitHub</a>.
            </TerminalBlock>
            <TerminalBlock title={"2024: Factory rat"}>
                A semestral project for a course in computer graphics, programmed in C++ using OpenGL.
                I also had to create a simple web page for it, which you can marvel at <a href="https://cent.felk.cvut.cz/courses/PGR/archives/2023-2024/S-FIT/vidmamar/">here</a> (it's in Czech).
            </TerminalBlock> */}
        </div>
    </div>;
}