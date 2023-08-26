import { User } from "../../models/User";
import { HttpRequest, HttpResponse } from "../protocols";
import {
  CreateUserParams,
  IcreateUserController,
  IcreateUserRepository,
} from "./protocols";

export class CreateUserController implements IcreateUserController {
  constructor(private readonly createUserRepository: IcreateUserRepository) {}
  async handle(
    httpRequest: HttpRequest<CreateUserParams>
  ): Promise<HttpResponse<User>> {
    try {
      const { body } = httpRequest;

      if (!httpRequest.body) {
        return {
          statusCode: 400,
          body: "please especify a body",
        };
      }

      const user = await this.createUserRepository.createUser(httpRequest.body);

      return {
        statusCode: 201,
        body: user,
      };
    } catch (err) {
      return {
        statusCode: 500,
        body: "something went wrong with the body",
      };
    }
  }
}
