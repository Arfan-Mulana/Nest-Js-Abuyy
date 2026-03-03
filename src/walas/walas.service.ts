import { Injectable } from '@nestjs/common';
import { CreateWalaDto } from './dto/create-wala.dto';
import { UpdateWalaDto } from './dto/update-wala.dto';
import { BcryptService } from 'src/bcrypt/bcrypt.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class WalasService {
  constructor(
    readonly prisma: PrismaService,
    readonly bcrpty: BcryptService,
  ) {}
  async create(createWalaDto: CreateWalaDto) {
    try {
      return await this.prisma.walas.create({ data: { ...createWalaDto } });
    } catch (error) {
      console.log(error);
    }
  }

  async findAll() {
    try {
      return await this.prisma.walas.findMany({});
    } catch (error) {
      console.log(error);
    }
  }

  async findOne(id: number) {
    try {
      return await this.prisma.walas.findFirst({ where: { id_walas: id } });
    } catch (error) {
      console.log(error);
    }
  }

  async update(id: number, updateWalaDto: UpdateWalaDto) {
    try {
      return await this.prisma.walas.update({
        where: { id_walas: id },
        data: { ...updateWalaDto },
      });
    } catch (error) {
      console.log(error);
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.walas.delete({ where: { id_walas: id } });
    } catch (error) {
      console.log(error);
    }
  }
}
