import PRODUCTS from '@/mock-products';
import SHOPPING_CART from '@/mock-shopping-cart';

function promisify(value) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(value);
    }, 500);
  });
}

export const create = (productForm) => {
  const product = {};
  product.id = PRODUCTS.length + 1;
  product.createdAt = new Date();
  product.image = `https://picsum.photos/id/${product.id}/300/300`;
  product.name = productForm.name;
  product.price = productForm.price;
  product.description = productForm.description;

  PRODUCTS.push(product);

  return promisify(product);
};

export const list = () => promisify(PRODUCTS);

export const listShoppingCart = () => promisify(SHOPPING_CART);

export const addToShoppingCart = (product) => {
  SHOPPING_CART.push(product);

  return promisify(product);
};

export const removeFromShoppingCart = (product) => {
  const index = SHOPPING_CART.findIndex((value) => value.id === product.id);
  const removedProduct = SHOPPING_CART[index];

  return promisify(removedProduct)
    .then((oldProduct) => {
      SHOPPING_CART.splice(index, 1);

      return oldProduct;
    });
};
