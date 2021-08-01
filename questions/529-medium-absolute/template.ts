type Absolute<T extends number | string | bigint> = T extends number | bigint
  ? Absolute<`${T}`>
  : T extends `${infer SignOrNumber}${infer Number}`
  ? SignOrNumber extends '-'
    ? `${Number}`
    : T
  : never
