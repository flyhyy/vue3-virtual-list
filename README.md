# vue3-virtual-list

 基于vue3+ts的虚拟列表组件
> 下载
- npm install vue3-base-virtual-list
> 参数
```typescript
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
```

> 使用
 ```text
import virtualList from " vue3-base-virtual-list";
const list = Array.from({length: 1000}, (_, index) => index + 1)

 <virtual-list :list="list" :height="300" :item-height="20">
    <template #default="{item}">
        <span>
       {{ item.data }}
      </span>
    </template>

  </virtual-list>
 ```