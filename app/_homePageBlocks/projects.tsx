
import MarkdownRenderer from "../_components/markdownRenderer";
import { PaginatedTerminalBlocks } from "../_components/paginatedTerminalBlocks";
import TerminalBlock from "../_components/terminalBlock";
import { PROJECT_REPOSITORY } from "../globals";

export default async function Projects(props: { idAttr: string }) {
    const projects = await PROJECT_REPOSITORY.getAllProjects();
    projects.sort((a, b) => b.id - a.id);

    return <div className="block" id={props.idAttr}>
        <h1>projects</h1>
        Here are some personal projects of mine, including school projects.
        <div className="pl-5 pt-5">
            <PaginatedTerminalBlocks blocksPerPage={3} blocks={
                projects.map(project => ({
                    content: project.description,
                    title: `${project.year}: ${project.title}`,
                }))
            } />
        </div>
    </div>;
}