type Diff<Left, Right> = {
  [Key in
    | Exclude<keyof Right, keyof Left>
    | Exclude<keyof Left, keyof Right>]: Key extends keyof Left
    ? Left[Key]
    : Key extends keyof Right
    ? Right[Key]
    : never
}
