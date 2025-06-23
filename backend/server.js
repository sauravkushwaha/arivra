import express  from "express"
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv"
dotenv.config();

import "./Config/db.js";
import Authrouter from "./Routes/Authrouter.js";
import Profilerouter from "./Routes/Profilerouter.js"
import Tutorialrouter from "./Routes/Tutorialrouter.js";

const app = express();
// require("./Models/db");
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('chal gaya brooooooooo')
})

app.use(bodyParser.json());
app.use(cors());
app.use("/auth", Authrouter);
app.use("/profile", Profilerouter);
app.use("/api/tutorial",Tutorialrouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
