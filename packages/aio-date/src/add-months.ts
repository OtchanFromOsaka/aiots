/**
 * ### Summary
 * Returns a new Date object `offset` months after or before
 * ### Arguments
 * `offset` -> If negative, returns `offset` months before; if not an integer, an error occurs
 */
export function addMonths(date: Date, offset: number): Date {
	if (!Number.isInteger(offset)) {
		throw new Error("offset must be an integer");
	}
	const newDate = new Date(date);
	newDate.setMonth(newDate.getMonth() + offset);
	return newDate;
}
