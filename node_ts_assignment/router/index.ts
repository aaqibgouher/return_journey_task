import express, { Request, Response } from "express";
import { getProducts, addProduct, getProductById, updateProductById, deleteProductById } from "../controller/productController";

const router = express.Router()

// get products
router.get('/', getProducts)

// get product by id
router.get('/:id', getProductById)

// add product by passing name & price
router.post('/', addProduct)

// update product by id
router.put('/:id', updateProductById)

// delete product by id
router.delete('/:id', deleteProductById)

export default router