import { PropertyType } from '@prisma/client';
import { CreateHomeDto, HomeResponseDto } from './dto/home.dto';
import { HomeService } from './home.service';
import { Body, Controller, Delete, Get, Post, Put, Query } from '@nestjs/common';

@Controller('home')
export class HomeController {
  constructor(private readonly homeService: HomeService) {}

  @Get()
  getHomes(
    @Query('city') city?: string,
    @Query('minPrice') minPrice?: string,
    @Query('maxPrice') maxPrice?: string,
    @Query('propertyType') propertyType?: PropertyType,
  ): Promise<HomeResponseDto[]> {

    const price = minPrice || maxPrice ? {
      ...(minPrice && {gte: parseFloat(minPrice)}),
      ...(maxPrice && {gte: parseFloat(maxPrice)})
    } : undefined

    const filters = {
      ...(city && { city }),
      ...(price && { price }),
      ...(propertyType && { property_type: propertyType }),
    };

    return this.homeService.getHomes(filters);
  }

  @Get(':id')
  getHome() {
    return {};
  }

  @Post()
  createHome(@Body() body: CreateHomeDto) {
    return this.homeService.createHome(body);
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
