# advprop's LLM Optimization Blog

This is a customized [Quartz](https://quartz.jzhao.xyz/) blog template for writing about LLM optimization and AI research.

## Features

- 🎨 **Professional dark/beige color scheme** - No more neon colors
- 📐 **Full LaTeX support** with KaTeX - Write mathematical expressions inline \( \LaTeX \) or display blocks
- 🌙 **Dark/light mode toggle** - Click any header to switch themes
- 📱 **Mobile responsive** design
- 🔗 **Wiki-style linking** with `[[page-name|display text]]`
- 🔍 **Search functionality**
- 📊 **Interactive graph view** of content connections

## Getting Started

1. **Write content** in Markdown files in the `content/` directory
2. **Use templates** - See `content/llm-unix.md` and `content/archive/template-post.md` for examples
3. **Build the site** with `npx quartz build`
4. **Serve locally** with `npx quartz serve`

## Content Structure

- `content/index.md` - Home page
- `content/about.md` - About page  
- `content/posts/` - Your blog posts (create this directory)
- `content/archive/` - Older content

## LaTeX Examples

Inline math: `\( E = mc^2 \)`

Display math:
```
\[
\text{Attention}(Q, K, V) = \text{softmax}\left(\frac{QK^T}{\sqrt{d_k}}\right)V
\]
```

## Color Theme

- **Dark mode**: Deep black background with gold accents (#d4af37)
- **Light mode**: Clean white with warm brown accents (#b8860b)
- All callouts use subdued, professional colors

## Customization

- **Colors**: Edit `quartz.config.ts` 
- **Fonts**: Currently using JetBrains Mono (can be changed in config)
- **Custom CSS**: Add to `quartz/styles/custom.scss`

## Deployment

This template is set up for GitHub Pages. Update the `baseUrl` in `quartz.config.ts` to match your domain.

---

*Template originally based on spikedoanz's blog, customized for LLM optimization content.*
