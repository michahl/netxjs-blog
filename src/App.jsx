import Footer from './components/Footer'
import Header from './components/Header'

const App = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center h-screen'>
      <div className='w-full max-w-2xl'>
        <div className='mx-10 lg:mx-0'>
          <div className='flex flex-col justify-around'>
            <Header />


            <Footer />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App