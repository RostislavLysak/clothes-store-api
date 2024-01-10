import {
  Controller,
  Get,
  Post,
  Body,
  Headers,
  UseGuards,
} from '@nestjs/common'
import { UserService } from '@/user/user.service'
import {
  UpdateUserImageDto,
  UpdateUserProfileDto,
} from '@/user/dto/update-user.dto'
import { THeaders } from './types'
import { AuthGuard } from '@/auth/auth.guard'

@UseGuards(AuthGuard)
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUser(@Headers() headers: THeaders) {
    return this.userService.getUser(headers.userid)
  }

  @Post('updateProfile')
  updateProfile(
    @Headers() headers: THeaders,
    @Body() updateProfileDto: UpdateUserProfileDto,
  ) {
    return this.userService.updateProfile(headers.userid, updateProfileDto)
  }

  @Post('updateImage')
  updateImage(
    @Headers() headers: THeaders,
    @Body() updateImageDto: UpdateUserImageDto,
  ) {
    return this.userService.updateImage(headers.userid, updateImageDto)
  }
}
