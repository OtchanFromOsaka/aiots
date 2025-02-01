import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";

import MyButton from "../src/MyButton.vue";

describe("MyButton", () => {
	const wrapper = mount(MyButton, {
		slots: {
			default: "Button",
		},
	});

	it("renders the button text", () => {
		expect(wrapper.text()).toBe("Button");
	});

	it("emits a click event", async () => {
		await wrapper.trigger("click");
		expect(wrapper.emitted("click")).toBeTruthy();
	});
});
