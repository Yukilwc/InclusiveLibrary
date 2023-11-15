import{_ as n,o as e,c as s,e as i}from"./app.59b4e306.js";const a={},l=i(`<h1 id="\u547D\u4EE4\u884C\u76F8\u5173\u6C47\u603B" tabindex="-1"><a class="header-anchor" href="#\u547D\u4EE4\u884C\u76F8\u5173\u6C47\u603B" aria-hidden="true">#</a> \u547D\u4EE4\u884C\u76F8\u5173\u6C47\u603B</h1><p>\u4EE5\u4E0B\u5982\u679C\u975E\u591A\u7248\u672Cpython\uFF0C\u6216\u8005\u914D\u7F6E\u4E86\u73AF\u5883\u53D8\u91CF\u987A\u5E8F\uFF0C\u5219\u53EF\u4EE5\u7701\u7565\u524D\u7F6E\u7684 py\u53CA\u5176\u53C2\u6570\uFF0C\u4F8B\u5982 <code>py -3 -m</code>\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># -m\u7684\u610F\u601D\u662Fmodule\uFF0C\u662F\u503C\u8981\u8FD0\u884C\u4E00\u4E2Amodule\uFF0C\u540E\u9762\u6307\u5B9Amodule\u662Fpip\uFF0C\u4E5F\u53EF\u4EE5\u6307\u5B9A\u5176\u5B83py\u6587\u4EF6\u6216\u8005exe</span>
<span class="token comment"># \u67E5\u770B\u672C\u673A\u5B89\u88C5\u7684python\u7248\u672C\uFF0C\u5E76\u6253\u5370\u8DEF\u5F84</span>
py -0p
py -m pip <span class="token function">install</span> Pillow
py -m pip <span class="token function">install</span> --upgrade Pillow
py -m pip show Pillow
py -m pip list 
<span class="token comment"># \u5B89\u88C5\u4F9D\u8D56\u6E05\u5355\u4E0A\u7684\u5E93</span>
pip <span class="token function">install</span> -r requirements.txt
<span class="token comment"># \u5217\u4E3E\u51FA\u5B89\u88C5\u7684\u5E93</span>
py -m pip freeze
<span class="token comment"># \u5217\u4E3E\u51FA\u5B89\u88C5\u7684\u5E93\uFF0C\u5E76\u8F93\u51FA\u5230requirements.txt</span>
py -m pip freeze <span class="token operator">&gt;</span> requirements.txt
<span class="token comment"># \u57FA\u4E8E\u5F53\u524Dpython\u89E3\u91CA\u5668\u521B\u5EFA\u4E00\u4E2A\u865A\u62DF\u73AF\u5883</span>
py -m venv myvenv
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),c=[l];function p(t,d){return e(),s("div",null,c)}var o=n(a,[["render",p],["__file","commands.html.vue"]]);export{o as default};
