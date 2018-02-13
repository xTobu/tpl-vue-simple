<template>
<div>
    <h1>{{ msg }}</h1>
     {{ $route.params.id }}
</div>

</template>

<script>
export default {
	name: 'Post',
	data() {
		return {
			msg: 'Post',
		};
	},
};
</script>

<style lang="scss">

</style>
