/**
 * ### Summary
 * Formats a date object into a string based on the given format
 * ### Notation
 * ```typescript
 * // sample date
 * const date = new Date("2025-01-01 03:04:05.067");
 * ```
 * - `{YYYY}` -> Full year (`"2025"`)
 * - `{YY}` -> Short year (`"25"`)
 * - `{MM}` -> Month with leading zero (`"01"`)
 * - `{M}` -> Month without leading zero (`"1"`)
 * - `{DD}` -> Day with leading zero (`"02"`)
 * - `{D}` -> Day without leading zero (`"2"`)
 * - `{hh}` -> Hour with leading zero (`"03"`)
 * - `{h}` -> Hour without leading zero (`"3"`)
 * - `{mm}` -> Minute with leading zero (`"04"`)
 * - `{m}` -> Minute without leading zero (`"4"`)
 * - `{ss}` -> Second with leading zero (`"05"`)
 * - `{s}` -> Second without leading zero (`"5"`)
 * - `{fff}` -> Millisecond with leading zeros (`"067"`)
 * - `{f}` -> Millisecond without leading zeros (`"67"`)
 * ### Example
 * ```typescript
 * const date = new Date("2025-01-02 03:04:05.067");
 * const dateString = format(date, "{YYYY}-{MM}-{DD} {hh}:{mm}:{ss}");
 * console.log(dateString); // "2025-01-02 03:04:05"
 * ```
 */
export function format(date: Date, format: string): string {
	const replacements: Record<string, string> = {
		"{YYYY}": date.getFullYear().toString(),
		"{YY}": date.getFullYear().toString().slice(-2),
		"{MM}": (date.getMonth() + 1).toString().padStart(2, "0"),
		"{M}": (date.getMonth() + 1).toString(),
		"{DD}": date.getDate().toString().padStart(2, "0"),
		"{D}": date.getDate().toString(),
		"{hh}": date.getHours().toString().padStart(2, "0"),
		"{h}": date.getHours().toString(),
		"{mm}": date.getMinutes().toString().padStart(2, "0"),
		"{m}": date.getMinutes().toString(),
		"{ss}": date.getSeconds().toString().padStart(2, "0"),
		"{s}": date.getSeconds().toString(),
		"{fff}": date.getMilliseconds().toString().padStart(3, "0"),
		"{f}": date.getMilliseconds().toString(),
	};

	return format.replace(
		/{YYYY}|{YY}|{MM}|{M}|{DD}|{D}|{hh}|{h}|{mm}|{m}|{ss}|{s}|{fff}|{f}/g,
		(match) => replacements[match],
	);
}
