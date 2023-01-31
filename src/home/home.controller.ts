import { HomeResponseDto } from './dto/home.dto';
import { HomeService } from './home.service';
import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('home')
export class HomeController {
  constructor(private readonly homeService: HomeService) {}

  @Get()
  getHomes(): Promise<HomeResponseDto[]> {
    return this.homeService.getHomes();
  }

  @Get(':id')
  getHome() {
    return {};
  }

  @Post()
  createHome() {
    return 'created';
  }

  @Put(':id')
  updateHome() {
    return 'updated';
  }

  @Delete(':id')
  deleteHome() {
    return 'deleted';
  }
}
