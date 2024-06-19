<script setup lang="ts">
	function copieToclipboard(): void {	document.getElementById("phoneNumber").addEventListener('click', () => {
		if (navigator.clipboard) {
			navigator.clipboard.writeText("068397908");
			console.log('Copie');
		} else {
			console.log("L'API clipborad n'est pas supporter sur le navigateur")
		}
	})}
</script>

<template>
	<div>
		<h2>Par Téléphone</h2>
		<a class="button" id="phoneNumber" @click="copieToclipboard" href="tel:0638397908">06 38 39 79 08</a>
	</div>
</template>


<style scoped lang="sass">

</style>