import { Injectable } from '@nestjs/common'
import { PrismaService } from '@/prisma/prisma.service'

@Injectable()
export class ProductsService {
  constructor(private readonly prismaService: PrismaService) {}

  async getProducts() {
    return await this.prismaService.product.findMany()
  }

  async getProductsWithout(type: string, slug: string) {
    const productsWithout = await this.prismaService.product.findMany({
      where: {
        NOT: [
          {
            slug: {
              contains: slug,
            },
          },
        ],
      },
    })

    return productsWithout.filter((item) => item.category === type)
  }

  async getProductsBy(type: string) {
    return await this.prismaService.product.findMany({
      where: {
        OR: [
          {
            category: type,
          },
          {
            brand: type,
          },
        ],
      },
    })
  }

  async getProductBySlug(slug: string) {
    return await this.prismaService.product.findFirst({
      where: { slug: slug },
    })
  }

  async getUniqueCategories() {
    const categories = await this.prismaService.product.findMany({
      distinct: ['category'],
      select: {
        category: true,
      },
    })

    return categories.map((item) => item.category)
  }

  async getUniqueBrands() {
    const brands = await this.prismaService.product.findMany({
      distinct: ['brand'],
      select: {
        brand: true,
      },
    })

    return brands.map((item) => item.brand)
  }
}
