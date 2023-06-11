import express from "express";
import dotenv from "dotenv"
import cookieParser from "cookie-parser";
import db from "./config/Database.js";
import router from "./routes/api.js";
dotenv.config()
const app = express()

try {
  await db.authenticate()
  console.log("database terkoneksi")
} catch (error) {
  console.error(error)
  
}
app.use(cookieParser())
app.use(express.json())
app.use(router)

app.listen(3000, () => console.log("server nyala di port 3000"))