import { upperFirst } from '../utils'

export function genTestTemplate(name) {
  return `import { render } from '@testing-library/vue'
import { ${upperFirst(name)} } from '../index'
describe('${name} test', () => {
  test('${name} init render', async () => {
    const { getByRole } = render(${upperFirst(name)})
    getByRole('${name}')
  })
})
`
}
