
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
        <ProjectView projects={PROJECTS} />
    </div>;
}