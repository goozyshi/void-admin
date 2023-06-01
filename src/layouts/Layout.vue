<template>
  <div>
    <el-container>
      <el-aside width="200px">
        <div v-for="route in constantRoutes" :key="route">
          <div>{{route.name}}</div>
        </div>
      </el-aside>
      <el-container>
        <layout-header></layout-header>
        <layout-content></layout-content>
        <layout-footer></layout-footer>
      </el-container>
    </el-container>
  </div>
</template>
<script lang="ts" setup>
  import LayoutHeader from "./header/Header.vue";
  import LayoutContent from "./content/Content.vue";
  import LayoutFooter from "./footer/Footer.vue";
  import { constantRoutes } from "../router";
</script>
