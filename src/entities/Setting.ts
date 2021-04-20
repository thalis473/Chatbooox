import {Entity, Column, CreateDateColumn, UpdateDateColumn , PrimaryColumn} from "typeorm";
import {v4 as uuid} from "uuid";

@Entity("settings")
class Setting{

    @PrimaryColumn()
    id:string;

    @Column()
    username: string;

    @Column()
    chat:boolean;

    @UpdateDateColumn()
    updated_at:Date; 

    @CreateDateColumn()
    created_at: Date;

    constructor(){
        if(!this.id){
            this.id =uuid();
        }
    }
}

export{ Setting };

//Ao aprensentar os erros, habilite no arquivo tsconfig.json, na linha 64 e 65 o emitdecoratormetadata eo experimentalDecoratots

//Criamos o construtor com o objetivo , de validar caso ja tenha um id, por exemplo ao atualizar um dado na tabela'o id ja existe' ai não teria o por que de criar um novo id