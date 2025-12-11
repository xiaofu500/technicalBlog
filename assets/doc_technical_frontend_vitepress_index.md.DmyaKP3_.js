import{ax as n,c as a,o as p,b0 as e}from"./chunks/framework.BUZ2O90O.js";const i="/assets/image-CuE68zU3.png",h=JSON.parse('{"title":"写在前面的话","description":"","frontmatter":{},"headers":[],"relativePath":"doc/technical/frontend/vitepress/index.md","filePath":"doc/technical/frontend/vitepress/index.md"}'),l={name:"doc/technical/frontend/vitepress/index.md"};function t(c,s,o,r,d,_){return p(),a("div",null,[...s[0]||(s[0]=[e(`<h1 id="写在前面的话" tabindex="-1">写在前面的话 <a class="header-anchor" href="#写在前面的话" aria-label="Permalink to &quot;写在前面的话&quot;">​</a></h1><p>在写个技术博客之前，首先需要解决好用来写作的工具问题。因为 vitepress 是 vue 官方推荐的文档编写库，可以使用<code>markdown</code>的编写风格。好用，所以选择。</p><p>学习 vitepress 之前，首先先给自己定个小目标，利用两个小时的时间基本掌握这个库的使用。其次用架构师的思维模式安排学习的流程。</p><p>第一步：阐明自己的需求。为提高学习效率，对架构师学习中内容进行产出，需要简单易用的、可以发布到网站的文档编写工具</p><p>第二步：对市场常见的文档编写工具进行横向对比，选出最适合这个项目的工具。 主要考虑的点有：</p><pre><code>- 易用性：是否容易上手，是否有详细的文档和示例。
- 功能完善性：是否提供了足够的功能，满足项目的需求。
- 自定义 izability：是否允许用户自定义主题、插件等。
- 社区支持：是否有活跃的社区，提供问题解决和功能扩展。
</code></pre><p>第三步： 学习 vitepress 架构</p><p>整体架构</p><p><img src="`+i+`" alt="vitepress 技术栈"></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>┌─────────────────────────────────────┐</span></span>
<span class="line"><span>│          VitePress 技术栈            │</span></span>
<span class="line"><span>├─────────────────────────────────────┤</span></span>
<span class="line"><span>│  🏗️ 构建工具层                       │</span></span>
<span class="line"><span>│  • Vite (核心构建工具)               │</span></span>
<span class="line"><span>│  • Rollup (生产打包)                │</span></span>
<span class="line"><span>│  • ESBuild (快速编译)               │</span></span>
<span class="line"><span>├─────────────────────────────────────┤</span></span>
<span class="line"><span>│  🎨 前端框架层                       │</span></span>
<span class="line"><span>│  • Vue 3 (核心框架)                 │</span></span>
<span class="line"><span>│  • Vue Router (路由管理)            │</span></span>
<span class="line"><span>│  • Pinia (状态管理)                  │</span></span>
<span class="line"><span>├─────────────────────────────────────┤</span></span>
<span class="line"><span>│  📝 文档处理层                       │</span></span>
<span class="line"><span>│  • Markdown-it (Markdown 解析)      │</span></span>
<span class="line"><span>│  • Shiki (代码高亮)                 │</span></span>
<span class="line"><span>│  • Mermaid (图表)                   │</span></span>
<span class="line"><span>├─────────────────────────────────────┤</span></span>
<span class="line"><span>│  🎭 主题系统层                       │</span></span>
<span class="line"><span>│  • 默认主题 (Vue 组件)              │</span></span>
<span class="line"><span>│  • 自定义主题支持                   │</span></span>
<span class="line"><span>│  • 组件覆盖系统                     │</span></span>
<span class="line"><span>└─────────────────────────────────────┘</span></span></code></pre></div>`,10)])])}const m=n(l,[["render",t]]);export{h as __pageData,m as default};
