import {getCustomRepository, Repository} from "typeorm";
import { Menssages } from "../entities/Menssages";
import { MenssagesRepository} from "../repositories/MenssagensRepository"

interface IMenssageCreate{
    admin_id?:string,
    text:string,
    user_id:string
}

class MenssagensServices{
   private menssagesRepository : Repository<Menssages>
   constructor(){
       this.menssagesRepository = getCustomRepository(MenssagesRepository);
   }

    async create( {admin_id, text, user_id}:IMenssageCreate){
       
       const message= this.menssagesRepository.create({
            admin_id,
            text,
            user_id
        });

        await this.menssagesRepository.save(message)
        return message;
    }
    //listar as menssagens
    async listByuser(user_id:string){
        
        const list =await this.menssagesRepository.find({
           where:{user_id},
           relations:["user"], // relations server pra trazer tudo
        });
        return list;
    }
    
}

export{MenssagensServices}