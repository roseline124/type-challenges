type Pop<T extends any[]> = T extends [...infer R, any] ? R : never
