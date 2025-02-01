export async function unwrap<T>(response: Response) {
	if (response.ok) return response.json() as Promise<T>;
	const error = await response.text();
	return new Error(error);
}
