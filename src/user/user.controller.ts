import { Controller, Get, Post, Body, Headers } from '@nestjs/common'
import { UserService } from '@/user/user.service'

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUser(@Headers('id') id: string) {
    return this.userService.getUser(id)
  }

  @Post('updateProfile')
  updateProfile(
    @Headers('id') id: string,
    @Body('firstName') firstName: string,
    @Body('lastName') lastName: string,
  ) {
    return this.userService.updateProfile({ id, firstName, lastName })
  }

  @Post('updateImage')
  updateImage(@Headers('id') id: string, @Body('img') img: string) {
    return this.userService.updateImage({ id, img })
  }
}
