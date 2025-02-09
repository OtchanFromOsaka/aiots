import { Hono } from "hono";

import apiV1Test from "@/routes/api/v1/test";

const apiRouter = new Hono<Env>()
	.route("/api/v1/test", apiV1Test);

export default apiRouter;
