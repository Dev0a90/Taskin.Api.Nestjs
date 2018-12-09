import { Test, TestingModule } from '@nestjs/testing';
import { ProjectsController } from './projects.controller';
import { ProjectsService } from './projects.service';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [ProjectsController],
      providers: [ProjectsService],
    }).compile();
  });

  describe('getAll', () => {
    it('should return Project[]', () => {
      const projController = app.get<ProjectsController>(ProjectsController);
      const projs = projController.getAll();
      expect(projController.getAll()).toBe(projs);
    });
  });
});
