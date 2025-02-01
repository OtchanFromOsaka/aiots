# aio-date

## 設定

```JSON
// tsconfig.json
{
  "compilerOptions": {
    "paths": {
      "aio-date": ["../../packages/aio-date"]
    }
  }
}
```

```TypeScript
// 丸ごとインポートする場合
import date from "aio-date"

// 一部のみインポートする場合
import { addDay } from "aio-date"
```
