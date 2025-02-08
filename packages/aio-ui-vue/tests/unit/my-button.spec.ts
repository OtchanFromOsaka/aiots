import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";

import MyButton from "../../src/components/MyButton.vue";

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

	it("renders the button type correctly when passed type props", async () => {
		await wrapper.setProps({ type: "submit" });
		expect(wrapper.attributes("type")).toBe("submit");
	});

	it("renders the text color correctly when passed color props", async () => {
		await wrapper.setProps({ color: "#ff0000" });
		expect(wrapper.element.style.color).toBe("#ff0000");
	});

	it("renders the background color correctly when passed bg-color props", async () => {
		await wrapper.setProps({ bgColor: "#007f00" });
		expect(wrapper.element.style.backgroundColor).toBe("#007f00");
	});
});
