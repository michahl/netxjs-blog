import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mdx from '@mdx-js/rollup'
import remarkGfm from 'remark-gfm'
import remarkFrontmatter from 'remark-frontmatter'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import remarkToc from 'remark-toc'

export default defineConfig({
  plugins: [
    react(),
    mdx({
      remarkPlugins: [
        remarkGfm,
        remarkFrontmatter,
        [remarkToc, { tight: true, maxDepth: 5 }]
      ],
      rehypePlugins: [
        rehypeSlug,
        rehypeAutolinkHeadings
      ]
    })
  ],
})
