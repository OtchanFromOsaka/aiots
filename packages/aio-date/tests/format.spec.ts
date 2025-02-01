import { describe, it, expect } from "vitest";

import { format } from "../src/format";

describe("format", () => {
	const date = new Date("2025-01-02 03:04:05.067");

	it("should format date with {YYYY}", () => {
		expect(format(date, "{YYYY}")).toBe("2025");
	});

	it("should format date with {YY}", () => {
		expect(format(date, "{YY}")).toBe("25");
	});

	it("should format date with {MM}", () => {
		expect(format(date, "{MM}")).toBe("01");
	});

	it("should format date with {M}", () => {
		expect(format(date, "{M}")).toBe("1");
	});

	it("should format date with {DD}", () => {
		expect(format(date, "{DD}")).toBe("02");
	});

	it("should format date with {D}", () => {
		expect(format(date, "{D}")).toBe("2");
	});

	it("should format date with {hh}", () => {
		expect(format(date, "{hh}")).toBe("03");
	});

	it("should format date with {h}", () => {
		expect(format(date, "{h}")).toBe("3");
	});

	it("should format date with {mm}", () => {
		expect(format(date, "{mm}")).toBe("04");
	});

	it("should format date with {m}", () => {
		expect(format(date, "{m}")).toBe("4");
	});

	it("should format date with {ss}", () => {
		expect(format(date, "{ss}")).toBe("05");
	});

	it("should format date with {s}", () => {
		expect(format(date, "{s}")).toBe("5");
	});

	it("should format date with {fff}", () => {
		expect(format(date, "{fff}")).toBe("067");
	});

	it("should format date with {f}", () => {
		expect(format(date, "{f}")).toBe("67");
	});

	it("should format date with multiple tokens", () => {
		expect(format(date, "{YYYY}-{MM}-{DD} {hh}:{mm}:{ss}.{fff}")).toBe(
			"2025-01-02 03:04:05.067",
		);
	});

	it("should format date with D/M/YY", () => {
		expect(format(date, "{D}/{M}/{YY}")).toBe("2/1/25");
	});

	it("should format date with M/D/YYYY", () => {
		expect(format(date, "{M}/{D}/{YYYY}")).toBe("1/2/2025");
	});

	it("should format date with YYYY年M月D日 h時m分", () => {
		expect(format(date, "{YYYY}年{M}月{D}日 {h}時{m}分")).toBe(
			"2025年1月2日 3時4分",
		);
	});

	it("should format date with empty string", () => {
		expect(format(date, "")).toBe("");
	});

	it("should format date with unknown token", () => {
		expect(format(date, "unknown")).toBe("unknown");
	});

	it("should unchanged the original date", () => {
		expect(date).toEqual(new Date("2025-01-02 03:04:05.067"));
	});
});
