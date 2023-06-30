<template>
  <div class="v-catalog">
    <searcher
        @input = "generateProductsByName"
    />
    <div class="v-products">
      <catalog_item
      v-for="product in filtered_products"
      :key="product.id"
      v-bind:product_data="product"
      />
    </div>
    <button class="v-button">Показать ещё</button>
  </div>
</template>

<script>
import searcher from "./v-searcher"
import catalog_item from "./v-catalog-item"
import {mapActions} from 'vuex'

export default {
  name: "v-catalog",
  components: {
    searcher,
    catalog_item
  },
  props: {},
  data(){
    return{
      product_s: []
    }
  },
  methods: {
    ...mapActions(['GET_PRODUCTIONS_FROM_ES']),
    ...mapActions(['GET_PRODUCTIONS_FROM_ES_BY_NAME']),
    generateProductsByName(name){
      if(name == ""){
        this.generateProducts();
      }
      this.GET_PRODUCTIONS_FROM_ES_BY_NAME(name);
      this.sortByPrice();
    },
    sortByPrice(){
      this.product_s = [];
      this.product_s = this.$store.state.products.map(function (item){
        if(item.price >= 5000 && item.price <= 7000){
          return item;
        }
      })
    },
    generateProducts(){
        this.GET_PRODUCTIONS_FROM_ES();
    }
  },
  mounted() {
    this.generateProducts()
  },
  computed: {
    filtered_products(){
      if(this.product_s.length > 0){
        return this.product_s
      }else{
        return this.$store.state.products
      }
    }
  }
}
</script>

<style lang="css">
  .v-products{
    width: 825px;
    height: 900px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    border-style: solid;
    border-width: 1px;
    border-color: black;
    border-radius: 20px;
  }
  .v-button{
    width: 825px;
    height: 52px;
    border-radius: 20px;
    position: absolute;
    left: 0px;
    top:970px;
  }
  .v-catalog{
    width: 825px;
    height: 1090px;
    position: absolute;
    left: 690px;
    top: 90px;
    border-style: solid;
    border-width: 1px;
    border-color: white;
    border-radius: 10px;
  }
</style>