import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StudentService } from './student.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Public } from 'src/auth/decorators/public.decorator';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}
@Public()
  @Post('buatmurid')
  async create(@Body() createStudentDto: CreateStudentDto) {     
    return await this.studentService.create(createStudentDto);
  }
@Public()
  @Get('datasemua')
  async findAll() {
    return await this.studentService.findAll();
  }
@Public()
  @Get('datasatu/:id')
  async findOne(@Param('id') id: string) {
    return await this.studentService.findOne(+id);
  }
@Public()
  @Patch('updatedata/:id')
  async update(@Param('id') id: string, @Body() updateStudentDto: UpdateStudentDto) {
    return await this.studentService.update(+id, updateStudentDto);
  }
@Public()
  @Delete('deletedata/:id')
  async remove(@Param('id') id: string) {
    return await this.studentService.remove(+id);
  }
}
