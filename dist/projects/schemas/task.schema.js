"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const project_schema_1 = require("./project.schema");
exports.TaskSchema = new mongoose.Schema({
    project: project_schema_1.ProjectSchema,
    detail: String,
    priority: Number,
    effort: Number,
});
//# sourceMappingURL=task.schema.js.map