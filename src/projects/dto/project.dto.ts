import { ApiModelProperty } from '@nestjs/swagger';

export enum ProjectType {
    Default = 0,
    Private = 1,
    Work = 2,
    Sport = 3,
    Travel = 4,
}

export class ProjectDto {
    @ApiModelProperty()
    projectId: number;

    @ApiModelProperty()
    title: string;

    @ApiModelProperty()
    detail: string;

    @ApiModelProperty()
    imageUrl: string;

    @ApiModelProperty({enum: ['Default', 'Private', 'Work', 'Sport', 'Travel'], default: 'Default'})
    projectType: ProjectType;

    // tasks: TaskSchema[] = [];
}