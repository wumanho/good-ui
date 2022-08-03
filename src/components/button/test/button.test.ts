import { test } from 'vitest'
import { render } from '@testing-library/vue'
import { Button } from '../index'
import { expect } from 'vitest/dist/browser'

// 基础功能
test('button should work', () => {
  const { getByRole } = render(Button)
  getByRole('button')
})

// 默认插槽
test('default slot should be 确定', () => {
  const { getByText } = render(Button)
  getByText('确定')
})

// 插槽功能
test('slot should be 取消', () => {
  const { getByText } = render(Button, {
    slots: {
      default() {
        return '取消'
      }
    }
  })
  getByText('取消')
})

// 默认类型
test('default type should be secondary', () => {
  const { getByRole } = render(Button)
  const button = getByRole('button')
  expect(button.classList.contains('g-btn--secondary')).toBe(true)
})

// 按钮类型
test('prop type should work', () => {
  const { getByRole } = render(Button, {
    props: {
      type: 'primary'
    }
  })
  const button = getByRole('button')
  expect(button.classList.contains('g-btn--primary')).toBe(true)
})
