<template>
    <div class="settings">
        <div class="buttons">
            <button>Start</button>
            <button>Stop</button>
        </div>
        <label for="radius" title>Radius ratio:</label>
        <input type="number" id="radius" min="0" max="1" value="0.5" step="0.05" />
        <label for="speed">Speed ratio:</label>
        <input type="number" id="speed" min="0" max="10" value="2.41" step="0.01" />
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.settings {
    display: flex;
    flex-direction: row;
    gap: 8px;
    place-items: center;
}

.buttons {
    display: flex;
    gap: 8px;
}

@media (min-width: 1024px) {
    .settings {
        flex-direction: column;
        place-items: normal;
    }
}
</style>