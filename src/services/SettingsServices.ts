import{getCustomRepository, Repository} from "typeorm";
import { Setting } from "../entities/Setting";
import {SettingsRepository} from "../repositories/SettingsRepository"


interface ISettingsCreate{
    chat:boolean;
    username:string;
}

//Regra de negocios fica aqui
class SettingsServices{
    private settingsRepository: Repository<Setting>;
    constructor(){
        this.settingsRepository = getCustomRepository(SettingsRepository);
    }

async create({chat,username}:ISettingsCreate){
   
    
//Select* from settings where username ="username" limit 1
    const userAlreadyExists = await this.settingsRepository.findOne({ username})

    if(userAlreadyExists){ 
        throw new Error("User already exists!");
    }

    //Criacao do usuario
    const settings = this.settingsRepository.create({
        chat,
        username
    })
// Salvamento no banco de dados
    await this.settingsRepository.save(settings);

    return settings;
    
}

}

export{SettingsServices}