import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { BcryptService } from 'src/bcrypt/bcrypt.service';

@Injectable()
export class StudentService {
  constructor(
    readonly prisma: PrismaService,
    readonly bcrpty: BcryptService,
  ) {}
  async create(createStudentDto: CreateStudentDto) {
    try {
      const add = await this.prisma.student.create({
        data: {
          nis: createStudentDto.nis,
          name: createStudentDto.name,
          kelas: createStudentDto.kelas,
          jurusan: createStudentDto.jurusan,
        },
      });
      return add;
    } catch (error) {
      console.log(error);
    }
  }

  async findAll() {
    try {
      return await this.prisma.student.findMany({});
    } catch (error) {
      console.log(error);
    }
  }

  async findOne(id: number) {
    try {
      return await this.prisma.student.findFirst({ where: { id } });
    } catch (error) {
      console.log(error);
    }
  }

  async update(id: number, updateStudentDto: UpdateStudentDto) {
    try {
      return await this.prisma.student.update({
        where: { id },
        data: { ...updateStudentDto },
      });
    } catch (error) {
      console.log(error);
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.student.delete({where: {id}})
    } catch (error) {
      console.log(error);
    }
  }
}
