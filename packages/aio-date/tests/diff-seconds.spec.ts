import { describe, it, expect } from "vitest";

import { diffSeconds } from "../src/diff-seconds";

describe("diffSeconds", () => {
	it("should return 0 for same second with different milliseconds", () => {
		const from = new Date("2025-01-01 00:00:00.000");
		const to = new Date("2025-01-01 00:00:00.999");
		expect(diffSeconds(from, to)).toBe(0);
		expect(from).toEqual(new Date("2025-01-01 00:00:00.000"));
		expect(to).toEqual(new Date("2025-01-01 00:00:00.999"));
	});

	it("should return 1 for consecutive seconds", () => {
		const from = new Date("2025-01-01 00:00:00.000");
		const to = new Date("2025-01-01 00:00:01.000");
		expect(diffSeconds(from, to)).toBe(1);
		expect(from).toEqual(new Date("2025-01-01 00:00:00.000"));
		expect(to).toEqual(new Date("2025-01-01 00:00:01.000"));
	});

	it("should return 1 for consecutive seconds with different milliseconds", () => {
		const from = new Date("2025-01-01 00:00:00.999");
		const to = new Date("2025-01-01 00:00:01.000");
		expect(diffSeconds(from, to)).toBe(1);
		expect(from).toEqual(new Date("2025-01-01 00:00:00.999"));
		expect(to).toEqual(new Date("2025-01-01 00:00:01.000"));
	});

	it("should return 3600 for a range of 3600 seconds", () => {
		const from = new Date("2025-01-01 00:00:00.000");
		const to = new Date("2025-01-01 01:00:00.000");
		expect(diffSeconds(from, to)).toBe(3600);
		expect(from).toEqual(new Date("2025-01-01 00:00:00.000"));
		expect(to).toEqual(new Date("2025-01-01 01:00:00.000"));
	});

	it("should return 0 when 'from' is later on the same second", () => {
		const from = new Date("2025-01-01 00:00:00.999");
		const to = new Date("2025-01-01 00:00:00.000");
		expect(diffSeconds(from, to)).toBe(0);
		expect(from).toEqual(new Date("2025-01-01 00:00:00.999"));
		expect(to).toEqual(new Date("2025-01-01 00:00:00.000"));
	});

	it("should return -1 when 'from' is the second after 'to'", () => {
		const from = new Date("2025-01-01 00:00:01.000");
		const to = new Date("2025-01-01 00:00:00.000");
		expect(diffSeconds(from, to)).toBe(-1);
		expect(from).toEqual(new Date("2025-01-01 00:00:01.000"));
		expect(to).toEqual(new Date("2025-01-01 00:00:00.000"));
	});

	it("should return -1 when 'from' is the second after 'to' with different milliseconds", () => {
		const from = new Date("2025-01-01 00:00:01.000");
		const to = new Date("2025-01-01 00:00:00.999");
		expect(diffSeconds(from, to)).toBe(-1);
		expect(from).toEqual(new Date("2025-01-01 00:00:01.000"));
		expect(to).toEqual(new Date("2025-01-01 00:00:00.999"));
	});

	it("should return -3600 when 'from' is 3600 seconds after 'to'", () => {
		const from = new Date("2025-01-01 01:00:00.000");
		const to = new Date("2025-01-01 00:00:00.000");
		expect(diffSeconds(from, to)).toBe(-3600);
		expect(from).toEqual(new Date("2025-01-01 01:00:00.000"));
		expect(to).toEqual(new Date("2025-01-01 00:00:00.000"));
	});
	it("should return 0 for same second with different milliseconds and not to be truncated", () => {
		const from = new Date("2025-01-01 00:00:00.000");
		const to = new Date("2025-01-01 00:00:00.999");
		expect(diffSeconds(from, to, false)).toBe(0);
		expect(from).toEqual(new Date("2025-01-01 00:00:00.000"));
		expect(to).toEqual(new Date("2025-01-01 00:00:00.999"));
	});

	it("should return 1 for consecutive seconds with not to be truncated", () => {
		const from = new Date("2025-01-01 00:00:00.000");
		const to = new Date("2025-01-01 00:00:01.000");
		expect(diffSeconds(from, to, false)).toBe(1);
		expect(from).toEqual(new Date("2025-01-01 00:00:00.000"));
		expect(to).toEqual(new Date("2025-01-01 00:00:01.000"));
	});

	it("should return 1 for consecutive seconds with different milliseconds and not to be truncated", () => {
		const from = new Date("2025-01-01 00:00:00.999");
		const to = new Date("2025-01-01 00:00:01.000");
		expect(diffSeconds(from, to, false)).toBe(0);
		expect(from).toEqual(new Date("2025-01-01 00:00:00.999"));
		expect(to).toEqual(new Date("2025-01-01 00:00:01.000"));
	});

	it("should return 3600 for a range of 3600 seconds with not to be truncated", () => {
		const from = new Date("2025-01-01 00:00:00.000");
		const to = new Date("2025-01-01 01:00:00.000");
		expect(diffSeconds(from, to, false)).toBe(3600);
		expect(from).toEqual(new Date("2025-01-01 00:00:00.000"));
		expect(to).toEqual(new Date("2025-01-01 01:00:00.000"));
	});

	it("should return 0 when 'from' is later on the same second with not to be truncated", () => {
		const from = new Date("2025-01-01 00:00:00.999");
		const to = new Date("2025-01-01 00:00:00.000");
		expect(diffSeconds(from, to, false)).toBe(0);
		expect(from).toEqual(new Date("2025-01-01 00:00:00.999"));
		expect(to).toEqual(new Date("2025-01-01 00:00:00.000"));
	});

	it("should return -1 when 'from' is the second after 'to' with not to be truncated", () => {
		const from = new Date("2025-01-01 00:00:01.000");
		const to = new Date("2025-01-01 00:00:00.000");
		expect(diffSeconds(from, to, false)).toBe(-1);
		expect(from).toEqual(new Date("2025-01-01 00:00:01.000"));
		expect(to).toEqual(new Date("2025-01-01 00:00:00.000"));
	});

	it("should return -1 when 'from' is the second after 'to' with different milliseconds and not to be truncated", () => {
		const from = new Date("2025-01-01 00:00:01.000");
		const to = new Date("2025-01-01 00:00:00.999");
		expect(diffSeconds(from, to, false)).toBe(0);
		expect(from).toEqual(new Date("2025-01-01 00:00:01.000"));
		expect(to).toEqual(new Date("2025-01-01 00:00:00.999"));
	});

	it("should return -3600 when 'from' is 3600 seconds after 'to' with not to be truncated", () => {
		const from = new Date("2025-01-01 01:00:00.000");
		const to = new Date("2025-01-01 00:00:00.000");
		expect(diffSeconds(from, to, false)).toBe(-3600);
		expect(from).toEqual(new Date("2025-01-01 01:00:00.000"));
		expect(to).toEqual(new Date("2025-01-01 00:00:00.000"));
	});
});
