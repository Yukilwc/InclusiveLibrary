import{_ as a,r as i,o as l,c as d,a as e,b as r,e as n,d as c}from"./app.59b4e306.js";const o={},t=n(`<h1 id="\u5E38\u7528\u547D\u4EE4\u884C" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u547D\u4EE4\u884C" aria-hidden="true">#</a> \u5E38\u7528\u547D\u4EE4\u884C</h1><h2 id="\u9ED8\u8BA4cmd" tabindex="-1"><a class="header-anchor" href="#\u9ED8\u8BA4cmd" aria-hidden="true">#</a> \u9ED8\u8BA4cmd</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u67E5\u770B\u547D\u4EE4\u4F4D\u7F6E</span>
where py
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="powershell" tabindex="-1"><a class="header-anchor" href="#powershell" aria-hidden="true">#</a> powershell</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u67E5\u770B\u547D\u4EE4\u4F4D\u7F6E</span>
where.exe py
<span class="token comment"># \u67E5\u770B\u73AF\u5883\u53D8\u91CF</span>
<span class="token variable">$env</span>:PY_PYTHON
<span class="token comment"># \u8BBE\u7F6E\u73AF\u5883\u53D8\u91CF</span>
<span class="token variable">$env</span>:PY_PYTHON <span class="token operator">=</span> <span class="token number">3</span>

<span class="token comment"># \u6253\u5370\u5F53\u524D\u76EE\u5F55\u6811\u5F62\u7ED3\u6784</span>
tree
<span class="token comment"># \u505C\u6B62mysql\u670D\u52A1</span>
gsudo
net stop mysql

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F7F\u7528curl</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u4E00\u5B9A\u8981\u5E26\u7740.exe</span>
curl.exe -i -X GET http://localhost:8888/api/order/get/1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F7F\u7528Invoke-WebRequest</p>`,8),m={href:"https://learn.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/invoke-restmethod?view=powershell-7.3",target:"_blank",rel:"noopener noreferrer"},v=c("\u6587\u6863"),p=n(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u4E0D\u5E26.exe,\u5C31\u662F\u4F5C\u4E3AInvoke-WebRequest\u7684\u522B\u540D</span>
<span class="token function">curl</span> -Method GET -Uri http://localhost:8888/api/order/get/1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function h(u,b){const s=i("ExternalLinkIcon");return l(),d("div",null,[t,e("p",null,[e("a",m,[v,r(s)])]),p])}var k=a(o,[["render",h],["__file","windows.html.vue"]]);export{k as default};
