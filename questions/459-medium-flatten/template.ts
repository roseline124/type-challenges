type Flatten<T extends any[]> = T extends []
  ? []
  : T extends [infer First, ...infer Rest]
  ? [...(First extends any[] ? Flatten<First> : [First]), ...Flatten<Rest>]
  : never
