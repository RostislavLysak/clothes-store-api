import { Injectable, UnauthorizedException } from '@nestjs/common'
import { PrismaService } from '@/prisma/prisma.service'
import { UpdateUserImageDto, UpdateUserProfileDto } from './dto/update-user.dto'

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  async getUser(id: string) {
    try {
      return this.prismaService.user.findUnique({
        where: {
          id,
        },
      })
    } catch (e) {
      throw new UnauthorizedException()
    }
  }

  async updateProfile(id: string, data: UpdateUserProfileDto) {
    try {
      const { firstName, lastName } = data

      return this.prismaService.user.update({
        where: {
          id,
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

  async updateImage(id: string, data: UpdateUserImageDto) {
    try {

      const { img } = data
      return this.prismaService.user.update({
        where: {
          id,
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
