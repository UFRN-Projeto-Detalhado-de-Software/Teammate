import { Repository } from "typeorm";

import { User } from "../../entities/User";
import { AppDataSource } from "../../../../database/data-source";
import { IUsersRepository } from "../IUsersRepository";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = AppDataSource.getRepository(User);
  }

  async create({
    id,
    fullname,
    password,
    email,
    gender,
    role,
    registration,
  }: ICreateUserDTO): Promise<void> {

    const user = this.repository.create({
      id,
      fullname,
      password,
      email,
      gender,
      role,
      registration,
    });

    await this.repository.save(user);
  }
  
}

export { UsersRepository };