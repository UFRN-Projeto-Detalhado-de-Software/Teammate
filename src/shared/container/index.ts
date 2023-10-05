import { container } from "tsyringe";
import { IUsersRepository } from "../../modules/accounts/repositories/IUsersRepository";
import { UsersRepository } from "../../modules/accounts/repositories/implementations/UsersRepository";
import { IClassroomsRepository } from "../../modules/classrooms/repositories/IClassroomsRepository";
import { ClassroomsRepository } from "../../modules/classrooms/repositories/implementations/ClassroomsRepository";

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);

container.registerSingleton<IClassroomsRepository>(
  "ClassroomsRepository",
  ClassroomsRepository
)