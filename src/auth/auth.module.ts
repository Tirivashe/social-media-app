import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from 'src/user/user.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt-strategy';
import { LocalAuthStrategy } from './local.strategy';
import * as dotenv from 'dotenv'

dotenv.config()

@Module({
  imports: [UserModule, PassportModule, JwtModule.register({
    secret: process.env.SECRET_KEY,
    signOptions: { expiresIn: '3600s' }
  })],
  controllers: [AuthController],
  providers: [AuthService, LocalAuthStrategy, JwtStrategy]
})
export class AuthModule {}
