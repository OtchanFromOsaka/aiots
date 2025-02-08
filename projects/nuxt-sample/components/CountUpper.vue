<script setup lang="ts">
import { ref } from "vue";

import { MyButton } from "../../../packages/aio-ui-vue";

const count = ref(0);
</script>

<template>
	<p data-test="count">Count: {{ count }}</p>
	<div>
		<my-button @click="count++">increment</my-button>
	</div>
</template>
