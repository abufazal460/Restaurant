import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import  dbConnection  from "./database/dbConnection.js"
import errorMidlleware from "./errors/error.js"
import reservationRouter from "./routes/reservationRoutes.js"

const app = express();

dotenv.config({ path: "./config/config.env" }); // ye code kya kar raha hai jaise hamen upar import kar ke ye expres cors use kar rahe hai waise he  .env file ko import kar ke use karne ka syntax hai ye dotenv ye package hai jo env file se connect karne mai help karta hai

app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST"],
    credentials: true,
  }),
); // ye code kiss liye hai aur kya kar raha hai app.use ye method hai cors package hamara forntend aur backend connect karne ke liye hota hai origin matlable frontent ka url methods iska matlab hai data behjna hai recive karna hai upadte karna hai delete karna hai post matlab data ko bhejna hai get matlab data ko recive karna hai lena hai

app.use(express.json()); // ye code string ko json format mai convert kar deta hai
app.use(express.urlencoded({ extends: true })); // ye iska matlab hai urlencoded ka matlab hai hamara data kis type ka hoga
app.use("/reservation" , reservationRouter)

dbConnection()

export default app;
