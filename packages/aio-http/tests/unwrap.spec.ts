import { describe, it, expect } from "vitest";

import { unwrap } from "../src/unwrap";

describe("unwrap", () => {
	it("should return json data if response is ok", async () => {
		const body = { id: 123, name: "user@test.com" };
		const response = new Response(JSON.stringify(body), { status: 200 });
		const data = await unwrap<typeof body>(response);
		expect(data).toEqual(body);
	});

	it("should return error if response is not ok", async () => {
		const body = { id: 123, name: "user@test.com" };
		const response = new Response("error!", { status: 400 });
		const error = await unwrap<typeof body>(response);
		expect(error).toBeInstanceOf(Error);
		if (error instanceof Error) {
			expect(error.message).toEqual("error!");
		} else {
			throw new Error("Expected error to be instance of Error");
		}
	});
});
