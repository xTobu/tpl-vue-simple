import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		count: 0,
	},
	getters: {
		Count: state => state.count,
		doubleCount: state => {
			return state.count * 3;
		},
		
	},
	mutations: {
		increment(state) {
			state.count++;
		},
		decrement(state) {
			state.count--;
		},
	},
});
