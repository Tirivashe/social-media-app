import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "./auth.service";

@Injectable()
export class LocalAuthStrategy extends PassportStrategy(Strategy){
  constructor(private readonly authService: AuthService) {
    super()
  }

  async validate(username: string, password: string){
    const result = await this.authService.validate(username, password)
    if(!result) throw new UnauthorizedException()
    return result
  }
}