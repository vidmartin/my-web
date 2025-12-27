import { IProjectRepository, Project } from "./projectRepository";

const PROJECTS: { [id: number]: Project } = {
    1: {
        id: 1,
        year: 2025,
        description: "My custom framework for deep learning that helps me understand neural networks, built with Python and numpy. You can check it out on [GitHub](https://github.com/vidmartin/myml).",
        title: "MyML",
    },
    2: {
        id: 2,
        year: 2024,
        description: "A semestral project for a course in computer graphics, programmed in C++ using OpenGL.\n\nI also had to create a simple web page for it, which you can marvel at [here](https://cent.felk.cvut.cz/courses/PGR/archives/2023-2024/S-FIT/vidmamar) (it's in Czech).",
        title: "Factory rat"
    }
}

export class HardCodedProjectsRepository implements IProjectRepository {
    async getAllProjects(): Promise<Project[]> {
        return Object.values(PROJECTS);
    }
    async getProjectById(id: number): Promise<Project | null> {
        return PROJECTS[id] ?? null;
    }
}