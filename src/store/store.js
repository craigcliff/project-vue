import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    totalTvCount: 10, // The TV inventory
    name: 'Craig',
    todos: []
},
  
  getters: {
    reverseName: state => state.name.split("").reverse().join(""),
    allTodos: state => state.todos
    
  },
  
  mutations: {
    addTodos(state, payload){
      state.todos.push(payload)

    },
    deleteTodo(state,payload){
      let getIndex = state.todos.findIndex(id => id === payload.id)
      state.todos.splice(getIndex, 1)
    },
    updatedName(state, name) {
        state.name = name
      }
    // Here we will create Jenny
  },
  
  actions: {
    // Here we will create Larry
  }
});