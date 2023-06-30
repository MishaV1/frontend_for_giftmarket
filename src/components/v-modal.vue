<script>
export default {
  name: 'v-modal',
  props: {
    product_data:{
      type: Object,
      default(){
        return{}
      }
    }
  },
  methods: {
    close() {
      this.$emit('close');
    },
  },
};
</script>
<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal"
           role="dialog"
           aria-labelledby="modalTitle"
           aria-describedby="modalDescription"
      >
        <header
            class="modal-header"
            id="modalTitle"
        >
          <slot name="header">

            <button
                type="button"
                class="btn-close"
                @click="close"
                aria-label="Close modal"
            >
              x
            </button>
          </slot>
        </header>
        <img :src="require('../assets/images/' + product_data.id + '.jpg')" alt="img" >
        <p>{{product_data.name}}</p>
        <p>Цена: {{product_data.price}} руб.</p>
        <p>Описание: {{product_data.description}}</p>
        <p>Ссылки: {{product_data.links}}</p>
<!--        <footer class="modal-footer">
          <slot name="footer">
            <button
                type="button"
                class="btn-green"
                @click="close"
                aria-label="Close modal"
            >
              Close me!
            </button>
          </slot>
        </footer>-->
      </div>
    </div>
  </transition>
</template>
<style>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #FFFFFF;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
}

.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}

.modal-header {
  border-bottom: 1px solid #eeeeee;
  color: #4AAE9B;
  justify-content: space-between;
}

.modal-footer {
  border-top: 1px solid #eeeeee;
  justify-content: flex-end;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
}

.btn-close {
  border: none;
  font-size: 20px;
  padding: 20px;
  cursor: pointer;
  font-weight: bold;
  color: #4AAE9B;
  background: transparent;
}

.btn-green {
  color: white;
  background: #4AAE9B;
  border: 1px solid #4AAE9B;
  border-radius: 2px;
}
</style>