import LoginButton from "@/components/LogginButton"
import LoginAuth from "./LoginAuth"

export default function Login() {
  return (
    <main className='h-screen flex justify-center items-center '>
      <div className='flex flex-col gap-4 p-4 rounded-2xl shadow-slate-600 shadow-md bg-gray-600'>
        <LoginAuth />
        <h2 className='text-white pl-2'>Ou acessar usando:</h2>
        <LoginButton />
      </div>
    </main>
  )
}