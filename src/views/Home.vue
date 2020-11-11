<template>
  <div class="home">
    <ProductList title="Products"
                 button-text="Add to cart"
                 @button-click="addToShoppingCart($event)"
                 :products="products"
    />
  </div>
</template>

<script>
import PRODUCTS from '@/mock-products';
import SHOPPING_CART from '@/mock-shopping-cart';
import ProductList from '@/components/ProductList.vue';

export default {
  name: 'Home',
  components: {
    ProductList,
  },
  data() {
    return {
      products: PRODUCTS,
    };
  },
  methods: {
    addToShoppingCart(product) {
      console.log(product);
      SHOPPING_CART.push({ ...product });
    },
  },
};
</script>
