function loadJSAsync(url: string, options: {
    addClass?: string
}) {
    let script = document.createElement('script');
    script.type = 'text/javascript';
    options.addClass && script.classList.add(options.addClass)
    return new Promise((resolve) => {
        // // if (script.readyState) {
        // //     script.onreadystatechange = function () {
        // //         if (script.readyState === 'loaded' || script.readyState === 'complete') {
        // //             script.onreadystatechange = null;
        // //             resolve(null)
        // //         }
        // //     }
        // // } else {
        script.onload = function () {
            resolve(null)
        }
        // }
        script.src = url;
        document.body.appendChild(script);
    })


}
export {
    loadJSAsync
}