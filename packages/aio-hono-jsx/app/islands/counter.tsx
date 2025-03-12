import { useState } from "hono/jsx";

import { AioButton } from "@/components/aio-button";

export default function Counter() {
	const [count, setCount] = useState(0);
	return (
		<div>
			<span>{count}</span>
			<AioButton onClick={() => setCount(count + 1)}>Increment</AioButton>
		</div>
	);
}
