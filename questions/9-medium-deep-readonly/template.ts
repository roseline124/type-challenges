type AnyFunction = (...args: any[]) => any

// R 함수인 경우 그냥 R 반환 아닌 경우 readonly
type DeepReadonly<T> = {
  readonly [Value in keyof T]: T[Value] extends infer R
    ? R extends AnyFunction
      ? R
      : DeepReadonly<T[Value]>
    : T[Value]
}
