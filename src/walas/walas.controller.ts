import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { WalasService } from './walas.service';
import { CreateWalaDto } from './dto/create-wala.dto';
import { UpdateWalaDto } from './dto/update-wala.dto';
import { Public } from 'src/auth/decorators/public.decorator';

@Controller('walas')
export class WalasController {
  constructor(private readonly walasService: WalasService) {}
  @Public()
  @Post('buatwalas')
  async create(@Body() createWalaDto: CreateWalaDto) {
    return await this.walasService.create(createWalaDto);
  }
  @Public()
  @Get('dataallwalas')
  async findAll() {
    return await this.walasService.findAll();
  }
  @Public()
  @Get('datawalassatu/:id')
  async findOne(@Param('id') id: string) {
    return await this.walasService.findOne(+id);
  }
  @Public()
  @Patch('updatewalas/:id')
  async update(@Param('id') id: string, @Body() updateWalaDto: UpdateWalaDto) {
    return await this.walasService.update(+id, updateWalaDto);
  }
  @Public()
  @Delete('deletwalas/:id')
  async remove(@Param('id') id: string) {
    return await this.walasService.remove(+id);
  }
}
