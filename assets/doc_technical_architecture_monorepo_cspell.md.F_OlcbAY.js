import{At as e,ct as t,s as n,ut as r}from"./chunks/framework.DGAZ-G8q.js";const i=JSON.parse(`{"title":"cspell 拼写检查","description":"","frontmatter":{},"headers":[],"relativePath":"doc/technical/architecture/monorepo/cspell.md","filePath":"doc/technical/architecture/monorepo/cspell.md"}`);var a={name:`doc/technical/architecture/monorepo/cspell.md`};function o(n,i,a,o,s,c){return e(),t(`div`,null,[...i[0]||=[r(`<h1 id="cspell-拼写检查" tabindex="-1">cspell 拼写检查 <a class="header-anchor" href="#cspell-拼写检查" aria-label="Permalink to &quot;cspell 拼写检查&quot;">​</a></h1><h2 id="使用依赖" tabindex="-1">使用依赖 <a class="header-anchor" href="#使用依赖" aria-label="Permalink to &quot;使用依赖&quot;">​</a></h2><ul><li>cspell</li><li>script 中配置</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    &quot;spellcheck&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;cspell lint --dot --gitignore --color --cache --show-suggestions </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">(packages|apps)/**/*.@(html|js|cjs|mjs|ts|tsx|css|scss|md|vue)</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`\`\`</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## 使用方法</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">./cspell/custom.txt</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`\`\`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">js</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">3dtile</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">allgraphic</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Amener</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">api</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">arcgis</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">areamark</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">aveiro</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Aveiro</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Avens</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Aver</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">...</span></span></code></pre></div>`,4)]])}var s=n(a,[[`render`,o]]);export{i as __pageData,s as default};