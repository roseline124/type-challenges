type Merge<First, Second> = {
  [Key in keyof First | keyof Second]: Key extends keyof Second
    ? Second[Key]
    : Key extends keyof First
    ? First[Key]
    : never
}
