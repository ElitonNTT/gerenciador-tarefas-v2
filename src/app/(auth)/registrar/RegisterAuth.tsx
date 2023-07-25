'use client'
import toast, { Toaster } from 'react-hot-toast';
import { useState } from "react"
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> { }

interface IUser {
  name: string,
  email: string,
  password: string,
}

export default function RegisterAuth({ ...props }: UserAuthFormProps) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [data, setData] = useState<IUser>({
    name: '',
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
    const request = await fetch('/api/users', {
      method: 'POST',
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(data)
    })
    const response = await request.json()
    console.log('Usuario registrado', response)
    if (!request.ok) {
      console.log('Error no Fetch')
      toast.error('Erro ao criar! Tente novamente!')
    }
    setIsLoading(false)
    router.push('/login')
    toast.success('Usuário cadastrado!')
  }

  return (
    <>
      <Toaster position="top-center"
        reverseOrder={false} />
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <h1 className='flex self-center text-white font-bold text-[48px]'>Criar Conta</h1>
        <label htmlFor="name" className='text-white font-bold text-xl'>Nome</label>
        <input
          id='name'
          type="text"
          name="name"
          disabled={isLoading}
          onChange={handleForm}
          value={data.name}
          autoFocus
          className='bg-gray-700 text-white border-b-2 border-white rounded-sm' />
        <label htmlFor="email" className='text-white font-bold text-xl'>Email</label>
        <input
          id='email'
          type="email"
          name="email"
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
      bg-white w-24 h-16 rounded-2xl shadow-2xl hover:scale-105 hover:bg-green-700 hover:text-white'>Criar</button>
        <Link href={'/login'} className='flex self-center text-white hover:scale-105'>Cancelar</Link>
      </form>
    </>
  )
}
