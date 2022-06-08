<template>
    <div>CanvasWorker</div>
    <div class='canvas-container'>
        <canvas id="canvas"></canvas>
    </div>
</template>

<script lang='ts' setup>
import { onMounted } from 'vue';

// import StarsCanvasWorker from './StarsCanvasWorker?worker'

// starsCanvasWorker.terminate();
onMounted(() => {
    let url = new URL("./StarsCanvasWorker", import.meta.url)
    console.log('==========url', url)
    const starsCanvasWorker = new Worker(url)
    starsCanvasWorker.postMessage({ test: 1 })
    starsCanvasWorker.onmessage = (e) => {
        console.log('==========main thread worker onmessage', e)
    }
    draw()
})
const draw = () => {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement
    const ctx = canvas.getContext('2d')
    let w = 500
    let h = 300
    canvas.width = w
    canvas.height = h
    let hue = 217
    let stars = []
    let count = 0
    let maxStars = 1400

    // Cache gradient
    let canvas2 = document.createElement('canvas')
    let ctx2 = canvas2.getContext('2d')
    canvas2.width = 100;
    canvas2.height = 100;
    let half = canvas2.width / 2
    let gradient2 = ctx2.createRadialGradient(half, half, 0, half, half, half)
    gradient2.addColorStop(0.025, '#fff');
    gradient2.addColorStop(0.1, 'hsl(' + hue + ', 61%, 33%)');
    gradient2.addColorStop(0.25, 'hsl(' + hue + ', 64%, 6%)');
    gradient2.addColorStop(1, 'transparent');

    ctx2.fillStyle = gradient2;
    ctx2.beginPath();
    ctx2.arc(half, half, half, 0, Math.PI * 2);
    ctx2.fill();

    // End cache

    function random(min?: number, max?: number) {
        if (arguments.length < 2) {
            max = min;
            min = 0;
        }

        if (min > max) {
            var hold = max;
            max = min;
            min = hold;
        }

        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function maxOrbit(x, y) {
        let max = Math.max(x, y)
        let diameter = Math.round(Math.sqrt(max * max + max * max));
        return diameter / 2;
    }
    class Star {
        orbitRadius: number
        radius: number
        orbitX: number
        orbitY: number
        timePassed: number
        speed: number
        alpha: number
        constructor() {
            this.orbitRadius = random(maxOrbit(w, h));
            this.radius = random(60, this.orbitRadius) / 12;
            this.orbitX = w / 2;
            this.orbitY = h / 2;
            this.timePassed = random(0, maxStars);
            this.speed = random(this.orbitRadius) / 50000;
            this.alpha = random(2, 10) / 10;
            count++;
            stars[count] = this;

        }
    }

    // Star.prototype.draw = function () {
    //     var x = Math.sin(this.timePassed) * this.orbitRadius + this.orbitX,
    //         y = Math.cos(this.timePassed) * this.orbitRadius + this.orbitY,
    //         twinkle = random(10);

    //     if (twinkle === 1 && this.alpha > 0) {
    //         this.alpha -= 0.05;
    //     } else if (twinkle === 2 && this.alpha < 1) {
    //         this.alpha += 0.05;
    //     }

    //     ctx.globalAlpha = this.alpha;
    //     ctx.drawImage(canvas2, x - this.radius / 2, y - this.radius / 2, this.radius, this.radius);
    //     this.timePassed += this.speed;
    // }

    // for (var i = 0; i < maxStars; i++) {
    //     new Star();
    // }

    // function animation() {
    //     ctx.globalCompositeOperation = 'source-over';
    //     ctx.globalAlpha = 0.8;
    //     ctx.fillStyle = 'hsla(' + hue + ', 64%, 6%, 1)';
    //     ctx.fillRect(0, 0, w, h)

    //     ctx.globalCompositeOperation = 'lighter';
    //     for (var i = 1, l = stars.length; i < l; i++) {
    //         stars[i].draw();
    //     };

    //     window.requestAnimationFrame(animation);
    // }

    // animation();
}
</script>

<style scoped lang="scss">
.canvas-container {
    background: #060e1b;
    overflow: hidden;

    canvas {}
}
</style>