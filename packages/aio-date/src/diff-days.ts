/**
 * ### Summary
 * Returns the difference in days between two dates
 * ### Arguments
 * - `from` -> The date to subtract from
 * - `to` -> The date to subtract
 * - `truncate` -> If true, the time of the dates will be truncated to 00:00:00.000
 * ### Example
 * ```typescript
 * // case 1
 * const from = new Date("2025-01-01 00:00:00");
 * const to = new Date("2025-01-02 00:00:00");
 * const diff = diffDays(from, to);
 * console.log(diff); // 1
 * // case 2
 * const from = new Date("2025-01-01 23:59:00");
 * const to = new Date("2025-01-02 00:00:00");
 * const diff = diffDays(from, to);
 * console.log(diff); // 1 (because time is truncated: it refers only to dates)
 * // case 3
 * const from = new Date("2025-01-01 23:59:00");
 * const to = new Date("2025-01-02 00:00:00");
 * const diff = diffDays(from, to, false);
 * console.log(diff); // 0 (because difference is only one minute)
 * // case 4
 * const from = new Date("2025-01-05 00:00:00");
 * const to = new Date("2025-01-01 00:00:00");
 * const diff = diffDays(from, to);
 * console.log(diff); // -4
 * // case 5
 * const from = new Date("2025-01-01 00:01:00");
 * const to = new Date("2025-01-01 00:00:00");
 * const diff = diffDays(from, to, false);
 * console.log(diff); // 0 (it goes back one minute but -0 is not returned)
 */
export function diffDays(from: Date, to: Date, truncate = true): number {
	const fromDate = new Date(from);
	const toDate = new Date(to);

	if (truncate) {
		fromDate.setHours(0, 0, 0, 0);
		toDate.setHours(0, 0, 0, 0);
	}

	const diffTime = toDate.getTime() - fromDate.getTime();
	const diffDays = diffTime / (1000 * 60 * 60 * 24);

	const result = Math.trunc(diffDays);
	return result === 0 ? 0 : result; // if result is -0, return 0
}
