import { describe, it, expect } from "vitest";
import { required } from "../src/required";

describe("required", () => {
	it("should return true for non-empty strings", () => {
		expect(required("hello")).toBe(true);
	});

	it("should return false for empty strings", () => {
		expect(required("")).toBe(false);
	});

	it("should return false for strings with only spaces", () => {
		expect(required("   ")).toBe(false);
	});
});
