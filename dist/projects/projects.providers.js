"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const project_schema_1 = require("./schemas/project.schema");
exports.projectsProviders = [
    {
        provide: 'ProjectModelToken',
        useFactory: (connection) => connection.model('Project', project_schema_1.ProjectSchema),
        inject: ['DbConnectionToken'],
    },
];
//# sourceMappingURL=projects.providers.js.map