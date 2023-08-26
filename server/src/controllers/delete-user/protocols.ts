import { User } from "../../models/User";

export interface IDeleteUserRepository{
    deleteUser(id:string): Promise<User> 
}