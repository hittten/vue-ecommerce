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
import * as productService from '@/product-service';
import ProductList from '@/components/ProductList.vue';

export default {
  name: 'Home',
  components: {
    ProductList,
  },
  data() {
    return {
      products: productService.list(),
    };
  },
  methods: {
    addToShoppingCart(product) {
      productService.addToShoppingCart(product);
    },
  },
};
</script>
