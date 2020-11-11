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
import * as productService from '@/product-service';
import ProductList from '@/components/ProductList.vue';

export default {
  name: 'ShoppingCart',
  components: {
    ProductList,
  },
  data() {
    return {
      products: productService.listShoppingCart(),
    };
  },
  methods: {
    removeFromCart(product) {
      productService.removeFromShoppingCart(product);
    },
  },
};
</script>
