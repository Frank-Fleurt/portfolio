<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
</script>

<template>
  <header>
    <Navbar/>
  </header>

  <RouterView />
</template>
<!--App style-->
<style scoped lang="sass">
	header
		position: absolute
		top: 0
		left: 0
		width: 100%

	main
		margin-top: 50px

</style>

<!--Général Style-->

<style lang="sass">
	.button
		color: unset
		border: 1px solid #2c3e50
		border-radius: 8px
		padding: 10px
		transition: 0.5s
		&:hover
			background: rgba(75, 0, 130, 0.4)


</style>