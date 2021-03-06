# Year One API Challenge

## API Instructions:

We’re building a small web application that allows a user to search for a movie title, click on that movie title for more information, and give that movie a thumbs up or thumbs down.

---

## Deliverables:

Search functionality that allows a user to enter a title and receive back movie information. (Choose a free API for movie data. https://rapidapi.com/collection/movie-apis OR any API that provides this info!)

A user should be able to look through title results, if there are more than one, and choose one to read more about. (A good movie to test this with is SpiderMan).

The movie detail page should have the following information at a minimum:

    • Title

    • Director

    • Release Year

    • Description (if your API provides it)

    • Ability to thumbs up or thumbs down the movie (see below)

Implement some type of storage or database to persist movie titles and how many thumbs up or thumbs down they’ve received. No need to add movies that have not received any votes. A sample table is below.

| Movie Title | Thumbs Up | Thumbs Down |
| :---------- | :-------- | :---------- |
| Ray         | 48        | 3           |

---

### Clarifications:

No need to handle user login or any sort of authentication.

Design and aesthetic is not scored for this phase of the interview, however, these projects will be shared with prospective employers if you become a finalist of YearOne. If front-end or full-stack is your goal, this is a good opportunity to shine.

Additional back-end work/testing is not scored for this phase of the interview, however, these projects will be shared with prospective employers if you become a finalist of YearOne.

Testing or further work on the back-end of the API could be a good opportunity to shine if back-end is your goal.

---

## The Plan

This API should be designed with the end user in mind. From the description of the requirements, it looks as though this app is a "favorite movies" list. We should be able to search an API (The Unofficial IMDb API) for a movie
