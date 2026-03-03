import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { BcryptService } from 'src/bcrypt/bcrypt.service';

@Module({
  controllers: [StudentController],
  providers: [StudentService, PrismaService, BcryptService],
})
export class StudentModule {}
