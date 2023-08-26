import { User } from "../../models/User";
import { HttpRequest, HttpResponse } from "../protocols";

export interface UpdateUserParams{
    firstname?:string;   
    lastname?:string; 
    password?:string;    
}

export interface IUpdateUserController{
handle(httpRequest: HttpRequest<any>): Promise<HttpResponse<User>>
}

export interface IUpdateUserRepository{
    updateUser(id:string , params:UpdateUserParams): Promise<User>
}

