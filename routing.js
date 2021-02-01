const http = require("http");
const express = require("express");
const { postMovies } = require("./postMovies");
const { getMovies } = require("./getMovies");
const { modifyMovie } = require("./modifyMovie");
const { deleteMovie } = require("./deleteMovie");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "/ endpoint" });
});

app.post("/movies", postMovies);
app.get("/movies", getMovies);
app.put("/movies/:id", modifyMovie);
app.delete("/movies/:id", deleteMovie);

const server = http.createServer(app);

server.listen(3000, () => {
  console.log("server is listening on PORT 3000");
});
