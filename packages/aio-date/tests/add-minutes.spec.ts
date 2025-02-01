import { describe, it, expect } from "vitest";

import { addMinutes } from "../src/add-minutes";

describe("addMinutes", () => {
	it("should add minutes correctly", () => {
		const date = new Date("2025-01-01 12:34:56.789");
		const result = addMinutes(date, 5);
		expect(result).toEqual(new Date("2025-01-01 12:39:56.789"));
		expect(date).toEqual(new Date("2025-01-01 12:34:56.789"));
	});

	it("should subtract minutes correctly", () => {
		const date = new Date("2025-01-01 12:34:56.789");
		const result = addMinutes(date, -5);
		expect(result).toEqual(new Date("2025-01-01 12:29:56.789"));
		expect(date).toEqual(new Date("2025-01-01 12:34:56.789"));
	});

	it("should add minutes correctly even across hours", () => {
		const date = new Date("2025-01-01 12:34:56.789");
		const result = addMinutes(date, 27);
		expect(result).toEqual(new Date("2025-01-01 13:01:56.789"));
		expect(date).toEqual(new Date("2025-01-01 12:34:56.789"));
	});

	it("should subtract minutes correctly even across hours", () => {
		const date = new Date("2025-01-01 12:34:56.789");
		const result = addMinutes(date, -35);
		expect(result).toEqual(new Date("2025-01-01 11:59:56.789"));
		expect(date).toEqual(new Date("2025-01-01 12:34:56.789"));
	});

	it("should throw an error if offset is not an integer", () => {
		const date = new Date("2025-01-01 12:34:56.789");
		expect(() => addMinutes(date, 1.5)).toThrowError(
			"offset must be an integer",
		);
	});
});
