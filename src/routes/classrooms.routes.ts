import { Router } from "express";
import { CreateClassrooomController } from "../modules/classrooms/useCases/createClassroom/CreateClassroomController";

const classroomsRoutes = Router();

const createClassroomController = new CreateClassrooomController();

classroomsRoutes.post("/", createClassroomController.handle);

export { classroomsRoutes }; 