import{_ as n,o as s,c as a,e}from"./app.59b4e306.js";const i={},l=e(`<h1 id="\u547D\u4EE4\u6536\u5F55" tabindex="-1"><a class="header-anchor" href="#\u547D\u4EE4\u6536\u5F55" aria-hidden="true">#</a> \u547D\u4EE4\u6536\u5F55</h1><h2 id="\u6307\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u6307\u4EE4" aria-hidden="true">#</a> \u6307\u4EE4</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u8FD0\u884C</span>
<span class="token comment"># \u6784\u5EFA\u4E00\u4E2A\u955C\u50CF\u3002 -t\u6307\u5B9A\u955C\u50CF\u540D\u79F0\u6807\u7B7E\uFF0C. \u6307\u5B9Adockerfile\u6240\u5728\u76EE\u5F55</span>
<span class="token function">docker</span> build -t vue-nginx <span class="token builtin class-name">.</span>

<span class="token comment"># \u67E5\u770B\u5168\u90E8\u955C\u50CF\u4FE1\u606F</span>
<span class="token function">docker</span> image <span class="token function">ls</span>

<span class="token comment"># \u6839\u636E\u955C\u50CF\u542F\u52A8\u5BB9\u5668\u3002-d \u4E3A\u540E\u53F0\u8FD0\u884C\uFF0C\u5927\u6982\u8BD5daemon? , -p\u662F\u6620\u5C04\u5BB9\u5668\u5185\u90E8\u7AEF\u53E3\u5230\u5BBF\u4E3B\u4E3B\u673A\u76848080\u7AEF\u53E3\uFF0C\u4ECE\u800C\u8BBF\u95EE\u5BB9\u5668\u5185\u90E8\u7684Nginx\u670D\u52A1\u5668\u3002</span>
<span class="token comment"># -p \u662F hostPort:containerPort</span>
<span class="token comment"># -it \u5206\u914D\u4E00\u4E2A\u4EA4\u4E92\u5F0F\u7EC8\u7AEF\uFF0C\u5982\u6B64\u53EF\u4EE5\u770B\u5230\u5BB9\u5668\u8F93\u51FA\u6216\u8005\u6267\u884C\u547D\u4EE4</span>
<span class="token comment"># --rm \u5BB9\u5668\u9000\u51FA\u65F6\u5220\u9664\u5BB9\u5668</span>
<span class="token function">docker</span> run -it --rm -d -p <span class="token number">8080</span>:80 vue-nginx


<span class="token comment"># \u6307\u5B9A\u5BB9\u5668\u540Di\u5728 </span>
<span class="token function">docker</span> run --name vue-nginx-container -d -p <span class="token number">8080</span>:80 vue-nginx

<span class="token comment"># \u5BB9\u5668\u542F\u52A8\u65F6\uFF0C\u6302\u8F7Dvolume</span>
<span class="token comment"># -v\u540E\uFF0C\u6709\u4E24\u79CD\u5199\u6CD5</span>
<span class="token comment"># -v volume_name:container_path \u662F\u521B\u5EFA\u4E00\u4E2Avolume\uFF0C\u7136\u540E\u6302\u8F7D</span>
<span class="token comment"># -v host_path:container_path \u662F\u4E0D\u521B\u5EFAvolume\uFF0C\u800C\u662F\u76F4\u63A5\u628A\u5BBF\u4E3B\u4E3B\u673A\u7684\u4E00\u4E2A\u8DEF\u5F84\uFF0C\u6302\u8F7D\u5230\u5BB9\u5668\u8DEF\u5F84\uFF0C\u8FD9\u53EB\u505Abind mount</span>
<span class="token function">docker</span> run -it -v gomodcache:/go/pkg/mod  --rm --name docker_develop_ctnr -d -p <span class="token number">8080</span>:8080 docker_develop
<span class="token comment"># \u67E5\u770B\u5BB9\u5668\u4FE1\u606F</span>
<span class="token function">docker</span> <span class="token function">ps</span>

<span class="token comment"># \u505C\u6B62\u5BB9\u5668\u8FD0\u884C \u540D\u5B57\u4ECE\u67E5\u770B\u5BB9\u5668\u4FE1\u606F\u8868\u683C\u7684NAMES\u5217\u627E</span>
<span class="token function">docker</span> stop container_name

<span class="token comment"># \u5220\u9664\u5BB9\u5668</span>
<span class="token function">docker</span> <span class="token function">rm</span> <span class="token operator">&lt;</span>container<span class="token operator">&gt;</span>
<span class="token comment"># \u5220\u9664\u5BB9\u5668\u4E0E\u5173\u8054\u7684\u5377</span>
<span class="token function">docker</span> <span class="token function">rm</span> -v web_server
<span class="token comment"># \u5220\u9664\u5DF2\u7ECF\u505C\u6B62\u7684\u5BB9\u5668</span>
<span class="token function">docker</span> container prune

<span class="token comment"># \u6E05\u9664\u6307\u5B9A\u955C\u50CF</span>
<span class="token function">docker</span> rmi nginx:alpine ubuntu:latest

<span class="token comment"># \u6E05\u9664\u955C\u50CF \u6E05\u9664\u76EE\u6807\u662F\u6CA1\u6709\u88AB\u5BB9\u5668\u5F15\u7528\u7684\u955C\u50CF</span>
<span class="token function">docker</span> image prune -a

<span class="token comment"># \u6784\u5EFA\u5931\u8D25\u65F6\uFF0C\u5982\u679C\u662F\u4E00\u4E9B\u955C\u50CF\u62C9\u53D6\u5931\u8D25\uFF0C\u5219\u53EF\u4EE5\u5355\u72EC\u62C9\u53D6\u6307\u5B9A\u955C\u50CF</span>
<span class="token function">docker</span> pull nginx:alpine@sha256:c94a22b036afa972426b82d5b0a49c959786005b4f6f81ac7467ca5538d0158f

<span class="token comment"># \u5728\u5BB9\u5668\u4E2D\u6253\u5F00\u4E00\u4E2Ashell\u67E5\u770B\u4FE1\u606F \u4F8B\u5982\u67E5\u770Bnginx\u914D\u7F6E\u662F\u5426\u6B63\u786ECOPY</span>
<span class="token comment"># \u8FDB\u5165\u5BB9\u5668\u7684\u4EA4\u4E92\u5F0Fshell\uFF0C\u53EF\u4EE5\u6267\u884C\u4EFB\u610F\u547D\u4EE4</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> -it <span class="token operator">&lt;</span>\u5BB9\u5668ID\u6216\u540D\u79F0<span class="token operator">&gt;</span> /bin/sh
<span class="token function">docker</span> inspect <span class="token operator">&lt;</span>\u5BB9\u5668ID\u6216\u540D\u79F0<span class="token operator">&gt;</span>
<span class="token function">docker</span> ports <span class="token operator">&lt;</span>\u5BB9\u5668ID\u6216\u540D\u79F0<span class="token operator">&gt;</span>
<span class="token function">docker</span> logs <span class="token operator">&lt;</span>\u5BB9\u5668ID\u6216\u540D\u79F0<span class="token operator">&gt;</span>
<span class="token function">docker</span> stats <span class="token operator">&lt;</span>\u5BB9\u5668ID\u6216\u540D\u79F0<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="network" tabindex="-1"><a class="header-anchor" href="#network" aria-hidden="true">#</a> network</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u67E5\u770B\u5168\u90E8\u7F51\u7EDC</span>
<span class="token function">docker</span> network <span class="token function">ls</span>
<span class="token comment"># \u67E5\u770B\u4E00\u4E2A\u7F51\u7EDC\u4E0B\u94FE\u63A5\u7684\u5168\u90E8\u5BB9\u5668\u7684\u4FE1\u606F\uFF0C\u5305\u62ECip</span>
<span class="token function">docker</span> network inspect network_name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="dockerfile" tabindex="-1"><a class="header-anchor" href="#dockerfile" aria-hidden="true">#</a> dockerfile</h2><h2 id="nginx\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#nginx\u914D\u7F6E" aria-hidden="true">#</a> nginx\u914D\u7F6E</h2><h2 id="\u6307\u5B9A\u7528\u6237\u7EC4\u4E0E\u7528\u6237" tabindex="-1"><a class="header-anchor" href="#\u6307\u5B9A\u7528\u6237\u7EC4\u4E0E\u7528\u6237" aria-hidden="true">#</a> \u6307\u5B9A\u7528\u6237\u7EC4\u4E0E\u7528\u6237</h2><div class="language-docker ext-docker line-numbers-mode"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">FROM</span> node:14</span>

<span class="token instruction"><span class="token keyword">WORKDIR</span> /vue-setup</span>

<span class="token instruction"><span class="token keyword">RUN</span> npm install -g @vue/cli</span>

<span class="token comment"># The following commands ensure access to our files</span>
<span class="token comment"># If we left them out, changing files on our local setup</span>
<span class="token comment"># would fail due to insufficient permissions. </span>
<span class="token instruction"><span class="token keyword">RUN</span> userdel -r node</span>

<span class="token instruction"><span class="token keyword">ARG</span> USER_ID</span>

<span class="token instruction"><span class="token keyword">ARG</span> GROUP_ID</span>

<span class="token instruction"><span class="token keyword">RUN</span> addgroup --gid <span class="token variable">$GROUP_ID</span> user</span>

<span class="token instruction"><span class="token keyword">RUN</span> adduser --disabled-password --gecos <span class="token string">&#39;&#39;</span> --uid <span class="token variable">$USER_ID</span> --gid <span class="token variable">$GROUP_ID</span> user</span>

<span class="token comment"># Set the active user and open the interactive terminal</span>
<span class="token instruction"><span class="token keyword">USER</span> user</span>

<span class="token instruction"><span class="token keyword">ENTRYPOINT</span> [ <span class="token string">&quot;bash&quot;</span> ]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>FROM node:14\uFF1A\u8FD9\u662F\u6307\u5B9A\u57FA\u7840\u955C\u50CF\u4E3Anode:14\uFF0C\u4E5F\u5C31\u662Fnode\u768414\u7248\u672C</li><li>WORKDIR /vue-setup\uFF1A\u8FD9\u662F\u6307\u5B9A\u5DE5\u4F5C\u76EE\u5F55\u4E3A/vue-setup\uFF0C\u4E5F\u5C31\u662F\u5BB9\u5668\u5185\u7684/vue-setup\u6587\u4EF6\u5939</li><li>RUN npm install -g @vue/cli\uFF1A\u8FD9\u662F\u5728\u5BB9\u5668\u5185\u8FD0\u884Cnpm\u547D\u4EE4\uFF0C\u5168\u5C40\u5B89\u88C5@vue/cli\uFF0C\u4E5F\u5C31\u662Fvue\u7684\u547D\u4EE4\u884C\u5DE5\u5177</li><li>RUN userdel -r node\uFF1A\u8FD9\u662F\u5220\u9664\u5BB9\u5668\u5185\u9ED8\u8BA4\u7684node\u7528\u6237\uFF0C\u56E0\u4E3A\u53EF\u80FD\u4F1A\u548C\u672C\u5730\u7684\u7528\u6237\u51B2\u7A81</li><li>ARG USER_ID\uFF1A\u8FD9\u662F\u5B9A\u4E49\u4E00\u4E2A\u53D8\u91CFUSER_ID\uFF0C\u7528\u4E8E\u63A5\u6536\u672C\u5730\u7684\u7528\u6237ID</li><li>ARG GROUP_ID\uFF1A\u8FD9\u662F\u5B9A\u4E49\u4E00\u4E2A\u53D8\u91CFGROUP_ID\uFF0C\u7528\u4E8E\u63A5\u6536\u672C\u5730\u7684\u7528\u6237\u7EC4ID</li><li>RUN addgroup --gid $GROUP_ID user\uFF1A\u8FD9\u662F\u5728\u5BB9\u5668\u5185\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u7528\u6237\u7EC4user\uFF0C\u5E76\u6307\u5B9A\u5176ID\u4E3AGROUP_ID</li><li>RUN adduser --disabled-password --gecos \u2018\u2019 --uid $USER_ID --gid $GROUP_ID user\uFF1A \u8FD9\u662F\u5728\u5BB9\u5668\u5185\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u7528\u6237user\uFF0C\u5E76\u6307\u5B9A\u5176ID\u4E3AUSER_ID\uFF0C\u6240\u5C5E\u7528\u6237\u7EC4\u4E3Auser\uFF0C\u5E76\u7981\u7528\u5BC6\u7801\u548C\u5176\u4ED6\u4FE1\u606F</li><li>USER user\uFF1A\u8FD9\u662F\u6307\u5B9A\u5BB9\u5668\u5185\u8FD0\u884C\u7684\u7528\u6237\u4E3Auser\uFF0C\u800C\u4E0D\u662Froot</li><li>ENTRYPOINT [ \u201Cbash\u201D ]\uFF1A\u8FD9\u662F\u6307\u5B9A\u5BB9\u5668\u542F\u52A8\u65F6\u8FD0\u884C\u7684\u547D\u4EE4\u4E3Abash\uFF0C\u4E5F\u5C31\u662F\u6253\u5F00\u4EA4\u4E92\u5F0F\u7EC8\u7AEF</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> build <span class="token punctuation">\\</span>
  --build-arg <span class="token assign-left variable">USER_ID</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">id</span> -u<span class="token variable">)</span></span> <span class="token punctuation">\\</span>
  --build-arg <span class="token assign-left variable">GROUP_ID</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">id</span> -g<span class="token variable">)</span></span> <span class="token punctuation">\\</span>
  -t vue_helper - <span class="token operator">&lt;</span> ./dockerfiles/Setup.Dockerfile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u2013build-arg\uFF1A\u8FD9\u662F\u7528\u4E8E\u6307\u5B9A\u6784\u5EFA\u955C\u50CF\u65F6\u7684\u53C2\u6570\uFF0C\u53EF\u4EE5\u5728Dockerfile\u4E2D\u4F7F\u7528ARG\u6765\u63A5\u6536</li><li>USER_ID\uFF1A\u8FD9\u662F\u4E00\u4E2A\u6784\u5EFA\u53C2\u6570\u7684\u540D\u5B57\uFF0C\u8868\u793A\u7528\u6237ID\uFF0C\u5176\u503C\u4E3A$(id -u)\uFF0C\u4E5F\u5C31\u662F\u672C\u5730\u7684\u7528\u6237ID</li><li>GROUP_ID\uFF1A\u8FD9\u662F\u4E00\u4E2A\u6784\u5EFA\u53C2\u6570\u7684\u540D\u5B57\uFF0C\u8868\u793A\u7528\u6237\u7EC4ID\uFF0C\u5176\u503C\u4E3A$(id -g)\uFF0C\u4E5F\u5C31\u662F\u672C\u5730\u7684\u7528\u6237\u7EC4ID</li><li>-t\uFF1A\u8FD9\u662F\u7528\u4E8E\u6307\u5B9A\u955C\u50CF\u7684\u6807\u7B7E\uFF0C\u4E5F\u5C31\u662F\u955C\u50CF\u7684\u540D\u5B57\u548C\u7248\u672C</li></ul>`,12),c=[l];function o(d,t){return s(),a("div",null,c)}var p=n(i,[["render",o],["__file","commands.html.vue"]]);export{p as default};
