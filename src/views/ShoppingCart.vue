<template>
  <div class="home">
    <ProductList
      title="Shopping Cart"
      :products="products"
      button-text="remove from cart"
      @button-click="removeFromCart($event)"
    />
  </div>
</template>

<script>
import ProductList from '@/components/ProductList.vue';
import SHOPPING_CART from '@/mock-shopping-cart';

export default {
  name: 'ShoppingCart',
  components: {
    ProductList,
  },
  data() {
    return {
      products: SHOPPING_CART,
    };
  },
  methods: {
    removeFromCart(product) {
      const id = SHOPPING_CART.findIndex((value) => value.id === product.id);
      SHOPPING_CART.splice(id, 1);
    },
  },
};
</script>
