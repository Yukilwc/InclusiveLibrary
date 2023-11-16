import{_ as l,r as o,o as d,c,a as e,b as n,w as h,d as s,e as r}from"./app.59b4e306.js";var _="/InclusiveLibrary/assets/\u5FAE\u4FE1\u622A\u56FE_20220523164842.a66dc4da.png",p="/InclusiveLibrary/assets/\u5FAE\u4FE1\u622A\u56FE_20220523164903.9fa9082b.png";const u={},m=e("h1",{id:"rust\u5E94\u7528\u8F6Cwasm",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#rust\u5E94\u7528\u8F6Cwasm","aria-hidden":"true"},"#"),s(" Rust\u5E94\u7528\u8F6CWasm")],-1),b=e("h2",{id:"\u73AF\u5883\u642D\u5EFA",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u73AF\u5883\u642D\u5EFA","aria-hidden":"true"},"#"),s(" \u73AF\u5883\u642D\u5EFA")],-1),f=s("\u53C2\u8003Rust\u73AF\u5883\u642D\u5EFA"),g=r('<p>\u4E4B\u540E\uFF0C\u8FD0\u884C<code>cargo install wasm-pack</code>,\u5B89\u88C5\u628Arust\u7F16\u8BD1\u6210wasm\u7684\u5DE5\u5177\u3002</p><h3 id="\u5F02\u5E38\u5904\u7406" tabindex="-1"><a class="header-anchor" href="#\u5F02\u5E38\u5904\u7406" aria-hidden="true">#</a> \u5F02\u5E38\u5904\u7406</h3><p>\u5173\u4E8E\u62A5\u9519:<code>error: failed to run custom build command for openssl-sys v0.9.73</code>,\u53EA\u662F\u56E0\u4E3Arust-openssl\u4F9D\u8D56\u4E86Openssl,\u9700\u8981\u63D0\u524D\u5B89\u88C5<br> Openssl\u5E76\u914D\u7F6E\u73AF\u5883\u53D8\u91CF\u3002</p><p><img src="'+_+'" alt="\u5F02\u5E38"></p><p>\u89E3\u51B3:</p>',5),w=s("1.windows\u5B89\u88C5opensssl: "),k={href:"http://slproweb.com/products/Win32OpenSSL.html",target:"_blank",rel:"noopener noreferrer"},v=s("Link"),E=s("2.\u73AF\u5883\u53D8\u91CF\u8BBE\u7F6E\uFF0C\u4E0D\u540C\u7EC8\u7AEF\u8BBE\u7F6E\u65B9\u6CD5\u4E0D\u540C."),x={href:"https://www.heyqz.fun/2021/06/12/Windows%E4%B8%8D%E5%90%8C%E7%BB%88%E7%AB%AF%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F%E8%AE%BE%E7%BD%AE/",target:"_blank",rel:"noopener noreferrer"},L=s("Link"),S=r('<ul><li><code>$env:OPENSSL_NO_VENDOR=1</code> \u4EE4rust\u7F16\u8BD1open-ssl\u65F6\uFF0C\u4E0D\u9002\u7528Perl\u6765\u7F16\u8BD1source\uFF0C\u800C\u662F\u76F4\u63A5\u4F7F\u7528\u9884\u5148\u7F16\u8BD1\u597D\u7684openssl</li><li><code>$env:OPENSSL_DIR=&quot;C:\\Program Files\\OpenSSL-Win64\\&quot;</code> \u6307\u5B9Aopenssl\u7F16\u8BD1\u540E\u7684\u76EE\u5F55\uFF0Crust\u4F1A\u81EA\u52A8\u4ECE\u4E2D\u67E5\u627Einclude,bin\u7B49\u6587\u4EF6\u5939\uFF0C\u7F16\u8BD1rust-openssl</li><li><code>$env:VCPKG_ROOT=&quot;C:\\Program Files\\OpenSSL-Win64\\&quot;</code>,\u4E0D\u786E\u5B9A\u662F\u5426\u6709\u6548\uFF0C\u5B98\u65B9\u6587\u6863\u8BF4\u662F<strong>The openssl-sys crate will automatically detect OpenSSL installations via Homebrew on macOS and vcpkg on Windows.</strong>,\u4E5F\u5C31\u662F\u6307\u5B9AVCPKG\u76EE\u5F55\u53EF\u80FD\u4E5F\u80FD\u63D0\u4F9B\u9884\u7F16\u8BD1\u7684openssl\u76EE\u5F55\uFF1F</li></ul><p>\u6700\u540E\uFF0C\u5B89\u88C5\u7F16\u8BD1wasm-pack\u6210\u529F</p><p><img src="'+p+'" alt="Link"></p><h3 id="\u5F02\u5E38\u5904\u7406\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u5F02\u5E38\u5904\u7406\u53C2\u8003" aria-hidden="true">#</a> \u5F02\u5E38\u5904\u7406\u53C2\u8003</h3>',4),q={href:"https://github.com/rustwasm/wasm-pack/issues/1108",target:"_blank",rel:"noopener noreferrer"},O=s("\u53C2\u8003"),R={href:"https://docs.rs/crate/openssl/0.9.24",target:"_blank",rel:"noopener noreferrer"},W=s("\u53C2\u8003"),B={href:"https://stackoverflow.com/questions/68646684/cant-install-cargo-wasm-pack",target:"_blank",rel:"noopener noreferrer"},N=s("\u53C2\u8003"),y={href:"https://docs.rs/openssl/latest/openssl/",target:"_blank",rel:"noopener noreferrer"},A=s("Link"),C=e("h2",{id:"\u6837\u4F8B",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u6837\u4F8B","aria-hidden":"true"},"#"),s(" \u6837\u4F8B")],-1),D=e("h3",{id:"\u8FD0\u884C",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u8FD0\u884C","aria-hidden":"true"},"#"),s(" \u8FD0\u884C")],-1),P=r(`<h3 id="\u5DE5\u7A0B\u6784\u5EFA" tabindex="-1"><a class="header-anchor" href="#\u5DE5\u7A0B\u6784\u5EFA" aria-hidden="true">#</a> \u5DE5\u7A0B\u6784\u5EFA</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>cargo new --lib hello-wasm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u5B9E\u8DF5pngquant\u8F6Cwasm" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u8DF5pngquant\u8F6Cwasm" aria-hidden="true">#</a> \u5B9E\u8DF5pngquant\u8F6Cwasm</h2><h2 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003</h2>`,4),V={href:"http://pngquant.com/install.html",target:"_blank",rel:"noopener noreferrer"},F=s("pngquant\u6587\u6863"),I={href:"https://pngquant.org/lib/",target:"_blank",rel:"noopener noreferrer"},T=s("pngquant lib"),$={href:"https://developer.mozilla.org/en-US/docs/WebAssembly/Rust_to_wasm",target:"_blank",rel:"noopener noreferrer"},z=s("MDN WebAssembly Rust_to_wasm"),G={href:"https://rustwasm.github.io/docs/wasm-bindgen/",target:"_blank",rel:"noopener noreferrer"},K=s("wasm-bindgen\u6587\u6863");function H(M,U){const a=o("RouterLink"),t=o("ExternalLinkIcon"),i=o("Rust2WasmDemo");return d(),c("div",null,[m,b,e("p",null,[n(a,{to:"/Tools/EnvironmentSetup/Rust/"},{default:h(()=>[f]),_:1})]),g,e("p",null,[w,e("a",k,[v,n(t)])]),e("p",null,[E,e("a",x,[L,n(t)])]),S,e("p",null,[e("a",q,[O,n(t)])]),e("p",null,[e("a",R,[W,n(t)])]),e("p",null,[e("a",B,[N,n(t)])]),e("p",null,[e("a",y,[A,n(t)])]),C,D,n(i),P,e("p",null,[e("a",V,[F,n(t)])]),e("p",null,[e("a",I,[T,n(t)])]),e("p",null,[e("a",$,[z,n(t)])]),e("p",null,[e("a",G,[K,n(t)])])])}var J=l(u,[["render",H],["__file","index.html.vue"]]);export{J as default};