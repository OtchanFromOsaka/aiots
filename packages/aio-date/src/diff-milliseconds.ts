/**
 * ### Summary
 * Returns the difference in milliseconds between two dates
 * ### Arguments
 * - `from` -> The date to subtract from
 * - `to` -> The date to subtract
 */
export function diffMilliseconds(from: Date, to: Date): number {
	return to.getTime() - from.getTime();
}
