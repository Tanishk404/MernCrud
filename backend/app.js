import dotenv from "dotenv"
import express from "express"
import { routers } from "./routes/Route.js";
import { DBCONNECTION } from "./config/DB.js";
import cors from 'cors';
import { SchemaModel } from "./models/Schema.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 10000;

console.log(process.env.MONGO_URL)



app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())


app.use(routers)

DBCONNECTION();

app.listen(PORT ,'0.0.0.0' () => {
    console.log(`App is running on http://localhost:${PORT}`)
})
