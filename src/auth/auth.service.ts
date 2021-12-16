import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt'

@Injectable()
export class AuthService {

  constructor(private readonly userService: UserService, private readonly jwtService: JwtService){}

  async validate( username: string, pass: string){
    try {
      const user = await this.userService.findOne(username)
      const passwordMatch = await bcrypt.compare(pass, user?.password)
      if(user && passwordMatch){
        const { id,firstName, lastName, age, username, profile_pic, cover_pic, followers, isAdmin } = user
        
        return { id, firstName, lastName, age, username, profile_pic, cover_pic, followers, isAdmin }
      }
    } catch (error) {
      return null
    }
  }

  async login(user: any){
    const payload = { sub: user.id, username: user.username }
    return {
      access_token: this.jwtService.sign(payload)
    }
  }
}
