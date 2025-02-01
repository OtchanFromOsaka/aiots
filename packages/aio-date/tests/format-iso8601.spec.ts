import { describe, it, expect } from "vitest";

import { formatIso8601 } from "../src/format-iso8601";

describe("formatIso8601", () => {
	it("should have TZ environment variable set to Asia/Tokyo", () => {
		expect(process.env.TZ).toBe("Asia/Tokyo");
	});

	const date = new Date("2025-01-02 03:04:05.067");

	it("should format date to ISO 8601 string without milliseconds", () => {
		expect(formatIso8601(date)).toBe("2025-01-02T03:04:05Z+09:00");
	});

	it("should format date to ISO 8601 string with milliseconds", () => {
		expect(formatIso8601(date, true)).toBe("2025-01-02T03:04:05.067Z+09:00");
	});

	it("should unchanged the original date", () => {
		expect(date).toEqual(new Date("2025-01-02 03:04:05.067"));
	});
});
