import { IsAlpha, IsAlphanumeric, IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator"

export class CreateUserDto {
  @IsAlpha()
  @IsString()
  @IsNotEmpty()
  firstName: string

  @IsAlpha()
  @IsString()
  @IsNotEmpty()
  lastName: string

  @IsNumber()
  @IsNotEmpty()
  age: number

  @IsEmail()
  @IsNotEmpty()
  email: string

  @IsAlphanumeric()
  @IsString()
  @IsNotEmpty()
  username: string

  @IsAlphanumeric()
  @IsString()
  @IsNotEmpty()
  password: string
}
