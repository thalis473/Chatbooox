import {getCustomRepository, Repository} from "typeorm";
import{User} from "../entities/Users"
import {UserRepository} from "../repositories/UserRepository"




class UserServices{
 private userRepository: Repository<User>;
    constructor(){
        this.userRepository=getCustomRepository(UserRepository)
    }
async create(email:string){

    
    //Verificar se o usuario existe
    const userExist = await this.userRepository.findOne({
        email,
    }) 
    // existente , return o user
    if(userExist){
        return userExist;
    }
    //não existindo salvar no banco de dados
    const user =this.userRepository.create({email,});
    await this.userRepository.save(user);

    return user;
    
}

}

export {UserServices}