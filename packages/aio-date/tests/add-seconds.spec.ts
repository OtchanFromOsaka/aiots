import { describe, it, expect } from "vitest";

import { addSeconds } from "../src/add-seconds";

describe("addSeconds", () => {
	it("should add seconds correctly", () => {
		const date = new Date("2025-01-01 12:34:56.789");
		const result = addSeconds(date, 3);
		expect(result).toEqual(new Date("2025-01-01 12:34:59.789"));
		expect(date).toEqual(new Date("2025-01-01 12:34:56.789"));
	});

	it("should subtract seconds correctly", () => {
		const date = new Date("2025-01-01 12:34:56.789");
		const result = addSeconds(date, -3);
		expect(result).toEqual(new Date("2025-01-01 12:34:53.789"));
		expect(date).toEqual(new Date("2025-01-01 12:34:56.789"));
	});

	it("should add seconds correctly even across minutes", () => {
		const date = new Date("2025-01-01 12:34:56.789");
		const result = addSeconds(date, 5);
		expect(result).toEqual(new Date("2025-01-01 12:35:01.789"));
	});

	it("should subtract seconds correctly even across minutes", () => {
		const date = new Date("2025-01-01 12:34:56.789");
		const result = addSeconds(date, -57);
		expect(result).toEqual(new Date("2025-01-01 12:33:59.789"));
	});

	it("should throw an error if offset is not an integer", () => {
		const date = new Date("2025-01-01 12:34:56.789");
		expect(() => addSeconds(date, 1.5)).toThrowError(
			"offset must be an integer",
		);
	});
});
