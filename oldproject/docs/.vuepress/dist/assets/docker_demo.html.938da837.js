import{_ as n,o as s,c as a,e as t}from"./app.59b4e306.js";const o={},p=t(`<h1 id="\u7EAFdocker\u542F\u52A8\u7B80\u5355go\u7684\u7248\u672C" tabindex="-1"><a class="header-anchor" href="#\u7EAFdocker\u542F\u52A8\u7B80\u5355go\u7684\u7248\u672C" aria-hidden="true">#</a> \u7EAFdocker\u542F\u52A8\u7B80\u5355go\u7684\u7248\u672C</h1><p><strong>main.go</strong></p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>

	<span class="token string">&quot;github.com/gin-gonic/gin&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;run main&quot;</span><span class="token punctuation">)</span>
	r <span class="token operator">:=</span> gin<span class="token punctuation">.</span><span class="token function">Default</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	r<span class="token punctuation">.</span><span class="token function">GET</span><span class="token punctuation">(</span><span class="token string">&quot;/test&quot;</span><span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span>c <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span>
		c<span class="token punctuation">.</span><span class="token function">JSON</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> gin<span class="token punctuation">.</span>H<span class="token punctuation">{</span>
			<span class="token string">&quot;message&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Hello&quot;</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>
	r<span class="token punctuation">.</span><span class="token function">Run</span><span class="token punctuation">(</span><span class="token string">&quot;:80&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Dockerfile.debug</strong></p><div class="language-docker ext-docker line-numbers-mode"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">FROM</span> golang:1.19-alpine <span class="token keyword">as</span> builder</span>
<span class="token comment"># \u5B89\u88C5\u7F16\u8BD1\u8C03\u8BD5\u5DE5\u5177</span>
<span class="token instruction"><span class="token keyword">RUN</span> CGO_ENABLED=0 go install -ldflags <span class="token string">&quot;-s -w -extldflags &#39;-static&#39;&quot;</span> github.com/go-delve/delve/cmd/dlv@latest</span>
<span class="token instruction"><span class="token keyword">WORKDIR</span> /app</span>
<span class="token comment"># \u5B89\u88C5\u8C03\u8BD5\u5DE5\u5177</span>
<span class="token instruction"><span class="token keyword">COPY</span> go.mod go.sum ./</span>
<span class="token instruction"><span class="token keyword">RUN</span> GOPROXY=https://goproxy.cn go mod download </span>
<span class="token instruction"><span class="token keyword">COPY</span> . ./</span>
<span class="token comment"># build\u65F6\u7981\u7528\u4F18\u5316\uFF0C\u7981\u7528\u5185\u8054\uFF0C\u65B9\u4FBF\u540E\u7EED\u8C03\u8BD5</span>
<span class="token instruction"><span class="token keyword">RUN</span> CGO_ENABLED=0 GOOS=linux go build -gcflags <span class="token string">&quot;all=-N -l&quot;</span> -o server .</span>

<span class="token instruction"><span class="token keyword">FROM</span> alpine:latest</span>
<span class="token instruction"><span class="token keyword">EXPOSE</span> 80 4000</span>
<span class="token instruction"><span class="token keyword">WORKDIR</span> /go/bin</span>
<span class="token instruction"><span class="token keyword">COPY</span> <span class="token options"><span class="token property">--from</span><span class="token punctuation">=</span><span class="token string">builder</span></span> /go/bin/dlv ./</span>
<span class="token instruction"><span class="token keyword">WORKDIR</span> /app</span>
<span class="token instruction"><span class="token keyword">COPY</span> <span class="token options"><span class="token property">--from</span><span class="token punctuation">=</span><span class="token string">builder</span></span> /app/server ./</span>
<span class="token instruction"><span class="token keyword">CMD</span> [<span class="token string">&quot;/go/bin/dlv&quot;</span>,<span class="token string">&quot;--listen=:4000&quot;</span>,<span class="token string">&quot;--headless=true&quot;</span>,<span class="token string">&quot;--log=true&quot;</span>,<span class="token string">&quot;--accept-multiclient&quot;</span>,<span class="token string">&quot;--api-version=2&quot;</span>,<span class="token string">&quot;exec&quot;</span>,<span class="token string">&quot;/app/server&quot;</span>]</span>
<span class="token comment"># CMD [&quot;./server&quot;]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>launch.json</strong></p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0.2.0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;configurations&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;Remote docker app&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;type&quot;</span><span class="token operator">:</span><span class="token string">&quot;go&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;request&quot;</span><span class="token operator">:</span> <span class="token string">&quot;attach&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;mode&quot;</span><span class="token operator">:</span> <span class="token string">&quot;remote&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">4000</span><span class="token punctuation">,</span>
            <span class="token property">&quot;host&quot;</span><span class="token operator">:</span> <span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;preLaunchTask&quot;</span><span class="token operator">:</span> <span class="token string">&quot;debug&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;postDebugTask&quot;</span><span class="token operator">:</span> <span class="token string">&quot;stop debug&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>task.json</strong></p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2.0.0&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;tasks&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;clearContainer&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;shell&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;docker&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;args&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;rm&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;-f&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;docker_develop_container&quot;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;clearImage&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;shell&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;docker&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;args&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;rmi&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;-f&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;docker_develop_image&quot;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token punctuation">{</span>
      <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;build&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;shell&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;docker&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;args&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;build&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;.&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;--tag&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;docker_develop_image&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;--file&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;Dockerfile.debug&quot;</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;run&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;shell&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;docker&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;args&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;run&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;-d&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;-it&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;--rm&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;-p&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;8088:80&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;-p&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;4000:4000&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;--name&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;docker_develop_container&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;docker_develop_image&quot;</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;debug&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;dependsOrder&quot;</span><span class="token operator">:</span> <span class="token string">&quot;sequence&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;dependsOn&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;clearContainer&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;clearImage&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;build&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;run&quot;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;stop debug&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;dependsOrder&quot;</span><span class="token operator">:</span> <span class="token string">&quot;sequence&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;dependsOn&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">&quot;clearContainer&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;clearImage&quot;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),e=[p];function c(i,u){return s(),a("div",null,e)}var r=n(o,[["render",c],["__file","docker_demo.html.vue"]]);export{r as default};
