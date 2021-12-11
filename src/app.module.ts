import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { config } from './config/db.config';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule, SequelizeModule.forRoot(config)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
