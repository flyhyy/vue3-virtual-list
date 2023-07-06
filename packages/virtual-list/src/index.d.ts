interface style {
  [key: string]: string | number
}

export interface Props {
  // 列表
  list: any[]
  // container 样式
  containerStyle?: style
  // container class
  containerClassName?: string
  // child 样式
  childStyle?: style
  // child class
  childClassName?: string
  // 高度
  height: number
  // 列表子项预估高度
  itemHeight: number
  //   滚动至底部的回调函数
  scrollButtonFn?: Function
}
