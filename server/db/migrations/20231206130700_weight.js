
export async function up(knex) {
  await knex.schema.createTable('weight', (table) => {
    table.increments('id').primary()
    table.string('date')
    table.string('weight')
    table.integer('change')
  })
};


export async function down(knex) {
  await knex.schema.dropTable('weight')
  
};
