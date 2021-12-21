import { GrpcOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import config from './configs/config';

export const grpcServerOptions: GrpcOptions = {
  transport: Transport.GRPC,
  options: {
    url: `${config().nest.url}:${config().nest.port}`,
    maxSendMessageLength: -1,
    // Default is 4MB. Int valued, bytes. -1 means unlimited.
    maxReceiveMessageLength: -1,
    package: ['users'],
    protoPath: [join(__dirname, '_proto/users.proto')],
  },
};
