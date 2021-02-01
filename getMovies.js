const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const getMovies = async (req, res) => {
  const movies = await prisma.movies.findMany({});

  res.status(200).json({ movies });
};

module.exports = { getMovies }; // routing.js 에서 사용하기 위해 모듈로 내보낸다.
