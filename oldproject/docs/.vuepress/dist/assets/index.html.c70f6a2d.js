import{_ as n,o as s,c as e,e as a}from"./app.59b4e306.js";const i={},c=a(`<h1 id="git\u5E38\u7528\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#git\u5E38\u7528\u64CD\u4F5C" aria-hidden="true">#</a> Git\u5E38\u7528\u64CD\u4F5C</h1><h2 id="git\u6307\u4EE4" tabindex="-1"><a class="header-anchor" href="#git\u6307\u4EE4" aria-hidden="true">#</a> Git\u6307\u4EE4</h2><h3 id="config" tabindex="-1"><a class="header-anchor" href="#config" aria-hidden="true">#</a> config</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u67E5\u770B/\u914D\u7F6E\u7528\u6237\u540D\u548C\u90AE\u7BB1</span>
<span class="token function">git</span> config --global user.email
<span class="token function">git</span> config --global user.name
<span class="token function">git</span> config --global user.name myname
<span class="token function">git</span> config --global user.email myemail


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4ED3\u5E93" tabindex="-1"><a class="header-anchor" href="#\u4ED3\u5E93" aria-hidden="true">#</a> \u4ED3\u5E93</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u67E5\u770B\u8FDC\u7A0B\u4ED3\u5E93</span>
<span class="token function">git</span> remote -v
<span class="token comment"># \u6DFB\u52A0\u8FDC\u7A0B\u4ED3\u5E93</span>
<span class="token function">git</span> remote <span class="token function">add</span> origin <span class="token punctuation">[</span>\u4ED3\u5E93url<span class="token punctuation">]</span>
<span class="token comment"># \u5207\u6362\u8FDC\u7A0B\u4ED3\u5E93 \u4F8B\u5982\u4ECEhttps\u5F97\u5207\u6362\u4E3Assh\u5F97</span>
<span class="token function">git</span> remote set-url origin <span class="token punctuation">[</span>\u4ED3\u5E93url<span class="token punctuation">]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5206\u652F" tabindex="-1"><a class="header-anchor" href="#\u5206\u652F" aria-hidden="true">#</a> \u5206\u652F</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5207\u6362\u5230\u8FDC\u7A0B\u5206\u652F</span>
<span class="token function">git</span> checkout -b \u672C\u5730\u5206\u652F\u540D origin/\u8FDC\u7A0B\u5206\u652F\u540D

<span class="token comment"># \u672C\u5730\u521B\u5EFA\u65B0\u5206\u652F</span>
<span class="token function">git</span> checkout -b \u5206\u652F\u540D

<span class="token comment"># \u67E5\u770B\u5168\u90E8\u5206\u652F</span>
<span class="token function">git</span> branch -a

<span class="token comment"># \u5220\u9664\u672C\u5730\u5206\u652F</span>

<span class="token comment"># \u5220\u9664\u8FDC\u7A0B\u5206\u652F</span>
<span class="token function">git</span> branch -d \u5206\u652F\u540D

<span class="token comment"># \u672C\u5730\u5206\u652F\u548C\u8FDC\u7A0B\u5206\u652F\u94FE\u63A5</span>

<span class="token comment"># \u5408\u5E76\u5206\u652F</span>
<span class="token function">git</span> merge --no-ff \u5176\u4ED6\u5206\u652F\u540D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u6CE8\u610F" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u610F" aria-hidden="true">#</a> \u6CE8\u610F</h4><p>\u5408\u5E76\u5206\u652F\u6DFB\u52A0--no-ff\u7406\u7531:</p><h2 id="github" tabindex="-1"><a class="header-anchor" href="#github" aria-hidden="true">#</a> Github</h2><h3 id="ssh-key\u751F\u6210" tabindex="-1"><a class="header-anchor" href="#ssh-key\u751F\u6210" aria-hidden="true">#</a> ssh key\u751F\u6210</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>ssh-keygen -t rsa -C <span class="token string">&quot;youremail@example.com&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5728github\u7684setting-ssh keys\u4E2D\u6DFB\u52A0\u751F\u6210<code>id_rsa.pub</code>\u6587\u4EF6\u4E2D\u7684\u516C\u94A5\u5373\u53EF</p>`,14),d=[c];function l(t,r){return s(),e("div",null,d)}var u=n(i,[["render",l],["__file","index.html.vue"]]);export{u as default};
