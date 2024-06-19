<template>
	<main>
		<h1 class="center">Hello World!</h1>
		<div class="textContainer center">
			<h2>Mon parcourt</h2>
			<p>
				Voici un aperçu de mon parcours qui a contribué à ma réussite jusqu'à présent. Ayant décroché mon bac
				STI2D, j'ai commencé à m'intéresser de près à l'informatique. C'est avec regret que je n'ai pas pu
				continuer mes études dans ce domaine, faute d'avoir une entreprise pour ma formation en alternance.
				Après avoir contacté la mission locale, j'ai pu y effectuer un service civique. Ce stage m'a permis de
				réaliser que j'appréciais vraiment l'informatique, et que je me passionnais tout particulièrement pour
				le développement. Au départ, j'ai décidé de m'instruire seul, sans suivre de formation, dans le but
				d'acquérir les notions de base du développement. Après cela, j'ai accompli deux formations, l'une
				d'entre elles en alternance, et j'ai ainsi acquis des titres professionnels et l'envie
				de me mettre à mon compte.
			</p>
		</div>
	</main>
</template>
<style scoped lang="sass">
	.textContainer
		flex-direction: column
		padding: 20px
		width: 75vw
		max-width: 2000px
		margin: 0 auto
		border: 1px solid #737373
		border-radius: 10px
		background: rgba(34, 34, 34, 0.3)

	p
		margin: 10px 0
</style>
<script setup lang="ts">
const body = document.getElementsByName("body")[0];
// body.style.backgroundImage = "url()";
</script>