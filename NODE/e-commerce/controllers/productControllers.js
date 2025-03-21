// const { productSchema } = require("../models/productModels");
// const products = require("../products.json");
const mongoose = require("mongoose");
const { Product } = require("../models/productModels");

const getProducts = async (req, res) => {
  try {
    const allProducts = await Product.find();
    res.status(200).send(allProducts);
  } catch (error) {
    res.status(500).send({ message: "Error fetching products" });
    console.log(error);
  }
};

const getProductWithId = async (req, res) => {
  const id = req.params.id;

  try {
    const product = await Product.find({ _id: new mongoose.Types.ObjectId(id) });
    if (!product) {
      return res.status(404).send({ message: "Product not found" });
    }

    res.status(200).send(product);
  } catch (error) {
    res.status(500).send({ message: "Error fetching product" });
    console.log(error);
  }
};

const addProduct = async (req, res) => {
  const product = req.body;

  try {
    const newProduct = new Product({
      name: product.name,
      price: product.price,
      category: product.category,
    });
    await newProduct.save();
    res.status(201).send(newProduct);
  } catch (error) {
    res.status(500).send({ message: "Error adding product" });
    console.log(error);
  }
};

const deleteProduct = async (req, res) => {
  const id = req.params.id;

  try {
    const result = await Product.deleteOne({
      _id: new mongoose.Types.ObjectId(id),
    });
    if (result.deletedCount === 0) {
      return res.status(404).send({ message: "Product not found" });
    }
    res.status(200).send({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).send({ message: "Error deleting product" });
    console.log(error);
  }
};

module.exports = {
  addProduct,
  getProducts,
  getProductWithId,
  deleteProduct,
};
