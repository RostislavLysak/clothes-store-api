import { Controller, Get, Post, Body, Headers } from '@nestjs/common'
import { UserService } from '@/user/user.service'
import { UpdateUserImageDto, UpdateUserProfileDto } from '@/user/dto/update-user.dto'
import { THeaders } from './types'

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUser(@Headers() headers: THeaders) {
    return this.userService.getUser(headers.authorization)
  }

  @Post('updateProfile')
  updateProfile(
    @Headers() headers: THeaders,
    @Body() updateProfileDto: UpdateUserProfileDto,
  ) {
    return this.userService.updateProfile(headers.authorization, updateProfileDto)
  }

  @Post('updateImage')
  updateImage(
    @Headers() headers: THeaders,
    @Body() updateImageDto: UpdateUserImageDto,
  ) {
    return this.userService.updateImage(headers.authorization, updateImageDto)
  }
}
