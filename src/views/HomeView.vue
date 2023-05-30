<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
const msg = "void admin"
</script>

<template>
  <main>
    <el-button type="primary">{{ msg }}</el-button>
    <TheWelcome />
  </main>
</template>
