import Footer from "../components/Footer"
import Header from "../components/Header"
import Newsletter from '../components/Newsletter'

const About = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center min-h-screen'>
      <div className='w-full max-w-2xl'>
        <div className='mx-10 lg:mx-0'>
          <div className='flex flex-col min-h-screen'>
            <Header />
            <div className="flex-grow mt-20">
              <div className='mb-3'>
                <h2 className='text-2xl w-full font-semibold'>About</h2>

                <p className="mt-3 text-sm text-gray-800/90 dark:text-gray-400/75 font-light">Hi, I&rsquo;m Michail, a developer from Greece</p>

                <div className="mt-16 space-y-20">
                  <div className="">
                    <h5 className="text-lg font-medium">External links</h5>
                    <ul className="mt-2 list-disc list-inside text-gray-600/80 dark:text-gray-200/50 text-sm font-normal space-y-4">
                      <li className="hover:text-gray-600/95 dark:hover:text-gray-100/60">
                        <a href="https://github.com/michahl">Github</a>
                      </li>
                      <li className="hover:text-gray-600/95 dark:hover:text-gray-100/60">
                        <a href="https://michahl.com">Portfolio</a>
                      </li>
                    </ul>

                  </div>
                  <div>
                    <h5 className="text-lg font-medium">Contact</h5>
                    <p className="mt-2 text-[0.82rem] font-light text-gray-800/60 dark:text-gray-400/75">Feel free to reach out by email, at <a href="mailto:hi@michahl.com" className="text-blue-800/60 hover:text-blue-800/70 dark:text-blue-500/50 dark:hover:text-blue-500/65 font-normal">hi@michahl.com</a>.</p>
                  </div>
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

export default About