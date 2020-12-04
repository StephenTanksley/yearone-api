const axios = require("axios").default;
const router = require("express").Router({ mergeParams: true });

router.get("/:title", async (req, res, next) => {
  console.log("Request parameters: ", req.params.title);
  try {
    const response = await axios.get(
      `https://imdb-internet-movie-database-unofficial.p.rapidapi.com/search/${req.params.title}`,
      {
        headers: {
          "x-rapidapi-key": process.env.API_KEY,
          "x-rapidapi-host": process.env.API_HOST,
          useQueryString: true,
        },
      }
    );
    if (response) {
      res.status(200).json(response.body);
    }
    console.log(response.data.titles);
  } catch (error) {
    console.log("Request Parameters: ", req.params.title);
    next(error);
  }
});

module.exports = router;
