import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Public } from 'src/auth/decorators/public.decorator';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Public()
  @Post('bikinuser')
  async create(@Body() createUserDto: CreateUserDto) {
    return await this.userService.create(createUserDto);
  }
 @Public()
  @Get('alluser')
  async findAll() {
    return await this.userService.findAll();
  }
 @Public()
  @Get('satuuser/:id')
  async findOne(@Param('id') id: string) {
    return await this.userService.findOne(+id);
  }
 @Public()
  @Patch('updateuser/:id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return await this.userService.update(+id, updateUserDto);
  }
 @Public()
  @Delete('deleteuser/:id')
 async remove(@Param('id') id: string) {
    return await this.userService.remove(+id);
  }
}
