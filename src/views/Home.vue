<template>
  <div class="home">
    <img v-if="loading" class="loading" src="@/assets/spinner.svg" alt="loading">
    <ProductList
      v-if="!loading"
      title="Products"
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
      products: [],
      loading: true,
    };
  },
  beforeCreate() {
    productService.list()
      .then((value) => {
        this.products = value;
        this.loading = false;
      });
  },
  methods: {
    addToShoppingCart(product) {
      productService.addToShoppingCart(product).then((newProduct) => {
        console.log('product', newProduct.name, 'was added to shopping cart');
      });
    },
  },
};
</script>
