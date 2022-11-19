module.exports.getAllChocolates = (req, res, next) => {
  const { ip, query, params, body, headers } = req;
  console.log(ip, query, body, params, headers);
  res.json({ name: "abd" });
  //   res.send("get the chocolates ");
};
module.exports.saveChocolates = (req, res) => {
  res.send("chocolates added");
};
