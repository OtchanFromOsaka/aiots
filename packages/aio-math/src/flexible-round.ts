/**
 * ### Summary
 * Returns a number rounded to the specified decimal place
 * ### Arguments
 * `decimalPlaces` -> If 0, returns an integer; if not an integer, an error occurs
 */
export function flexibleRound(value: number, decimalPlaces: number): number {
	if (!Number.isInteger(decimalPlaces)) {
		throw new Error("decimalPlaces must be an integer");
	}
	const factor = 10 ** decimalPlaces;
	return Math.round(value * factor) / factor;
}
