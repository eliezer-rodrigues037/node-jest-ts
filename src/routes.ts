import { Router } from "express";
import UsersController from "./controllers/usersController";

const routes = Router();

const userControler = new UsersController();

routes.get('/user', userControler.getUsers);

routes.post('/user',userControler.createUser);


export { routes }