import VirtualList from './virtual-list/src/index.vue'


VirtualList.install = (Vue) => {
  Vue.component(VirtualList.name, VirtualList)
}


export default VirtualList