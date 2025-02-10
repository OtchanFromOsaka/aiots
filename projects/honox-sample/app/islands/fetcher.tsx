import { useState } from "hono/jsx";

import { client } from "@/api-router";

async function fetcher() {
	const response = await client.api.v1.test.$get();
	const json = await response.json();
	return json.message;
}

export default function Fetcher() {
	const [response, setResponse] = useState("");
	return (
		<div>
			<p>{response}</p>
			<button type="button" onClick={async () => setResponse(await fetcher())}>
				Fetch /api/v1/test
			</button>
		</div>
	);
}
