import Vue from 'vue';
import router from './_router'
import App from './App';
import store from './_store';
new Vue({
	el: '#app',
	store,
	router,
	
	render: h => h(App),
});
