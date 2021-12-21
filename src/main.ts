import { NestFactory } from '@nestjs/core';
// import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';
import { grpcServerOptions } from './grpc-server.options';

import { NestConfig } from './configs/config.interface';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(
    AppModule,
    grpcServerOptions,
  );
  // app.useGlobalPipes(new ValidationPipe());

  const configService = app.get(ConfigService);
  const nestConfig = configService.get<NestConfig>('nest');

  await app.listen();
  // console.log(`MicroService is running on: ${}`);
}
bootstrap();
