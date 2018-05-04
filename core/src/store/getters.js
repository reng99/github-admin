import _ from 'lodash'

export default {
	test: (state,getters,rootState) => {
		// demo,some codes here
		return state.test.data;
	},
	username: (state,getters,rootState) => {
		return state.username;
	}
}