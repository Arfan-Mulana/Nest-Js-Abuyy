import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreatePeminjamanDto {
  @IsNotEmpty()
  @IsNumber()
  id_student: number;
  @IsNotEmpty()
  @IsNumber()
  id_book: number;
  @IsNotEmpty()
  @IsNumber()
  id_peminjaman: number;
}