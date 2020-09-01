import Knex from 'knex'

export async function up(knex: Knex){
    return knex.schema.table('Usuarios', table =>{
    })
}

export async function down(knex:Knex) {
    // knex.schema.dropTable('Usuarios')
    return knex.schema.table('Usuarios', table =>{
        
    })
}