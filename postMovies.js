const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const postMovies = async (req, res) => {
  const { title, releaseDate, rating, poster, desc } = req.body;

  const createdMovie = await prisma.movies.create({
    data: {
      title: `${title}`,
      release_date: new Date(`${releaseDate}`),
      rating: Number(`${rating}`),
      poster: `${poster}`,
      desc: `${desc}`,
    },
  });

  res.status(201).json({ createdMovie });
};

module.exports = { postMovies }; // routing.js 에서 사용하기 위해 모듈로 내보낸다.
