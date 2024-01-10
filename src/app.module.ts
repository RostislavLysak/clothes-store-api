import { Module } from '@nestjs/common'
import { PrismaModule } from '@/prisma/prisma.module'
import { ProductsModule } from '@/products/products.module'
import { UserModule } from '@/user/user.module';

@Module({
  imports: [PrismaModule, ProductsModule, UserModule],
})
export class AppModule {}
