import ProvidersButton from "@/components/ProvidersButton"
import LoginAuth from "./LoginAuth"
import Link from "next/link"
import { Toaster } from "react-hot-toast"

export default function Login() {
  return (
    <main className='h-screen flex justify-center items-center '>
      <Toaster position="top-center"
        reverseOrder={false} />
      <div className='flex flex-col gap-4 p-4 rounded-2xl shadow-slate-600 shadow-md bg-gray-600'>
        <LoginAuth />
        <h2 className='text-white pl-2'>Ou acessar usando:</h2>
        <ProvidersButton />
        <Link href={'/registrar'} className="flex self-center text-white hover:scale-105">Criar conta</Link>
      </div>
    </main>
  )
}