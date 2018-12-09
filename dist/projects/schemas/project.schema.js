"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.ProjectSchema = new mongoose.Schema({
    projectId: String,
    title: String,
    detail: String,
    imageUrl: String,
    projectType: { type: String, enum: ['Default', 'Private', 'Work', 'Sport', 'Travel'] },
});
//# sourceMappingURL=project.schema.js.map