<template>
  <div class="home">
    <ProductList title="Shopping Cart" :products="products"/>
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
};
</script>
