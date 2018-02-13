<template>
<div id="app">
    <img src="./assets/logo.png" alt="" class="logo">
    <h2>{{msg}}</h2>

   <!-- 轉跳後所載入的 component 最後會顯示在此 -->
   <ul>
	   <li><router-link :to="{path: '/'}">Index</router-link></li>
	    <li><router-link :to="{path: '/post'}">Post</router-link></li>
	   <li><router-link :to="{path: '/about'}">About</router-link></li>
	   <li><router-link :to="{path: '/count'}">Count</router-link></li>
   </ul>
   
    
    <hr>
    
    <router-view></router-view>
</div>


</template>

<script>


export default {

	name: 'app',
	data() {
		return {
			msg: 'Welcome to Vue.js App with Router and Vuex',
		};
	},
};
</script>

<style lang="scss">
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
ul {
	list-style: none;
	width: 25%;
	margin: 0 auto;
	padding:0;
}
li {
	width: 20%;
	display: inline-block;
}
img.logo{
	width: 100px;
}


</style>
