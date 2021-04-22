import {Request,Response} from "express"
import { SettingsServices } from "../services/SettingsServices";



class SettingsController{

    async create(request:Request, response:Response){
        
        const {chat, username}= request.body;
        const settingsService = new SettingsServices();

        try{
            const settings = await settingsService.create({chat , username})
            return response.json(settings);
        }catch(err) {
            return response.status(400).json({ //error 400 pois significa um erro dentro da aplicação se fosse fora dela seria status 500
                message: err.message,
            })
        }
        

       
        
    }
}

export {SettingsController}