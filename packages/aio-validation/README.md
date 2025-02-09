# aio-validation

### General Usage

- Add to your code

```ts
import math from "path/to/package/aio-math"

const nearlyPi = math.flexibleRound(3.14159, 2)
console.log(nearlyPi) // 3.14
```

- You can also import functions individually

```ts
import { flexibleRound } from "path/to/package/aio-math"

const nearlyPi = flexibleRound(3.14159, 2)
console.log(nearlyPi) // 3.14
```

### Vite

- Set relative paths in `tsconfig.json`

```JSON
{
  "compilerOptions": {
    "paths": {
      "aio-math": ["path/to/package/aio-math"]
    }
  }
}
```

- Also set relative paths in `vite.config.ts`

```ts
import { resolve } from "node:path";

export default defineConfig({
  // ...
  resolve: {
    alias: {
      "aio-math": resolve(__dirname, "path/to/package/aio-math"),
    },
  },
  // ...
});
```

- Easy to add to your code

```ts
import math from "aio-math"
```
