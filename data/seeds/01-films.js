exports.seed = async function (knex) {
  await knex("films").insert([
    {
      title: "The Batman",
      imdb_id: "tt1877830",
      image_url:
        "https://m.media-amazon.com/images/M/MV5BZTE2YTY3YTMtM2FlMS00YmI3LTgyMWUtM2FhMWIyZWRmMDk5XkEyXkFqcGdeQXVyMTkxNjUyNQ@@.jpg",
      thumbs_up: 12765027,
      thumbs_down: 23093,
    },
  ]);
};
