import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Public } from 'src/auth/decorators/public.decorator';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}
@Public()
  @Post('buatbuku')
  async create(@Body() createBookDto: CreateBookDto) {
    return this.bookService.create(createBookDto);
  }
@Public()
  @Get('datasemuabuku')
  async findAll() {
    return await this.bookService.findAll();
  }
@Public()
  @Get('datasatubuku/:id')
  async findOneById(@Param('id') id: string) {
    return await this.bookService.findOneById(+id);
  }
  @Public()
  @Get('datasatubuku/:id')
  async findOneByName(@Param('id') id: string) {
    return await this.bookService.findOneByName(+id);
  }
@Public()
  @Patch('updatebuku/:id')
  async update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
    return this.bookService.update(+id, updateBookDto);
  }
@Public()
  @Delete('deletebuku/:id')
  async remove(@Param('id') id: string) {
    return await this.bookService.remove(+id);
  }
}
