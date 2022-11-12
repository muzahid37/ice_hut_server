const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { MongoClient, ServerApiVersion } = require("mongodb");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.igvx2fa.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function run() {
  try {
    await client.connect();
    // console.log("db connected");
    const chocolateCollaction = client
      .db("chocolateCollaction")
      .collection("chocolates");

    app.get("/chocolate", async (req, res) => {
      const chocolate = await chocolateCollaction.find({}).toArray();
      res.send(chocolate);
    });
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
