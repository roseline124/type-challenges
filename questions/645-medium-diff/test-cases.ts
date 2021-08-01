import { Equal, Expect } from '@type-challenges/utils'

type Foo = {
  name: string
  age: string
}
type Bar = {
  name: string
  age: string
  gender: number
  address: string
}

type cases = [
  Expect<Equal<Diff<Foo, Bar>, { gender: number; address: string }>>,
  Expect<Equal<Diff<Bar, Foo>, { gender: number; address: string }>>
]
