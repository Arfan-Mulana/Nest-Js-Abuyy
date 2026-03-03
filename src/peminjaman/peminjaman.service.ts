import { Injectable } from '@nestjs/common';
import { CreatePeminjamanDto } from './dto/create-peminjaman.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { createTracing } from 'trace_events';

@Injectable()
export class PeminjamanService {
  constructor(private readonly prisma: PrismaService) {}

  async pinjam(createPeminjamanDto: CreatePeminjamanDto) {
    try {
      return await this.prisma.peminjaman.create({
        data: {
          student: { connect: { id: createPeminjamanDto.id_student } },
          book: { connect: { id: createPeminjamanDto.id_book } },
        },
      });
    } catch (error) {
      console.log(error);
    }
  }

  async balik(createPeminjamanDto: CreatePeminjamanDto) {
    try {
      const create = await this.prisma.pengembalian.create({
        data: { id_peminjaman: createPeminjamanDto.id_peminjaman },
      });
      const updt = await this.prisma.peminjaman.update({
        where: { id: createPeminjamanDto.id_peminjaman },
        data: { tgl_kembali: create.tgl_kembali },
      });
      return create;
    } catch (error) {
      console.log(error);
    }
  }
}
