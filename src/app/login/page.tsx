import React from 'react'
import { LoginForm } from '@/components/login-form'

const Login = () => {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 bg-dark-slate-gray-0">
      <div className="w-full max-w-xl">
        <LoginForm/>
      </div>
    </div>
  )
}

export default Login