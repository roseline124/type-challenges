type Replace<
  S extends string,
  From extends string,
  To extends string
> = From extends ''
  ? S
  : S extends `${infer Start}${From}${infer End}`
  ? `${Start}${To}${End}`
  : S
