import { PrismaModule } from 'src/prisma/prisma.module';
import { Module } from '@nestjs/common';
import { HomeController } from './home.controller';
import { HomeService } from './home.service';

@Module({
  imports: [PrismaModule],
  controllers: [HomeController],
  providers: [HomeService]
})
export class HomeModule {}
