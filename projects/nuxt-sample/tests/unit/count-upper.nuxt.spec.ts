import { describe, it, expect } from "vitest";
import { mountSuspended } from "@nuxt/test-utils/runtime";

import CountUpper from "@/components/CountUpper.vue";

describe("CountUpper", async () => {
	const wrapper = await mountSuspended(CountUpper);
	const p = wrapper.find('[data-test="count"]');

	it("should render the component", async () => {
		expect(p.text()).toBe("Count: 0");
	});

	it("should increment the count", async () => {
		await wrapper.find("button").trigger("click");
		expect(p.text()).toBe("Count: 1");
	});
});
