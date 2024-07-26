export const isStarted = { value: false };

export function drawSticks(ctx: any, t: number, radiusRatio: number, speedRatio: number) {
    ctx.save();
    ctx.clearRect(0, 0, 400, 400);
    ctx.translate(200, 200);
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 0.5;

    const x1 = 100 * Math.cos((t * Math.PI) / 30);
    const y1 = 100 * Math.sin((t * Math.PI) / 30);
    const x2 =
        x1 + (100 * radiusRatio) * Math.cos((t * Math.PI) / 30 * speedRatio);
    const y2 =
        y1 + (100 * radiusRatio) * Math.sin((t * Math.PI) / 30 * speedRatio);

    ctx.save();
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(x1, y1);
    ctx.stroke();
    ctx.restore();

    ctx.save();
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.restore();

    ctx.restore();

    window.requestAnimationFrame(() => {
        if (isStarted.value) {
            drawSticks(ctx, t + 1, radiusRatio, speedRatio)
        }
    });
}

let r = function (t: number) {
    return 200 + Math.sin(t / 120) * 55;
};
let g = function (t: number) {
    return Math.sin(t / 120) * 255;
};
let b = function (t: number) {
    return 200 + Math.sin(t / 60) * 55;
};

export function drawLines(ctx: any, t: number, radiusRatio: number, speedRatio: number, x: number, y: number) {
    ctx.save();
    ctx.translate(200, 200);
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 0.5;

    const x1 =
        100 * Math.cos((t * Math.PI) / 30) + (100 * radiusRatio) * Math.cos((t * Math.PI) / 30 * speedRatio);
    const y1 =
        100 * Math.sin((t * Math.PI) / 30) + (100 * radiusRatio) * Math.sin((t * Math.PI) / 30 * speedRatio);

    ctx.save();
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.strokeStyle = `rgb(
        ${r(t)},
        ${g(t)},
        ${b(t)}
        )`;
    ctx.lineTo(x1, y1);
    ctx.stroke();
    ctx.restore();

    ctx.restore();

    window.requestAnimationFrame(() => {
        if (isStarted.value) {
            drawLines(ctx, t + 1, radiusRatio, speedRatio, x1, y1);
        }
    });
}
