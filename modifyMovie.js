const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const modifyMovie = async (req, res) => {
  const { id } = req.params;
  const { title, releaseDate, rating, poster, desc } = req.body;
  const movie = await prisma.movies.update({
    where: {
      id: Number(id),
    },
    data: {
      title: `${title}`,
      release_date: new Date(`${releaseDate}`),
      rating: Number(`${rating}`),
      poster: `${poster}`,
      desc: `${desc}`,
    },
  });

  res.status(201).json({ movie });
};

module.exports = { modifyMovie }; // routing.js 에서 사용하기 위해 모듈로 내보낸다.
