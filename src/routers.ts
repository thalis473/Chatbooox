import { Router} from "express";
import { SettingsController } from "./controllers/SettingsController";
import {UserController} from "./controllers/UserController";
import {MenssagensController} from "./controllers/MenssagensController";

const routes = Router();

const settingsController = new SettingsController();
const userController = new UserController();
const menssagensController =new MenssagensController();

//rota com sua requisição
 routes.post("/settings", settingsController.create);
 routes.post("/users", userController.create);

 routes.post("/menssagem",menssagensController.create);
 routes.get("/menssagem/:id",menssagensController.showByUser);

export {routes};




