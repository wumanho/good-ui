import { defineComponent, toRefs } from 'vue'
import { ButtonProps, buttonProps } from './button-type'

export default defineComponent({
  name: 'GButton',
  props: buttonProps,
  setup(props: ButtonProps, { slots }) {
    const { type, size, disabled, block } = toRefs(props)
    return () => {
      const defaultSlot = slots.default ? slots.default() : ''
      const isBlock = block.value ? 'g-btn-block' : ''
      return (
        <button
          disabled={disabled.value}
          class={`g-btn g-btn--${type.value} g-btn--${size.value} ${isBlock}`}
        >
          {defaultSlot}
        </button>
      )
    }
  }
})
