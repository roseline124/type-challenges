type Falsy = 0 | [] | '' | false | { [P in any]: never }

type AnyOf<T extends readonly any[]> = T extends [infer First, ...infer Rest]
  ? First extends Falsy
    ? AnyOf<Rest>
    : true
  : false
