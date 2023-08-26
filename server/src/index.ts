import express from "express";
import { getUsersController } from "./controllers/getUsers/getUsers";
import { mongoGetUsersRepositories } from "./repositories/getUsers/mongo-get-users";
import { MongoClient } from "./database/mongo";
import { MongoCreateUserRepository } from "./repositories/create-user/create-mongo-User";
import { CreateUserController } from "./controllers/create-user/create-user";
import { config } from "dotenv";
const main = async () => {
  config();
  const app = express();

  app.use(express.json());

  await MongoClient.connect();

  app.get("/users", async (req, res) => {
    const mongoGetUsersRepository = new mongoGetUsersRepositories();
    const GetUsersController = new getUsersController(mongoGetUsersRepository);

    const { body, statusCode } = await GetUsersController.handle();

    res.send(body).status(statusCode);
  });

  app.post("/users", async (req, res) => {
    const mongoCreateUserRepository = new MongoCreateUserRepository();

    const createUserController = new CreateUserController(
      mongoCreateUserRepository
    );

    const { body, statusCode } = await createUserController.handle({
      body: req.body,
    });

    res.send(body).status(statusCode);
  });

  const port = process.env.PORT;
  app.listen(port, () => console.log("servidor aberto na porta " + port));
};

main();
