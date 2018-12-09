export declare enum ProjectType {
    Default = 0,
    Private = 1,
    Work = 2,
    Sport = 3,
    Travel = 4
}
export declare class ProjectDto {
    projectId: number;
    title: string;
    detail: string;
    imageUrl: string;
    projectType: ProjectType;
}
