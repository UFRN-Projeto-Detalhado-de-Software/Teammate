import { Router } from "express";
import { ClassrooomController } from "../modules/classrooms/controllers/ClassroomController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { ensureProfessor } from "../middlewares/ensureProfessor";

const classroomsRoutes = Router();

const classroomController = new ClassrooomController();

classroomsRoutes.post(
  "/", 
  ensureAuthenticated, 
  ensureProfessor, 
  classroomController.create
);

classroomsRoutes.get(
  "/:id",
  ensureAuthenticated,
  classroomController.details
);

classroomsRoutes.post(
  "/join",
  ensureAuthenticated,
  classroomController.join
);

export { classroomsRoutes }; 