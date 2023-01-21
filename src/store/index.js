import { createStore } from 'vuex'

const store = createStore({
  state: {
    tasks:[
      {
        name: '1',
        priority: 'qsdq',
        date: '02/12/2021'
      },
      {
        name: '2',
        priority: 'qsdq',
        date: '02/12/2021'
      },
      {
        name: '3',
        priority: 'qsdq',
        date: '02/12/2021'
      }
    ],
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