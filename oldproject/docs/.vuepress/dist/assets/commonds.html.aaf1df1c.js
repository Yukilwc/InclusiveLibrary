import{_ as n,o as s,c as e,e as a}from"./app.59b4e306.js";const i={},l=a(`<h1 id="golang\u64CD\u4F5C\u6536\u5F55" tabindex="-1"><a class="header-anchor" href="#golang\u64CD\u4F5C\u6536\u5F55" aria-hidden="true">#</a> golang\u64CD\u4F5C\u6536\u5F55</h1><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># go\u521D\u59CB\u5316\u9879\u76EE\u4F7F\u7528module</span>
go mod init <span class="token operator">&lt;</span>module_name<span class="token operator">&gt;</span>
<span class="token comment"># \u4E0B\u8F7D\u9700\u8981\u7684\u6A21\u5757\uFF0C\u79FB\u9664\u672A\u4F7F\u7528\u7684\u6A21\u5757</span>
go mod tidy
<span class="token comment"># \u628A\u5168\u5C40\u6A21\u5757\u62F7\u8D1D\u4E00\u4EFD\u5230\u9879\u76EE\u4E2D</span>
go mod vendor

<span class="token comment"># \u5B89\u88C5\u4F9D\u8D56 \u4F7F\u7528mod\u540E\uFF0Cget\u4F1A\u88AB\u63A5\u7BA1\uFF0C\u540C\u6B65go.mod</span>
go get -u module_name

<span class="token comment"># go install \u662F\u7528\u6765\u7F16\u8BD1\u5E76\u5B89\u88C5\u4EE3\u7801\u5305\u6216\u53EF\u6267\u884C\u6587\u4EF6\u7684\u547D\u4EE4\uFF0C</span>
<span class="token comment"># \u5B83\u4F1A\u5C06\u7F16\u8BD1\u540E\u7684\u7ED3\u679C\u653E\u5230 $GOPATH/pkg \u6216 $GOPATH/bin \u76EE\u5F55\u4E0B\uFF0C\u4EE5\u4FBF\u4E8E\u91CD\u590D\u4F7F\u7528\u6216\u6267\u884C</span>
go <span class="token function">install</span> name

<span class="token comment"># \u67E5\u770B\u5168\u90E8\u73AF\u5883\u53D8\u91CF</span>
go <span class="token function">env</span>
<span class="token comment"># \u67E5\u770B\u6307\u5B9A\u73AF\u5883\u53D8\u91CF</span>
go <span class="token function">env</span> <span class="token operator">&lt;</span>variable name<span class="token operator">&gt;</span>
<span class="token comment"># \u8BBE\u7F6E\u73AF\u5883\u53D8\u91CF</span>
go <span class="token function">env</span> -w \u53D8\u91CF\u540D<span class="token operator">=</span>\u8BBE\u7F6E\u503C

go build 

<span class="token comment"># \u8FD0\u884C</span>
go run main.go

<span class="token comment"># \u4ECE\u672C\u5730vendor\u4E2D\u8BFB\u53D6\u4F9D\u8D56\u8FDB\u884C\u7F16\u8BD1\uFF0C\u800C\u4E0D\u662F\u7F51\u7EDC\u6216\u8005\u5168\u5C40\u7F13\u5B58</span>
<span class="token comment"># \u8FD9\u9002\u7528\u4E8E\u4F7F\u7528go mod vendor\u6765\u5B89\u88C5\u4F9D\u8D56\u7684\u60C5\u666F</span>
<span class="token comment"># \u6B64\u65F6 go.mod \u6587\u4EF6\u4F1A\u88AB\u5FFD\u7565</span>
go build -mod<span class="token operator">=</span>vendor -o server <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[l];function d(c,m){return s(),e("div",null,o)}var v=n(i,[["render",d],["__file","commonds.html.vue"]]);export{v as default};
