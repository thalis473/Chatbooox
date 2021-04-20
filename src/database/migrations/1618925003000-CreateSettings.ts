import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateSettings1618925003000 implements MigrationInterface {
//Criacão na migrations fica no up
    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
          new Table({
              name:"settings",
              columns:[
                {
                    name:"id",
                    type:"uuid",
                    isPrimary:true
                },
                {
                    name:"username",
                    type:"varchar"
                },
                {
                    name:"chat",
                    type:"boolean",
                    default:true
                },
                {
                    name:"updated_at",
                    type:"timestamp",
                    default:"now()"
                },
                {
                    name:"created_at",
                    type:"timestamp",
                    default:"now()"
                },
              ],
            })
      )  
    }

// Correção da estrutura ficará down
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("settings");
    }

}
