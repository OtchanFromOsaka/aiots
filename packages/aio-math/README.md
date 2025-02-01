# aio-math

## 設定

```JSON
// tsconfig.json
{
  "compilerOptions": {
    "paths": {
      "aio-math": ["../../packages/aio-math"]
    }
  }
}
```

```TypeScript
// 丸ごとインポートする場合
import math from "aio-math"

// 一部のみインポートする場合
import { addDay } from "aio-math"
```
