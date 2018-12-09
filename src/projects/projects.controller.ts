import { Get, Controller, Body, Post, Param, Query } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { ProjectDto, ProjectType } from './dto/project.dto';
import { ApiUseTags, ApiCreatedResponse, ApiForbiddenResponse, ApiImplicitParam, ApiImplicitQuery } from '@nestjs/swagger';
import { Project } from './interfaces/project.interface';

@ApiUseTags('projects')
@Controller('projects')
export class ProjectsController {
  constructor(private readonly projService: ProjectsService) {}

  @Get()
  async findAll(): Promise<Project[]> {
    return this.projService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Project>{
    return this.projService.findOne(id);
  }

  @Get('/type/:type')
  // Opened Issue: https://github.com/nestjs/swagger/issues/154
  // @ApiImplicitParam({name: 'type', enum: ['Default', 'Private', 'Work', 'Sport', 'Travel']})
  // async findByType(@Param('type') type: ProjectType ): Promise<Project[]>{

  // Workarround usinig quey, but it's not a good REST
  // Sample Quey: http://localhost:3000/projects/type/{type}?type=Private
  @ApiImplicitQuery({name: 'type', enum: ['Default', 'Private', 'Work', 'Sport', 'Travel']})
  async findByType(@Query('type') type: ProjectType = ProjectType.Default ): Promise<Project[]>{
    return this.projService.findByType(type);
  }

  @Post()
  @ApiCreatedResponse({ description: 'The record has been successfully created.'})
  @ApiForbiddenResponse({ description: 'Forbidden.'})
  async create(@Body() projectDto: ProjectDto){
    this.projService.create(projectDto);
  }
}