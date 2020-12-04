exports.up = async function (knex) {
  await knex.schema.createTable("films", (table) => {
    table.increments("id").primary();
    table.string("title").notNullable();
    table.string("imdb_id").unique();
    table.string("image_url");
    table.integer("thumbs_up");
    table.integer("thumbs_down");
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("films");
};
