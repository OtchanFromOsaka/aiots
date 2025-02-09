import { Hono } from "hono";

import { BaseLayout } from "@/components/base-layout";

const page = new Hono().get('/', (c) => {
  return c.html(
    <BaseLayout>
      <h1>Hello Hono!</h1>
      <ul>
        {/* <li key={message}>{message}!!</li> */}
      </ul>
    </BaseLayout>
  )
})

export default page
