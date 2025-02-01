import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import type { MockInstance } from "vitest";

import { get } from "../src/get";

describe("get", () => {
	let mockedFetch: MockInstance;
	const mockedResponse = new Response("test", { status: 200 });
	beforeEach(async () => {
		mockedFetch = vi
			.spyOn(global, "fetch")
			.mockImplementation(async () => mockedResponse);
	});
	afterEach(() => {
		vi.restoreAllMocks();
	});

	it("should send expected GET request", async () => {
		const response = await get("http://example.com");
		expect(response.status).toEqual(200);
		const url = mockedFetch.mock.calls[0][0];
		expect(url).toEqual("http://example.com");
		const method = mockedFetch.mock.calls[0][1]?.method;
		expect(method).toEqual("GET");
	});

	it("should send expected GET request with query", async () => {
		const option = { query: { id: "test123", name: "user@test.com" } };
		const response = await get("http://example.com", option);
		expect(response.status).toEqual(200);
		const url = mockedFetch.mock.calls[0][0];
		expect(url).toEqual("http://example.com?id=test123&name=user%40test.com");
	});

	it("should send expected GET request with header", async () => {
		const option = { header: { Origin: "http://localhost:3000" } };
		const response = await get("http://example.com", option);
		expect(response.status).toEqual(200);
		const origin = mockedFetch.mock.calls[0][1].headers?.get("Origin");
		expect(origin).toEqual("http://localhost:3000");
	});
});
