<script setup lang="ts">
	function toggleDarkMode() {
		// if (document.documentElement.classList.contains("light")) {
		// 	console.log("gate1.1")
		// 	document.documentElement.classList.remove("light")
		// 	document.documentElement.classList.add("dark")
		// } else if (document.documentElement.classList.contains("dark")) {
		// 	console.log("gate1.2")
		// 	document.documentElement.classList.remove("dark")
		// 	document.documentElement.classList.add("light")
		// } else {
		// 	console.log("gate1.3")
		// 	if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
		// 		document.documentElement.classList.add("dark")
		// 		console.log("gate2.1")
		// 	} else {
		// 		console.log("gate2.2")
		// 		document.documentElement.classList.add("light")
		// 	}
		// }

		if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
			const media = window.matchMedia('(prefers-color-scheme: dark)').media;
			console.log(media);
		}


	}
</script>

<template>
	<nav class="center">
		<ul>
			<router-link to="/">Profil</router-link>
			<router-link to="projects">Projets</router-link>
			<router-link to="contact">Contact</router-link>
<!--			<div @click="toggleDarkMode"  class="button" id="switchMode">d</div>-->
		</ul>
	</nav>
</template>


<style scoped lang="sass">
nav
	height: 50px
ul
	display: flex
	justify-content: space-evenly
	width: 100%
a
	padding: 0 1rem
	color: #2a002f
	transition: 0.4s
a:hover
	background-color: #92d0d2
	border-radius: 5px
</style>