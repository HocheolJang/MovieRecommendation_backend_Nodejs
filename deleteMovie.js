const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const deleteMovie = async (req, res) => {
  const { id } = req.params;
  const movie = await prisma.movies.delete({
    where: {
      id: Number(id),
    },
  });

  res.status(204).json({ movie });
};

module.exports = { deleteMovie }; // routing.js 에서 사용하기 위해 모듈로 내보낸다.
