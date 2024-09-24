import Footer from './components/Footer'
import Header from './components/Header'

import { FaArrowRight } from "react-icons/fa"
import { FaArrowRightLong } from "react-icons/fa6"
import { blog } from './assets'

const App = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center min-h-screen'>
      <div className='w-full max-w-2xl'>
        <div className='mx-10 lg:mx-0'>
          <div className='flex flex-col justify-around'>
            <Header />

            <div className='mt-20 mb-10'>
              <h2 className='text-xl font-semibold mb-2.5'>michahl/blog</h2>
              <p className='text-sm font-light mb-5'>Welcome to my personal 'weekly' blog where I share thinks.</p>

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
              <div className='py-7 grid grid-cols-2 border-b'>
                {
                  blog.map((post) => (
                    <div key={post.title} className='text-sm max-w-60 flex flex-col gap-4 pb-5'>
                      <div className='flex flex-col gap-1.5'>
                        <h3 className='font-medium'>{post.title}</h3>
                        <p className='text-gray-600/80 font-light'>{post.shortDes}</p>
                      </div>
                      <a href="" className='text-blue-900/55 hover:text-blue-900/70 flex flex-row items-center gap-3'>
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
            <div className='py-3 mb-10'>
              <div className='bg-gray-100 rounded-md px-8 pt-10 pb-7'>
                <h2 className='text-lg font-semibold mb-7'>Join the newsletter!</h2>

                <form className='flex flex-col gap-2'>
                  <input type="email" name="email" id="email" className='ring-1 ring-gray-300/80 rounded-md py-1 px-2' placeholder='Email address' required />
                  <input type="text" name='name' id='name' className='ring-1 ring-gray-300/80 rounded-md py-1 px-2' placeholder='First Name' required />
                  <button type='submit' className='bg-black w-full text-white py-1.5 rounded-md mt-2.5'>Subscribe</button>
                </form>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App