import express from "express";
import { getUsersController } from "./controllers/getUsers/getUsers";
import { mongoGetUsersRepositories } from "./repositories/getUsers/mongo-get-users";
import { MongoClient } from "./database/mongo";

const main = async () => {
    
    
    const app = express();

  await MongoClient.connect();

  app.get("/users", async (req, res) => {
    const mongoGetUsersRepository = new mongoGetUsersRepositories();
    const GetUsersController = new getUsersController(mongoGetUsersRepository);

    const { body, statusCode } = await GetUsersController.handle();

    res.send(body).status(statusCode);
  });

  const port = process.env.PORT || 5000;
  app.listen(port, () => console.log("servidor aberto na porta " + port));
};

main();