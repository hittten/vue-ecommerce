import PRODUCTS from '@/mock-products';
import SHOPPING_CART from '@/mock-shopping-cart';

export const create = (productForm) => {
  const product = {};
  product.id = PRODUCTS.length + 1;
  product.createdAt = new Date();
  product.image = `https://picsum.photos/id/${product.id}/300/300`;
  product.name = productForm.name;
  product.price = productForm.price;
  product.description = productForm.description;

  PRODUCTS.push(product);

  return product;
};

export const list = () => PRODUCTS;

export const listShoppingCart = () => SHOPPING_CART;

export const addToShoppingCart = (product) => {
  SHOPPING_CART.push(product);

  return product;
};

export const removeFromShoppingCart = (product) => {
  const id = SHOPPING_CART.findIndex((value) => value.id === product.id);
  SHOPPING_CART.splice(id, 1);
};
