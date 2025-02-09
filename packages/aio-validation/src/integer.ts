export function integer(value: string): boolean {
	const integerPattern = /^-?\d+$/;
	return integerPattern.test(value);
}
