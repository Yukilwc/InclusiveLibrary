<template>
    <div>CanvasWorker</div>
</template>

<script lang='ts' setup>
// import StarsCanvasWorker from './StarsCanvasWorker?worker'
const starsCanvasWorker = new Worker(new URL("./StarsCanvasWorker", import.meta.url))
starsCanvasWorker.postMessage({ test: 1 })
starsCanvasWorker.onmessage = (e)=>{
    console.log('==========main thread worker onmessage',e)
}
// starsCanvasWorker.terminate();
</script>

<style scoped lang="scss">
</style>