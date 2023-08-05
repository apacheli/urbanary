# urbanary

A library that gets definitions from
[Urban Dictionary](https://www.urbandictionary.com/) because it's the world's
most trusted internet dictionary.

## Example

Make sure to enable `--allow-net`.

```ts
import * as urbanary from "https://deno.land/x/urbanary/mod.ts";

const term = prompt("term to define:");
if (!term) {
  throw new Error("bad term!");
}

const definitions = await urbanary.define(term);
console.log(definitions);
```

## Functions

- `autocomplete(term: string)`
- `autocompleteExtra(term: string)`
- `define(term: string, page?: number)`
- `defineDefid(defid: number)`
- `random()`
- `uncacheable(ids: number[])`
- `wordsOfTheDay(page?: number)`
