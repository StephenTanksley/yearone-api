import db from "../../config/dbConfig";

const get = () => {
  return db("favorites").select();
};

const getBy = (filter) => {
  return db("favorites").where(filter).first();
};

const getById = async (id) => {
  const film = await db("films")
    .where({ imdb_id: id })
    .select("id", "title", "imdb_id", "image_url", "thumbs_up", "thumbs_down")
    .first();

  return film;
};

const add = (film) => {
  return db("films").insert(film).returning("*");
};

const update = (id, changes) => {
  return db("films")
    .where({
      imdb_id: id,
    })
    .update(changes)
    .returning("*");
};

const remove = (id) => {
  return db("films").where({ imdb_id: id }).del();
};

module.exports = {
  get,
  getBy,
  getById,
  add,
  update,
  remove,
};
