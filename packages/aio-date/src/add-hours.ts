/**
 * ### Summary
 * Returns a new Date object `offset` hours after or before
 * ### Arguments
 * `offset` -> If negative, returns `offset` hours before; if not an integer, an error occurs
 */
export function addHours(date: Date, offset: number): Date {
	if (!Number.isInteger(offset)) {
		throw new Error("offset must be an integer");
	}
	const newDate = new Date(date);
	newDate.setHours(date.getHours() + offset);
	return newDate;
}
