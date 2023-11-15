import{_ as n,o as s,c as e,e as a}from"./app.59b4e306.js";const i={},r=a(`<h1 id="markdown\u6280\u5DE7" tabindex="-1"><a class="header-anchor" href="#markdown\u6280\u5DE7" aria-hidden="true">#</a> Markdown\u6280\u5DE7</h1><h2 id="\u83B7\u5F97\u76EE\u5F55\u6811" tabindex="-1"><a class="header-anchor" href="#\u83B7\u5F97\u76EE\u5F55\u6811" aria-hidden="true">#</a> \u83B7\u5F97\u76EE\u5F55\u6811</h2><p>\u9996\u5148\u5B89\u88C5\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> -g treer
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5B89\u88C5\u5B8C\u6210\u540E\uFF0C\u4F7F\u7528treer\u6307\u4EE4\u751F\u6210\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u76F4\u63A5\u6253\u5370</span>
treer -d D:<span class="token punctuation">\\</span>test
<span class="token comment"># \u5BFC\u51FA</span>
treer -d D:<span class="token punctuation">\\</span>test -e D:<span class="token punctuation">\\</span>export.text
<span class="token comment"># \u5FFD\u7565</span>
treer -d D:<span class="token punctuation">\\</span>test -i .git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5BFC\u51FA\u5982\u4E0B\uFF0C\u4F7F\u7528\u4EE3\u7801\u6A21\u5757\uFF0C\u7C7B\u578B\u6307\u5B9A\u4E3Ash\u5373\u53EF\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>\u251C\u2500go.mod
\u251C\u2500go.sum
\u251C\u2500main.go
\u251C\u2500my
<span class="token operator">|</span> \u251C\u2500draw
<span class="token operator">|</span> <span class="token operator">|</span>  \u251C\u2500draw.go
<span class="token operator">|</span> <span class="token operator">|</span>  \u2514export.go
<span class="token operator">|</span> \u251C\u2500color
<span class="token operator">|</span> <span class="token operator">|</span>   \u2514color.go
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),l=[r];function d(o,t){return s(),e("div",null,l)}var p=n(i,[["render",d],["__file","skill.html.vue"]]);export{p as default};
