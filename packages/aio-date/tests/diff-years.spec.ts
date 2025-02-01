import { describe, it, expect } from "vitest";

import { diffYears } from "../src/diff-years";

describe("diffYears", () => {
	it("should return 1 when `from` is 2024-12-31 23:59:59 and `to` is 2025-01-01 00:00:00", () => {
		const from = new Date("2024-12-31 23:59:59");
		const to = new Date("2025-01-01 00:00:00");
		expect(diffYears(from, to)).toBe(1);
		expect(from).toEqual(new Date("2024-12-31 23:59:59"));
		expect(to).toEqual(new Date("2025-01-01 00:00:00"));
	});

	it("should return 0 when `from` is 2024-01-15 00:00:01 and `to` is 2025-01-15 00:00:00 and `truncate` is false", () => {
		const from = new Date("2024-01-15 00:00:01");
		const to = new Date("2025-01-15 00:00:00");
		expect(diffYears(from, to, false)).toBe(0);
		expect(from).toEqual(new Date("2024-01-15 00:00:01"));
		expect(to).toEqual(new Date("2025-01-15 00:00:00"));
	});

	it("should return 1 when `from` is 2024-01-15 00:00:00 and `to` is 2025-01-15 00:00:00 and `truncate` is false", () => {
		const from = new Date("2024-01-15 00:00:00");
		const to = new Date("2025-01-15 00:00:00");
		expect(diffYears(from, to, false)).toBe(1);
		expect(from).toEqual(new Date("2024-01-15 00:00:00"));
		expect(to).toEqual(new Date("2025-01-15 00:00:00"));
	});

	it("should return 4 when `from` is 2021-01-15 00:00:00 and `to` is 2025-02-01 00:00:00", () => {
		const from = new Date("2021-01-15 00:00:00");
		const to = new Date("2025-02-01 00:00:00");
		expect(diffYears(from, to)).toBe(4);
		expect(from).toEqual(new Date("2021-01-15 00:00:00"));
		expect(to).toEqual(new Date("2025-02-01 00:00:00"));
	});

	it("should return -1 when `from` is 2025-01-01 00:00:00 and `to` is 2024-12-31 23:59:59", () => {
		const from = new Date("2025-01-01 00:00:00");
		const to = new Date("2024-12-31 23:59:59");
		expect(diffYears(from, to)).toBe(-1);
		expect(from).toEqual(new Date("2025-01-01 00:00:00"));
		expect(to).toEqual(new Date("2024-12-31 23:59:59"));
	});

	it("should return 0 when `from` is 2025-01-15 00:00:00 and `to` is 2024-01-15 00:00:01 and `truncate` is false", () => {
		const from = new Date("2025-01-15 00:00:00");
		const to = new Date("2024-01-15 00:00:01");
		expect(diffYears(from, to, false)).toBe(0);
		expect(from).toEqual(new Date("2025-01-15 00:00:00"));
		expect(to).toEqual(new Date("2024-01-15 00:00:01"));
	});

	it("should return -1 when `from` is 2025-01-15 00:00:00 and `to` is 2024-01-15 00:00:00 and `truncate` is false", () => {
		const from = new Date("2025-01-15 00:00:00");
		const to = new Date("2024-01-15 00:00:00");
		expect(diffYears(from, to, false)).toBe(-1);
		expect(from).toEqual(new Date("2025-01-15 00:00:00"));
		expect(to).toEqual(new Date("2024-01-15 00:00:00"));
	});

	it("should return -4 when `from` is 2025-02-01 00:00:00 and `to` is 2021-01-15 00:00:00", () => {
		const from = new Date("2025-02-01 00:00:00");
		const to = new Date("2021-01-15 00:00:00");
		expect(diffYears(from, to)).toBe(-4);
		expect(from).toEqual(new Date("2025-02-01 00:00:00"));
		expect(to).toEqual(new Date("2021-01-15 00:00:00"));
	});
});
