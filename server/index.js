const express = require("express");
const { json } = require("body-parser");
const massive = require("massive");
require("dotenv").config();

const {
  // createProductsTable not being used. Ran once to create table.
  // createProductsTable,
  getAllProducts,
  getOneProduct,
  addProduct,
  updateProduct,
  deleteProduct
} = require("./controllers/productCtrl");

const port = 4000;

const app = express();
app.use(json());

// app.get("/api/test", (req, res, next) => {
//   res.sendStatus(200);
// });

massive(process.env.CONNECTION_STRING)
  .then(dbInstance => {
    // console.log(dbInstance);
    app.set("db", dbInstance);
  })
  .catch(err => console.log(err));

// createProductsTable not being used. Ran once to create table.
// app.get("/api/products/createtable", createProductsTable);
app.post("/api/product", addProduct);
app.get("/api/product", getAllProducts);
app.get("/api/product/:id", getOneProduct);
app.put("/api/product/:id", updateProduct);
app.delete("/api/product/:id", deleteProduct);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
