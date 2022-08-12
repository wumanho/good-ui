import { upperFirst } from '../utils'

export function genCoreTemplate(name: string) {
  const compName = 'G' + upperFirst(name)
  const propsParamsName = upperFirst(name) + 'Props'
  const propsTypesName = name + 'Props'
  const propsFileName = name + '-type'
  const className = 'g-' + name

  return `import { defineComponent, toRefs } from 'vue'
import { ${propsTypesName}, ${propsParamsName} } from './${propsFileName}'
export default defineComponent({
  name: '${compName}',
  props: ${propsTypesName},
  setup(props: ${propsParamsName}) {
    return () => {
      return (<div class="${className}"></div>)
    }
  }
})`
}
