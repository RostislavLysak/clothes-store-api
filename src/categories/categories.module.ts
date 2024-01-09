import { Module } from '@nestjs/common'
import { CategoriesService } from '@/categories/categories.service'
import { CategoriesController } from '@/categories/categories.controller'
import { PrismaModule } from '@/prisma/prisma.module'

@Module({
  imports: [PrismaModule],
  controllers: [CategoriesController],
  providers: [CategoriesService],
})
export class CategoriesModule {}
