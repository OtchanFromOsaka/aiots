import { describe, it, expect } from "vitest";

import { unwrapText } from "../src/unwrap-text";

describe("unwrapText", () => {
	it("should return text data if response is ok", async () => {
		const body = "Hello, World!";
		const response = new Response(body, { status: 200 });
		const data = await unwrapText(response);
		expect(data).toEqual(body);
	});

	it("should return error if response is not ok", async () => {
		const body = "error!";
		const response = new Response(body, { status: 400 });
		const error = await unwrapText(response);
		expect(error).toBeInstanceOf(Error);
		if (error instanceof Error) {
			expect(error.message).toEqual(body);
		} else {
			throw new Error("Expected error to be instance of Error");
		}
	});
});
