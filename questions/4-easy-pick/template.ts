type MyPick<T, K extends keyof T> = {
  [X in K]: T[X]
}
