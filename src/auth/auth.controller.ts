import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('register')
export class AuthController {
  constructor(private readonly authService: AuthService){}

  @Post()
  @UseGuards(LocalAuthGuard)
  login(@Request() request){
    return this.authService.login(request.user)
  }
}
