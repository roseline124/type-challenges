import { Equal, Expect } from '@type-challenges/utils'

type test = Replace<'types are fun!', 'fun', 'awesome'>

type cases = [
  Expect<
    Equal<Replace<'types are fun!', 'fun', 'awesome'>, 'types are awesome!'>
  >,
  Expect<Equal<Replace<'foobar', 'f', 't'>, 'toobar'>>,
  Expect<Equal<Replace<'foobar', 'bar', 'foo'>, 'foofoo'>>,
  Expect<Equal<Replace<'foobarbar', 'bar', 'foo'>, 'foofoobar'>>,
  Expect<Equal<Replace<'foobarbar', '', 'foo'>, 'foobarbar'>>,
  Expect<Equal<Replace<'', '', ''>, ''>>
]
