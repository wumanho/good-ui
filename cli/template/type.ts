import { upperFirst } from '../utils'

export function genTypeTemplate(name: string) {
  const propsParamsName = upperFirst(name) + 'Props'
  const propsTypesName = name + 'Props'

  return `import { PropType, ExtractPropTypes } from 'vue'
export const ${propsTypesName} = {} as const
export type ${propsParamsName} = ExtractPropTypes<typeof ${propsTypesName}>
`
}
