import {Entity,Column, CreateDateColumn, PrimaryColumn, ManyToOne, JoinColumn} from "typeorm";
import {v4 as uuid} from "uuid";
import { User } from "./Users";

@Entity("menssages")

class Menssages{
    @PrimaryColumn()
    id:string;

    @Column()
    admin_id:string;

    @Column()
    text:string;
    //Relação da coluna a referencia
    @JoinColumn({name:"user_id"})
    @ManyToOne(()=>User)
    user:User;

    @Column()
    user_id:string;

    @CreateDateColumn()
    created_at:Date;
   

    constructor(){
        if(!this.id){
            this.id=uuid()
        }
    }
}
export{Menssages}