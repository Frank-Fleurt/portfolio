<script setup lang="ts">
	import MailContact from "../components/contact/MailContact.vue";
	import PhoneContact from "../components/contact/PhoneContact.vue";
	import NetworkContact from "../components/contact/NetworkContact.vue";
</script>

<template>
	<main>
		<h1 class="center">Me contacter</h1>
		<MailContact />
		<PhoneContact />
		<NetworkContact />
	</main>
</template>

<style scoped lang="sass">
	//Center all div on this page
	div
		display: flex
		align-items: center
		flex-direction: column
		margin: 20px 0

	h1
		margin: 10px 0

</style>
