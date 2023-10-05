import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateClassroomUseCase } from "./CreateClassroomUseCase";

class CreateClassrooomController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;
    // TODO: Add Professor Id from request
    const createClassroomUseCase = container.resolve(CreateClassroomUseCase);
    
    const classroom = await createClassroomUseCase.execute({
      name, 
      description,
      professor_id: "8f089abc-2b06-4a5a-8424-988b7fd8c818",
    });

    return response.status(201).json(classroom);
  }
}

export { CreateClassrooomController };