"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_1 = require("@nestjs/swagger");
var ProjectType;
(function (ProjectType) {
    ProjectType[ProjectType["Default"] = 0] = "Default";
    ProjectType[ProjectType["Private"] = 1] = "Private";
    ProjectType[ProjectType["Work"] = 2] = "Work";
    ProjectType[ProjectType["Sport"] = 3] = "Sport";
    ProjectType[ProjectType["Travel"] = 4] = "Travel";
})(ProjectType = exports.ProjectType || (exports.ProjectType = {}));
class ProjectDto {
}
__decorate([
    swagger_1.ApiModelProperty(),
    __metadata("design:type", Number)
], ProjectDto.prototype, "projectId", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    __metadata("design:type", String)
], ProjectDto.prototype, "title", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    __metadata("design:type", String)
], ProjectDto.prototype, "detail", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    __metadata("design:type", String)
], ProjectDto.prototype, "imageUrl", void 0);
__decorate([
    swagger_1.ApiModelProperty({ enum: ['Default', 'Private', 'Work', 'Sport', 'Travel'], default: 'Default' }),
    __metadata("design:type", Number)
], ProjectDto.prototype, "projectType", void 0);
exports.ProjectDto = ProjectDto;
//# sourceMappingURL=project.dto.js.map