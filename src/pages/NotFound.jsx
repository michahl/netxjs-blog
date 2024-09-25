import { FaArrowRightLong } from "react-icons/fa6"
import Footer from "../components/Footer"
import Header from "../components/Header"

const NotFound = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='w-full max-w-2xl'>
        <div className='mx-10 lg:mx-0'>
          <div className='flex flex-col'>
            <Header />
            <div className="flex-grow">
              <div className='flex justify-center items-center h-[50rem]'>
                <div className="flex flex-col items-center">
                    <p className="text-sm font-medium mb-5">404</p>
                    <h3 className="text-xl font-bold">Page not found</h3>
                    <p className="font-light text-[0.95rem] text-gray-600/85 dark:text-gray-200/50">Sorry, I couldn't find the page you're looking for.</p>
                    <a href="/" className="mt-10 flex gap-2 items-center justify-center rounded-full border border-black bg-black hover:bg-black/90 text-white py-1.5 px-3.5 text-sm dark:bg-gray-700/30 dark:text-white/50 dark:hover:text-white/70 dark:border-gray-500/80">
                        <span>Back home</span>
                        <FaArrowRightLong className="w-3 h-3" />
                    </a>
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

export default NotFound