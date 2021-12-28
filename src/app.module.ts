/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import config from './configs/config';
import { LoggerModule } from 'nestjs-pino';

const env = process.env.NODE_ENV || 'development'

@Module({
  imports: [
    ConfigModule.forRoot({
      // 如果在多个文件中找到一个变量，则第一个优先
      //  envFilePath: ['.env.development.local', '.env.development'], 
      envFilePath: `${env}.env`,
      cache: true,
      isGlobal: true,
      // load允许加载多个配置文件如：[databaseConfig, authConfig]
      load: [config]
    }),
    LoggerModule.forRoot({
      pinoHttp: {
        safe: true,
        prettyPrint: process.env.NODE_ENV === 'development'
      }
    }),
    UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
