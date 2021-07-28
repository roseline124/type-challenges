type Includes<T extends readonly any[], U> = U extends number | string
  ? U extends T[number]
    ? true
    : false
  : U extends T
  ? true
  : false
