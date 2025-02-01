export function useValidation() {
	function required(value: string): boolean {
		return value.trim().length > 0;
	}

	function email(value: string): boolean {
		const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailPattern.test(value);
	}

	function integer(value: string): boolean {
		const integerPattern = /^-?\d+$/;
		return integerPattern.test(value);
	}

	return {
		required,
		email,
		integer,
	};
}
