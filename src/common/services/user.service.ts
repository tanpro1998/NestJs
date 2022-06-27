import { Injectable } from '@nestjs/common';
import { User } from '../models/user.schema';
import { UserRepository } from '../repositories/user.repository';
import { UpdateUserDto } from '../dtos/update-user..dto';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async getUserById(_id: string): Promise<User> {
    return this.userRepository.findOne({ _id });
  }

  async getUsers(): Promise<User[]> {
    return this.userRepository.find({});
  }

  async createUser(
    email: string,
    age: number,
    name: string,
    password: string,
    username: string,
  ): Promise<User> {
    return this.userRepository.create({
      name,
      username,
      email,
      password,
      age,
      favoriteFoods: [],
    });
  }

  async updateUser(_id: string, userUpdates: UpdateUserDto): Promise<User> {
    return this.userRepository.findOneAndUpdate({ _id }, userUpdates);
  }
}
