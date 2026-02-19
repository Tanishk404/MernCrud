import { Router } from "express";
import { Home, HomePOST, DeleteData, EditData, GetUpdatedData } from "../controllers/Home.js";

export const routers = Router();


routers.get("/", Home);
routers.post("/", HomePOST);

routers.get("/edit/:id", EditData);
routers.put("/edit/:id", GetUpdatedData);
routers.delete("/:id", DeleteData);