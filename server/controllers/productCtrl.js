// createProductsTable not being used. Ran once to create table.
// const createProductsTable = (req, res) => {
//   req.app
//     .get("db")
//     .product.create_product_table()
//     .then(() => res.sendStatus(200))
//     .catch(e => res.status(500).send(e));
// };

// GET all products
const getAllProducts = (req, res) => {
  req.app
    .get("db")
    .product.read_products()
    .then(response => res.status(200).send(response))
    .catch(e => res.status(500).send(e));
};

// GET one product by id
const getOneProduct = (req, res) => {
  req.app
    .get("db")
    .product.read_product(req.params.id)
    .then(response => res.status(200).send(response))
    .catch(e => res.status(500).send(e));
};

// Create. Post. Add to list of products
const addProduct = (req, res) => {
  let { name, description, price, imgURL } = req.body;
  req.app
    .get("db")
    .product.add_product([name, description, price, imgURL])
    .then(response =>
      res.status(200).send({ message: `Successfully added ${name} to DB` })
    )
    .catch(e => res.status(500).send(e));
};

// Updates product description
const updateProduct = (req, res) => {
  req.app
    .get("db")
    .product.update_product(req.params.id, req.body.description)
    .then(response => res.status(200).send(response))
    .catch(e => res.status(500).send(e));
};

// DELETE one product by id
const deleteProduct = (req, res) => {
  req.app
    .get("db")
    .product.delete_product(req.params.id)
    .then(response => res.status(200).send(response))
    .catch(e => res.status(500).send(e));
};

module.exports = {
  // createProductsTable,
  getAllProducts,
  getOneProduct,
  addProduct,
  updateProduct,
  deleteProduct
};
