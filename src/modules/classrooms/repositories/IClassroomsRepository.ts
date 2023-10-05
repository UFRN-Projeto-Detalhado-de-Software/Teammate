import { ICreateClassroomDTO } from "../dtos/ICreateClassroomDTO";
import { Classroom } from "../entities/Classroom";

interface IClassroomsRepository {
  create(data: ICreateClassroomDTO): Promise<Classroom>;
}

export { IClassroomsRepository };