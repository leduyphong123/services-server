import express from "express";
import dotenv from "dotenv"
dotenv.config();
import cors from "cors";
import morgan from "morgan";

//import routers
import initRoutes from "./src/routes/index";
//import database
import connectDatabase from "./src/config/connectDatabase";


const app = express();

//config nhận client url và các method của client
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    methods: ["POST","GET","PUT","DELETE"]
  })
);

//config trả về json
app.use(express.json())
//cofig đọc form data từ clien gửi lên
app.use(express.urlencoded({extended : true}))
const port = process.env.PORT || 8888;

//log
app.use(morgan("combined"));

initRoutes(app)
connectDatabase()

const listen = app.listen(port, () => {
  console.log(`Example app listening on port ${listen.address().port}`);
});
