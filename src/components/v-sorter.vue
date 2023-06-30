<template>
<div class = "v-sorter">
  <p class = "v-text1">Цена, р</p>
  <input class = "v-input1" type="text"/>
  <input class = "v-input2" type="text"/>
  <p class = "v-text2">Сортировка</p>
  <input id = "checkbox1" class = "v-checkbox1" type="checkbox"/>
  <input id = "checkbox2" class = "v-checkbox2" type="checkbox"/>
  <label class = "v-label1" for="checkbox1">По возрастанию</label>
  <label class = "v-label2" for="checkbox2">По убыванию</label>
  <button class = "v-button">Применить</button>
</div>
</template>

<script>
export default {
  name: "v-sorter"
}
</script>

<style scoped>
  .v-text2{
    position: absolute;
    left: 80px;

  }
  .v-text1{
    position: absolute;
    left: 95px;
    top: 80px;
  }
  .v-checkbox1{
    width: 20px;
    height: 20px;
    position: absolute;
    left:21px;
    top:126px;
    background-color: rgba(219, 215, 215, 1);
    border-radius:180px;
  }
  .v-label1{
    position: absolute;
    left:55px;
    top:132px;
  }
  .v-checkbox2{
    width: 20px;
    height: 20px;
    position: absolute;
    left:21px;
    top:167px;
    background-color: rgba(219, 215, 215, 1);
    border-radius:90px;
  }
  .v-label2{
    position: absolute;
    left:55px;
    top:173px;
  }
  .v-input1{
    width: 85px;
    height: 30px;
    background-color: rgba(219, 215, 215, 1);
    border-radius: 10px;
    position: absolute;
    left: 141px;
    top: 41px;
  }
  .v-input2{
    width: 85px;
    height: 30px;
    background-color: rgba(219, 215, 215, 1);
    border-radius: 10px;
    position: absolute;
    left: 21px;
    top: 41px;

  }
  .v-button{
    width: 125px;
    height: 30px;
    position: absolute;
    left: 65px;
    top: 210px;
    background-color: rgba(113, 249, 224, 1);
    border-radius: 10px;
  }
  .v-sorter{
    width: 255px;
    height: 270px;
    position: absolute;
    left: 405px;
    top: 900px;
    background-color: rgba(251,255, 48, 1);
    border-radius: 20px;
    border-style: solid;
    border-width: 2px;
    border-color: black;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  }
</style>