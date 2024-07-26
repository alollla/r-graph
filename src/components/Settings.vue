<script setup lang="ts">
const radiusRatio = defineModel<number>('radiusRatio');
const speedRatio = defineModel<number>('speedRatio');
const isStarted = defineModel<boolean>('isStarted');

const toggle = () => {
    isStarted.value = !isStarted.value
}
</script>

<template>
    <div class="settings">
        <div class="buttons">
            <button :disabled="isStarted" @click="toggle">Start</button>
            <button :disabled="!isStarted" @click="toggle">Stop</button>
        </div>
        <label for="radius" title="0 - 1">Radius ratio:</label>
        <input type="number" id="radius" min="0" max="1" v-model="radiusRatio" step="0.05" />
        <label for="speed" title="0 - 10">Speed ratio:</label>
        <input type="number" id="speed" min="0" max="10" v-model="speedRatio" step="0.01" />
    </div>
</template>

<style scoped>
.settings {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.buttons {
    display: flex;
    gap: 8px;
}

@media (min-width: 768px) {
    .settings {
        flex-direction: row;
        place-items: center;
    }
}


@media (min-width: 1024px) {
    .settings {
        flex-direction: column;
        place-items: normal;
    }
}
</style>