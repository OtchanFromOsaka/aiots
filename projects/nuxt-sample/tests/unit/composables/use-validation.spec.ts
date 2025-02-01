import { describe, it, expect } from "vitest";
import { useValidation } from "@/composables/use-validation";

describe("useValidation", () => {
	const validation = useValidation();

	describe("required", () => {
		it("should return true for non-empty strings", () => {
			expect(validation.required("hello")).toBe(true);
		});

		it("should return false for empty strings", () => {
			expect(validation.required("")).toBe(false);
		});

		it("should return false for strings with only spaces", () => {
			expect(validation.required("   ")).toBe(false);
		});
	});

	describe("email", () => {
		it("should return true for valid email addresses", () => {
			expect(validation.email("test@example.com")).toBe(true);
		});

		it("should return false for invalid email addresses", () => {
			expect(validation.email("invalid-email")).toBe(false);
		});

		it("should return false for email addresses without domain", () => {
			expect(validation.email("test@")).toBe(false);
		});
	});

	describe("integer", () => {
		it("should return true for valid integers", () => {
			expect(validation.integer("123")).toBe(true);
		});

		it("should return true for negative integers", () => {
			expect(validation.integer("-123")).toBe(true);
		});

		it("should return false for non-integer values", () => {
			expect(validation.integer("123.45")).toBe(false);
		});

		it("should return false for strings with letters", () => {
			expect(validation.integer("123abc")).toBe(false);
		});
	});
});
