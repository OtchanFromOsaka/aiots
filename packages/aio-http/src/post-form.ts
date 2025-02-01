import type { HttpPostOption } from "../types/index.js";

export async function postForm(
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
	headers.append("Content-Type", "application/x-www-form-urlencoded");

	let body: BodyInit | undefined;
	if (option?.body) {
		body = new URLSearchParams();
		for (const key in option?.body) {
			body.append(key, option.body[key].toString());
		}
	}

	return await fetch(input, { method, headers, body });
}
