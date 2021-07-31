import { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Capitalize2<'foobar'>, 'Foobar'>>,
  Expect<Equal<Capitalize2<'FOOBAR'>, 'FOOBAR'>>,
  Expect<Equal<Capitalize2<'foo bar'>, 'Foo bar'>>,
  Expect<Equal<Capitalize2<''>, ''>>
]
