type Last<T extends any[]> = T extends [...any, infer R] ? R : never
