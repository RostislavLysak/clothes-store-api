import { Controller, Get, Param } from '@nestjs/common'
import { ProductsService } from '@/products/products.service'

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  getProducts() {
    return this.productsService.getProducts()
  }

  @Get(':category')
  getByCategoryProducts(@Param('category') category: string) {
    return this.productsService.getByCategoryProducts(category)
  }
}
