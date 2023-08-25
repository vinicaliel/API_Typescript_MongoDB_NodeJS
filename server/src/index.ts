import express from "express";
import { getUsersController } from "./controllers/getUsers/getUsers";
import { mongoGetUsersRepositories } from "./repositories/getUsers/mongo-get-users";

const app = express();

const port = process.env.PORT || 5000;

app.get("/users", async (req, res) => {
  const mongoGetUsersRepository = new mongoGetUsersRepositories();
  const GetUsersController = new getUsersController(mongoGetUsersRepository);

  const {body , statusCode} = await GetUsersController.handle();

  res.send(body).status(statusCode);
});

app.listen(port, () => console.log("servidor aberto na porta " + port));
