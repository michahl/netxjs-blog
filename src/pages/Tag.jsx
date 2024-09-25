import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import Header from '../components/Header'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

import { blog } from '../assets/index'

const Tag = () => {
  const { tag } = useParams()
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const p = blog.filter(post => post.tags.includes(tag))
    setPosts(p)
  }, [])

  return (
    <div className='w-full flex flex-col justify-center items-center min-h-screen'>
      <div className='w-full max-w-2xl'>
        <div className='mx-10 lg:mx-0'>
          <div className='flex flex-col min-h-screen'>
            <Header />
            <div className="flex-grow mt-20">
              <div className='mb-3'>
                <div className=''>
                  { posts.length > 0 ? (
                      <div>
                        <h2 className='text-2xl w-full font-semibold'>Posts tagged with {tag}</h2>
                        <div className="flex flex-col mt-5">
                        {
                          posts.map((post) => (
                          <div key={post.title} className='text-sm flex flex-col gap-4 pb-5'>
                            <div className='flex flex-col gap-1.5'>
                              <div className="flex flex-row gap-4 items-center">
                                <p className="text-gray-500 font-light">{post.date}</p>
                                <div className="flex flex-row gap-1">
                                  {
                                    post.tags.map((tag) => (
                                      <a 
                                        key={tag}
                                        href={`/tags/${tag}`}
                                        className="border rounded-full py-0.5 px-2 text-xs hover:bg-gray-100/35"
                                      >
                                        {tag}</a>
                                    ))
                                  }
                                </div>
                              </div>
                              <a href={`/blog/${post.url}`}>
                                <h3 className="font-medium text-lg hover:underline">{post.title}</h3>
                              </a>
                              <p className='text-gray-600/80 font-light'>{post.shortDes}</p>
                            </div>
                          </div>
                        ))}
                        </div>
                      </div>
                    ) : (
                      <div className="mt-5">
                        <h2 className='text-xl w-full font-semibold'>Oops!</h2>
                        <p className="mt-3.5 text-sm font-light text-gray-700/85">I haven't written anything about that.</p>
                      </div>
                    )
                  }
                </div>
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

export default Tag