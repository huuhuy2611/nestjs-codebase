import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Article } from '../article/article.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.find({
      relations: ['articles'],
    });
  }

  findOne(id: string): Promise<User> {
    return this.usersRepository.findOneBy({ id: +id });
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const newUser = await this.usersRepository.create(createUserDto);
    return this.usersRepository.save(newUser);
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
