/**
 * ### Summary
 * Returns the last day of the month
 */
export function getLastDay(date: Date): number {
	const year = date.getFullYear();
	const month = date.getMonth();
	return new Date(year, month + 1, 0).getDate();
}
