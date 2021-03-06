import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loggedInUser: null,
    token: null,
    updatedAt: 1
  },
  mutations: {
    storeLoggedInUser (state, user) {
      state.loggedInUser = user
      state.updatedAt = new Date().getTime()
    },
    storeToken (state, token) {
      state.token = token
      state.updatedAt = new Date().getTime()
    }
  },
  getters: {
    user (state) {
      console.log(state.updatedAt)
      return state.loggedInUser
    },
    userEmail (state) {
      return state.loggedInUser.email
    },
    userIsAvailable (state) {
      return state.loggedInUser != null
    },
    token (state) {
      return state.token
    }
  }
})
