import { describe, it, expect } from "vitest";

import { flexibleRound } from "../src/flexible-round";

describe("flexibleRound", () => {
	it("should round to the nearest integer when decimalPlaces is 0", () => {
		expect(flexibleRound(1.5, 0)).toBe(2);
		expect(flexibleRound(1.4, 0)).toBe(1);
	});

	it("should round to the specified decimal place", () => {
		expect(flexibleRound(1.2345, 2)).toBe(1.23);
		expect(flexibleRound(1.2355, 2)).toBe(1.24);
	});

	it("should handle negative decimal places", () => {
		expect(flexibleRound(123.45, -1)).toBe(120);
		expect(flexibleRound(123.45, -2)).toBe(100);
	});

	it("should throw an error if decimalPlaces is not an integer", () => {
		expect(() => flexibleRound(1.2345, 1.5)).toThrow(
			"decimalPlaces must be an integer",
		);
	});

	it("should handle large numbers correctly", () => {
		expect(flexibleRound(123456789.123456, 3)).toBe(123456789.123);
	});

	it("should handle small numbers correctly", () => {
		expect(flexibleRound(0.000123456, 6)).toBe(0.000123);
	});
});
