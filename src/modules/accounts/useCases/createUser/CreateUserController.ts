import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { 
      fullname, 
      password, 
      email, 
      gender, 
      role, 
      registration 
    } = request.body;
    
    const createUserUseCase = container.resolve(CreateUserUseCase);

    await createUserUseCase.execute({
      fullname,
      password,
      email,
      gender,
      role,
      registration,
    });

    return response.status(201).send();
  }
}

export { CreateUserController };