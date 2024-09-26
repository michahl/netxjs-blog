import { MDXProvider } from "@mdx-js/react"

const mdxComponents = {
    
}

const BlogBody = ({ children }) => {
  return (
    <MDXProvider components={mdxComponents}>
        <article className="prose prose-sm lg:prose-lg max-w-none dark:prose-dark">
            {children}
        </article>
    </MDXProvider>
  )
}

export default BlogBody