import { createStore } from 'vuex'

const store = createStore({
  state: {
    tasks:[],
  },
  getters: {
  },
  mutations: {
    addTask(state, payload){
      state.tasks.push(payload)
    },
    deleteTask(state, payload){
      state.tasks.splice(payload, 1)
    }
  },
  actions: {
  },
  modules: {
  }
})

export default store;