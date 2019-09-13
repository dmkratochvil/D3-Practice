<template>
	<div id="app">
		<NavLinks v-if="!landing" />
		<NavNoLinks v-if="landing" />
		<transition name="component-fade" mode="out-in">
			<router-view name="main"></router-view>
		</transition>
		<Footer />
	</div>
</template>
<script>
import NavLinks from './components/NavLinks.vue';
import NavNoLinks from './components/NavNoLinks.vue';
import Footer from './components/Footer.vue';

export default {
	name: 'App',
	components: {
		NavLinks,
		NavNoLinks,
		Footer
	}, 
	computed: {
		landing() {
			if (this.$route.name=='Landing'){
				return true;
			} else {
				return false;
			}
		}
	}
}

</script>

<style lang="scss">

</style>
