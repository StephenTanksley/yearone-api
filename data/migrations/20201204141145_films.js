exports.up = async function (knex) {
  await knex.schema.createTable("films", (table) => {
    table.increments("id").primary();
    table.string("title").notNullable();
    table.string("imdb_id").unique();
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("films");
};
