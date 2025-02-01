/**
 * ### Summary
 * Returns a new Date object `offset` years after or before
 * ### Arguments
 * `offset` -> If negative, returns `offset` years before; if not an integer, an error occurs
 */
export function addYears(date: Date, offset: number): Date {
	if (!Number.isInteger(offset)) {
		throw new Error("offset must be an integer");
	}
	const newDate = new Date(date);
	newDate.setFullYear(newDate.getFullYear() + offset);
	return newDate;
}
