import { defineComponent, ref, withModifiers } from 'vue'

// export default defineComponent({
//   render() {
//     return <div>test</div>
//   }
// })

export default defineComponent({
  directives: {
    focus: {
      mounted(el) {
        el.focus()
      }
    }
  },
  emits: ['pf'],
  setup(props, { slots, emit }) {
    const count = ref(0)
    const inc = () => {
      count.value++
      emit('pf')
    }
    const list = ref<string[]>(['a', 'b', 'c'])
    return () => {
      return (
        <div onClick={withModifiers(inc, ['self'])}>
          test:{count.value}
          <input type="text" v-model={count.value} v-focus />
          <ul>
            {list.value.map(str => {
              return <li key={str}>{str}</li>
            })}
          </ul>
          {/*  默认插槽内容*/}
          <div>{slots.default ? slots.default() : 'default content'}</div>
        </div>
      )
    }
  }
})
