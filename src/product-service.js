import environment from '@/environments/environment';

const apiUrl = {
  products: `${environment.apiUrl}/products/${environment.user}/`,
  shoppingCar: `${environment.apiUrl}/shoppingCar/${environment.user}/`,
};

export const create = (productForm) => fetch(apiUrl.products, {
  method: 'POST',
  body: JSON.stringify({
    name: productForm.name,
    price: productForm.price,
    description: productForm.description,
  }),
  headers: {
    'Content-Type': 'application/json',
  },
})
  .then((res) => res.json());

export const list = () => fetch(apiUrl.products)
  .then((res) => res.json());

export const listShoppingCart = () => fetch(apiUrl.shoppingCar)
  .then((res) => res.json());

export const addToShoppingCart = (product) => fetch(
  apiUrl.shoppingCar + product.id, { method: 'PUT' },
);

export const removeFromShoppingCart = (product) => fetch(
  apiUrl.shoppingCar + product.id, { method: 'DELETE' },
);
