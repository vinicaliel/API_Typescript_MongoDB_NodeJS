import { IGetUsersRepository } from "../../controllers/getUsers/protocols";
import { MongoClient } from "../../database/mongo";
import { User } from "../../models/User";

export class mongoGetUsersRepositories implements IGetUsersRepository {
  async getUsers(): Promise<User[]> {
    const users = await MongoClient.db
      .collection<Omit<User, "id">>("users")
      .find({})
      .toArray();

    return users.map(({ _id, ...rest }) => ({
      ...rest,
      id: _id.toHexString(),
    }));
  }
}
