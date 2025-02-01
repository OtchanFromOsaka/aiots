import { describe, it, expect } from "vitest";

import { addMilliseconds } from "../src/add-milliseconds";

describe("addMilliseconds", () => {
	it("should add milliseconds correctly", () => {
		const date = new Date("2025-01-01 12:34:56.789");
		const result = addMilliseconds(date, 123);
		expect(result).toEqual(new Date("2025-01-01 12:34:56.912"));
		expect(date).toEqual(new Date("2025-01-01 12:34:56.789"));
	});

	it("should subtract milliseconds correctly", () => {
		const date = new Date("2025-01-01 12:34:56.789");
		const result = addMilliseconds(date, -123);
		expect(result).toEqual(new Date("2025-01-01 12:34:56.666"));
		expect(date).toEqual(new Date("2025-01-01 12:34:56.789"));
	});

	it("should add days correctly even across months", () => {
		const date = new Date("2025-01-01 12:34:56.789");
		const result = addMilliseconds(date, 1234);
		expect(result).toEqual(new Date("2025-01-01 12:34:58.023"));
		expect(date).toEqual(new Date("2025-01-01 12:34:56.789"));
	});

	it("should subtract days correctly even across months", () => {
		const date = new Date("2025-01-01 12:34:56.789");
		const result = addMilliseconds(date, -1234);
		expect(result).toEqual(new Date("2025-01-01 12:34:55.555"));
		expect(date).toEqual(new Date("2025-01-01 12:34:56.789"));
	});

	it("should throw an error if offset is not an integer", () => {
		const date = new Date("2025-01-01 12:34:56.789");
		expect(() => addMilliseconds(date, 1.5)).toThrowError(
			"offset must be an integer",
		);
	});
});
