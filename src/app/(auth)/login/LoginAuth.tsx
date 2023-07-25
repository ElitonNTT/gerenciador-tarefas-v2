'use client'
import { UserLoginData } from "@/types/UserLoginData"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import toast, { Toaster } from 'react-hot-toast'

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> { }

export default function LoginAuth({ ...props }: UserAuthFormProps) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [data, setData] = useState<UserLoginData>({
    email: '',
    password: ''
  })

  const handleForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setData((prev) => {
      return {
        ...prev,
        [name]: value
      }
    })
  }
  async function handleSubmit(event: React.SyntheticEvent) {
    event.preventDefault()
    setIsLoading(true)
    const res = await signIn<"credentials">("credentials", {
      ...data,
      redirect: false,
    })
    if (res?.error) {
      toast.error('Usuário não existe!')
    } else {
      router.push('/')
    }
    setIsLoading(false)
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <h1 className='flex self-center text-white font-bold text-[48px]'>Login</h1>
        <label htmlFor="email" className='text-white font-bold text-xl'>Email</label>
        <input
          id='email'
          type="email"
          name="email"
          autoFocus
          disabled={isLoading}
          onChange={handleForm}
          value={data.email}
          className='bg-gray-700 text-white border-b-2 border-white rounded-sm' />
        <label htmlFor="password" className='text-white font-bold text-xl'>Senha</label>
        <input
          id='password'
          type="password"
          name="password"
          disabled={isLoading}
          onChange={handleForm}
          value={data.password}
          className='bg-gray-700 text-white border-b-2 border-white rounded-sm' />
        <button
          type='submit'
          disabled={isLoading}
          className='flex justify-center items-center self-center text-black
      bg-white w-24 h-16 rounded-2xl shadow-2xl hover:scale-105 hover:bg-green-700 hover:text-white'>Entrar</button>
      </form>
    </>
  )
}
