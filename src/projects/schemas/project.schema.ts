import * as mongoose from 'mongoose';
// import * as Collections from 'typescript-collections';
// import { TaskSchema } from './task.schema';

// Mongose Model injection
export const ProjectSchema = new mongoose.Schema({
  projectId: String,
  title: String,
  detail: String,
  imageUrl: String,
  projectType: {type: String, enum: ['Default', 'Private', 'Work', 'Sport', 'Travel']},
  // projectType: Number,
  // tasks: TaskSchema[] = [],
});