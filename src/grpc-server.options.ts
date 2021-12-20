import { GrpcOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

export const grpcServerOptions: GrpcOptions = {
  transport: Transport.GRPC,
  options: {
    maxSendMessageLength: 0,
    maxReceiveMessageLength: 0,
    package: ['users'],
    protoPath: [join(__dirname, '_proto/users.proto')],
  },
};
