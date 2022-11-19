const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { MongoClient, ServerApiVersion } = require("mongodb");
const chocolateRouter = require("./models/ChocolstesRouter");
const dbConnects = require("./models/utils/dbConnect");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
dbConnects();
app.use("/chocolates", chocolateRouter);

async function run() {
  try {
    // await client.connect();
    // // console.log("db connected");
    // const chocolateCollaction = client
    //   .db("chocolateCollaction")
    //   .collection("chocolates");
    // app.get("/chocolate", async (req, res) => {
    //   const chocolate = await chocolateCollaction.find({}).toArray();
    //   res.send(chocolate);
    //   app.all("*", (req, res) => {
    //     res.send("No Route FOUND!!");
    //   });
    // });
  } finally {
  }
}
run().catch(console.dir);
app.get("/", (req, res) => {
  res.send("Hello from ice hut!");
});

app.listen(port, () => {
  console.log(`ice hut listening on port ${port}`);
});
