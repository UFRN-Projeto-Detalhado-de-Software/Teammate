import { inject, injectable } from 'tsyringe';
import { hash } from 'bcrypt';

import { IUsersRepository } from '../../repositories/IUsersRepository';
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';

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
    // TODO: Verificar se já existe email e registration

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