import { describe, it, expect } from "vitest";

import { getLastDay } from "../src/get-last-day";

describe("getLastDay", () => {
	it("should return 31 for January", () => {
		const date = new Date("2025-01-01");
		expect(getLastDay(date)).toBe(31);
		expect(date).toEqual(new Date("2025-01-01"));
	});

	it("should return 28 for February in a non-leap year", () => {
		const date = new Date("2025-02-01");
		expect(getLastDay(date)).toBe(28);
		expect(date).toEqual(new Date("2025-02-01"));
	});

	it("should return 29 for February in a leap year", () => {
		const date = new Date("2024-02-01");
		expect(getLastDay(date)).toBe(29);
		expect(date).toEqual(new Date("2024-02-01"));
	});

	it("should return 30 for April", () => {
		const date = new Date("2025-04-01");
		expect(getLastDay(date)).toBe(30);
		expect(date).toEqual(new Date("2025-04-01"));
	});

	it("should return 31 for December", () => {
		const date = new Date("2025-12-01");
		expect(getLastDay(date)).toBe(31);
		expect(date).toEqual(new Date("2025-12-01"));
	});
});
