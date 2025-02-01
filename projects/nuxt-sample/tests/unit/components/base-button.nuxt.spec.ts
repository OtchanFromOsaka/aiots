import { describe, it, expect } from "vitest";
import { mountSuspended } from "@nuxt/test-utils/runtime";

import BaseButton from "@/components/BaseButton.vue";

describe("BaseButton", () => {
	it("renders properly", async () => {
		const wrapper = await mountSuspended(BaseButton, {
			slots: {
				default: "Click me",
			},
		});
		expect(wrapper.text()).toContain("Click me");
	});

	it("emits click event when clicked", async () => {
		const wrapper = await mountSuspended(BaseButton);
		await wrapper.trigger("click");
		expect(wrapper.emitted()).toHaveProperty("click");
	});

	it("renders with correct type", async () => {
		const wrapper = await mountSuspended(BaseButton, {
			props: {
				type: "submit",
			},
		});
		expect(wrapper.attributes("type")).toBe("submit");
	});

	it("renders with disabled attribute", async () => {
		const wrapper = await mountSuspended(BaseButton, {
			props: {
				disabled: true,
			},
		});
		expect(wrapper.attributes("disabled")).toBeDefined();
	});

	it("applies test class", async () => {
		const wrapper = await mountSuspended(BaseButton, {
			props: {
				class: "test-class",
			},
		});
		expect(wrapper.classes()).toContain("test-class");
	});
});
