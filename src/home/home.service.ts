import { PropertyType } from '@prisma/client';
import { HomeResponseDto } from './dto/home.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Injectable, NotFoundException } from '@nestjs/common';

interface GetHomesParams {
  city?: string;
  price?: {
    gte?: number;
    lte?: number;
  };
  PropertyType?: PropertyType;
}

interface CreateHomeParams {
  address: string;
  numberOfBathrooms: number;
  numberOfBedrooms: number;
  city: string;
  price: number;
  landSize: number;
  PropertyType: PropertyType;
  images: { url: string }[];
}

@Injectable()
export class HomeService {
  constructor(private readonly prismaService: PrismaService) {}

  async getHomes(filters: GetHomesParams): Promise<HomeResponseDto[]> {
    const homes = await this.prismaService.home.findMany({
      select: {
        id: true,
        address: true,
        city: true,
        price: true,
        property_type: true,
        number_of_bedrooms: true,
        number_of_bathrooms: true,
        images: {
          select: {
            url: true,
          },
          take: 1,
        },
      },
      where: filters,
    });

    if (!homes.length) {
      throw new NotFoundException();
    }

    return homes.map((home) => {
      const fetchHome = { ...home, image: home.images[0].url };
      delete fetchHome.images;
      return new HomeResponseDto(fetchHome);
    });
  }

  getHome() {
    return;
  }

  async createHome({
    address,
    numberOfBathrooms,
    numberOfBedrooms,
    city,
    landSize,
    price,
    PropertyType,
    images
  }: CreateHomeParams) {
    const home = await this.prismaService.home.create({
      data: {
        address,
        number_of_bathrooms: numberOfBathrooms,
        number_of_bedrooms: numberOfBedrooms,
        city,
        land_size:landSize,
        price,
        property_type:PropertyType,
        realtor_id: 6
      },
    });

    const homeImages = images.map(image => {
      return {
        ...image, home_id: home.id
      };
    })
    
    await this.prismaService.image.createMany({data: homeImages})

    return new HomeResponseDto(home);
  }

  updateHome() {
    return;
  }

  deleteHome() {
    return;
  }
}
