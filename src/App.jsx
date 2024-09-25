import Footer from './components/Footer'
import Header from './components/Header'
import Newsletter from './components/Newsletter'

import { FaArrowRight } from "react-icons/fa"
import { FaArrowRightLong } from "react-icons/fa6"
import { blog } from './assets'

const App = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center min-h-screen'>
      <div className='w-full max-w-2xl'>
        <div className='mx-10 lg:mx-0'>
          <div className='flex flex-col min-h-screen'>
            <Header />
            <div className='flex-grow'>
              <div className='mt-20 mb-10'>
                <h2 className='text-xl font-semibold mb-2.5'>michahl/blog</h2>
                <p className='text-sm font-light mb-5'>Welcome to my personal &apos;weekly&apos; blog where I share thinks.</p>

                <div className='flex flex-row gap-3 items-center'>
                  <a href="/blog" className='flex flex-row items-center justify-center gap-2 bg-black border-black hover:bg-black/85 rounded-full text-white font-light text-sm py-1.5 px-3'>
                    <span>View posts</span>
                    <FaArrowRight className='h-2.5 w-2.5' />
                  </a>
                  <a href="/tags"  className='flex flex-row items-center justify-center gap-2 border rounded-full text-gray-600 hover:text-gray-800 hover:bg-gray-100/20 font-light text-sm py-1.5 px-3'>
                    <span>Explore topics</span>
                  </a>
                </div>
              </div>

              <div className='mb-3'>
                <h2 className='w-full border-b pb-3 font-medium'>Recent posts</h2>
                <div className='py-7 grid grid-cols-2 border-b gap-3'>
                  {
                    blog.map((post) => (
                      <div key={post.title} className='text-sm max-w-60 flex flex-col gap-4 pb-5'>
                        <div className='flex flex-col gap-1.5'>
                          <h3 className='font-medium'>{post.title}</h3>
                          <p className='text-gray-600/80 font-light'>{post.shortDes}</p>
                        </div>
                        <a href={`/blog/${post.url}`} className='text-blue-900/55 hover:text-blue-900/70 flex flex-row items-center gap-3'>
                          <span>Read more</span>
                          <FaArrowRightLong />
                        </a>
                      </div>
                    ))
                  }
                </div>
              </div>
              <div className='mb-3'>
                <a href="mailto:contact@michahl.com" className='text-sm text-blue-900/60 hover:text-blue-900/80 hover:underline'>Contact via email</a>
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

export default App