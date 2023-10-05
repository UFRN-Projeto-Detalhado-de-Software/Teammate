import { inject, injectable } from "tsyringe";

import { ICreateClassroomDTO } from "../../dtos/ICreateClassroomDTO";
import { IClassroomsRepository } from "../../repositories/IClassroomsRepository";
import { Classroom } from "../../entities/Classroom";

@injectable()
class CreateClassroomUseCase {
  constructor(
    @inject("ClassroomsRepository")
    private classrooomsRepository: IClassroomsRepository
  ) {}
  
  async execute({ 
    name, 
    description, 
    professor_id, 
  }: ICreateClassroomDTO): Promise<Classroom> {
    const classroom = await this.classrooomsRepository.create({
      name, 
      description,
      professor_id,
    });

    return classroom;
  }
}

export { CreateClassroomUseCase };