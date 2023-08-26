import { User } from "../../models/User"

export interface CreateUserParams{
    firstname:string;
    lastname:string;
    email:string;
    password:string;
}

export interface IcreateUserRepository{
    createUser(params: CreateUserParams): Promise<User>
}