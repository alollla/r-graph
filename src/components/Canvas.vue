<template>
    <div>
        test
        <canvas></canvas>
        <canvas></canvas>
    </div>
</template>

<script setup lang="ts">
// const ctx = document.querySelector("#canvas").getContext("2d");
// let points = [];
// let isStarted = false;
// let sizeRatio = document.querySelector("#size").value;
// let speedRatio = document.querySelector("#speed").value;

// function draw(ctx, t, onlyPoints) {
//     ctx.save();
//     ctx.clearRect(0, 0, 400, 400);
//     ctx.translate(200, 200);
//     ctx.strokeStyle = '#fff';
//     ctx.lineWidth = 0.5;

//     if (!onlyPoints) {
//         const x1 = 100 * Math.cos((t * Math.PI) / 30);
//         const y1 = 100 * Math.sin((t * Math.PI) / 30);
//         const x2 =
//             x1 + 100 * Math.cos(((t * Math.PI) / 30) * speedRatio) * sizeRatio;
//         const y2 =
//             y1 + 100 * Math.sin(((t * Math.PI) / 30) * speedRatio) * sizeRatio;

//         ctx.save();
//         ctx.beginPath();
//         ctx.moveTo(0, 0);
//         ctx.lineTo(x1, y1);
//         ctx.stroke();
//         ctx.restore();

//         ctx.save();
//         ctx.beginPath();
//         ctx.moveTo(x1, y1);
//         ctx.lineTo(x2, y2);
//         if (!points.some((point) => point[0] === x2 && point[1] === y2)) {
//             points.push([x2, y2]);
//         } else {
//             isStarted = false;
//         }
//         ctx.stroke();
//         ctx.restore();
//     }
//     ctx.save();
//     ctx.beginPath();
//     ctx.moveTo(points[0][0], points[0][1]);
//     points.forEach((point, index) => {
//         ctx.lineTo(point[0], point[1]);
//     });
//     ctx.stroke();
//     ctx.restore();

//     ctx.restore();

//     window.requestAnimationFrame(() => {
//         if (isStarted) {
//             draw(ctx, t + 1);
//         }
//     });
// }

// document.querySelector("#start").addEventListener("click", () => {
//     points = [];
//     ctx.clearRect(0, 0, 400, 400);
//     isStarted = true;
//     sizeRatio = document.querySelector("#size").value;
//     speedRatio = document.querySelector("#speed").value;
//     window.requestAnimationFrame(() => {
//         draw(ctx, 0);
//     });
// });

// document.querySelector("#stop").addEventListener("click", () => {
//     isStarted = false;
//     draw(ctx, 0, true);
// });


</script>

<style scoped></style>