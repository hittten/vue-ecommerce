<template>
  <div class="home">
    <img v-if="loading" class="loading" src="@/assets/spinner.svg" alt="loading">
    <ProductList
      v-if="!loading"
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
      products: [],
      loading: true,
    };
  },
  beforeCreate() {
    productService.listShoppingCart()
      .then(((products) => {
        this.products = products;
        this.loading = false;
      }));
  },
  methods: {
    removeFromCart(product) {
      this.loading = true;
      productService.removeFromShoppingCart(product)
        .then(() => {
          console.log('product', product.name, 'was removed from shopping cart');

          productService.listShoppingCart()
            .then(((products) => {
              this.products = products;
              this.loading = false;
            }));
        });
    },
  },
};
</script>
