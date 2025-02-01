import { describe, it, expect } from "vitest";

import { diffDays } from "../src/diff-days";

describe("diffDays", () => {
	it("should return 0 for same day with different times", () => {
		const from = new Date("2025-01-01 00:00:00");
		const to = new Date("2025-01-01 23:59:59");
		expect(diffDays(from, to)).toBe(0);
		expect(from).toEqual(new Date("2025-01-01 00:00:00"));
		expect(to).toEqual(new Date("2025-01-01 23:59:59"));
	});

	it("should return 1 for consecutive days", () => {
		const from = new Date("2025-01-01 00:00:00");
		const to = new Date("2025-01-02 00:00:00");
		expect(diffDays(from, to)).toBe(1);
		expect(from).toEqual(new Date("2025-01-01 00:00:00"));
		expect(to).toEqual(new Date("2025-01-02 00:00:00"));
	});

	it("should return 1 for consecutive days with different times", () => {
		const from = new Date("2025-01-01 23:59:59");
		const to = new Date("2025-01-02 00:00:00");
		expect(diffDays(from, to)).toBe(1);
		expect(from).toEqual(new Date("2025-01-01 23:59:59"));
		expect(to).toEqual(new Date("2025-01-02 00:00:00"));
	});

	it("should return 4 for a range of 4 days", () => {
		const from = new Date("2025-01-01 00:00:00");
		const to = new Date("2025-01-05 00:00:00");
		expect(diffDays(from, to)).toBe(4);
		expect(from).toEqual(new Date("2025-01-01 00:00:00"));
		expect(to).toEqual(new Date("2025-01-05 00:00:00"));
	});

	it("should return 0 when 'from' is later on the same day", () => {
		const from = new Date("2025-01-01 23:59:59");
		const to = new Date("2025-01-01 00:00:00");
		expect(diffDays(from, to)).toBe(0);
		expect(from).toEqual(new Date("2025-01-01 23:59:59"));
		expect(to).toEqual(new Date("2025-01-01 00:00:00"));
	});

	it("should return -1 when 'from' is the day after 'to'", () => {
		const from = new Date("2025-01-02 00:00:00");
		const to = new Date("2025-01-01 00:00:00");
		expect(diffDays(from, to)).toBe(-1);
		expect(from).toEqual(new Date("2025-01-02 00:00:00"));
		expect(to).toEqual(new Date("2025-01-01 00:00:00"));
	});

	it("should return -1 when 'from' is the day after 'to' with different times", () => {
		const from = new Date("2025-01-02 00:00:00");
		const to = new Date("2025-01-01 23:59:59");
		expect(diffDays(from, to)).toBe(-1);
		expect(from).toEqual(new Date("2025-01-02 00:00:00"));
		expect(to).toEqual(new Date("2025-01-01 23:59:59"));
	});

	it("should return -4 when 'from' is 4 days after 'to'", () => {
		const from = new Date("2025-01-05 00:00:00");
		const to = new Date("2025-01-01 00:00:00");
		expect(diffDays(from, to)).toBe(-4);
		expect(from).toEqual(new Date("2025-01-05 00:00:00"));
		expect(to).toEqual(new Date("2025-01-01 00:00:00"));
	});

	it("should return 0 for same day with different times and not to be truncated", () => {
		const from = new Date("2025-01-01 00:00:00");
		const to = new Date("2025-01-01 23:59:59");
		expect(diffDays(from, to, false)).toBe(0);
		expect(from).toEqual(new Date("2025-01-01 00:00:00"));
		expect(to).toEqual(new Date("2025-01-01 23:59:59"));
	});

	it("should return 1 for consecutive days with not to be truncated", () => {
		const from = new Date("2025-01-01 00:00:00");
		const to = new Date("2025-01-02 00:00:00");
		expect(diffDays(from, to, false)).toBe(1);
		expect(from).toEqual(new Date("2025-01-01 00:00:00"));
		expect(to).toEqual(new Date("2025-01-02 00:00:00"));
	});

	it("should return 0 for consecutive days with different times and not to be truncated", () => {
		const from = new Date("2025-01-01 23:59:59");
		const to = new Date("2025-01-02 00:00:00");
		expect(diffDays(from, to, false)).toBe(0);
		expect(from).toEqual(new Date("2025-01-01 23:59:59"));
		expect(to).toEqual(new Date("2025-01-02 00:00:00"));
	});

	it("should return 3 for a range of 4 days with not to be truncated", () => {
		const from = new Date("2025-01-01 23:59:59");
		const to = new Date("2025-01-05 00:00:00");
		expect(diffDays(from, to, false)).toBe(3);
		expect(from).toEqual(new Date("2025-01-01 23:59:59"));
		expect(to).toEqual(new Date("2025-01-05 00:00:00"));
	});

	it("should return 0 when 'from' is later on the same day with not to be truncated", () => {
		const from = new Date("2025-01-01 23:59:59");
		const to = new Date("2025-01-01 00:00:00");
		expect(diffDays(from, to, false)).toBe(0);
		expect(from).toEqual(new Date("2025-01-01 23:59:59"));
		expect(to).toEqual(new Date("2025-01-01 00:00:00"));
	});

	it("should return -1 when 'from' is the day after 'to' with not to be truncated", () => {
		const from = new Date("2025-01-02 00:00:00");
		const to = new Date("2025-01-01 00:00:00");
		expect(diffDays(from, to, false)).toBe(-1);
		expect(from).toEqual(new Date("2025-01-02 00:00:00"));
		expect(to).toEqual(new Date("2025-01-01 00:00:00"));
	});

	it("should return 0 when 'from' is the day after 'to' with different times and not to be truncated", () => {
		const from = new Date("2025-01-02 00:00:00");
		const to = new Date("2025-01-01 23:59:59");
		expect(diffDays(from, to, false)).toBe(0);
		expect(from).toEqual(new Date("2025-01-02 00:00:00"));
		expect(to).toEqual(new Date("2025-01-01 23:59:59"));
	});

	it("should return -3 when 'from' is 4 days after 'to' with not to be truncated", () => {
		const from = new Date("2025-01-05 00:00:00");
		const to = new Date("2025-01-01 23:59:59");
		expect(diffDays(from, to, false)).toBe(-3);
		expect(from).toEqual(new Date("2025-01-05 00:00:00"));
		expect(to).toEqual(new Date("2025-01-01 23:59:59"));
	});
});
