<script setup lang="ts">
import { ref } from "vue";

import { MyButton } from "../../../packages/aio-ui-vue";

const count = ref(0);
</script>

<template>
	<h1>Index</h1>
	<p>count: {{ count }}</p>
	<base-button @click="count++">increment</base-button>
	<my-button>test</my-button>
</template>
