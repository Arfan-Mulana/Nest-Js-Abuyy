import { PartialType } from '@nestjs/mapped-types';
import { CreateWalaDto } from './create-wala.dto';
import { IsOptional, IsString } from 'class-validator';

export class UpdateWalaDto extends PartialType(CreateWalaDto) {
  @IsOptional()
  @IsString()
  nama_walas: string;
  @IsOptional()
  @IsString()
  no_tlpn: string;
  @IsOptional()
  @IsString()
  alamat: string;
}
