/**
 * ### Summary
 * Returns a new Date object `offset` seconds after or before
 * ### Arguments
 * `offset` -> If negative, returns `offset` seconds before; if not an integer, an error occurs
 */
export function addSeconds(date: Date, offset: number): Date {
	if (!Number.isInteger(offset)) {
		throw new Error("offset must be an integer");
	}
	const newDate = new Date(date);
	newDate.setSeconds(newDate.getSeconds() + offset);
	return newDate;
}
