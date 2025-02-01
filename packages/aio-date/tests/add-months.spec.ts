import { describe, it, expect } from "vitest";

import { addMonths } from "../src/add-months";

describe("addMonths", () => {
	it("should add months correctly", () => {
		const date = new Date("2025-06-01 12:34:56.789");
		const result = addMonths(date, 5);
		expect(result).toEqual(new Date("2025-11-01 12:34:56.789"));
		expect(date).toEqual(new Date("2025-06-01 12:34:56.789"));
	});

	it("should subtract months correctly", () => {
		const date = new Date("2025-06-01 12:34:56.789");
		const result = addMonths(date, -5);
		expect(result).toEqual(new Date("2025-01-01 12:34:56.789"));
		expect(date).toEqual(new Date("2025-06-01 12:34:56.789"));
	});

	it("should add months correctly even across years", () => {
		const date = new Date("2025-06-01 12:34:56.789");
		const result = addMonths(date, 7);
		expect(result).toEqual(new Date("2026-01-01 12:34:56.789"));
		expect(date).toEqual(new Date("2025-06-01 12:34:56.789"));
	});

	it("should subtract months correctly even across years", () => {
		const date = new Date("2025-06-01 12:34:56.789");
		const result = addMonths(date, -7);
		expect(result).toEqual(new Date("2024-11-01 12:34:56.789"));
		expect(date).toEqual(new Date("2025-06-01 12:34:56.789"));
	});

	it("should throw an error if offset is not an integer", () => {
		const date = new Date("2025-01-01 12:34:56.789");
		expect(() => addMonths(date, 1.5)).toThrowError(
			"offset must be an integer",
		);
	});
});
