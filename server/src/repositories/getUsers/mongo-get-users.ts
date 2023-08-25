import { IGetUsersRepository } from "../../controllers/getUsers/protocols";
import { User } from "../../models/User";

export class mongoGetUsersRepositories implements IGetUsersRepository {
  async getUsers(): Promise<User[]> {
    return [
      {
        firstName: "felipe",
        lastName: "rocha",
        email: "asdfghj@yahoo.com",
        password: "123456789",
      },
    ];
  }
}
