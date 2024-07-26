<script setup lang="ts">
import { reactive } from 'vue'

import Canvas from "@/components/Canvas.vue";
import Settings from "@/components/Settings.vue";

const settings = reactive<{
    radiusRatio: number,
    speedRatio: number,
    isStarted: boolean,
}>({
    radiusRatio: 0.5,
    speedRatio: 2.41,
    isStarted: false,
})
</script>

<template>
    <div class="main">
        <Canvas :radiusRatio="settings.radiusRatio" :speedRatio="settings.speedRatio"
            :isStarted="settings.isStarted"></Canvas>
        <Settings v-model:radiusRatio="settings.radiusRatio" v-model:speedRatio="settings.speedRatio"
            v-model:isStarted="settings.isStarted"></Settings>
    </div>
</template>

<style scoped>
.main {
    display: flex;
    flex-direction: column;
    place-items: center;
    gap: 16px;
}

@media (min-width: 1024px) {
    .main {
        flex-direction: row;
    }
}
</style>
