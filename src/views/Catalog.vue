<template>
<div>This is a Catalog Page.</div>

<input v-model="filter" placeholder="filter">

<ul>
  <li v-for="product in products" :key="product.name">
    {{ product.name }} - {{ product.price }}
  </li>
</ul>
</template>

<script>
  export default {
    data: function(){
        return {
            filter: '',
            products: this.$store.state.products,
            };
    },
    watch: {
        filter: function(val){
            this.products = this.$store.state.products.filter((product) => product.name.includes(val));
        }
    }
  }
</script>