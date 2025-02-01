import { describe, it, expect } from "vitest";

import { addYears } from "../src/add-years";

describe("addYears", () => {
	it("should add years correctly", () => {
		const date = new Date("2025-01-01 12:34:56.789");
		const result = addYears(date, 3);
		expect(result).toEqual(new Date("2028-01-01 12:34:56.789"));
		expect(date).toEqual(new Date("2025-01-01 12:34:56.789"));
	});

	it("should subtract years correctly", () => {
		const date = new Date("2025-01-01 12:34:56.789");
		const result = addYears(date, -3);
		expect(result).toEqual(new Date("2022-01-01 12:34:56.789"));
		expect(date).toEqual(new Date("2025-01-01 12:34:56.789"));
	});

	it("should throw an error if offset is not an integer", () => {
		const date = new Date("2025-01-01 12:34:56.789");
		expect(() => addYears(date, 1.5)).toThrowError("offset must be an integer");
	});
});
