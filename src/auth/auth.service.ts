import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {

  constructor(private readonly userService: UserService, private readonly jwtService: JwtService){}

  async validate( username: string, pass: string){
    const user = await this.userService.findOne(username)
    if(user && user.password === pass){
      const { password, ...rest } = user
      return rest
    }
    return null
  }

  async login(user: any){
    const payload = { sub: user.dataValues.id, username: user.dataValues.username }
    return {
      access_token: this.jwtService.sign(payload)
    }
  }
}
