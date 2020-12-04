import db from "../../config/dbConfig";

const get = () => {
  return db("favorites").select();
};

const getBy = (filter) => {
  return db("favorites").where(filter).first();
};
