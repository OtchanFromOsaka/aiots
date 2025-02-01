import type { HttpPostOption } from "../types/index.js";

export async function postJson(
	url: string,
	option?: HttpPostOption,
): Promise<Response> {
	const params = new URLSearchParams();
	if (option?.query) {
		for (const key in option.query) {
			params.append(key, option.query[key].toString());
		}
	}
	const input = option?.query ? `${url}?${params}` : url;

	const method = "POST";

	const headers = new Headers();
	for (const key in option?.header) {
		headers.append(key, option.header[key]);
	}
	headers.append("Content-Type", "application/json");

	let body: BodyInit | undefined;
	if (option?.body) {
		body = JSON.stringify(option.body);
	}

	return await fetch(input, { method, headers, body });
}
