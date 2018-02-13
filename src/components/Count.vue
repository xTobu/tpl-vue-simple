<template>
<div>
    <h1>{{ msg }}</h1>
    <span>Count:{{Count}}, doubleCount:{{doubleCount}}</span>
    <input type="button" value="+" @click="plus" >
    <input type="button" value="-" @click="minus">
</div>

</template>

<script>
//import store from '../_store';
//  this.$store.commit('increment')
//console.log(this.$store.getters.getCount);
import { mapGetters } from 'vuex'
export default {
	name: 'Count',
	data() {
		return {
			msg: 'Count',
		};
	},
	computed: {
		// Count() {
		// 	return this.$store.getters.Count;
		// },
		// getCount() {
		// 	return this.$store.getters.getCount;
		// },

		// 將getter映射過來
		...mapGetters([
		'Count',
		'doubleCount'
		])
	},
	methods: {
		plus() {
			this.$store.commit('increment');
        },
        minus() {
			this.$store.commit('decrement');
		},
	},
};
</script>

<style lang="scss">

</style>
