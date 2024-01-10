import { Injectable, UnauthorizedException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { jwtConstants } from './helpers'

@Injectable()
export class TokenService {
  constructor(private readonly jwtService: JwtService) {}

  async getPayload(token: string) {
    try {
      const [type, accessToken] = token.split(' ')

      if (type !== 'Bearer') {
        throw new UnauthorizedException()
      }

      const payload = await this.jwtService.verifyAsync(accessToken, {
        secret: jwtConstants.JWT_SECRET,
      })

      const { userId } = payload

      if (!userId) {
        throw new UnauthorizedException()
      }

      return payload
    } catch (error) {
      throw new UnauthorizedException()
    }
  }
}
