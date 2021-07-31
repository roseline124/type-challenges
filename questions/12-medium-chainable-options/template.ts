type Chainable<T = {}> = {
  option<Key extends string, Value>(
    key: Key,
    value: Value
  ): Chainable<
    {
      [P in Key | keyof T]: P extends Key
        ? Value
        : P extends keyof T
        ? T[P]
        : unknown
    }
  >
  get(): T
}
