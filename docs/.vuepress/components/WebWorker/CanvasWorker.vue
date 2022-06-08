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
    const canvas = document.getElementById('canvas') as HTMLCanvasElement
    let offscreen = canvas.transferControlToOffscreen()
    starsCanvasWorker.postMessage({ canvas: offscreen }, [offscreen])
})

</script>

<style scoped lang="scss">
.canvas-container {
    background: #060e1b;
    overflow: hidden;

    canvas {}
}
</style>