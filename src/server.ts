import express, { request, response } from "express";
import "./database";
import {routes} from "./routers"


const app = express();
app.use(express.json());
app.use(routes);


app.listen(5000,()=> console.log("server is running on port 5000"));