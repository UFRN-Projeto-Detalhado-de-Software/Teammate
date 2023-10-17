import { inject, injectable } from 'tsyringe';
import { hash } from 'bcrypt';

import { IUsersRepository } from '../../repositories/IUsersRepository';
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { AppError } from '../../../../shared/errors/AppError';

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({
    fullname,
    password,
    email, 
    gender,
    role,
    registration,
  }: ICreateUserDTO): Promise<void> {
    const userWithEmailAlreadyExists = await this.usersRepository.findByEmail(email);
    const userWithRegistrationAlreadyExists = 
      await this.usersRepository.findByRegistration(registration);

    if (userWithEmailAlreadyExists) {
      // TODO: Trocar por AppError
      throw new AppError("Já existe um usuário com esse email!");
    }

    if (userWithRegistrationAlreadyExists) {
      // TODO: Trocar por AppError
      throw new AppError("Já existe um usuário com essa matrícula!");
    }

    const hashedPassword = await hash(password, 8);

    await this.usersRepository.create({
      fullname,
      password: hashedPassword,
      email,
      gender,
      role,
      registration,
    });
  }
}

export { CreateUserUseCase };