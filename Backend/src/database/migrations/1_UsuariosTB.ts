import Knex from 'knex'

export async function up(knex: Knex){
    return knex.schema.createTable('Usuarios', table =>{
        table.increments('id').primary();
        table.string('nome').notNullable();
        table.string('telefone').notNullable();
        table.string('cep').notNullable();
        table.string('email').notNullable();
        table.string('cpf').notNullable();
        table.string('senha').notNullable();
    })
}

export async function down(knex:Knex) {
    // knex.schema.dropTable('Usuarios')
}