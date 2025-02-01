<script setup lang="ts">
interface Props {
	type?: "button" | "submit" | "reset";
	disabled?: boolean;
	class?: string;
}
const props = withDefaults(defineProps<Props>(), {
	type: "button",
	disabled: false,
	class: "",
});

const emit = defineEmits<{
	click: [event: Event];
}>();

const handleClick = (event: Event) => {
	if (!props.disabled) {
		emit("click", event);
	}
};
</script>

<template>
	<button
		class="base-button"
		:class="props.class"
		:disabled="props.disabled"
		:type="props.type"
		@click="handleClick"
	>
		<slot></slot>
	</button>
</template>

<style scoped>
.base-button {
	padding: 10px 20px;
	border: none;
	border-radius: 4px;
	cursor: pointer;
}
</style>
