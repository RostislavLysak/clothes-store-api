import { Module } from '@nestjs/common'
import { PrismaModule } from '@/prisma/prisma.module'
import { ProductsModule } from '@/products/products.module'
import { CategoriesModule } from '@/categories/categories.module';
import { UserModule } from '@/user/user.module';

@Module({
  imports: [PrismaModule, ProductsModule, CategoriesModule, UserModule],
})
export class AppModule {}
