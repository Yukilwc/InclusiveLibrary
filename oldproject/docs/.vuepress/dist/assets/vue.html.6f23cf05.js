import{_ as t,r as o,o as i,c as l,a as n,b as e,e as c,d as a}from"./app.59b4e306.js";const r={},p=c(`<h1 id="docker-compose\u5F00\u53D1vue\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#docker-compose\u5F00\u53D1vue\u9879\u76EE" aria-hidden="true">#</a> docker compose\u5F00\u53D1vue\u9879\u76EE</h1><p>\u70ED\u66F4\u65B0\u65E0\u6CD5\u5B9E\u73B0\uFF0C\u6302\u8F7D\u5230\u5BBF\u4E3B\u673A\u540E\uFF0Cnode_modules\u4E5F\u5FC5\u987B\u4F7F\u7528\u5BB9\u5668\u67B6\u6784\u7684\uFF0C\u6240\u4EE5\u914D\u7F6E\u4E86\u533F\u540D\u5377\uFF0C\u5BFC\u81F4\u70ED\u66F4\u65B0\u5931\u6548\u3002</p><div class="language-docker ext-docker line-numbers-mode"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">FROM</span> node:20-alpine <span class="token keyword">as</span> builder</span>

<span class="token instruction"><span class="token keyword">WORKDIR</span> /app</span>

<span class="token instruction"><span class="token keyword">COPY</span> package.json ./</span>

<span class="token comment"># \u5BBF\u4E3B\u673A\u73AF\u5883\u4E0D\u4E00\u81F4\uFF0C\u4E0D\u80FD\u4F7F\u7528\u5BBF\u4E3B\u7684node_modules\uFF0C\u5FC5\u987B\u4F7F\u7528\u5BB9\u5668\u5185\u7684</span>
<span class="token instruction"><span class="token keyword">RUN</span> npm --registry https://registry.npm.taobao.org install </span>

<span class="token instruction"><span class="token keyword">CMD</span> [<span class="token string">&quot;npm&quot;</span>,<span class="token string">&quot;run&quot;</span>,<span class="token string">&quot;dev&quot;</span>]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3.9&#39;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">frontend</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> docker_vue_develop_image
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> docker_vue_develop_container
    <span class="token key atrule">build</span><span class="token punctuation">:</span>
      <span class="token key atrule">context</span><span class="token punctuation">:</span> .
      <span class="token key atrule">dockerfile</span><span class="token punctuation">:</span> ./dockerfiles/Dev.dockerfile
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;.:/app&quot;</span>
      <span class="token comment"># \u533F\u540D\u5377</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;./node_modules:/app/node_modules&quot;</span>
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;5173:5173&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker-compose</span> -f ./docker-compose-debug.yml up -d --build --force-recreate
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003</h2>`,6),d={href:"https://dev.to/tqbit/a-step-by-step-guide-to-vue-development-with-docker-part-one-5ap4",target:"_blank",rel:"noopener noreferrer"},u=a("\u4E00\u6B65\u6B65\u4F7F\u7528docker\u8FDB\u884Cvue\u5F00\u53D1"),v={href:"https://juejin.cn/post/7000579016147075079",target:"_blank",rel:"noopener noreferrer"},k=a("Link");function m(b,_){const s=o("ExternalLinkIcon");return i(),l("div",null,[p,n("p",null,[n("a",d,[u,e(s)])]),n("p",null,[n("a",v,[k,e(s)])])])}var g=t(r,[["render",m],["__file","vue.html.vue"]]);export{g as default};
