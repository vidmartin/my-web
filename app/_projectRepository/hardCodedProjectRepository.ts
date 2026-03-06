import { IProjectRepository, Project } from "./projectRepository";

const PROJECTS_LIST_WITHOUT_ID: Omit<Project, "id">[] = [
    {
        year: 2025,
        description: 
            "My custom framework for deep learning that helps me understand neural networks, built with Python and numpy. " +
            "It's available on [GitHub](https://github.com/vidmartin/myml).",
        title: "MyML",
    },
    {
        year: 2024,
        description:
            "A semestral project for a course in computer graphics, programmed in C++ using OpenGL. " +
            "It's available on [GitHub](https://github.com/vidmartin/opengl-project). " +
            "I also had to create a simple web page for it, which you can marvel at [here](https://cent.felk.cvut.cz/courses/PGR/archives/2023-2024/S-FIT/vidmamar) (it's in Czech).",
        title: "Factory rat"
    },
    {
        year: 2023,
        description:
            "A CLI-based table processor (similar to Excel) written in Scala for a course in Object-Oriented Programming. " +
            "It's available on [GitHub](https://github.com/vidmartin/table-processor).",
        title: "Table processor"
    },
    {
        year: 2023,
        description:
            "A compiler for a custom programming language called Mila, written in Rust using LLVM. " +
            "This was an assignment for a course in Programming Languages and Compilers. " +
            "The specification of the Mila language was provided by the instructors and writing a compiler was the assignment. " +
            "It's available on [GitHub](https://github.com/vidmartin/mila-compiler).",
        title: "Mila compiler"
    },
    {
        year: 2021,
        description:
            "A CLI-based password manager written in Rust. " +
            "I use this program daily. " +
            "It's available on [GitHub](https://github.com/vidmartin/passman).",
        title: "passman"
    },
    {
        year: 2021,
        description:
            "A web-based Scrabble-like game written in ASP.NET Core. " +
            "It's available on [GitHub](https://github.com/vidmartin/wordworld).",
        title: "WordWorld"
    },
];

const PROJECTS: { [id: number]: Project } = Object.fromEntries(
    PROJECTS_LIST_WITHOUT_ID.map(
        (project, i) => ({
            id: PROJECTS_LIST_WITHOUT_ID.length - i,
            ...project
        })
    ).map(project => [ project.id, project ])
);

export class HardCodedProjectsRepository implements IProjectRepository {
    async getAllProjects(): Promise<Project[]> {
        return Object.values(PROJECTS);
    }
    async getProjectById(id: number): Promise<Project | null> {
        return PROJECTS[id] ?? null;
    }
}