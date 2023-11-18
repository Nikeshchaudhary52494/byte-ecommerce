import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Logo from "../images/byte.png"

const Login = () => {
  return (
    <>
      <div class="grid bg-slate-900 h-[100vh]  fixed z-20 top-0 left-0 w-[100vw] place-content-center">
        <div class="bg-slate-800 p-10 rounded-lg text-white">
          <div class="px-4" >
            {/* <h1 class="text-3xl text-cyan-500 font-medium">Ecommerce</h1> */}
            <img className='w-24' src={Logo} alt="Byte logo" />

            <h3 class="text-xl mb-4 ">Login</h3>
          </div>
          <form class="flex gap-4 flex-col">
            <input class="w-[300px ] outline-none p-2 m-2 rounded-md" type="text" placeholder='Email' />
            <input class="w-[300px ] outline-none p-2 m-2 rounded-md" type="password" placeholder='Password' />
            <motion.input type="submit" whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1 }} transition={{ duration: .5 }} class="w-[300px] m-2 h-[40px] hover:bg-teal-700 bg-teal-600 rounded-lg" />
          </form>
          <Link to="/user/signup">
            <p class="text-sm ">
              New User? Create Account
            </p>
          </Link>
        </div>
        <Link to="/" >
          <button class="text-white p-2 mt-5"  >Go to Home</button>
        </Link>
      </div>
    </>
  )
}

export default Login