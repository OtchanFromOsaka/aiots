/**
 * ### Summary
 * Converts a date object to UTC based on `getTimezoneOffset()` and formats it into a string based on the specified format.
 * ### Notation
 * ```typescript
 * // sample date (TZ=Asia/Tokyo)
 * const date = new Date("2025-01-01 03:04:05.067"); // UTC: 2024-12-31 18:04:05.067
 * ```
 * - `{YYYY}` -> Full year (`"2024"`)
 * - `{YY}` -> Short year (`"24"`)
 * - `{MM}` -> Month with leading zero (`"12"`)
 * - `{M}` -> Month without leading zero (`"12"`)
 * - `{DD}` -> Day with leading zero (`"31"`)
 * - `{D}` -> Day without leading zero (`"31"`)
 * - `{hh}` -> Hour with leading zero (`"18"`)
 * - `{h}` -> Hour without leading zero (`"18"`)
 * - `{mm}` -> Minute with leading zero (`"04"`)
 * - `{m}` -> Minute without leading zero (`"4"`)
 * - `{ss}` -> Second with leading zero (`"05"`)
 * - `{s}` -> Second without leading zero (`"5"`)
 * - `{fff}` -> Millisecond with leading zeros (`"067"`)
 * - `{f}` -> Millisecond without leading zeros (`"67"`)
 * ### Example
 * ```typescript
 * const date = new Date("2025-01-01 03:04:05.067");
 * const dateString = formatUtc(date, "{YYYY}-{MM}-{DD} {hh}:{mm}:{ss}");
 * console.log(dateString); // "2024-12-31 18:04:05"
 * ```
 */
export function formatUtc(date: Date, format: string): string {
	const replacements: Record<string, string> = {
		"{YYYY}": date.getUTCFullYear().toString(),
		"{YY}": date.getUTCFullYear().toString().slice(-2),
		"{MM}": (date.getUTCMonth() + 1).toString().padStart(2, "0"),
		"{M}": (date.getUTCMonth() + 1).toString(),
		"{DD}": date.getUTCDate().toString().padStart(2, "0"),
		"{D}": date.getUTCDate().toString(),
		"{hh}": date.getUTCHours().toString().padStart(2, "0"),
		"{h}": date.getUTCHours().toString(),
		"{mm}": date.getUTCMinutes().toString().padStart(2, "0"),
		"{m}": date.getUTCMinutes().toString(),
		"{ss}": date.getUTCSeconds().toString().padStart(2, "0"),
		"{s}": date.getUTCSeconds().toString(),
		"{fff}": date.getUTCMilliseconds().toString().padStart(3, "0"),
		"{f}": date.getUTCMilliseconds().toString(),
	};
	date.getTimezoneOffset();

	return format.replace(
		/{YYYY}|{YY}|{MM}|{M}|{DD}|{D}|{hh}|{h}|{mm}|{m}|{ss}|{s}|{fff}|{f}/g,
		(match) => replacements[match],
	);
}
