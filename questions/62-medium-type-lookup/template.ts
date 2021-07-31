type LookUp<U, T> = Extract<U, { type: T }>
// type LookUp<U, T> = U extends Record<'type', T> ? U : never
