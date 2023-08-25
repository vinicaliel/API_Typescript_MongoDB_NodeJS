import { User } from "../../models/User";
import { HttpResponse } from "../protocols";


export interface IGetUsersController{
    handle(): Promise<HttpResponse<User[]>>;
}

export interface IGetUsersRepository{
    getUsers(): Promise<User[]>
} 

