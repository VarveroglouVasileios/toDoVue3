import actions from './actions'
import mutations from './mutations'
import getters from './getters'

export default {
  namespaced: true,
  state() {
    return {
      items: []
    }
  },
  actions,
  mutations,
  getters
}
