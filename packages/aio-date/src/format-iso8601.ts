/**
 * ### Summary
 * Format a date object to ISO 8601 string.
 * ### Arguments
 * `ms` -> If true, include milliseconds in the output
 */
export function formatIso8601(date: Date, ms = false): string {
	const year = date.getFullYear();
	const month = (date.getMonth() + 1).toString().padStart(2, "0");
	const day = date.getDate().toString().padStart(2, "0");
	const hours = date.getHours().toString().padStart(2, "0");
	const minutes = date.getMinutes().toString().padStart(2, "0");
	const seconds = date.getSeconds().toString().padStart(2, "0");
	const milliseconds = date.getMilliseconds().toString().padStart(3, "0");

	const offset = date.getTimezoneOffset();
	const tzHour = (Math.abs(offset) / 60).toString().padStart(2, "0");
	const tz = `${offset <= 0 ? "+" : "-"}${tzHour}:00`;

	return ms
		? `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.${milliseconds}Z${tz}`
		: `${year}-${month}-${day}T${hours}:${minutes}:${seconds}Z${tz}`;
}
