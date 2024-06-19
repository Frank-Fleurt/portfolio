<script setup lang="ts">

import ProjectCard from "@/components/ProjectCard.vue";

</script>

<template>
	<main>
		<h1 class="center">Projets</h1>
		<div class="projectsContainer">
			<ProjectCard title="Réstaurant" text="Site vitrine d'un réstaurant projet sans et avec reservation disponible" link="https://frank-fleurt.github.io/The-resto-x/" image="image.png"/>
		</div>
		<p class="center text">Ayant récemment démarré mon activité, cette page peut sembler incomplète, mais de nombreux projets sont actuellement en préparation pour cet été.</p>
	</main>
</template>


<style scoped lang="sass">
	.text
		padding: 20px

	.projectsContainer
		display: flex
		align-items: center
		justify-content: space-evenly
</style>