import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { grpcServerOptions } from './grpc-server.options';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(
    AppModule,
    grpcServerOptions,
  );
  await app.listen();
  // console.log(`MicroService is running on: ${}`);
}
bootstrap();
