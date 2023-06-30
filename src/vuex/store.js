//import Vue from "vue"
import Vuex from "vuex"
import axios from "axios";



let store = new Vuex.Store({
   state: {
      products: [],
      favorites: []
   },
   mutations: {
      SET_PRODUCTATE_TO_STATE: (state , products) => {
         state.products = products;
      },
      SET_FAVORITES(state, product){
         state.favorites.push(product);
      }
      },
   actions: {
      GET_PRODUCTIONS_FROM_ES_BY_NAME({commit}, name_product) {
         return axios('http://localhost:8090/products/name?name=', {method: "GET", params: {name: name_product}})
             .then((products) => {
                commit('SET_PRODUCTATE_TO_STATE', products.data);
             })
      },
      GET_PRODUCTIONS_FROM_ES({commit}) {
         return axios('http://localhost:8090/products/all', {method: "GET"})
             .then((products) => {
                commit('SET_PRODUCTATE_TO_STATE', products.data);
             })
      },
      ADD_TO_FAVORITES({commit}, product){
         commit('SET_FAVORITES', product);
      }
   },
      getters: {
         FAVORITES(state){
           return state.favorites;
         },
         PRODUCTS(state) {
            return state.products;
         }

      }
   }
);

export default store;