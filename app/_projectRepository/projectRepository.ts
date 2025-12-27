
export type Project = {
    id: number,
    year: number,
    title: string,
    description: string,
}

export interface IProjectRepository {
    getAllProjects(): Promise<Project[]>,
    getProjectById(id: number): Promise<Project | null>,
}
