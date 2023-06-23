import { createStore } from 'vuex'
import itemsModules from './modules/Items/index'
const store = createStore({
  modules: {
    items: itemsModules
  }
})

export default store
