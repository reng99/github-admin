import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import * as actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

// init store
export default new Vuex.Store({
	state,
	actions,
	mutations,
	getters
})