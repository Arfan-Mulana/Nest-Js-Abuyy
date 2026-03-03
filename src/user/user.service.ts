import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { BcryptService } from 'src/bcrypt/bcrypt.service';

@Injectable()
export class UserService {
  constructor(
    readonly prisma: PrismaService,
    readonly bcrpty: BcryptService,
  ) {}
  async create(createUserDto: CreateUserDto) {
    const hashed = await this.bcrpty.HashPassword(createUserDto.password);
    try {
      return await this.prisma.user.create({
        data: { ...createUserDto, password: hashed },
      });
    } catch (error) {
      console.log(error);
    }
  }
 async findAll() {
    try {
      return await this.prisma.user.findMany({});
    } catch (error) {
      console.log(error);
    }
  }

  async findOne(id: number) {
  try {
      return await this.prisma.user.findFirst({ where: { id: id } });
    } catch (error) {
      console.log(error);
    }
  }
 async update(id: number, updateUserDto: UpdateUserDto) {
   try {
      return await this.prisma.user.update({
        where: { id: id },
        data: { ...updateUserDto },
      });
    } catch (error) {
      console.log(error);
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.user.delete({ where: { id: id } });
    } catch (error) {
      console.log(error);
    }
  }
}
