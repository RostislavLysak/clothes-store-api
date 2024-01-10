import { PickType } from '@nestjs/mapped-types'
import { UserEntity } from '@/user/entities/user.entity'

export class UpdateUserProfileDto extends PickType(UserEntity, [
  'firstName',
  'lastName',
]) {}
export class UpdateUserImageDto extends PickType(UserEntity, ['img']) {}
