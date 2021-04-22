import {Entity, Column ,CreateDateColumn,PrimaryColumn} from "typeorm"
import{ v4 as uuid} from "uuid";


@Entity("users")
class User {
    @PrimaryColumn()
    id:string;

    @Column()
    email:string;

    @CreateDateColumn()
    created_ad:Date;

    constructor(){
        if(!this.id){
            this.id=uuid()
        }
    }
}

export {User}