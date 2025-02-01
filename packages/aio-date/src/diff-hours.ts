/**
 * ### Summary
 * Returns the difference in hours between two dates
 * ### Arguments
 * - `from` -> The date to subtract from
 * - `to` -> The date to subtract
 * - `truncate` -> If true, the time of the dates will be truncated to xx:00:00.000
 * ### Example
 * ```typescript
 * // case 1
 * const from = new Date("2025-01-01 00:00:00");
 * const to = new Date("2025-01-01 01:00:00");
 * const diff = diffHours(from, to);
 * console.log(diff); // 1
 * // case 2
 * const from = new Date("2025-01-01 00:59:59");
 * const to = new Date("2025-01-01 01:00:00");
 * const diff = diffMinutes(from, to);
 * console.log(diff); // 1 (because minutes and seconds are truncated)
 * // case 3
 * const from = new Date("2025-01-01 00:59:59");
 * const to = new Date("2025-01-01 01:00:00");
 * const diff = diffMinutes(from, to, false);
 * console.log(diff); // 0 (because difference is only one second)
 * // case 4
 * const from = new Date("2025-01-02 00:00:00");
 * const to = new Date("2025-01-01 00:00:00");
 * const diff = diffMinutes(from, to);
 * console.log(diff); // -24
 * // case 5
 * const from = new Date("2025-01-01 00:00:01");
 * const to = new Date("2025-01-01 00:00:00");
 * const diff = diffMinutes(from, to, false);
 * console.log(diff); // 0 (it goes back one second but -0 is not returned)
 */
export function diffHours(from: Date, to: Date, truncate = true): number {
	const fromDate = new Date(from);
	const toDate = new Date(to);

	if (truncate) {
		fromDate.setMinutes(0, 0, 0);
		toDate.setMinutes(0, 0, 0);
	}

	const diffTime = toDate.getTime() - fromDate.getTime();
	const diffHours = diffTime / (1000 * 3600);

	const result = Math.trunc(diffHours);
	return result === 0 ? 0 : result; // if result is -0, return 0
}
