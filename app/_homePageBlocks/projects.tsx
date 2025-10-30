import TerminalBlock from "../_components/terminalBlock";

type Project = {
  name: string,
  year: number,
  technologies: string[],
  description: string,
};

function ProjectView(props: { projects: Project[] }) {
  const lines: string[] = [];

  for (const project of props.projects) {
    lines.push(`+ ${project.year}: ${project.name} (${project.technologies.join(', ')})`);
    lines.push("|");
    lines.push(`|   ${project.description}`);
    lines.push("|");
  }

  return <div className="pl-5 pt-5 whitespace-pre-wrap">{lines.join("\n")}</div>
}

const PROJECTS: Project[] = [
    {
        name: "MyML",
        technologies: ["Python", "numpy"],
        year: 2025,
        description: "My custom framework for deep learning that helps me understand neural networks."
    },
    {
        name: "an interactive 3D application",
        technologies: ["C++", "OpenGL"],
        year: 2024,
        description: "A semestral project for a course in computer graphics, programmed in C++ using OpenGL. "
    }
]

export default function Projects(props: { idAttr: string }) {
    return <div className="block" id={props.idAttr}>
        <h1>projects</h1>
        Here are some personal projects of mine, including school projects.
        <div className="pl-5 pt-5">
          <TerminalBlock title={"2025: MyML"}>
            My custom framework for deep learning that helps me understand neural networks, built with Python and numpy. You can check it out on <a href="https://github.com/vidmartin/myml">GitHub</a>.
          </TerminalBlock>
          <TerminalBlock title={"2024: Factory rat"}>
            A semestral project for a course in computer graphics, programmed in C++ using OpenGL.
            I also had to create a simple web page for it, which you can marvel at <a href="https://cent.felk.cvut.cz/courses/PGR/archives/2023-2024/S-FIT/vidmamar/">here</a> (it's in Czech).
          </TerminalBlock>
          {/* {PROJECTS.map((project, i) => <TerminalBlock key={i} title={project.name}>{project.description}</TerminalBlock>)} */}
        </div>
    </div>;
}