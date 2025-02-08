<script setup lang="ts">
import { ref } from "vue";

import MyButton from "../components/MyButton.vue";

const color = ref("#0f0f0f");
const bgColor = ref("#efefef");

const count = ref(0);
</script>

<template>
	<h1>button</h1>
	<p>count: {{ count }}</p>
	<my-button
		:color="color"
		:bgColor="bgColor"
		@click="count++"
	>
		<span>increment</span>
	</my-button>
	<div>
		<span>color: </span>
		<input v-model="color" type="text" />
	</div>
	<div>
		<span>bg-color: </span>
		<input v-model="bgColor" type="text" />
	</div>
</template>
