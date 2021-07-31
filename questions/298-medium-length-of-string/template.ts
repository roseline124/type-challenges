type LengthOfString<S extends string, A extends any[] = []> = S extends ''
  ? A['length']
  : S extends `${infer First}${infer Rest}`
  ? LengthOfString<Rest, [First, ...A]>
  : never
