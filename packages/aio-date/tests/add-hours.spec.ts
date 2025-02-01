import { describe, it, expect } from "vitest";

import { addHours } from "../src/add-hours";

describe("addHours", () => {
	it("should add hours correctly", () => {
		const date = new Date("2025-01-05 12:34:56.789");
		const result = addHours(date, 3);
		expect(result).toEqual(new Date("2025-01-05 15:34:56.789"));
		expect(date).toEqual(new Date("2025-01-05 12:34:56.789"));
	});

	it("should subtract hours correctly", () => {
		const date = new Date("2025-01-05 12:34:56.789");
		const result = addHours(date, -3);
		expect(result).toEqual(new Date("2025-01-05 09:34:56.789"));
		expect(date).toEqual(new Date("2025-01-05 12:34:56.789"));
	});

	it("should add hours correctly even across days", () => {
		const date = new Date("2025-01-05 12:34:56.789");
		const result = addHours(date, 13);
		expect(result).toEqual(new Date("2025-01-06 01:34:56.789"));
		expect(date).toEqual(new Date("2025-01-05 12:34:56.789"));
	});

	it("should subtract hours correctly even across days", () => {
		const date = new Date("2025-01-05 12:34:56.789");
		const result = addHours(date, -14);
		expect(result).toEqual(new Date("2025-01-04 22:34:56.789"));
		expect(date).toEqual(new Date("2025-01-05 12:34:56.789"));
	});

	it("should throw an error if offset is not an integer", () => {
		const date = new Date("2025-01-05 12:34:56.789");
		expect(() => addHours(date, 1.5)).toThrowError("offset must be an integer");
	});
});
