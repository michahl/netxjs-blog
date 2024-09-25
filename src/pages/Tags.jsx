import Header from '../components/Header'
import Footer from '../components/Footer'
import { blog } from '../assets/index'
import { useEffect, useState } from 'react'

const Tags = () => {
  const [tags, setTags] = useState([])
  const hook = () => {
    const allTags = blog.flatMap(item => item.tags)
    const t = [...new Set(allTags)]
    setTags(t)
  } 
  useEffect(hook, [])

  return (
    <div className='w-full flex flex-col justify-center items-center min-h-screen'>
      <div className='w-full max-w-2xl'>
        <div className='mx-10 lg:mx-0'>
          <div className='flex flex-col min-h-screen'>
            <Header />
            <div className="flex-grow mt-20">
              <div className='mb-3'>
                <h2 className='text-2xl w-full font-semibold'>Explore topics</h2>
                <div className='mt-5 flex flex-wrap items-center gap-1.5'>
                {
                  tags.map(tag => (
                    <a
                      key={tag} 
                      href={`/tags/${tag}`}
                      className='font-light border rounded-full py-0.5 px-2.5 text-[0.9rem] hover:bg-gray-100/35 dark:hover:bg-zinc-800/50 dark:border-gray-50/20 dark:text-white/60 dark:hover:text-white/85'
                    >
                      {tag}
                    </a>
                  ))
                }
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tags