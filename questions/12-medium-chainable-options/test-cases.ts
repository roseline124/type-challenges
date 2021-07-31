import { Alike, Expect } from '@type-challenges/utils'

declare const a: Chainable

const result = a
  .option('foo', 123)
  .option('bar', { value: 'Hello World' })
  .option('name', 'type-challenges')
  .get()

type test = typeof result

type Expected = {
  foo: number
  bar: {
    value: string
  }
  name: string
}

type cases = [Expect<Alike<typeof result, Expected>>]
