export async function unwrapText(response: Response) {
	if (response.ok) return response.text() as Promise<string>;
	const error = await response.text();
	return new Error(error);
}
