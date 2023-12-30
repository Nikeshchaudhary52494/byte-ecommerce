import React, { useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import Logo from "../images/byte.png"
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../../slices/userSlice/userSlice'



const Login = () => {
  const location = useLocation();
  console.log(location)
  const { isAuthenticated } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: ""
  })

  const { email, password } = user;
  const userDataChanged = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }
  const submitHandler = async (e) => {
    e.preventDefault()
    dispatch(loginUser(user));
  }
  useEffect(() => {
    if (isAuthenticated === true) {
      navigate(location.state.previousLocation);
    }
  }, [isAuthenticated, navigate, location])
  return (
    <>
      <div class="grid bg-slate-900 h-[100vh]  fixed z-20 top-0 left-0 w-[100vw] place-content-center">
        <div class="bg-slate-800 p-10 rounded-lg text-white">
          <div class="px-4" >
            <img className='w-24' src={Logo} alt="Byte logo" />

            <h3 class="text-xl mb-4 ">Login</h3>
          </div>
          <form class="flex text-black gap-4 flex-col" onSubmit={submitHandler} >
            <input
              class="w-[300px ] outline-none p-2 m-2 rounded-md"
              type="text"
              required
              name='email'
              placeholder='Email'
              onChange={userDataChanged}
              value={email} />
            <input
              class="w-[300px ] outline-none p-2 m-2 rounded-md"
              type="password"
              required
              name='password'
              placeholder='Password'
              onChange={userDataChanged}
              value={password} />
            <motion.input
              type="submit"
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: .5 }}
              class="w-[300px] m-2 h-[40px] hover:bg-teal-700 text-white bg-teal-600 rounded-lg" />
          </form>
          <Link to="/user/signup" state={location.state}>
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