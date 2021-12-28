import { Injectable } from '@nestjs/common';

@Injectable()
// export class UsersService { }
export class UsersService implements UsersService {
  constructor(
    @Inject('UsersRepository') private readonly repo: typeof User,
    private readonly logger: PinoLogger,
  ) {
    logger.setContext(UsersServiceImpl.name);
  }

  async findAll(query?: FindOptions): Promise<Array<User>> {
    this.logger.info('UsersService#findAll.call', query);

    const result: Array<User> = await this.repo.findAll(query);

    this.logger.info('UsersService#findAll.result', result);

    return result;
  }

  async count(query?: FindOptions): Promise<number> {
    this.logger.info('UsersService#count.call', query);

    const result: number = await this.repo.count(query);

    this.logger.info('UsersService#count.result', result);

    return result;
  }

  async create(userDto: UserDto): Promise<User> {
    this.logger.info('UsersService#create.call', userDto);

    const user = new User(userDto);

    const result = await user.save();

    this.logger.info('UsersService#create.result', result);

    return result;
  }
}
