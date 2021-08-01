import { Equal, Expect } from '@type-challenges/utils'

type LowerCase = StringToUnion<'abcdefghijklmnopqrstuvxyz'>

type CamelCase<
  Text extends string,
  Result extends string = ''
> = Text extends `${infer First}${infer Second}${infer Rest}`
  ? `${First}${Second}` extends `-${LowerCase}`
    ? CamelCase<Rest, `${Result}${Uppercase<Second>}`>
    : CamelCase<`${Second}${Rest}`, `${Result}${First}`>
  : `${Result}${Text}`

type cases = [
  Expect<Equal<CamelCase<'foo-bar-baz'>, 'fooBarBaz'>>,
  Expect<Equal<CamelCase<'foo-bar'>, 'fooBar'>>,
  Expect<Equal<CamelCase<'foo--bar----baz'>, 'foo-Bar---Baz'>>,
  Expect<Equal<CamelCase<'a-b-c'>, 'aBC'>>,
  Expect<Equal<CamelCase<'a-b-cd'>, 'aBCd'>>,
  Expect<Equal<CamelCase<'a-b-c-'>, 'aBC-'>>,
  Expect<Equal<CamelCase<'foo-Bar-Baz'>, 'foo-Bar-Baz'>>,
  Expect<Equal<CamelCase<'foo_bar'>, 'foo_bar'>>,
  Expect<Equal<CamelCase<'ABC'>, 'ABC'>>,
  Expect<Equal<CamelCase<'-'>, '-'>>,
  Expect<Equal<CamelCase<'---'>, '---'>>,
  Expect<Equal<CamelCase<'_'>, '_'>>,
  Expect<Equal<CamelCase<''>, ''>>,
  Expect<Equal<CamelCase<'😎'>, '😎'>>
]
