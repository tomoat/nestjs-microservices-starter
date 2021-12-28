import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { Metadata, ServerUnaryCall } from '@grpc/grpc-js';
import { User, UserById } from './users.interface';
import { UsersService } from './users.service';
import { InjectPinoLogger, PinoLogger } from 'nestjs-pino';
import { Query } from 'src/interfaces/commons.interface';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    @InjectPinoLogger(UsersController.name)
    private readonly logger: PinoLogger,
  ) {
    // logger.setContext(UsersController.name);
  }

  @GrpcMethod('UsersService', 'findAll')
  async findAll(query: Query): Promise<UserServiceQueryResult> {
    this.logger.info('UsersController#findAll.call', query);

    const result: Array<User> = await this.usersService.findAll({
      attributes: !isEmpty(query.attributes) ? query.attributes : undefined,
      where: !isEmpty(query.where) ? JSON.parse(query.where) : undefined,
      order: !isEmpty(query.order) ? JSON.parse(query.order) : undefined,
      offset: query.offset ? query.offset : 0,
      limit: query.limit ? query.limit : 25,
    });

    this.logger.info('UsersController#findAll.result', result);

    return { data: result };
  }

  @GrpcMethod('UsersService', 'count')
  async count(query: Query): Promise<Count> {
    this.logger.info('UsersController#count.call', query);

    const count: number = await this.usersService.count({
      where: !isEmpty(query.where) ? JSON.parse(query.where) : undefined,
    });

    this.logger.info('UsersController#count.result', count);

    return { count };
  }
}
