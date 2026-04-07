import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
    navigate('/dashboard')
  }

  return (
    <div className="min-h-screen flex">
      {/* LEFT SIDE - Branding */}
      <div
        className="hidden lg:flex w-1/2 bg-cover bg-center relative"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1581091215367-59ab6b3b3e7c')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 flex flex-col justify-center px-16 text-white">
          <h1 className="text-5xl font-extrabold mb-4">
            Print<span className="text-pink-500">Brand</span>
          </h1>
          <p className="text-lg text-gray-300 mb-6">Professional Printing & Branding Solutions</p>

          <ul className="space-y-2 text-sm">
            <li>✔ Business Cards & Flyers</li>
            <li>✔ Custom Branding Materials</li>
            <li>✔ High Quality Print Services</li>
          </ul>
        </div>
      </div>

      {/* RIGHT SIDE - LOGIN */}
      <div className="flex w-full lg:w-1/2 items-center justify-center bg-gray-100 p-6">
        <div className="w-full max-w-md bg-white/70 backdrop-blur-lg shadow-2xl rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Login to Dashboard</h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Email */}
            <div>
              <input
                type="email"
                placeholder="Email Address"
                {...register('email', { required: 'Email is required' })}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-500 outline-none"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>

            {/* Password */}
            <div>
              <input
                type="password"
                placeholder="Password"
                {...register('password', { required: 'Password is required' })}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-500 outline-none"
              />
              {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-2 rounded-lg font-semibold hover:opacity-90 transition"
            >
              Sign In
            </button>
          </form>

          <p className="text-center text-sm text-gray-600 mt-4">
            Don’t have an account?{' '}
            <span className="text-pink-500 font-semibold cursor-pointer">Contact Admin</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
