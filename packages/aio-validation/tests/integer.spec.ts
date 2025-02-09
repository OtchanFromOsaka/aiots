import { describe, it, expect } from "vitest";
import { integer } from "../src/integer";

describe("integer", () => {
	it("should return true for valid integers", () => {
		expect(integer("123")).toBe(true);
	});

	it("should return true for negative integers", () => {
		expect(integer("-123")).toBe(true);
	});

	it("should return false for non-integer values", () => {
		expect(integer("123.45")).toBe(false);
	});

	it("should return false for strings with letters", () => {
		expect(integer("123abc")).toBe(false);
	});
});
