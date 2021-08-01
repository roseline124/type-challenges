type UpperCases = StringToUnion<'ABCDEFGHIJKLMNOPQRSTUVXYZ'>

type KebabCase<
  Text extends string,
  Result extends string = ''
> = Text extends `${infer First}${infer Rest}`
  ? First extends UpperCases
    ? Result extends ''
      ? KebabCase<Rest, `${Result}${Lowercase<First>}`>
      : KebabCase<Rest, `${Result}-${Lowercase<First>}`>
    : KebabCase<Rest, `${Result}${Lowercase<First>}`>
  : Result
