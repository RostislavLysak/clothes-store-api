import { Controller, Get, Param, Query } from '@nestjs/common'
import { ProductsService } from '@/products/products.service'

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  getProducts() {
    return this.productsService.getProducts()
  }

  @Get('product/:slug')
  getProductBySlug(@Param('slug') slug: string) {
    return this.productsService.getProductBySlug(slug)
  }

  @Get('categories')
  getUniqueCategories() {
    return this.productsService.getUniqueCategories()
  }

  @Get('brands')
  getUniqueBrands() {
    return this.productsService.getUniqueBrands()
  }

  @Get(':type/:slug')
  getProductsWithout(@Param('type') type: string, @Param('slug') slug: string) {
    return this.productsService.getProductsWithout(type, slug)
  }

  @Get(':type')
  getProductsBy(@Param('type') type: string) {
    return this.productsService.getProductsBy(type)
  }
}
