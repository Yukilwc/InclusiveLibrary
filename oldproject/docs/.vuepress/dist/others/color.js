
const colorRgb = (color) => {
    try {

        // 16进制颜色值的正则
        var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
        // 把颜色值变成小写
        var color = color.toLowerCase();
        if (reg.test(color)) {
            // 如果只有三位的值，需变成六位，如：#fff => #ffffff
            if (color.length === 4) {
                var colorNew = "#";
                for (var i = 1; i < 4; i += 1) {
                    colorNew += color.slice(i, i + 1).concat(color.slice(i, i + 1));
                }
                color = colorNew;
            }
            // 处理六位的颜色值，转为RGB
            var colorChange = [];
            for (var i = 1; i < 7; i += 2) {
                colorChange.push(parseInt("0x" + color.slice(i, i + 2)));
            }
            return colorChange.join(",");
        } else {
            return color;
        }
    }
    catch (e) {
        console.error(e)
        return color
    }

};

var blender = function (color_1, color_2, weight) {
    color_1 = color_1.replace('#', '')
    color_2 = color_2.replace('#', '')
    function d2h(d) { return d.toString(16); }  // convert a decimal value to hex
    function h2d(h) { return parseInt(h, 16); } // convert a hex value to decimal 

    weight = (typeof (weight) !== 'undefined') ? weight : 50; // set the weight to 50%, if that argument is omitted

    var color = "#";

    for (var i = 0; i <= 5; i += 2) { // loop through each of the 3 hex pairs—red, green, and blue
        var v1 = h2d(color_1.substr(i, 2)), // extract the current pairs
            v2 = h2d(color_2.substr(i, 2)),

            // combine the current pairs from each source color, according to the specified weight
            val = d2h(Math.round(v2 + (v1 - v2) * (weight / 100.0)));

        while (val.length < 2) { val = '0' + val; } // prepend a '0' if val results in a single digit

        color += val; // concatenate val to our new color string
    }

    return color; // PROFIT!
};
// 控制Elementui的衍生色系
class ElementUIColor {
    // 基础色系
    base = {
        primary: '#409EFF',
        success: '#00ae66',
        warning: '#ff6600',
        danger: '#f00036',
        info: '#909399'

    }
    list = [
    ]
    constructor() {

    }
    // 生成一套主题
    generateTheme = ({
        primary,
        success,
        warning,
        danger,
        info
    }) => {
        // console.time('generateColor')
        this.base.primary = primary || this.base.primary
        this.base.success = success || this.base.success
        this.base.warning = warning || this.base.warning
        this.base.danger = danger || this.base.danger
        this.base.info = info || this.base.info
        let list = []
        // calc primary color 
        list = this.mainTheme(list)
        list = this.darkTheme(list)
        list = this.primaryLight(list)
        list = this.lightLighterDisabled(list)
        this.list = list
        // console.timeEnd('generateColor')
        return this
    }
    mainTheme = (list) => {
       let keys = Object.keys(this.base)
        keys.forEach(key => {
            list.push({
                name: `--theme-${key}`,
                value: this.base[key]
            })
        })
        return list

    }
    darkTheme = (list) => {
        let keys = Object.keys(this.base)
        keys.forEach(key => {
            list.push({
                name: `--theme-${key}-dark`,
                value: blender('#000000', this.base[key], 10)
            })
        })
        return list
    }
    primaryLight = (list) => {
        let primary = this.base.primary
        for(let i = 1;i<=9;i++) {
            list.push({
                name: `--theme-primary-light-${i}`,
                value: blender('#ffffff', primary, i*10)
            })
 
        }
        return list
    }
    lightLighterDisabled = (list) => {
        let keys = Object.keys(this.base)
        keys.forEach(key => {
            list.push({
                name: `--theme-${key}-light`,
                value: blender('#ffffff', this.base[key], 80)
            })
            list.push({
                name: `--theme-${key}-lighter`,
                value: blender('#ffffff', this.base[key], 90)
            })
            list.push({
                name: `--theme-${key}-disabled`,
                value: blender('#ffffff', this.base[key], 50)
            })
            list.push({
                name: `--theme-${key}-light-2`,
                value: blender('#ffffff', this.base[key], 20)
            })
 
 
        })
        return list
 
    }
}
export {
    colorRgb,
    blender,
    ElementUIColor
}