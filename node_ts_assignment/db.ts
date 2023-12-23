import { Product } from "./interface";
import { generateRandomId } from "./service/productService";

// products default value
let products: Product[] = [{ id: 'lorogv9i', name: 'Mobile', price: 2000 }];

// get products
export const getProducts = async () => {
  return products;
};

// add product
export const addProduct = async (product: Product) => {
  // making payload
  const payload: Product = {
    id: await generateRandomId(),
    name: product.name,
    price: product.price
  }

  // pushing in array
  products.push(payload);

  return payload
};

// update product
export const updateProduct = async (product: Product) => {
  // finding index in array
  const productIndex = products.findIndex((data: Product) => data.id === product.id)

  // if found, update
  if (productIndex !== -1) {
    products[productIndex] = {
      id: product.id,
      name: product.name,
      price: product.price
    }
  }

  return product
}

// delete product
export const deleteProduct = async (id: string) => {
  // filter array by id
  const filterProducts = products.filter((product: Product) => product.id !== id)

  // update products
  products = filterProducts

  return true
}
