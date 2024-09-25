import { useParams } from "react-router-dom"

import Header from '../components/Header'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { blog } from '../assets/index'
import { useEffect, useState } from "react"

const Post = () => {
  const { url } = useParams()
  const [post, setPost] = useState([])

  useEffect(() => {
    const p = blog.filter(post => post.url === url)
    setPost(p)
  }, [])

  return (
    <div className='w-full flex flex-col justify-center items-center min-h-screen'>
      <div className='w-full max-w-2xl'>
        <div className='mx-10 lg:mx-0'>
          <div className='flex flex-col min-h-screen'>
            <Header />
            <div className="flex-grow mt-20">
              <div className='mb-3'>
                {
                    post.length > 0 && (
                        <div>
                            <h2 className="text-2xl font-semibold">{post[0].title}</h2>
                        </div>
                    )
                }
              </div>
            </div>
            <Newsletter />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post