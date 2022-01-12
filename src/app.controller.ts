import { Controller, Get } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { Metadata, ServerDuplexStream } from '@grpc/grpc-js';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @GrpcMethod('EmailService', 'sendEmail')
  sendEmail(
    data: { email: string },
    metadata: Metadata,
    call: ServerDuplexStream<any, any>,
  ) {
    const serverMetadata = new Metadata();

    serverMetadata.add('Set-Cookie', 'yummy_cookie=choco');
    call.sendMetadata(serverMetadata);

    return {
      status: 'success',
      email: data.email,
    };
  }

  @GrpcMethod('InvoiceService', 'createInvoice')
  createInvoice(
    data: undefined,
    metadata: Metadata,
    call: ServerDuplexStream<any, any>,
  ) {
    const serverMetadata = new Metadata();

    serverMetadata.add('Set-Cookie', 'yummy_cookie=choco');
    call.sendMetadata(serverMetadata);

    return {
      status: 'invoice created',
    };
  }
}
