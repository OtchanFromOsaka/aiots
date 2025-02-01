# aio-http

## 設定

```JSON
// tsconfig.json
{
  "compilerOptions": {
    "paths": {
      "aio-http": ["../../packages/aio-http"],
      "aio-http/types": ["../../packages/aio-http/types"]
    }
  }
}
```

```TypeScript
// 丸ごとインポートする場合
import http from "aio-http"

// 一部のみインポートする場合
import { get, unwrap } from "aio-http"

// 型をインポートする場合
import type { HttpGetOption } from "aio-http/types"
```

## 使い方

### `get()`

例: `http://example.com?id=123&name=user%40test.com`

```TypeScript
import http from "aio-http"
import type { HttpGetOption } from "aio-http/types"

const option: HttpGetOption = {
  query: {
    id: 123,
    name: "user@test.com",
  },
};

const res = await http.get("http://example.com", option);

// JavaScript標準の Response が返される
console.log(res.status)
```

### `unwrap()`

```TypeScript
// ジェネリクスで渡した型またはJavaScript標準の Error が返される
type Res = {
  foo: number;
  bar: string;
}
const data = await http.unwrap<Res>(res); // Res | Error

if (data instanceof Error) {
  console.error(data); // Error
  return;
}

console.log(data.foo); // number
```

### `unwrapText()`

```TypeScript
const data = await http.unwrapText<Res>(res); // string | Error
```

### `post()`

```TypeScript
import http from "aio-http"
import type { HttpPostOption } from "aio-http/types"

type Res = {
  foo: number;
  bar: string;
}

const option: HttpPostOption = {
  body: {
    id: 123,
    name: "user@test.com",
  },
};
const res = await http.postJson("http://example.com", option);
const data = await http.unwrap<Res>(res);

if (data instanceof Error) {
  console.error(data);
  return;
}

console.log(data);
```
