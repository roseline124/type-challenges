declare function PromiseAll(
  values: V extends any[] ? infer V : never
): Promise<V>
