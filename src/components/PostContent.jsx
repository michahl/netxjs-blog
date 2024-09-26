import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import BlogBody from './BlogBody'
import { useEffect, useState } from 'react'
import { blog } from '../assets'

const PostContent = () => {
  const { url } = useParams()
  const [markdownContent, setMarkdownContent] = useState('')

  useEffect(() => {
    const post = blog.find(post => post.url === url)

    console.log(post.file)

    if (post) {
        fetch(`/${post.file}`)
            .then(response => {
                if (!response.ok) throw new Error('Network response was not ok')
                return response.text()
            })
            .then(text => {
                setMarkdownContent(text)
            })
            .catch(e => console.error('Error fetching data', e))
    }
  })
  return (
    <BlogBody>
        <ReactMarkdown>{markdownContent}</ReactMarkdown>
    </BlogBody>
  )
}

export default PostContent