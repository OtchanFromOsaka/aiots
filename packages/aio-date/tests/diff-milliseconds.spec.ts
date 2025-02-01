import { describe, it, expect } from "vitest";

import { diffMilliseconds } from "../src/diff-milliseconds";

describe("diffMilliseconds", () => {
	it("should return 0 for same millisecond", () => {
		const from = new Date("2025-01-01 00:00:00.000");
		const to = new Date("2025-01-01 00:00:00.000");
		expect(diffMilliseconds(from, to)).toBe(0);
		expect(from).toEqual(new Date("2025-01-01 00:00:00.000"));
		expect(to).toEqual(new Date("2025-01-01 00:00:00.000"));
	});

	it("should return 1 for consecutive milliseconds", () => {
		const from = new Date("2025-01-01 00:00:00.000");
		const to = new Date("2025-01-01 00:00:00.001");
		expect(diffMilliseconds(from, to)).toBe(1);
		expect(from).toEqual(new Date("2025-01-01 00:00:00.000"));
		expect(to).toEqual(new Date("2025-01-01 00:00:00.001"));
	});

	it("should return 1 for consecutive milliseconds with different seconds", () => {
		const from = new Date("2025-01-01 00:00:00.999");
		const to = new Date("2025-01-01 00:00:01.000");
		expect(diffMilliseconds(from, to)).toBe(1);
		expect(from).toEqual(new Date("2025-01-01 00:00:00.999"));
		expect(to).toEqual(new Date("2025-01-01 00:00:01.000"));
	});

	it("should return 1000 for a range of 1000 milliseconds", () => {
		const from = new Date("2025-01-01 00:00:00.000");
		const to = new Date("2025-01-01 00:00:01.000");
		expect(diffMilliseconds(from, to)).toBe(1000);
		expect(from).toEqual(new Date("2025-01-01 00:00:00.000"));
		expect(to).toEqual(new Date("2025-01-01 00:00:01.000"));
	});

	it("should return -1 when 'from' is the millisecond after 'to'", () => {
		const from = new Date("2025-01-01 00:00:00.001");
		const to = new Date("2025-01-01 00:00:00.000");
		expect(diffMilliseconds(from, to)).toBe(-1);
		expect(from).toEqual(new Date("2025-01-01 00:00:00.001"));
		expect(to).toEqual(new Date("2025-01-01 00:00:00.000"));
	});

	it("should return -1 when 'from' is the millisecond after 'to' with different seconds", () => {
		const from = new Date("2025-01-01 00:00:01.000");
		const to = new Date("2025-01-01 00:00:00.999");
		expect(diffMilliseconds(from, to)).toBe(-1);
		expect(from).toEqual(new Date("2025-01-01 00:00:01.000"));
		expect(to).toEqual(new Date("2025-01-01 00:00:00.999"));
	});

	it("should return -1000 for a range of 1000 milliseconds in reverse", () => {
		const from = new Date("2025-01-01 00:00:01.000");
		const to = new Date("2025-01-01 00:00:00.000");
		expect(diffMilliseconds(from, to)).toBe(-1000);
		expect(from).toEqual(new Date("2025-01-01 00:00:01.000"));
		expect(to).toEqual(new Date("2025-01-01 00:00:00.000"));
	});
});
