import { useState } from "react"
import axios from "axios"
import { FaCheckCircle } from "react-icons/fa"
import { RiErrorWarningFill } from "react-icons/ri"

const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    try {
        const data = {
            email: email,
            fields: {
                name: name
            }
        }
        const headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + import.meta.env.VITE_MAILER_API
        }
        axios.post('https://connect.mailerlite.com/api/subscribers', data, {
            headers: headers
        }).then((res) => {
            if(res.status == 201 || res.status == 200) {
                setEmail('')
                setName('')
            }
            setSuccess(true)
            setTimeout(() => setSuccess(false), 2500)
        })
    } catch (e) {
        setError(true)
        setTimeout(() => setError(false), 2500)
        console.log(e)
    }
  }

  return (
    <div className='py-3 mb-10 flex justify-center'>
        <div className="w-full">
            <div className='bg-gray-100/85 dark:bg-gray-100/10 rounded-md px-8 pt-1 pb-5'>
                {
                    success && (
                        <div className="mt-3 flex flex-row w-full items-center gap-1.5 bg-green-500/40 text-white text-sm font-light tracking-wide rounded-md py-1.5 px-4">
                            <FaCheckCircle className="w-4 h-4"/>
                            <p>Thanks for subscribing</p>
                        </div>
                    )
                }
                {
                    error && (
                        <div className="my-3 flex flex-row w-full items-center gap-1.5 bg-yellow-500/40 text-white text-sm font-light rounded-md py-1.5 px-4">
                            <RiErrorWarningFill className="w-4 h-4"/>
                            <p>Please try again!</p>
                        </div>
                    )
                }
                <h2 className='text-lg font-semibold mb-2.5 pt-2'>Join the newsletter!</h2>
                <form className='flex flex-col gap-2' onSubmit={handleSubmit}>
                    <input value={email} onChange={handleEmailChange} type="email" name="email" id="email" className='ring-1 ring-gray-300/50 dark:text-black/80 rounded-md py-1 px-2 text-[0.9rem]' placeholder='Email address' required />
                    <input value={name} onChange={handleNameChange} type="text" name='name' id='name' className='ring-1 ring-gray-300/50 dark:text-black/80 rounded-md py-1 px-2 text-[0.9rem]' placeholder='First Name' required />
                    <button type='submit' className='bg-black w-full text-white py-1.5 rounded-md mt-2.5 text-[0.9rem]'>Subscribe</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Newsletter