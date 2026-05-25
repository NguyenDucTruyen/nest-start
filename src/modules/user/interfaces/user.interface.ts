export interface User {
  id: number;
  name: string;
  email: string;
}

export interface IUserService {
  findAll(): User[];
  findOne(id: number): User;
  create(user: User): User;
  update(id: number, user: User): User;
  delete(id: number): void;
}
