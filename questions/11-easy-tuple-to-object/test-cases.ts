import { Equal, Expect } from '@type-challenges/utils'

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const
// @ts-expect-error
type error = TupleToObject<[[1, 2], {}]>

type whatisthis = TupleToObject<typeof tuple>

type cases = [
  Expect<
    Equal<
      TupleToObject<typeof tuple>, // readonly ["tesla", "model 3", "model X", "model Y"]
      {
        tesla: 'tesla'
        'model 3': 'model 3'
        'model X': 'model X'
        'model Y': 'model Y'
      }
    >
  >
]
