import { OmitType } from '@nestjs/mapped-types'
import { UserEntity } from '@/user/entities/user.entity'

export class CreateUserDto extends OmitType(UserEntity, ['id']) {}
