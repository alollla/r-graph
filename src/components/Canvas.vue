<script setup lang="ts">
import { watch, ref, onMounted } from "vue";

import { drawSticks, drawLines, isStarted } from "@/utils/draw";

const props = defineProps<{
    radiusRatio: number,
    speedRatio: number,
    isStarted: boolean,
}>();

const size = {
    width: 400,
    height: 400,
}

const linesRef = ref(null);
const sticksRef = ref(null);
const linesCtx = ref(null);
const sticksCtx = ref(null);

onMounted(() => {
    linesCtx.value = linesRef.value.getContext('2d');
    sticksCtx.value = sticksRef.value.getContext('2d');
});

watch(() => props.isStarted, (newVal) => {
    isStarted.value = newVal;
    if (newVal) {
        linesCtx.value.clearRect(0, 0, size.width, size.height);
        drawLines(linesCtx.value, 0, props.radiusRatio, props.speedRatio, (100 + 100 * props.radiusRatio), 0);
        drawSticks(sticksCtx.value, 0, props.radiusRatio, props.speedRatio);
    } else {
        sticksCtx.value.clearRect(0, 0, size.width, size.height);
    }
})
</script>

<template>
    <div class="canvas-container">
        <canvas ref="linesRef" :width="size.width" :height="size.height"></canvas>
        <canvas class="sticks" ref="sticksRef" :width="size.width" :height="size.height"></canvas>
    </div>
</template>

<style scoped>
.canvas-container {
    position: relative;
}

.sticks {
    position: absolute;
    left: 0;
    top: 0;
}
</style>