<template>
  <div class="main">
    <Canvas></Canvas>
    <Settings></Settings>
  </div>
</template>

<script setup lang="ts">
import Canvas from "@/components/Canvas.vue";
import Settings from "@/components/Settings.vue";

</script>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
}

@media (min-width: 1024px) {
  .main {
    flex-direction: row;
  }
}
</style>
