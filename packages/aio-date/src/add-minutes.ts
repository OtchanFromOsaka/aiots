/**
 * ### Summary
 * Returns a new Date object `offset` minutes after or before
 * ### Arguments
 * `offset` -> If negative, returns `offset` minutes before; if not an integer, an error occurs
 */
export function addMinutes(date: Date, offset: number): Date {
	if (!Number.isInteger(offset)) {
		throw new Error("offset must be an integer");
	}
	const newDate = new Date(date);
	newDate.setMinutes(newDate.getMinutes() + offset);
	return newDate;
}
