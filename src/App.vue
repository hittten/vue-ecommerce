<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
};
</script>

<style>
body {
  margin: 0;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Roboto Slab', serif;
}

span.material-icons {
  cursor: pointer;
}

.wrapper {
  padding-left: 20px;
  padding-right: 20px;
}

.button {
  padding: 8px 15px;
  background: dodgerblue;
  border: none;
  border-radius: 2px;
  color: white;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
