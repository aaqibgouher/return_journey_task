import { addProductService, deleteProductByIddService, getProductByIdService, getProductsService, updateProductByIdService } from "../service/productService"

describe('Custom Test Cases', () => {
    test('Get Products Test should return an array of products', async () => {
        const products = await getProductsService()
        expect(Array.isArray(products)).toBe(true)
    })

    test('Add product should add a product and return the added product', async () => {
        const newProduct = { name: 'Test Product', price: 19.99 };
        const addedProduct = await addProductService(newProduct);
        expect(addedProduct.name).toEqual(newProduct.name);
        expect(addedProduct.price).toEqual(newProduct.price);
    });

    
    test('getProductByIdService should return a product by ID', async () => {
        const products = await getProductsService();
        const productId: any = products[0].id;
        const product = await getProductByIdService(productId);
        expect(product.id).toEqual(productId);
    });

    test('updateProductByIdService should update a product and return the updated product', async () => {
        const products = await getProductsService();
        const productId = products[0].id;
        const updatedProduct = await updateProductByIdService({
        id: productId,
        name: 'Updated Product',
        price: 29.99,
        });
        expect(updatedProduct.name).toEqual('Updated Product');
        expect(updatedProduct.price).toEqual(29.99);
    });

    test('deleteProductByIddService should delete a product by ID', async () => {
        const products = await getProductsService();
        const productId: any = products[0].id;
        const result = await deleteProductByIddService(productId);
        expect(result).toBe(true);
    });
})