'use client'
import { UserLoginData } from "@/types/UserLoginData"
import { useState } from "react"

export default function LoginAuth() {
  const [data, setData] = useState<UserLoginData>({
    email: '',
    password: ''
  })

  const handleForm = (e: any) => {
    const { name, value } = e.target
    setData((prev) => {
      return {
        ...prev,
        [name]: value
      }
    })
  }

  return (
    <>
      <form className="flex flex-col gap-4">
        <h1 className='flex self-center text-white font-bold text-[48px]'>Login</h1>
        <label htmlFor="email" className='text-white font-bold text-xl'>Email</label>
        <input type="email" id='email' name="email" onChange={handleForm} value={data.email}
          className='bg-gray-700 text-white border-b-2 border-white rounded-sm' />
        <label htmlFor="password" className='text-white font-bold text-xl'>Senha</label>
        <input type="password" id='password' name="password" onChange={handleForm} value={data.password}
          className='bg-gray-700 text-white border-b-2 border-white rounded-sm' />
        <button type='submit' className='flex justify-center items-center self-center text-black
      bg-white w-24 h-16 rounded-2xl shadow-2xl hover:scale-105 hover:bg-green-700 hover:text-white'>Entrar</button>
      </form>
    </>
  )
}
