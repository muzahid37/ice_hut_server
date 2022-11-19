function dbConnects() {
  //   const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.igvx2fa.mongodb.net/?retryWrites=true&w=majority`;
  //   const client = new MongoClient(uri, {
  //     useNewUrlParser: true,
  //     useUnifiedTopology: true,
  //     serverApi: ServerApiVersion.v1,
  //   });
  console.log("db connected");
}
module.exports = dbConnects;
