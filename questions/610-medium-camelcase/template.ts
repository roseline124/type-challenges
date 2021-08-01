// type LowerCase = StringToUnion<'abcdefghijklmnopqrstuvxyz'>

// type CamelCase<
//   Text extends string,
//   Result extends string = ''
// > = Text extends `${infer First}${infer Second}${infer Rest}`
//   ? `${First}${Second}` extends `-${LowerCase}`
//     ? CamelCase<Rest, `${Result}${Uppercase<Second>}`>
//     : CamelCase<`${Second}${Rest}`, `${Result}${First}`>
//   : `${Result}${Text}`
