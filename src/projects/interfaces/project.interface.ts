import { Document } from 'mongoose';
import { ProjectType } from '../dto/project.dto';

export interface Project extends Document {
    projectId: string;
    title: string;
    detail: string;
    imageUrl: string;
    projectType: {type: string, enum: ['Default', 'Private', 'Work', 'Sport', 'Travel']};
    // projectType: ProjectType;
    // projectType: number;
    // tasks: TaskSchema[] = [];
}