import  {Request ,Response} from "express";
import {UserServices} from "../services/UserServices";


class UserController{
    async create(request:Request, response : Response):Promise<Response>{
        const{email} = request.body;
        //Services
        const userServices =new UserServices()
        //Pegando o email
        const user = await userServices.create(email);
        //return
        return response.json(user);
    }
}

export {UserController}


// Qualquer return que não sera uma promisse Response, ele da erro