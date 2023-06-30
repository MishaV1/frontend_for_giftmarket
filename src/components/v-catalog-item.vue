<template>
  <div  class="v-catalog-item">
    <img :src="require('../assets/images/' + product_data.id + '.jpg')" alt="img">
    <p>{{product_data.name}}</p>
    <p>Цена: {{product_data.price}} руб.</p>
    <button @click="showModal">Описание</button>
    <modal v-show="isModalVisible" v-bind:product_data="product_data" @close = "closeModal"/>
  </div>
<!--  <modal :show="visible">
    <img :src="require('../assets/images/' + product_data.id + '.jpg')" alt="img">
    <p>{{product_data.name}}</p>
    <p>Цена: {{product_data.price}} руб.</p>
    <p>Описание: {{product_data.description}}</p>
    <p>Ссылки: {{product_data.links}}</p>
  </modal>-->
</template>

<script>
import modal from './v-modal';


export default {
  name: "v-catalog-item",
  components:{
    modal
  },
  data(){
    return{
      isModalVisible: false
    }
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    }
  },
  props: {
    product_data:{
      type: Object,
      default(){
        return{}
      }
    }
  }
}
</script>

<style scoped>
  .v-catalog-item{
    border-color: black;
    border-radius: 20px;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    padding: 5px;
    margin-bottom: 5px;
    flex-basis: 25%;
  }
</style>