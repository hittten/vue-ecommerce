<template>
  <div class="wrapper">
    <h1>Add new product</h1>
    <form @submit.prevent="submitForm()">
      <p>
        <label for="name">name</label>
        <input type="text" id="name" v-model.trim="form.name">
        <span class="error" v-if="!nameIsValid">name is required</span>
      </p>
      <p>
        <label for="price">price</label>
        <input type="number" id="price" v-model.number="form.price">
        <span class="error" v-if="!priceIsValid">price is required</span>
      </p>
      <p>
        <label for="description">description</label>
        <textarea id="description" v-model.trim="form.description"></textarea>
        <span class="error" v-if="!descriptionIsValid">description is required</span>
      </p>
      <p>
        <button class="button" type="submit" :disabled="!formIsValid">Save</button>
      </p>
    </form>
  </div>
</template>

<script>
import * as productService from '@/product-service';

export default {
  data() {
    return {
      form: {
        name: null,
        price: null,
        description: null,
      },
    };
  },
  computed: {
    nameIsValid() {
      return !!this.form.name;
    },
    priceIsValid() {
      return !!this.form.price;
    },
    descriptionIsValid() {
      return !!this.form.description;
    },
    formIsValid() {
      return this.nameIsValid && this.priceIsValid && this.descriptionIsValid;
    },
  },
  methods: {
    submitForm() {
      productService.create(this.form)
        .then(() => {
          document.forms[0].reset();
        });
    },
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
}

form {
  margin: 0 auto;
  max-width: 500px;
}

form label {
  font-weight: bold;
  display: block;
  margin-bottom: 10px;
}

form input, textarea {
  display: block;
  box-sizing: border-box;
  padding: 10px 5px;
  width: 100%;
}

form textarea {
  height: 100px;
}

form .error {
  color: red;
}
</style>
