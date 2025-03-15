import { useState } from "hono/jsx";

import { AioButton } from "@/components/aio-button";

export const Counter = () => {
	const [count, setCount] = useState(0);
	return (
		<AioButton onClick={() => setCount(count + 1)}>
			<span>Count: {count}</span>
		</AioButton>
	);
};
