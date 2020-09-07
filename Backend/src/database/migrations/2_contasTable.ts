import Knex from 'knex'

export async function up(knex: Knex){
    return knex.schema.createTable('Contas', table =>{
        table.increments('id').primary();
        table.integer('idUsuario').notNullable();
        table.string('numeroConta').notNullable();
        table.integer('codigoSeguranca').notNullable();
        table.string('dataExpedicao').notNullable();
        table.decimal('saldo').notNullable();
        table.decimal('limite').notNullable();
    })
}

export async function down(knex:Knex) {
    // knex.schema.dropTable('Contas')
}