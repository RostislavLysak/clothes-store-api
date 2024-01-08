import { Controller, Get, Post, Req, Res } from '@nestjs/common'
import { AppService } from '@/app.service'
import { Request, Response } from 'express'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/')
  getProduct(@Req() req: Request, @Res() res: Response) {
    return res.status(201).json(req.query)
  }
}
