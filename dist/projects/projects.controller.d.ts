import { ProjectsService } from './projects.service';
import { ProjectDto, ProjectType } from './dto/project.dto';
import { Project } from './interfaces/project.interface';
export declare class ProjectsController {
    private readonly projService;
    constructor(projService: ProjectsService);
    findAll(): Promise<Project[]>;
    findOne(id: number): Promise<Project>;
    findByType(type?: ProjectType): Promise<Project[]>;
    create(projectDto: ProjectDto): Promise<void>;
}
