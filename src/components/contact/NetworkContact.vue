<script setup lang="ts">

</script>

<template>
	<div>
		<h2>Par mes réseaux</h2>
		<div class="networkContainer" >
			<a class="button" id="facebookNetwork" href="https://www.facebook.com/frank.fleurt/" target="_blank">Facebook</a>
			<a class="button" id="instagramNetwork" href="https://www.instagram.com/franki33340/" target="_blank">Instagram</a>
		</div>
	</div>
</template>


<style scoped lang="sass">
	.networkContainer
		display: flex
		justify-content: center
		width: 100vw

	.button
		margin: 20px

	#facebookNetwork
		color: #0866FF
		font-weight: 700
		padding: 5px
		&:hover
			color: white
			background: #0866FF

	#instagramNetwork
		color: mix(#d6249f, #285AEB, 50%)
		font-weight: 700
		padding: 5px
		&:hover
			color: white
			background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fcf292 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)
</style>