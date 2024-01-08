import { Product as ProductModel } from '@prisma/client'

export class ProductEntity implements ProductModel {
  id: string
  title: string
  img: string
  description: string
  category: string
}
