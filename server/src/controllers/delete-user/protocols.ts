import { User } from "../../models/User";
import { HttpRequest, HttpResponse } from "../protocols";


export interface IDeleteUserController{
    handle(httpRequest:HttpRequest<any>): Promise<HttpResponse<User>>
}


export interface IDeleteUserRepository{
    deleteUser(id:string): Promise<User> 
} 