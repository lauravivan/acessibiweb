import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserAdmin, UserCommon } from './users/users.entity';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.local'],
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: process.env.DB_PASSWORD,
      database: 'acessibiweb',
      entities: [UserAdmin, UserCommon],
      synchronize: true, // true = shouldn't be used in production - otherwise you can lose production data
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
