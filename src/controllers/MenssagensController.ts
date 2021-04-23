import {Request, Response} from "express"
import{MessagesServices} from "../services/MenssagensServices";

class  MenssagensController{
    async create(request:Request, response:Response){

        const {admin_id, text, user_id} =request.body;

        const menssagensServices = new MessagesServices();

        const menssage= await menssagensServices.create({
            admin_id,
            text,
            user_id
        })

        return response.json(menssage)
    }
    async showByUser(request:Request, response:Response ){
        
        const{id} =request.params;

        const menssagesServices=new MessagesServices();

        const list= await menssagesServices.listByuser(id); //pegando a funçao list que vem do services

        return response.json(list)
    }
}

export {MenssagensController};