import { defineComponent, toRefs } from 'vue'
import { treeProps, TreeProps } from './tree-type'
export default defineComponent({
  name: 'GTree',
  props: treeProps,
  setup(props: TreeProps) {
    return () => {
      return <div class="g-tree">tree</div>
    }
  }
})
