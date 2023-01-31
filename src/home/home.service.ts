import { PrismaService } from 'src/prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class HomeService {
  constructor(private readonly prismaService: PrismaService) {}

  getHomes() {
    return this.prismaService.home.findMany();
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
