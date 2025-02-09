import { Hono } from "hono";
import { cors } from "hono/cors";

import index from "@/routes/index";
import apiRouter from "@/routes/api/router";

const origin = process.env.ORIGIN;
const allowHeaders = process.env.HEADERS;
const allowMethods = process.env.METHODS;

if (!origin) throw new Error("env ORIGIN is undefined.");
if (!allowHeaders) throw new Error("env HEADERS is undefined.");
if (!allowMethods) throw new Error("env METHODS is undefined.");

const app = new Hono<Env>()
	.use(
		"*",
		cors({
			origin: origin,
			allowHeaders: allowHeaders.split(","),
			allowMethods: allowMethods.split(","),
			credentials: true,
		}),
	)
	.route("/", apiRouter)
	.route("/", index);

export default app;
