<script lang="ts" setup>
import virtualList from "../packages/virtual-list/src/index.vue";

const list = Array.from({length: 1000}, (_, index) => index + 1)
</script>

<template>
  <virtual-list :list="list" :height="300" :item-height="20">
    <template #default="{item}">
        <span>
       {{ item.data }}
      </span>
    </template>

  </virtual-list>
</template>

<style scoped>

</style>
