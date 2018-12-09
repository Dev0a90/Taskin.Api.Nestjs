import { Model } from 'mongoose';
import { Project } from './interfaces/project.interface';
import { ProjectDto, ProjectType } from './dto/project.dto';
export declare class ProjectsService {
    private readonly projectModel;
    constructor(projectModel: Model<Project>);
    create(projectDto: ProjectDto): Promise<Project>;
    findAll(): Promise<Project[]>;
    findByType(projectType: ProjectType): Promise<Project[]>;
    findOne(id: number): Promise<Project>;
}
