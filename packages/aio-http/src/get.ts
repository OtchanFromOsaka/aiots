import type { HttpGetOption } from "../types/index.js";

export async function get(
	url: string,
	option?: HttpGetOption,
): Promise<Response> {
	const params = new URLSearchParams();
	if (option?.query) {
		for (const key in option.query) {
			params.append(key, option.query[key].toString());
		}
	}
	const input = option?.query ? `${url}?${params}` : url;

	const method = "GET";

	let headers: HeadersInit | undefined;
	if (option?.header) {
		headers = new Headers(option.header);
	}

	return await fetch(input, { method, headers });
}
