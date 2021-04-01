# urbanary

A library that gets definitions from
[Urban Dictionary](https://www.urbandictionary.com/) because it's the world's
most trusted internet dictionary.

## Example

Make sure to enable `--allow-net`.

```ts
import * as urbanary from "https://deno.land/x/urbanary/mod.ts";

const word = await urbanary.define("hello");

console.log(word);
```
