<script setup lang="ts">
  import {useCounterStore} from '@/stores/counter'
  const useCounter = useCounterStore()
</script>

<template>
  <main>
    <el-button type="primary" @click="useCounter.increment">当前点击数：{{ useCounter.count }}</el-button>
  </main>
</template>
