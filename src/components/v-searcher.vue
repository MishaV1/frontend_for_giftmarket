<template>
  <input class="v-searcher"  type="text" :value="value" v-on:input="updateValue($event.target.value)"/>
</template>

<script>
export default {
  emits:["sendText", "input"],
  name: "v-searcher",
  props:{
    value: {
      type: String
    },
  },
  methods: {
    updateValue: function (value) {
      this.$emit('input', value)
    },
    sendTextToCatalog(){
       this.$emit('sendText', this.value);
    }
  }
}
</script>

<style scoped>
  .v-button{
    height: 47px;
    width: 167px;
    border-color: rgba(113, 249, 224, 1);
    background-color: rgba(113, 249, 224, 1);
    position: absolute;
    left:661px;
    top: 0px;
    border-radius: 0px 20px 20px 0px;
  }
  .v-searcher{
    width: 820px;
    height: 41px ;
    margin-bottom: 5px;
    border-style: solid;
    border-width: 2px;
    border-color: rgba(113, 249, 224, 1);
    border-radius: 20px;
  }
</style>