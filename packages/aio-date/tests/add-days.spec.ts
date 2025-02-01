import { describe, it, expect } from "vitest";

import { addDays } from "../src/add-days";

describe("addDays", () => {
	it("should add days correctly", () => {
		const date = new Date("2025-01-05 12:34:56.789");
		const result = addDays(date, 3);
		expect(result).toEqual(new Date("2025-01-08 12:34:56.789"));
		expect(date).toEqual(new Date("2025-01-05 12:34:56.789"));
	});

	it("should subtract days correctly", () => {
		const date = new Date("2025-01-05 12:34:56.789");
		const result = addDays(date, -3);
		expect(result).toEqual(new Date("2025-01-02 12:34:56.789"));
		expect(date).toEqual(new Date("2025-01-05 12:34:56.789"));
	});

	it("should add days correctly even across months", () => {
		const date = new Date("2025-01-05 12:34:56.789");
		const result = addDays(date, 27);
		expect(result).toEqual(new Date("2025-02-01 12:34:56.789"));
		expect(date).toEqual(new Date("2025-01-05 12:34:56.789"));
	});

	it("should subtract days correctly even across months", () => {
		const date = new Date("2025-01-05 12:34:56.789");
		const result = addDays(date, -5);
		expect(result).toEqual(new Date("2024-12-31 12:34:56.789"));
		expect(date).toEqual(new Date("2025-01-05 12:34:56.789"));
	});

	it("should throw an error if offset is not an integer", () => {
		const date = new Date("2025-01-05 12:34:56.789");
		expect(() => addDays(date, 1.5)).toThrowError("offset must be an integer");
	});
});
