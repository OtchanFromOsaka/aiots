<script setup lang="ts">
import { computed } from "vue";

interface Props {
	type?: "button" | "submit" | "reset";
	bgColor?: string;
	color?: string;
}
const props = withDefaults(defineProps<Props>(), {
	type: "button",
	color: "#0f0f0f",
	bgColor: "#efefef",
});

const color = computed(() => props.color);
const bgColor = computed(() => props.bgColor);
</script>

<template>
	<button
		:type="props.type"
		:style="{
			padding: '10px 15px',
			backgroundColor: bgColor,
			color: color,
			borderRadius: '8px',
			boxShadow: '0 2px 4px #0000001f',
			textAlign: 'center',
			fontSize: '16px',
			fontWeight: 'bold',
			cursor: 'pointer',
		}"
	><slot></slot></button>
</template>
