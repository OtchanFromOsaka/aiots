import { describe, it, expect } from "vitest";

import { diffMinutes } from "../src/diff-minutes";

describe("diffMinutes", () => {
	it("should return 0 for same minute with different seconds", () => {
		const from = new Date("2025-01-01 00:00:00");
		const to = new Date("2025-01-01 00:00:59");
		expect(diffMinutes(from, to)).toBe(0);
		expect(from).toEqual(new Date("2025-01-01 00:00:00"));
		expect(to).toEqual(new Date("2025-01-01 00:00:59"));
	});

	it("should return 1 for consecutive minutes", () => {
		const from = new Date("2025-01-01 00:00:00");
		const to = new Date("2025-01-01 00:01:00");
		expect(diffMinutes(from, to)).toBe(1);
		expect(from).toEqual(new Date("2025-01-01 00:00:00"));
		expect(to).toEqual(new Date("2025-01-01 00:01:00"));
	});

	it("should return 1 for consecutive minutes with different seconds", () => {
		const from = new Date("2025-01-01 00:00:59");
		const to = new Date("2025-01-01 00:01:00");
		expect(diffMinutes(from, to)).toBe(1);
		expect(from).toEqual(new Date("2025-01-01 00:00:59"));
		expect(to).toEqual(new Date("2025-01-01 00:01:00"));
	});

	it("should return 1440 for a range of 1440 minutes", () => {
		const from = new Date("2025-01-01 00:00:00");
		const to = new Date("2025-01-02 00:00:00");
		expect(diffMinutes(from, to)).toBe(1440);
		expect(from).toEqual(new Date("2025-01-01 00:00:00"));
		expect(to).toEqual(new Date("2025-01-02 00:00:00"));
	});

	it("should return 0 when 'from' is later on the same minute", () => {
		const from = new Date("2025-01-01 00:00:59");
		const to = new Date("2025-01-01 00:00:00");
		expect(diffMinutes(from, to)).toBe(0);
		expect(from).toEqual(new Date("2025-01-01 00:00:59"));
		expect(to).toEqual(new Date("2025-01-01 00:00:00"));
	});

	it("should return -1 when 'from' is the minute after 'to'", () => {
		const from = new Date("2025-01-01 00:01:00");
		const to = new Date("2025-01-01 00:00:00");
		expect(diffMinutes(from, to)).toBe(-1);
		expect(from).toEqual(new Date("2025-01-01 00:01:00"));
		expect(to).toEqual(new Date("2025-01-01 00:00:00"));
	});

	it("should return -1 when 'from' is the minute after 'to' with different seconds", () => {
		const from = new Date("2025-01-02 00:00:00");
		const to = new Date("2025-01-01 23:59:59");
		expect(diffMinutes(from, to)).toBe(-1);
		expect(from).toEqual(new Date("2025-01-02 00:00:00"));
		expect(to).toEqual(new Date("2025-01-01 23:59:59"));
	});

	it("should return -1440 when 'from' is 1440 minutes after 'to'", () => {
		const from = new Date("2025-01-02 00:00:00");
		const to = new Date("2025-01-01 00:00:00");
		expect(diffMinutes(from, to)).toBe(-1440);
		expect(from).toEqual(new Date("2025-01-02 00:00:00"));
		expect(to).toEqual(new Date("2025-01-01 00:00:00"));
	});
	it("should return 0 for same minute with different seconds and not to be truncated", () => {
		const from = new Date("2025-01-01 00:00:00");
		const to = new Date("2025-01-01 00:00:59");
		expect(diffMinutes(from, to, false)).toBe(0);
		expect(from).toEqual(new Date("2025-01-01 00:00:00"));
		expect(to).toEqual(new Date("2025-01-01 00:00:59"));
	});

	it("should return 1 for consecutive minutes with not to be truncated", () => {
		const from = new Date("2025-01-01 00:00:00");
		const to = new Date("2025-01-01 00:01:00");
		expect(diffMinutes(from, to, false)).toBe(1);
		expect(from).toEqual(new Date("2025-01-01 00:00:00"));
		expect(to).toEqual(new Date("2025-01-01 00:01:00"));
	});

	it("should return 1 for consecutive minutes with different seconds and not to be truncated", () => {
		const from = new Date("2025-01-01 00:00:59");
		const to = new Date("2025-01-01 00:01:00");
		expect(diffMinutes(from, to, false)).toBe(0);
		expect(from).toEqual(new Date("2025-01-01 00:00:59"));
		expect(to).toEqual(new Date("2025-01-01 00:01:00"));
	});

	it("should return 1440 for a range of 1440 minutes with not to be truncated", () => {
		const from = new Date("2025-01-01 00:00:00");
		const to = new Date("2025-01-02 00:00:00");
		expect(diffMinutes(from, to, false)).toBe(1440);
		expect(from).toEqual(new Date("2025-01-01 00:00:00"));
		expect(to).toEqual(new Date("2025-01-02 00:00:00"));
	});

	it("should return 0 when 'from' is later on the same minute with not to be truncated", () => {
		const from = new Date("2025-01-01 00:00:59");
		const to = new Date("2025-01-01 00:00:00");
		expect(diffMinutes(from, to, false)).toBe(0);
		expect(from).toEqual(new Date("2025-01-01 00:00:59"));
		expect(to).toEqual(new Date("2025-01-01 00:00:00"));
	});

	it("should return -1 when 'from' is the minute after 'to' with not to be truncated", () => {
		const from = new Date("2025-01-01 00:01:00");
		const to = new Date("2025-01-01 00:00:00");
		expect(diffMinutes(from, to, false)).toBe(-1);
		expect(from).toEqual(new Date("2025-01-01 00:01:00"));
		expect(to).toEqual(new Date("2025-01-01 00:00:00"));
	});

	it("should return -1 when 'from' is the minute after 'to' with different seconds and not to be truncated", () => {
		const from = new Date("2025-01-02 00:00:00");
		const to = new Date("2025-01-01 23:59:59");
		expect(diffMinutes(from, to, false)).toBe(0);
		expect(from).toEqual(new Date("2025-01-02 00:00:00"));
		expect(to).toEqual(new Date("2025-01-01 23:59:59"));
	});

	it("should return -1440 when 'from' is 1440 minutes after 'to' with not to be truncated", () => {
		const from = new Date("2025-01-02 00:00:00");
		const to = new Date("2025-01-01 00:00:00");
		expect(diffMinutes(from, to, false)).toBe(-1440);
		expect(from).toEqual(new Date("2025-01-02 00:00:00"));
		expect(to).toEqual(new Date("2025-01-01 00:00:00"));
	});
});
