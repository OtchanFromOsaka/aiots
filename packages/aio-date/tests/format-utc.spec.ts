import { describe, it, expect } from "vitest";

import { formatUtc } from "../src/format-utc";

describe("formatUtc", () => {
	it("should have TZ environment variable set to Asia/Tokyo", () => {
		expect(process.env.TZ).toBe("Asia/Tokyo");
	});

	const date = new Date("2025-01-02 03:04:05.067"); // UTC: 2025-01-01 18:04:05.067

	it("should format date with {YYYY}", () => {
		expect(formatUtc(date, "{YYYY}")).toBe("2025");
	});

	it("should format date with {YY}", () => {
		expect(formatUtc(date, "{YY}")).toBe("25");
	});

	it("should format date with {MM}", () => {
		expect(formatUtc(date, "{MM}")).toBe("01");
	});

	it("should format date with {M}", () => {
		expect(formatUtc(date, "{M}")).toBe("1");
	});

	it("should format date with {DD}", () => {
		expect(formatUtc(date, "{DD}")).toBe("01");
	});

	it("should format date with {D}", () => {
		expect(formatUtc(date, "{D}")).toBe("1");
	});

	it("should format date with {hh}", () => {
		expect(formatUtc(date, "{hh}")).toBe("18");
	});

	it("should format date with {h}", () => {
		expect(formatUtc(date, "{h}")).toBe("18");
	});

	it("should format date with {mm}", () => {
		expect(formatUtc(date, "{mm}")).toBe("04");
	});

	it("should format date with {m}", () => {
		expect(formatUtc(date, "{m}")).toBe("4");
	});

	it("should format date with {ss}", () => {
		expect(formatUtc(date, "{ss}")).toBe("05");
	});

	it("should format date with {s}", () => {
		expect(formatUtc(date, "{s}")).toBe("5");
	});

	it("should format date with {fff}", () => {
		expect(formatUtc(date, "{fff}")).toBe("067");
	});

	it("should format date with {f}", () => {
		expect(formatUtc(date, "{f}")).toBe("67");
	});

	it("should format date with multiple tokens", () => {
		expect(formatUtc(date, "{YYYY}-{MM}-{DD} {hh}:{mm}:{ss}.{fff}")).toBe(
			"2025-01-01 18:04:05.067",
		);
	});

	it("should format date with D/M/YY", () => {
		expect(formatUtc(date, "{D}/{M}/{YY}")).toBe("1/1/25");
	});

	it("should format date with M/D/YYYY", () => {
		expect(formatUtc(date, "{M}/{D}/{YYYY}")).toBe("1/1/2025");
	});

	it("should format date with YYYY年M月D日 h時m分", () => {
		expect(formatUtc(date, "{YYYY}年{M}月{D}日 {h}時{m}分")).toBe(
			"2025年1月1日 18時4分",
		);
	});

	const begginingOfTheYear = new Date("2025-01-01 01:02"); // UTC: 2024-12-31 16:02

	it("should format date correctly even at the beginning of the year", () => {
		expect(formatUtc(begginingOfTheYear, "{YYYY}-{MM}-{DD} {hh}:{mm}")).toBe(
			"2024-12-31 16:02",
		);
	});

	it("should format date with ISO 8601 format", () => {
		expect(
			formatUtc(date, "{YYYY}-{MM}-{DD}T{hh}:{mm}:{ss}.{fff}Z+00:00"),
		).toBe("2025-01-01T18:04:05.067Z+00:00");
	});

	it("should format date with empty string", () => {
		expect(formatUtc(date, "")).toBe("");
	});

	it("should format date with unknown token", () => {
		expect(formatUtc(date, "unknown")).toBe("unknown");
	});

	it("should unchanged the original date", () => {
		expect(date).toEqual(new Date("2025-01-02 03:04:05.067"));
	});
});
