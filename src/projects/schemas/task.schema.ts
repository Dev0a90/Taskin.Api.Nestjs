import * as mongoose from 'mongoose';
import { ProjectSchema } from './project.schema';

export const TaskSchema = new mongoose.Schema({
    project: ProjectSchema,
    detail: String,
    priority: Number,
    effort: Number,
    // taskType : {taskType: Number, enum:[]},
});