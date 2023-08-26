import { User } from "../../models/User";
import { HttpRequest, HttpResponse } from "../protocols";
import { IUpdateUserController, IUpdateUserRepository, UpdateUserParams } from "./protocols";

export class UpdateUserController implements IUpdateUserController {

    constructor(private readonly updateUserRepository:IUpdateUserRepository){}
  async handle(httpRequest: HttpRequest<any>): Promise<HttpResponse<User>> {
    try {
      const id = httpRequest?.params?.id;
      const body = httpRequest?.body;

      if (!id) {
        return {
          statusCode: 400,
          body: "missing user id ",
        };
      }
      const fieldsAllowedToUpdate: (keyof UpdateUserParams)[] = [
        "firstname",
        "lastname",
        "password",
      ];
      const someFiledNotAllowedToUpdate = Object.keys(body).some(
        (key) => !fieldsAllowedToUpdate.includes(key as keyof UpdateUserParams)
      );

      if (someFiledNotAllowedToUpdate) {
        return {
          statusCode: 400,
          body: "some recived field is not allowed",
        };
      }

      const user = await this.updateUserRepository.updateUser(id , body)

      return {
        statusCode:200,
        body:user
      }
    } catch (err) {
      return {
        statusCode: 500,
        body: "something went wrong..",
      };
    }
  }
}
