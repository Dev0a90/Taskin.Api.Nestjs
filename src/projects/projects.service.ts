import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Project } from './interfaces/project.interface';
import { ProjectDto, ProjectType } from './dto/project.dto';

@Injectable()
export class ProjectsService {
  constructor(@Inject('ProjectModelToken') private readonly projectModel: Model<Project>) { }

  async create(projectDto: ProjectDto) {
    const proj = new this.projectModel(projectDto);
    return await proj.save();
  }

  async findAll(): Promise<Project[]> {
    const projs = await this.projectModel.find().exec();
    return projs;
  }

  async findByType(type: ProjectType): Promise<Project[]> {
    const projs = await this.projectModel.find({projectType: type });
    return projs;
  }

  async findOne(id: number): Promise<Project> {
    const proj = this.projectModel.findOne({ projectId: id });
    return proj;
  }
}