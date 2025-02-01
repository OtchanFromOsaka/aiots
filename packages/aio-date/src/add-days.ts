/**
 * ### Summary
 * Returns a new Date object `offset` days after or before
 * ### Arguments
 * `offset` -> If negative, returns `offset` days before; if not an integer, an error occurs
 */
export function addDays(date: Date, offset: number): Date {
	if (!Number.isInteger(offset)) {
		throw new Error("offset must be an integer");
	}
	const newDate = new Date(date);
	newDate.setDate(newDate.getDate() + offset);
	return newDate;
}
