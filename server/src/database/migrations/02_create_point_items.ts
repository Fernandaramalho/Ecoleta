import Knex from 'knex';

export async function up(Knex: Knex){
    //Criar a tabela
    return Knex.schema.createTable('point_items', table => {
        table.increments('id').primary();
        table.integer('point_id')
            .notNullable()
            .references('id')
            .inTable('points');

        table.integer('item_id')
            .notNullable()
            .references('id')
            .inTable('items');
    });
}

export async function down(Knex: Knex){
    //Voltar atras deletar a tabela criada
    return Knex.schema.dropTable('point_items');

}