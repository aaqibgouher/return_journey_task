import { addProduct, deleteProduct, getProducts, updateProduct } from '../db'
import { Product } from '../interface';

export const getProductsService = async () => {
  // get all products
  const products: Product[] = await getProducts()

  // return
  return products;
};

export const addProductService = async (payload: Product) => {
  // validations
  if (!payload || !payload.name) throw 'Name is required'
  if (!payload || !payload.price) throw 'Price is required'

  const { name, price } = payload

  // add product in the db
  const product = await addProduct({ name, price }) 

  // return
  return product
}

// generate random id
export const generateRandomId = async (length = 8) => {
  return await Math.random().toString(36).substr(2, length);
}

export const getProductByIdService = async (id: string) => {
  // get products
  const products: Product[] = await getProducts()

  // filter by id
  const product: Product | any = products.find((product: Product) => product.id === id  )

  // return
  return product;
};

export const updateProductByIdService = async (payload: Product) => {
  // validations
  if (!payload || !payload.id) throw 'Id is required'

  // get product
  const product: Product | any = await getProductByIdService(payload.id)

  // if not found
  if (!product) throw 'Product not found by id'

  // setting default value
  if (!payload || !payload.name) payload.name = product.name
  if (!payload || !payload.price) payload.price = product.price

  // update
  return await updateProduct(payload)
}

export const deleteProductByIddService = async (id: string) => {
  // validations
  if (!id) throw 'Id is required'

  // get product
  const product: Product | any = await getProductByIdService(id)

  // if not found
  if (!product) throw 'Product not found by id'

  // delete product
  const res: boolean = await deleteProduct(id)

  // return
  return res
}
