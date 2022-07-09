<template>
    <div class=''>
        <div class=''>修改容器宽度</div>
        <el-input placeholder='请输入容器宽度' v-model='inputWidth' @input="outerWidth = inputWidth; "></el-input>
        <el-button>确认</el-button>
    </div>
    <div class='outer-container mt10' :style="{ width: `${outerWidth}px` }">
        <div class="tags-list-container">
            <div class='tags-list-wrapper'>
                <div class='list' v-for='(itemClone, indexClone) in 2' :key='indexClone'
                    :class="indexClone == 0 ? 'list--for-calc-length' : 'list--for-show'">
                    <div class='item' v-for='(item, index) in showColorList' :key='index'
                        :style="{ backgroundColor: hex2Rgba(item.color, '0.2') }">
                        <div class='item-wrapper'>
                            <div class='text'>{{ item.name }}</div>
                        </div>
                    </div>
                    <div class='item--add' v-if="dataReady && overList.length > 0">
                        +{{ overList.length }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang='ts' setup>
import { onMounted, Ref, ref, nextTick } from 'vue';

interface ColorItem {
    name: string,
    color: string,
}
const dataReady = ref(false)
const outerWidth = ref(380)
const inputWidth = ref(380)
const offset = 40 // +按钮宽度占位
const allColorList: ColorItem[] = [
    {
        name: "name1",
        color: '#67C23A'
    },
    {
        name: "name2name2",
        color: '#E6A23C'
    }, {
        name: "name33333333",
        color: '#F56C6C'
    },
    {
        name: "name4name4",
        color: '#909399'
    },
    {
        name: "name555",
        color: '#409EFF'
    },

]
// const showColorList: Ref<ColorItem[]> = ref([])
const showColorList: Ref<ColorItem[]> = ref([...allColorList])
const overList: Ref<ColorItem[]> = ref([])

const hex2Rgba = function (hex: string, opacity: string) {
    if (!hex) return ''
    var sColor = hex.toLowerCase();
    //十六进制颜色值的正则表达式
    var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
    // 如果是16进制颜色
    if (sColor && reg.test(sColor)) {
        if (sColor.length === 4) {
            var sColorNew = "#";
            for (var i = 1; i < 4; i += 1) {
                sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
            }
            sColor = sColorNew;
        }
        //处理六位的颜色值
        var sColorChange = [];
        for (var i = 1; i < 7; i += 2) {
            sColorChange.push(parseInt("0x" + sColor.slice(i, i + 2)));
        }
        sColorChange.push(opacity)
        return "RGBA(" + sColorChange.join(",") + ")";
    }
    return sColor;
};
onMounted(async () => {
    await refresh()
    listenSize()
})
const refresh = async () => {
    showColorList.value = [...allColorList]
    overList.value = []
    dataReady.value = false
    await asyncNextTick()
    for (let i = allColorList.length - 1; i >= 0; i--) {
        let width = document.querySelector(".list--for-calc-length")?.getBoundingClientRect().width
        let containerWidth = document.querySelector(".list--for-show")?.getBoundingClientRect().width
        // console.log('==========width', width, i)
        // console.log('========== container width', containerWidth)
        // console.log('==========list result', showColorList.value, overList.value)
        if (overList.value.length === 0) {
            // 是第一轮，不考虑偏差值
            if (width <= containerWidth) {
                console.log('==========第一轮未超过容器宽度',)
                break
            }

        }
        else {
            if (width <= containerWidth - offset) {
                console.log('==========未超过容器宽度',)
                break
            }
        }
        let item = showColorList.value.pop()
        overList.value = [item, ...overList.value]
        await asyncNextTick()
    }
    dataReady.value = true
}
const listenSize = () => {
    var ro = new ResizeObserver(entries => {
        // for (let entry of entries) {
        //     const cr = entry.contentRect;
        //     console.log('Element:', entry.target);
        //     console.log(`Element size: ${cr.width}px x ${cr.height}px`);
        //     console.log(`Element padding: ${cr.top}px ; ${cr.left}px`);
        // }
        refresh()
    });

    // 观察一个或多个元素
    ro.observe(document.querySelector('.tags-list-container'))
}
// vue2版本处理
const asyncNextTick = async () => {
    return new Promise(resolve => {
        nextTick(() => {
            resolve('')
        })
    })
}
console.log('==========hex2Rgb', hex2Rgba("#409EFF", '0.8'))
</script>

<style scoped lang="scss">
.outer-container {
    border: 1px solid gray;
}

.tags-list-container {
    max-width: 100%;

    .tags-list-wrapper {
        position: relative;
        overflow: hidden;

        .list {
            display: flex;
            align-items: center;
            flex-wrap: nowrap;

            .item {
                margin-left: 6px;
                padding: 0 4px;

                .item-wrapper {
                    .text {}
                }

                &:first-child {
                    margin-left: 0;
                }
            }

            .item--add {
                width: 40px; // 同步js
                display: flex;
                align-items: center;
                justify-content: center;
                border: 1px solid red;

            }
        }

        .list--for-calc-length {
            opacity: 0;
            height: 0;
            position: absolute;
            top: 0px;
            left: 0px;
        }
    }
}
</style>