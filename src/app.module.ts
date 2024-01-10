import { Module } from '@nestjs/common'
import { PrismaModule } from '@/prisma/prisma.module'
import { ProductsModule } from '@/products/products.module'
import { UserModule } from '@/user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [PrismaModule, ProductsModule, UserModule, AuthModule],
})
export class AppModule {}
