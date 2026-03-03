import { Module } from '@nestjs/common';
import { WalasService } from './walas.service';
import { WalasController } from './walas.controller';
import { BcryptService } from 'src/bcrypt/bcrypt.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [WalasController],
  providers: [WalasService,BcryptService,PrismaService],
})
export class WalasModule {}
