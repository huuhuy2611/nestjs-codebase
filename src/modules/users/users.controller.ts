import { Controller, Get, Param, Delete, Body, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiOkResponse, ApiQuery, ApiTags } from '@nestjs/swagger';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@ApiTags('User')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOkResponse({ type: User, isArray: true })
  @ApiQuery({ name: 'name', required: false })
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @ApiOkResponse({ type: User, description: 'ahahah' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
