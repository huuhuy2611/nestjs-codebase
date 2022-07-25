import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Redirect,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  // return with {url: ...} will override url in Redirect
  @Get()
  @Redirect(
    'https://docs.nestjs.com/controllers#:~:text=nest%20g%20controller%20cats%20command',
  )
  findAll() {
    return {
      url: 'https://gitlab.com/oddle-team/dine-in/oddle-dinein-frontend-test/-/tree/main/cypress/support/custom-commands/host',
    };
    // return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param() params) {
    const { id } = params;
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
