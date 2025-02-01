/**
 * ### Summary
 * Returns the difference in minutes between two dates
 * ### Arguments
 * - `from` -> The date to subtract from
 * - `to` -> The date to subtract
 * - `truncate` -> If true, the time of the dates will be truncated to xx:xx:00.000
 * ### Example
 * ```typescript
 * // case 1
 * const from = new Date("2025-01-01 00:00:00");
 * const to = new Date("2025-01-02 00:00:00");
 * const diff = diffMinutes(from, to);
 * console.log(diff); // 1440
 * // case 2
 * const from = new Date("2025-01-01 23:00:59");
 * const to = new Date("2025-01-01 23:01:00");
 * const diff = diffMinutes(from, to);
 * console.log(diff); // 1 (because seconds are truncated)
 * // case 3
 * const from = new Date("2025-01-01 23:00:59");
 * const to = new Date("2025-01-01 23:01:00");
 * const diff = diffMinutes(from, to, false);
 * console.log(diff); // 0 (because difference is only one second)
 * // case 4
 * const from = new Date("2025-01-02 00:00:00");
 * const to = new Date("2025-01-01 00:00:00");
 * const diff = diffMinutes(from, to);
 * console.log(diff); // -1440
 * // case 5
 * const from = new Date("2025-01-01 00:00:01");
 * const to = new Date("2025-01-01 00:00:00");
 * const diff = diffMinutes(from, to, false);
 * console.log(diff); // 0 (it goes back one second but -0 is not returned)
 */
export function diffMinutes(from: Date, to: Date, truncate = true): number {
	const fromDate = new Date(from);
	const toDate = new Date(to);

	if (truncate) {
		fromDate.setSeconds(0, 0);
		toDate.setSeconds(0, 0);
	}

	const diffTime = toDate.getTime() - fromDate.getTime();
	const diffMinutes = diffTime / (1000 * 60);

	const result = Math.trunc(diffMinutes);
	return result === 0 ? 0 : result; // if result is -0, return 0
}
