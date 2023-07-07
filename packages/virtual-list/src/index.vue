<template>
  <div
        :class="props.containerClassName"
        :style="{
      height: `${height}px`,
      ...containerStyle
    }"
        style=" overflow-y: scroll;background: #f1f1f1;"
        @scroll="onScroll"
  >
    <div
          :class="props.childClassName"
          :style="{
        height: `${totalHeight}px`
      }"
          style="  width: 100%;  position: relative;"
    >
      <div v-for="(item, index) in virtualList" :key="item" ref="items" :style="item.style">
        <slot :item="item"></slot>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: 'virtualList'
}
</script>

<script lang="ts" setup>
import {Props} from './index'
import {computed, getCurrentInstance, onMounted, ref} from 'vue'

const props = defineProps<Props>()
const bufferSize = ref(5)
const startIndex = ref(0)
const endIndex = ref(0)
// container Style
const containerStyle = computed(() => {
  if (props?.containerStyle) {
    return props.containerStyle
  }
  return {
    width: '200px'
  }
})
const instance = getCurrentInstance()

// 计算 总高度
const totalHeight = computed(() => {
  return props.list.length * props.itemHeight
})
// 列表
const virtualList = computed(() => {
  const arr = props.list.slice(startIndex.value, endIndex.value)
  return arr.map((item, index) => {
    return {
      data: item,

      style: {
        position: 'absolute',
        transform: `translateY(${(index + startIndex.value) * props.itemHeight}px)`
      }
    }
  })
})

onMounted(() => {
  onScroll()
})
// 首次加载的处理
const firstInitHandle = () => {
}
// 获取索引
const getIndex = (scrollTop: number) => {
  startIndex.value = Math.round(scrollTop / props.itemHeight)
  if (startIndex.value > bufferSize.value) {
    startIndex.value = startIndex.value - bufferSize.value
  }
  endIndex.value = Math.floor(startIndex.value + props.height / props.itemHeight) + bufferSize.value
}
//滚动到底部的回调处理
const scrollDownCallback = () => {
  if (props?.scrollButtonFn instanceof Function) {
    props.scrollButtonFn()
  }
}
let lastScroll = 0
// 滚动事件
const onScroll = (event?: Event) => {
  const {scrollTop, scrollHeight} = (event?.target as Element) || {}
  getIndex(scrollTop || 0)

  // 上下滚动判断
  if (scrollTop > lastScroll) {
    // console.log('下滚动')
    // endIndex.value = endIndex.value + bufferSize.value
  } else {
    // console.log('上滚动')
  }
  lastScroll = scrollTop
  if ((scrollTop || 0) + props.height === (scrollHeight || 0)) {
    scrollDownCallback()
  }
}
</script>

