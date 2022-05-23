<template>
    <div>rust 2 wasm demo</div>
    <div class=''>
        <el-button type="primary" @click="doCall">调用wasm方法</el-button>
    </div>
</template>

<script lang='ts' setup>
import init, { greet } from "./pkg/hello_wasm";

const doCall = () => {
    init()
        .then(() => {
            greet("WebAssembly")
        });
}
</script>

<style scoped lang="scss">
</style>