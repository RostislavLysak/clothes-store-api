import { Injectable } from '@nestjs/common'
// import { CreateProductDto } from './dto/create-product.dto'
// import { UpdateProductDto } from './dto/update-product.dto'
import { PrismaService } from '@/prisma/prisma.service'

@Injectable()
export class ProductsService {
  constructor(private readonly prismaSevice: PrismaService) {}

  // async create(createProductDto: CreateProductDto) {
  //   return await this.prismaSevice.product.create({
  //     data: createProductDto,
  //   })
  // }

  getProducts() {
    return this.prismaSevice.product.findMany()
  }

  getByCategoryProducts(category: string) {
    return this.prismaSevice.product.findMany({
      where: {
        category,
      },
    })
  }

  // update(id: number, updateProductDto: UpdateProductDto) {
  //   return `This action updates a #${id} product`
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} product`
  // }
}
