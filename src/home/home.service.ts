import { HomeResponseDto } from './dto/home.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class HomeService {
  constructor(private readonly prismaService: PrismaService) {}

  async getHomes(): Promise<HomeResponseDto[]> {
    const homes = await this.prismaService.home.findMany();
    return homes.map(home => new HomeResponseDto(home))
  }

  getHome() {
    return;
  }

  createHome() {
    return;
  }

  updateHome() {
    return;
  }

  deleteHome() {
    return;
  }
}
