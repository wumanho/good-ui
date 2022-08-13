import { render } from '@testing-library/vue'
import { Tree } from '../index'
describe('tree test', () => {
  test('tree init render', async () => {
    const { getByRole } = render(Tree)
    getByRole('tree')
  })
})
