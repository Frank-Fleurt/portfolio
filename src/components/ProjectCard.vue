<script setup lang="ts">
const props = defineProps<{
	title: string
	text: string
	link: string
	image: string | null
}>()

</script>

<template>
	<div class="projectContainer">
		<a class="redirectTosite" :href="link" target="_blank"></a>
		<div class="infoContainer">
			<h3>{{title}}</h3>
			<p>{{text}}</p>
		</div>
		<img class="backgorundImage" :src="'./src/assets/' + image" alt="" @loadstart="loadImage">
	</div>
</template>


<style scoped lang="sass">
	.projectContainer
		width: 400px
		height: 150px
		position: relative
		border-radius: 5px
		border: 1px solid lightblue
		overflow: hidden

	.redirectTosite
		width: 100%
		height: 100%
		position: absolute
		z-index: 1

	.infoContainer
		display: flex
		flex-direction: column
		justify-content: center
		align-items: center
		width: 100%
		height: 100%
		text-align: center
		color: #121212

		
	.backgorundImage
		width: 100%
		height: 100%
		opacity: 0.25
		position: absolute
		top: 0
</style>