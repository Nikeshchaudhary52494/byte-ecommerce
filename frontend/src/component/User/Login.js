import React, { useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import Logo from "../images/byte.png"
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser, resetError, resetIsLogin } from '../../slices/userSlice/userSlice'
import { toast } from "react-toastify"



const Login = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isAuthenticated, error, isLogin } = useSelector((state) => state.user);

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
    if (isAuthenticated) {
      navigate("/")
    }
    if (isLogin) {
      toast.success("Login successfully");
      dispatch(resetIsLogin());
      navigate(location.state);
    }
    if (error) {
      toast.error(error);
      dispatch(resetError());
    }
  }, [navigate, isAuthenticated, isLogin, location, error, dispatch])

  return (
    <>
      <div className="bg-slate-900 flex flex-col items-center justify-center inset-0 z-10 fixed">
        <div class="bg-slate-800 px-5 py-10 rounded-lg text-white">
          <div class="px-4" >
            <img className='w-24' src={Logo} alt="Byte logo" />

            <h3 class="text-xl mb-4 ">Login</h3>
          </div>
          <form class="flex text-black gap-4 flex-col" onSubmit={submitHandler} >
            <input
              class="w-[300px ] outline-none p-2 m-2 rounded-md"
              type="Email"
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
              transition={{ duration: .5 }}
              class="w-[300px] m-2 h-[40px] hover:bg-teal-700 text-white bg-teal-600 rounded-lg" />
          </form>
          <div className='flex justify-between'>
            <Link
              class="text-xs"
              to="/user/signup"
              state={location.state}>
              New User? Create Account
            </Link>
            <Link
              className='text-xs text-red-400'
              to="/user/password/forget">
              Forget Password
            </Link>
          </div>
        </div>
        <div className='w-full max-w-sm px-4'>
          <Link to="/" >
            <button class="text-white  p-2 mt-5"  >Go to Home</button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Login