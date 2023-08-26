import { User } from "../../models/User";
import validator from "validator";
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
      const requireFields = ["firstname", "lastname", "email", "password"];

      for (const field of requireFields) {
        if (!httpRequest?.body?.[field as keyof CreateUserParams]?.length) {
          return { statusCode: 400, body: `field ${field} is required` };
        }
      }

      const emailIsValid = validator.isEmail(httpRequest.body!.email)

      if(!emailIsValid){
        return {
          statusCode:400,
          body:'E-mail is invalid'
        }
      }

      const user = await this.createUserRepository.createUser(
        httpRequest.body!
      );

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
