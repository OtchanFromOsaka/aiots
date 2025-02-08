import { describe, it, expect } from "vitest";
import { mountSuspended } from "@nuxt/test-utils/runtime";

import CountUpper from "@/components/CountUpper.vue";

describe("CountUpper", () => {
	it("should render the component", async () => {
		const wrapper = await mountSuspended(CountUpper);
		expect(wrapper.find('[data-test="count"]').text()).toBe(0);
	});

	it("should increment the count", async () => {
		const wrapper = await mountSuspended(CountUpper);
		await wrapper.find("button").trigger("click");
		expect(wrapper.html()).toContain("Count: 1");
	});
});
