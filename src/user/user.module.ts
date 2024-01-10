import { Module } from '@nestjs/common'
import { UserService } from '@/user/user.service'
import { UserController } from '@/user/user.controller'
import { PrismaModule } from '@/prisma/prisma.module'
import { JwtModule } from '@nestjs/jwt'

@Module({
  imports: [PrismaModule, JwtModule],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
