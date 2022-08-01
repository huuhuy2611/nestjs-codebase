import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private users: User[] = [
    { id: 0, name: 'Huy' },
    { id: 1, name: 'Huy' },
    { id: 2, name: 'Huy333' },
  ];

  create(createUserDto: CreateUserDto): User {
    const newUser = { id: Date.now(), name: createUserDto.name };
    this.users.push(newUser);
    return newUser;
  }

  findAll(name?: string): User[] {
    if (name) {
      return this.users.filter((user) => user.name === name);
    }
    return this.users;
  }

  findOne(userId: number): User {
    const findUser = this.users.find((user) => user.id === userId);
    if (!findUser) {
      throw new NotFoundException();
    }
    return findUser;
  }

  update(userId: number, updateUserDto: UpdateUserDto): UpdateUserDto {
    this.users.map((user) => (user.id === userId ? updateUserDto : user));
    return updateUserDto;
  }

  remove(userId: number): { success: boolean } {
    const findUser = this.users.find((user) => user.id === userId);
    this.users.filter((user) => user.id !== userId);
    return { success: !!findUser };
  }
}
