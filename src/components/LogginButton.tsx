'use client'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { FcGoogle } from 'react-icons/fc'
import { ImGithub } from 'react-icons/im'
import { BsDiscord } from 'react-icons/bs'


const LoginButton = () => {
  const { data: session } = useSession()
  const router = useRouter()

  if (session) {
    router.push('/')
  }

  return (
    <div className='flex gap-2'>
      <button
        type='button'
        onClick={() => signIn("google")}
        className='flex justify-center items-center gap-12 text-black
      bg-white w-24 h-16 rounded-2xl shadow-2xl hover:scale-105 hover:bg-green-700 hover:text-white' >
        <FcGoogle size={32} />
      </button>
      <button
        type='button'
        onClick={() => signIn("github")}
        className='flex justify-center items-center gap-12 text-black
      bg-white w-24 h-16 rounded-2xl shadow-2xl hover:scale-105 hover:bg-green-700 hover:text-white' >
        <ImGithub size={32} />
      </button>
      <button
        type='button'
        onClick={() => signIn("discord")}
        className='flex justify-center items-center gap-12 text-black
      bg-white w-24 h-16 rounded-2xl shadow-2xl hover:scale-105 hover:bg-green-700 hover:text-white' >
        <BsDiscord size={32} />
      </button>
    </div>
  )
}

export default LoginButton