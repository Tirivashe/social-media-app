import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { v4 as uuid } from 'uuid'

@Injectable()
export class UserService {
  constructor(@InjectModel(User) private readonly UserModel: typeof User){}

  async create(createUserDto: CreateUserDto): Promise<User> {
    return await this.UserModel.create({id: uuid(), ...createUserDto})
  }

  async findAll(): Promise<User[]>{
    return await this.UserModel.findAll()
  }

  async findOne(username: string): Promise<User> {
    const result = await this.UserModel.findOne({ where: { username } })
    if(!result) throw new NotFoundException()
    return result
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
