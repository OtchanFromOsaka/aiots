import { describe, it, expect } from "vitest";
import { email } from "../src/email";

describe("email", () => {
	it("should return true for valid email addresses", () => {
		expect(email("test@example.com")).toBe(true);
	});

	it("should return false for invalid email addresses", () => {
		expect(email("invalid-email")).toBe(false);
	});

	it("should return false for email addresses without domain", () => {
		expect(email("test@")).toBe(false);
	});
});
