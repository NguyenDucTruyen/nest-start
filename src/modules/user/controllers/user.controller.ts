import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from '../services/user.service';
import { type User } from '../interfaces/user.interface';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.userService.findOne(id);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Post()
  create(@Body() user: User) {
    if (!user.name || !user.email) {
      throw new HttpException(
        'Name and email are required',
        HttpStatus.BAD_REQUEST,
      );
    }
    return this.userService.create(user);
  }

  @Put(':id')
  update(@Body() user: User, @Param('id') id: number) {
    if (!user.name || !user.email) {
      throw new HttpException(
        'Name and email are required',
        HttpStatus.BAD_REQUEST,
      );
    }
    return this.userService.update(id, user);
  }
}
