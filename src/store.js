import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {
    getData(){
      axios.get('/list').then(res=>{
        console.log(res.data.goodList)
      })
    }
  }
})
