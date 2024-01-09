import { Injectable } from '@nestjs/common'
import { PrismaService } from '@/prisma/prisma.service'

type TUpdateImage = {
  id: string
  img: string
}

type TUpdateProfile = {
  id: string
  firstName: string
  lastName: string
}

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  getUser(id: string) {
    return this.prismaService.user.findUnique({
      where: {
        id,
      },
    })
  }

  updateProfile({
    id,
    firstName,
    lastName,
  }: TUpdateProfile) {
    return this.prismaService.user.update({
      where: {
        id,
      },
      data: {
        firstName,
        lastName,
      },
    })
  }

  updateImage({ id, img }: TUpdateImage) {
    return this.prismaService.user.update({
      where: {
        id,
      },
      data: {
        img,
      },
    })
  }
}
