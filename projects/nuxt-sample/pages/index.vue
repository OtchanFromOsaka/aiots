<script setup lang="ts">
import { ref } from "vue";

import { MyButton } from "../../../packages/aio-ui-vue";
import CountUpper from "@/components/CountUpper.vue";

const response = ref(null);

async function fetchData() {
	const res = await fetch("/api/v1/test");
	const data = await res.json();
	response.value = data;
}
</script>

<template>
	<h1>Index</h1>
	<CountUpper style="margin-top: 50px; margin-bottom: 5px;" />
	<p style="margin-top: 50px; margin-bottom: 5px;">response data: {{ response }}</p>
	<div>
		<my-button @click="fetchData">/api/v1/test</my-button>
	</div>
</template>
