type AppendToObject<Target, Key extends string, Value> = {
  [K in keyof Target | Key]: K extends keyof Target ? Target[K] : Value
}
