import { User } from "../../models/User";
import { HttpRequest, HttpResponse } from "../protocols";

export interface IcreateUserController {
  handle(
    httpRequest: HttpRequest<CreateUserParams>
  ): Promise<HttpResponse<User>>;
}

export interface CreateUserParams {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

export interface IcreateUserRepository {
  createUser(params: CreateUserParams): Promise<User>;
}
