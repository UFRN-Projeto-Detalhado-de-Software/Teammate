import { Router } from "express";

import { usersRoutes } from "./users.routes";
import { classroomsRoutes } from "./classrooms.routes";

const routes = Router();

routes.use("/users", usersRoutes);
routes.use("/classrooms", classroomsRoutes);

export { routes };