import { PropType, ExtractPropTypes } from 'vue'
export const treeProps = {} as const
export type TreeProps = ExtractPropTypes<typeof treeProps>

export interface ITreeNode {
  label: string
  id?: string
  children?: ITreeNode[]

  selected?: boolean
  checked?: boolean
  expanded?: boolean

  disableSelect?: boolean
  disableCheck?: boolean
  disableToggle?: boolean
}

export interface InnerTreeNode extends ITreeNode {
  parentId?: string
  level: number
  isLeaf?: boolean
}
