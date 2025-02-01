import { describe, it, expect } from "vitest";

import { diffHours } from "../src/diff-hours";

describe("diffHours", () => {
	it("should return 0 for same hour with different minutes", () => {
		const from = new Date("2025-01-01 00:00:00");
		const to = new Date("2025-01-01 00:59:59");
		expect(diffHours(from, to)).toBe(0);
		expect(from).toEqual(new Date("2025-01-01 00:00:00"));
		expect(to).toEqual(new Date("2025-01-01 00:59:59"));
	});

	it("should return 1 for consecutive hours", () => {
		const from = new Date("2025-01-01 00:00:00");
		const to = new Date("2025-01-01 01:00:00");
		expect(diffHours(from, to)).toBe(1);
		expect(from).toEqual(new Date("2025-01-01 00:00:00"));
		expect(to).toEqual(new Date("2025-01-01 01:00:00"));
	});

	it("should return 1 for consecutive hours with different minutes", () => {
		const from = new Date("2025-01-01 00:59:59");
		const to = new Date("2025-01-01 01:00:00");
		expect(diffHours(from, to)).toBe(1);
		expect(from).toEqual(new Date("2025-01-01 00:59:59"));
		expect(to).toEqual(new Date("2025-01-01 01:00:00"));
	});

	it("should return 24 for a range of 24 hours", () => {
		const from = new Date("2025-01-01 00:00:00");
		const to = new Date("2025-01-02 00:00:00");
		expect(diffHours(from, to)).toBe(24);
		expect(from).toEqual(new Date("2025-01-01 00:00:00"));
		expect(to).toEqual(new Date("2025-01-02 00:00:00"));
	});

	it("should return 0 when 'from' is later on the same hour", () => {
		const from = new Date("2025-01-01 00:00:59");
		const to = new Date("2025-01-01 00:00:00");
		expect(diffHours(from, to)).toBe(0);
		expect(from).toEqual(new Date("2025-01-01 00:00:59"));
		expect(to).toEqual(new Date("2025-01-01 00:00:00"));
	});

	it("should return -1 when 'from' is the hour after 'to'", () => {
		const from = new Date("2025-01-01 01:00:00");
		const to = new Date("2025-01-01 00:00:00");
		expect(diffHours(from, to)).toBe(-1);
		expect(from).toEqual(new Date("2025-01-01 01:00:00"));
		expect(to).toEqual(new Date("2025-01-01 00:00:00"));
	});

	it("should return -1 when 'from' is the hour after 'to' with different minutes", () => {
		const from = new Date("2025-01-01 01:00:00");
		const to = new Date("2025-01-01 00:59:59");
		expect(diffHours(from, to)).toBe(-1);
		expect(from).toEqual(new Date("2025-01-01 01:00:00"));
		expect(to).toEqual(new Date("2025-01-01 00:59:59"));
	});

	it("should return -24 when 'from' is 24 hours after 'to'", () => {
		const from = new Date("2025-01-02 00:00:00");
		const to = new Date("2025-01-01 00:00:00");
		expect(diffHours(from, to)).toBe(-24);
		expect(from).toEqual(new Date("2025-01-02 00:00:00"));
		expect(to).toEqual(new Date("2025-01-01 00:00:00"));
	});
	it("should return 0 for same hour with different minutes and not to be truncated", () => {
		const from = new Date("2025-01-01 00:00:00");
		const to = new Date("2025-01-01 00:59:59");
		expect(diffHours(from, to, false)).toBe(0);
		expect(from).toEqual(new Date("2025-01-01 00:00:00"));
		expect(to).toEqual(new Date("2025-01-01 00:59:59"));
	});

	it("should return 1 for consecutive hours with not to be truncated", () => {
		const from = new Date("2025-01-01 00:00:00");
		const to = new Date("2025-01-01 01:00:00");
		expect(diffHours(from, to, false)).toBe(1);
		expect(from).toEqual(new Date("2025-01-01 00:00:00"));
		expect(to).toEqual(new Date("2025-01-01 01:00:00"));
	});

	it("should return 1 for consecutive hours with different minutes and not to be truncated", () => {
		const from = new Date("2025-01-01 00:59:59");
		const to = new Date("2025-01-01 01:00:00");
		expect(diffHours(from, to, false)).toBe(0);
		expect(from).toEqual(new Date("2025-01-01 00:59:59"));
		expect(to).toEqual(new Date("2025-01-01 01:00:00"));
	});

	it("should return 24 for a range of 24 hours with not to be truncated", () => {
		const from = new Date("2025-01-01 00:00:00");
		const to = new Date("2025-01-02 00:00:00");
		expect(diffHours(from, to, false)).toBe(24);
		expect(from).toEqual(new Date("2025-01-01 00:00:00"));
		expect(to).toEqual(new Date("2025-01-02 00:00:00"));
	});

	it("should return 0 when 'from' is later on the same hour with not to be truncated", () => {
		const from = new Date("2025-01-01 00:00:59");
		const to = new Date("2025-01-01 00:00:00");
		expect(diffHours(from, to, false)).toBe(0);
		expect(from).toEqual(new Date("2025-01-01 00:00:59"));
		expect(to).toEqual(new Date("2025-01-01 00:00:00"));
	});

	it("should return -1 when 'from' is the hour after 'to' with not to be truncated", () => {
		const from = new Date("2025-01-01 01:00:00");
		const to = new Date("2025-01-01 00:00:00");
		expect(diffHours(from, to, false)).toBe(-1);
		expect(from).toEqual(new Date("2025-01-01 01:00:00"));
		expect(to).toEqual(new Date("2025-01-01 00:00:00"));
	});

	it("should return -1 when 'from' is the hour after 'to' with different minutes and not to be truncated", () => {
		const from = new Date("2025-01-01 01:00:00");
		const to = new Date("2025-01-01 00:59:59");
		expect(diffHours(from, to, false)).toBe(0);
		expect(from).toEqual(new Date("2025-01-01 01:00:00"));
		expect(to).toEqual(new Date("2025-01-01 00:59:59"));
	});

	it("should return -24 when 'from' is 24 hours after 'to' with not to be truncated", () => {
		const from = new Date("2025-01-02 00:00:00");
		const to = new Date("2025-01-01 00:00:00");
		expect(diffHours(from, to, false)).toBe(-24);
		expect(from).toEqual(new Date("2025-01-02 00:00:00"));
		expect(to).toEqual(new Date("2025-01-01 00:00:00"));
	});
});
