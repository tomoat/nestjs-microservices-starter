export interface UsersService {
  findOne(UserById: number): Promise<User>;
  findAll(query?: string): Promise<Array<User>>;
  count(): Promise<number>;
  create(user: User): Promise<User>;
  delete(): Promise<void>;
  update(user: User): Promise<User>;
}

export interface User {
  id: number;
  name: string;
}

export interface UserById {
  id: number;
}
