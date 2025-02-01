/**
 * ### Summary
 * Returns the difference in seconds between two dates
 * ### Arguments
 * - `from` -> The date to subtract from
 * - `to` -> The date to subtract
 * - `truncate` -> If true, milliseconds will be truncated to .000
 * ### Example
 * ```typescript
 * // case 1
 * const from = new Date("2025-01-01 00:00:00.999");
 * const to = new Date("2025-01-01 00:00:01.000");
 * const diff = diffSeconds(from, to);
 * console.log(diff); // 1 (because milliseconds are truncated)
 * // case 2
 * const from = new Date("2025-01-01 00:00:00.001"); // only one millisecond after 00:00:00.000
 * const to = new Date("2025-01-01 00:00:01.000");
 * const diff = diffSeconds(from, to, false);
 * console.log(diff); // 0
 * // case 3
 * const from = new Date("2025-01-01 23:59:00");
 * const to = new Date("2025-01-02 00:00:00");
 * const diff = diffSeconds(from, to, false);
 * console.log(diff); // 0 (because difference is only one minute)
 * // case 4
 * const from = new Date("2025-01-01 00:00:05");
 * const to = new Date("2025-01-01 00:00:00");
 * const diff = diffSeconds(from, to);
 * console.log(diff); // -5
 * // case 5
 * const from = new Date("2025-01-01 00:00:00.001");
 * const to = new Date("2025-01-01 00:00:00.000");
 * const diff = diffSeconds(from, to, false);
 * console.log(diff); // 0 (it goes back one millisecond but -0 is not returned)
 */
export function diffSeconds(from: Date, to: Date, truncate = true): number {
	const fromDate = new Date(from);
	const toDate = new Date(to);

	if (truncate) {
		fromDate.setMilliseconds(0);
		toDate.setMilliseconds(0);
	}

	const diffTime = toDate.getTime() - fromDate.getTime();
	const diffSeconds = diffTime / 1000;

	const result = Math.trunc(diffSeconds);
	return result === 0 ? 0 : result; // if result is -0, return 0
}
