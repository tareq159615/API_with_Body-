const express = require("express");
require("./config");
const products = require("./product");

const app = express();
const PORT = 3000;
app.use(express.json());

app.post("/create", async (req, res) => {
  let data = new products(req.body);
  let result = await data.save();
  console.log(req.body);
  res.send("Post your data");
});

app.get("/list", async (req, res) => {
  let data = await products.find();
  res.send(data);
});

app.delete("/delete/:_id", async (req, res) => {
  // console.log(req.params);
  let data = await products.deleteOne(req.params);
  res.send(data);
});

app.put("/update/:_id", async (req, res) => {
  console.log(req.params);
  let data = await products.updateOne(req.params, {
    $set: req.body 
  });
});

app.listen(PORT, () => {
  console.log(`your server is running http://localhost:${PORT}`);
});
