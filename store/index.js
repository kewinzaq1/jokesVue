import axios from 'axios'

export const state = () => ({
  currentCategory: null,
  categories: null,
  categoriesError: null,
  joke: null,
  jokeError: null,
})

export const getters = {
  getCurrentCategory(state) {
    return state.currentCategory
  },
  getJoke(state) {
    return state.joke
  },
  getCategories(state) {
    return state.categories
  },
}

export const mutations = {
  setCategory(state, category) {
    state.currentCategory = category
  },
  setCategories(state, categories) {
    state.categories = categories
  },
  setCategoriesError(state, error) {
    state.categoriesError = error
  },
  setJoke(state, joke) {
    state.joke = joke
  },
  setJokeError(state, error) {
    state.jokeError = error
  },
}

export const actions = {
  async fetchCategories({ commit }) {
    try {
      const data = await axios.get(
        'https://api.chucknorris.io/jokes/categories'
      )
      commit('setCategories', data.data)
    } catch (e) {
      commit('setCategoriesError', e)
    }
  },
  async fetchJoke({ commit, state }) {
    try {
      if (state.currentCategory.length) {
        const data = await axios.get(
          `https://api.chucknorris.io/jokes/random?category=${state.currentCategory}`
        )
        commit('setJoke', data.data.value)
      } else {
        commit('setJoke', null)
      }
    } catch (e) {
      commit('setJokeError', e)
    }
  },
}
