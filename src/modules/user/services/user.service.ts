import { Injectable } from '@nestjs/common';
import { IUserService, User } from '../interfaces/user.interface';

@Injectable()
export class UserService implements IUserService {
  findOne(id: number): User {
    return { id, name: 'John Doe', email: 'john.doe@example.com' };
  }
  findAll(): User[] {
    return [
      { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
      { id: 2, name: 'Jane Doe', email: 'jane.doe@example.com' },
    ];
  }
  create(user: User): User {
    return user;
  }
  update(id: number, user: User): User {
    return { ...user, id };
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  delete(id: number): void {
    // delete user logic
  }
}
