/**
 * ### Summary
 * Returns the difference in years between two dates
 * ### Arguments
 * - `from` -> The date to subtract from
 * - `to` -> The date to subtract
 * - `truncate` -> If false, the date and time when all values after `month` are equal is used as the border
 * ### Example
 * ```typescript
 * // case 1
 * const from = new Date("2024-12-31 23:59:59");
 * const to = new Date("2025-01-01 00:00:00");
 * const diff = diffYears(from, to);
 * console.log(diff); // 1 (because `from` is truncated to 2024-01-01 00:00:00)
 * // case 2
 * const from = new Date("2024-01-01 00:00:01"); // only one second after 2024-01-01 00:00:00
 * const to = new Date("2025-01-01 00:00:00");
 * const diff = diffYears(from, to, false);
 * console.log(diff); // 0 (because truncate is false)
 * // case 3
 * const from = new Date("2024-01-01 00:00:00");
 * const to = new Date("2025-01-01 00:00:00");
 * const diff = diffYears(from, to, false);
 * console.log(diff); // 1 (because exactly one year later, so even if truncate is false, return 1)
 */
export function diffYears(from: Date, to: Date, truncate = true): number {
	const fromDate = new Date(from);
	const toDate = new Date(to);

	if (truncate) {
		fromDate.setMonth(0);
		toDate.setMonth(0);
		fromDate.setDate(1);
		toDate.setDate(1);
		fromDate.setHours(0, 0, 0, 0);
		toDate.setHours(0, 0, 0, 0);
	}

	const diffYears = toDate.getFullYear() - fromDate.getFullYear();

	const fromMilliseconds =
		fromDate.getHours() * 3600000 +
		fromDate.getMinutes() * 60000 +
		fromDate.getSeconds() * 1000 +
		fromDate.getMilliseconds();
	const toMilliseconds =
		toDate.getHours() * 3600000 +
		toDate.getMinutes() * 60000 +
		toDate.getSeconds() * 1000 +
		toDate.getMilliseconds();
	const offset =
		fromDate.getTime() < toDate.getTime() && fromMilliseconds > toMilliseconds
			? -1
			: fromDate.getTime() > toDate.getTime() &&
					fromMilliseconds < toMilliseconds
				? 1
				: 0;

	return diffYears + offset;
}
