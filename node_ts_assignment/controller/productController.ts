import { Request, Response } from 'express'
import { Product } from '../interface'
import { addProductService, deleteProductByIddService, getProductByIdService, getProductsService, updateProductByIdService } from '../service/productService'

// get products 
export const getProducts = async (req: Request, res: Response) => {
    try {
        // calling service 
        const data: Product[] = await getProductsService()

        // returning json
        return res.json({ status: 200, message: "Successfully get products", data })
    } catch (error) {
        // error
        return res.json({ status: 400, error })
    }
}

// add product
export const addProduct = async (req: Request, res: Response) => {
    try {
        // taking required data
        const { name, price } = req.body

        // calling service
        const data = await addProductService({ name, price })

        // returning json
        return res.json({ status: 200, message: "Successfully added product", data })
    } catch (error) {
        // error
        return res.json({ status: 400, error })
    }
}

// get product by id
export const getProductById = async (req: Request, res: Response) => {
    try {
        // taking required data
        const { id } = req.params

        // calling service
        const data: Product = await getProductByIdService(id)

        // returning json
        return res.json({ status: 200, message: "Successfully get products", data })
    } catch (error) {
        // error
        return res.json({ status: 400, error })
    }
}

// update product by id
export const updateProductById = async (req: Request, res: Response) => {
    try {
        // taking required data
        const { id } = req.params
        const { name, price } = req.body

        // calling service
        const data = await updateProductByIdService({ id, name, price })

        // returning json
        return res.json({ status: 200, message: "Successfully updated product", data })
    } catch (error) {
        // error
        return res.json({ status: 400, error })
    }
}

// delete product by id
export const deleteProductById = async (req: Request, res: Response) => {
    try {
        // taking required data
        const { id } = req.params

        // calling service
        const data = await deleteProductByIddService(id)

        // returning json
        return res.json({ status: 200, message: "Successfully deleted product", data })
    } catch (error) {
        // error
        return res.json({ status: 400, error })
    }
}