import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { BcryptModule } from './bcrypt/bcrypt.module';
import { StudentModule } from './student/student.module';
import { WalasModule } from './walas/walas.module';
import { BookModule } from './book/book.module';
import { MemberModule } from './member/member.module';
import { UserModule } from './user/user.module';
import { PeminjamanModule } from './peminjaman/peminjaman.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [PrismaModule, BcryptModule, StudentModule, WalasModule, BookModule, MemberModule, UserModule, PeminjamanModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
