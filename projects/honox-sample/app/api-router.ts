import { Hono } from "hono";
import { hc } from "hono/client";

import v1Test from "./routes/api/v1/test";

const apiRouter = new Hono().route("/api/v1/test", v1Test);

export const client = hc<typeof apiRouter>(import.meta.env.BASE_URL);
