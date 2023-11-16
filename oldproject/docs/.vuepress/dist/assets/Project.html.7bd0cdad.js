import{_ as i,r as o,o as l,c as p,a as n,b as a,e as s,d as t}from"./app.59b4e306.js";const r={},c=s(`<h1 id="python\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#python\u9879\u76EE" aria-hidden="true">#</a> Python\u9879\u76EE</h1><h2 id="\u6982\u8981" tabindex="-1"><a class="header-anchor" href="#\u6982\u8981" aria-hidden="true">#</a> \u6982\u8981</h2><p>\u8BB0\u5F55python\u9879\u76EE\u7EA7\u522B\u7684\u914D\u7F6E\uFF0C\u642D\u5EFA\uFF0C\u7EC4\u7EC7</p><h2 id="\u6307\u4EE4\u4E0E\u5DE5\u5177" tabindex="-1"><a class="header-anchor" href="#\u6307\u4EE4\u4E0E\u5DE5\u5177" aria-hidden="true">#</a> \u6307\u4EE4\u4E0E\u5DE5\u5177</h2><h3 id="\u547D\u4EE4\u884C" tabindex="-1"><a class="header-anchor" href="#\u547D\u4EE4\u884C" aria-hidden="true">#</a> \u547D\u4EE4\u884C</h3><p>\u5B89\u88C5\u53CC\u7248\u672Cpython\u65F6\uFF0C\u4F7F\u7528pip\u5B89\u88C5\u4F9D\u8D56\uFF0C\u66F4\u65B0\u4F9D\u8D56\uFF0C\u67E5\u770B\u4F9D\u8D56</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>py -3 -m pip <span class="token function">install</span> Pillow
py -3 -m pip <span class="token function">install</span> --upgrade pip
py -3 -m pip list
py -3 -m pip show Pillow
<span class="token comment"># \u67E5\u770B\u8FC7\u671F\u7684\u5E93</span>
py -3 -m pip list --outdated
<span class="token comment"># \u6839\u636E\u6587\u4EF6\u5B89\u88C5\u4F9D\u8D56</span>
py -3 -m pip <span class="token function">install</span> -r requirements.txt
<span class="token comment"># \u5B89\u88C5\u4F9D\u8D56\u751F\u6210\u5DE5\u5177 \u6682\u65F6\u6709\u95EE\u9898</span>
<span class="token comment"># py -3 -m pip install pipreqs</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4F9D\u8D56\u6536\u5F55" tabindex="-1"><a class="header-anchor" href="#\u4F9D\u8D56\u6536\u5F55" aria-hidden="true">#</a> \u4F9D\u8D56\u6536\u5F55</h3><table><thead><tr><th>\u4F9D\u8D56\u540D</th><th>\u529F\u80FD</th><th>\u5B89\u88C5\u6CE8\u610F</th></tr></thead><tbody><tr><td>pip install selenium</td><td></td><td></td></tr><tr><td></td><td></td><td></td></tr></tbody></table><h2 id="vscode\u4E2D\u4F7F\u7528venv" tabindex="-1"><a class="header-anchor" href="#vscode\u4E2D\u4F7F\u7528venv" aria-hidden="true">#</a> Vscode\u4E2D\u4F7F\u7528venv</h2>`,10),d={href:"https://code.visualstudio.com/docs/python/environments",target:"_blank",rel:"noopener noreferrer"},u=t("\u53C2\u8003"),h=s(`<ul><li>\u521B\u5EFA\u865A\u62DF\u73AF\u5883:</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> project_folder
<span class="token comment"># \u5728\u9879\u76EE\u6587\u4EF6\u5939\u521B\u5EFA\u865A\u62DF\u73AF\u5883\uFF0C\u589E\u52A0Lib,Scripts\u6587\u4EF6\u5939</span>
py -3 -m pip venv ./

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u914D\u7F6EVscode\u4F7F\u7528\u865A\u62DF\u73AF\u5883\u7684\u89E3\u91CA\u5668</li></ul><p>\u5FEB\u6377\u952Ectrl+shift+p,\u8F93\u5165<code>python:select interpreter</code>,\u9009\u62E9\u672C\u9879\u76EE\u4E0B\u7684Scripts\u6587\u4EF6\u5939\u4E2D\u7684\u89E3\u91CA\u5668\u3002</p><ul><li>\u91CD\u65B0\u6253\u5F00\u4E00\u4E2A\u65B0\u7684terminal</li><li>vscode\u4F1A\u81EA\u52A8\u6FC0\u6D3B\u865A\u62DF\u73AF\u5883,\u8FDB\u5165\u5BF9\u5E94\u7684venv\u72B6\u6001</li><li>\u6B64\u65F6\u53EF\u4EE5\u5728\u865A\u62DF\u73AF\u5883\u4E2D\u5B89\u88C5\u4F9D\u8D56\u4E0E\u8FD0\u884C</li></ul><p>\u6B64\u65F6\u7684launch.json\u6587\u4EF6\u914D\u7F6E</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token comment">// Use IntelliSense to learn about possible attributes.</span>
    <span class="token comment">// Hover to view descriptions of existing attributes.</span>
    <span class="token comment">// For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387</span>
    <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0.2.0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;configurations&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Python: Current File&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;python&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;request&quot;</span><span class="token operator">:</span> <span class="token string">&quot;launch&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;program&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\${file}&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;console&quot;</span><span class="token operator">:</span> <span class="token string">&quot;integratedTerminal&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;justMyCode&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token property">&quot;stopOnEntry&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span> 
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="python\u9879\u76EE\u4EE3\u7801\u7EC4\u7EC7\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#python\u9879\u76EE\u4EE3\u7801\u7EC4\u7EC7\u7ED3\u6784" aria-hidden="true">#</a> python\u9879\u76EE\u4EE3\u7801\u7EC4\u7EC7\u7ED3\u6784</h2>`,8),v={href:"https://stackoverflow.com/questions/193161/what-is-the-best-project-structure-for-a-python-application",target:"_blank",rel:"noopener noreferrer"},m=t("\u53C2\u8003"),b=s('<h3 id="\u57FA\u7840\u77E5\u8BC6" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840\u77E5\u8BC6" aria-hidden="true">#</a> \u57FA\u7840\u77E5\u8BC6</h3><p>\u6CA1\u4E2Apy\u6587\u4EF6\u5C31\u662F\u4E00\u4E2A\u6A21\u5757<br> \u6BCF\u4E2A\u6A21\u5757\u90FD\u6709\u9ED8\u8BA4\u540D\u5B57__name__<br> \u5982\u679C\u6587\u4EF6\u4F5C\u4E3A\u6A21\u5757\u5BFC\u5165\uFF0C__name__\u5219\u4E3A\u6A21\u5757\u540D<br> \u5982\u679C\u6587\u4EF6\u4F5C\u4E3A\u88AB\u6267\u884C\u7684\u6587\u4EF6,<strong>name__\u5219\u4E3A__main</strong></p><h3 id="\u7ED3\u6784\u76EE\u5F55" tabindex="-1"><a class="header-anchor" href="#\u7ED3\u6784\u76EE\u5F55" aria-hidden="true">#</a> \u7ED3\u6784\u76EE\u5F55</h3><p>Project:</p><ul><li>bin/ <ul><li><strong>init</strong>.py</li></ul></li><li>lib/ <ul><li><strong>init</strong>.py</li></ul></li><li>src/ <ul><li>test/</li><li><strong>init</strong>.py</li><li>main.py</li></ul></li><li>setup.py</li><li>README.md</li><li>requirements.txt</li><li>LICENSE</li></ul><h3 id="setup-py" tabindex="-1"><a class="header-anchor" href="#setup-py" aria-hidden="true">#</a> setup.py</h3><p>\u4F7F\u7528setuptools</p><h2 id="ide" tabindex="-1"><a class="header-anchor" href="#ide" aria-hidden="true">#</a> IDE</h2><p>vim\u6279\u91CF\u7F29\u8FDB<br> \u9009\u4E2D\u884C\u5373\u53EF\uFF0C\u4E0D\u7528\u5168\u9009\uFF0C\u5305\u62EC\u66FF\u6362\u7C7B\u4F3C,\u4E0D\u7528\u771F\u7684\u9009\u4E2D\u5168\u90E8\u4EE3\u7801\uFF0C\u800C\u662F\u547D\u4E2D\u884C <code>shift+&gt;</code>\u548C<code>shift+&lt;</code>\u5373\u53EF</p><p>vscode\u521B\u5EFAlaunch.json<br> TODO:</p><p>vscode\u65AD\u70B9\u4E0D\u751F\u6548<br> \u914D\u7F6E\u4E2D\u5F00\u542F<code>&quot;stopOnEntry&quot;: true</code></p>',11);function k(y,_){const e=o("ExternalLinkIcon");return l(),p("div",null,[c,n("p",null,[n("a",d,[u,a(e)])]),h,n("p",null,[n("a",v,[m,a(e)])]),b])}var q=i(r,[["render",k],["__file","Project.html.vue"]]);export{q as default};