/**
 * ### Summary
 * Returns a new Date object `offset` ms after or before
 * ### Arguments
 * `offset` -> If negative, returns `offsets` ms before; if not an integer, an error occurs
 */
export function addMilliseconds(date: Date, offset: number): Date {
	if (!Number.isInteger(offset)) {
		throw new Error("offset must be an integer");
	}
	const newDate = new Date(date);
	newDate.setMilliseconds(newDate.getMilliseconds() + offset);
	return newDate;
}
