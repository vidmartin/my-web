
import MarkdownRenderer from "../_components/markdownRenderer";
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
                project => <TerminalBlock key={project.id} title={project.title}>
                    <MarkdownRenderer content={project.description} paragraphClassNames="" />
                </TerminalBlock>
            )}
        </div>
    </div>;
}