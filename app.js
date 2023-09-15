import express from "express";
import "dotenv/config";
import { router } from "./api/index.js";

const app = express()

const port = 3000


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api', router)

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})