import { Injectable } from '@nestjs/common'
import { PrismaService } from '@/prisma/prisma.service'

@Injectable()
export class ProductsService {
  constructor(private readonly prismaService: PrismaService) {}

  getProducts() {
    return this.prismaService.product.findMany()
  }

  getByCategoryProducts(category: string) {
    return this.prismaService.product.findMany({
      where: {
        category,
      },
    })
  }

  getUniqueCategories() {
    return this.prismaService.product.findMany({
      distinct: ['category'],
      select: {
        category: true,
      },
    })
  }
}
