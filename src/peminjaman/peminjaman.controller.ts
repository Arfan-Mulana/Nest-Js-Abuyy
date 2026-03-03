import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PeminjamanService } from './peminjaman.service';
import { CreatePeminjamanDto } from './dto/create-peminjaman.dto';
import { UpdatePeminjamanDto } from './dto/update-peminjaman.dto';
import { Public } from 'src/auth/decorators/public.decorator';

@Controller('peminjaman')
export class PeminjamanController {
  constructor(private readonly peminjamanService: PeminjamanService) {}
@Public()
  @Post('pinjam')
  async pinjam (@Body() createPeminjamanDto: CreatePeminjamanDto) {
    return await this.peminjamanService.pinjam(createPeminjamanDto);
  }
@Public()
  @Post('balik')
  async balik(@Body() createPeminjamanDto: CreatePeminjamanDto) {
    return await this.peminjamanService.balik(createPeminjamanDto);
  } 
}