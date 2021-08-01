type StringToUnion<
  T extends string,
  Result extends string = never
> = T extends `${infer First}${infer Rest}`
  ? StringToUnion<Rest, Result | First>
  : Result
