import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateUserDto } from '../dtos/create-user.dto';
import { UpdateUserDto } from '../dtos/update-user..dto';

import { User } from '../models/user.schema';
import { UserService } from '../services/user.service';
@Controller('users')
export class UsersController {
  constructor(private readonly userService: UserService) {}

  @Get(':userId')
  async getUSer(@Param('userId') userId: string): Promise<User> {
    return this.userService.getUserById(userId);
  }

  @Get()
  async getUsers(): Promise<User[]> {
    return this.userService.getUsers();
  }

  @Post()
  async createUser(@Body() CreateUserDto): Promise<User> {
    return this.userService.createUser(
      CreateUserDto.email,
      CreateUserDto.age,
      CreateUserDto.name,
      CreateUserDto.username,
      CreateUserDto.password,
    );
  }

  @Patch(':userId')
  async updateUser(
    @Param('userId') userId: string,
    @Body() UpdateUserDto,
  ): Promise<User> {
    return this.userService.updateUser(userId, UpdateUserDto);
  }
}
