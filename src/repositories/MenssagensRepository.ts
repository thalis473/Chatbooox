import {EntityRepository , Repository} from "typeorm";
import {Menssages} from "../entities/Menssages";

@EntityRepository(Menssages)
class MenssagesRepository extends Repository <Menssages>{}

export {MenssagesRepository}