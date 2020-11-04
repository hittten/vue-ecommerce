<template>
  <header class="wrapper">
    <span class="material-icons">
      menu
    </span>
    <!--  TODO add nav -->
    <div>
      Vue Ecommerce
    </div>
    <span class="material-icons">
      shopping_cart
    </span>
  </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style>
header {
  background: dodgerblue;
  color: white;
  display: flex;
  height: 50px;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
}
</style>
