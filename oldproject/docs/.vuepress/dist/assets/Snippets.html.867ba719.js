import{_ as n,o as a,c as s,e as t}from"./app.59b4e306.js";const e={},p=t(`<h1 id="\u6536\u5F55\u4E00\u4E9Bvue\u7684\u5B9E\u7528\u4EE3\u7801\u7247\u6BB5" tabindex="-1"><a class="header-anchor" href="#\u6536\u5F55\u4E00\u4E9Bvue\u7684\u5B9E\u7528\u4EE3\u7801\u7247\u6BB5" aria-hidden="true">#</a> \u6536\u5F55\u4E00\u4E9Bvue\u7684\u5B9E\u7528\u4EE3\u7801\u7247\u6BB5</h1><p><strong>\u5B8C\u5168\u7EE7\u627F\u4E00\u4E2A\u7EC4\u4EF6\u7684\u5168\u90E8\u4E8B\u4EF6\uFF0C\u5C5E\u6027\uFF0Cslot\uFF0C\u8FDB\u884C\u5C01\u88C5</strong></p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-table</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>my-edit-table-container<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-bind</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>$attrs<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-on</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>$listeners<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span>
      <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>name in Object.keys(this.$slots)<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>name<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>name<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-table</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),o=[p];function l(c,u){return a(),s("div",null,o)}var k=n(e,[["render",l],["__file","Snippets.html.vue"]]);export{k as default};