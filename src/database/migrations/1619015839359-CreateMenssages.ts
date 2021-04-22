import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateMenssages1619015839359 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"menssages",
                columns:[
                    {
                        name:"id",
                        type:"uuid",
                        isPrimary:true
                    },
                    {
                        name:"admin_id",
                        type:"uuid",
                        isNullable:true,
                        
                    },
                    {
                        name:"user_id",
                        type:"uuid",
                        
                    },
                    {
                        name:"text",
                        type:"varchar",
                        
                    },
                    {
                        name:"created_at",
                        type:"timestamp",
                        default:"now()"
                    },
                ],
                foreignKeys:[
                    {
                        name:"FKuser",
                        referencedTableName:"users",
                        referencedColumnNames:["id"],
                        columnNames:["user_id"],
                        onDelete:"SeT NULL",
                        onUpdate: "SET NULL"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropTable("menssages")
    }

}
