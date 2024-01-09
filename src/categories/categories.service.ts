import { PrismaService } from '@/prisma/prisma.service'
import { Injectable } from '@nestjs/common'

@Injectable()
export class CategoriesService {
  constructor(private readonly prismaService: PrismaService) {}

  getUniqueCategories() {
    return this.prismaService.product.findMany({
      distinct: ['category'],
      select: {
        category: true,
      },
    })
  }
}
