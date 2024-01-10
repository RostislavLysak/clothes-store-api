import { Injectable, UnauthorizedException } from '@nestjs/common'
import { PrismaService } from '@/prisma/prisma.service'
import { UpdateUserImageDto, UpdateUserProfileDto } from './dto/update-user.dto'
import { TokenService } from '@/token/token.service'

@Injectable()
export class UserService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly tokenService: TokenService,
  ) {}

  async getUser(token: string) {
    try {
      const { userId } = await this.tokenService.getPayload(token)

      return this.prismaService.user.findUnique({
        where: {
          id: userId,
        },
      })
    } catch (e) {
      throw new UnauthorizedException()
    }
  }

  async updateProfile(token: string, data: UpdateUserProfileDto) {
    try {
      const { userId } = await this.tokenService.getPayload(token)

      const { firstName, lastName } = data

      return this.prismaService.user.update({
        where: {
          id: userId,
        },
        data: {
          firstName,
          lastName,
        },
      })
    } catch (e) {
      throw new UnauthorizedException()
    }
  }

  async updateImage(token: string, data: UpdateUserImageDto) {
    try {
      const { userId } = await this.tokenService.getPayload(token)

      const { img } = data
      return this.prismaService.user.update({
        where: {
          id: userId,
        },
        data: {
          img,
        },
      })
    } catch (e) {
      throw new UnauthorizedException()
    }
  }
}
