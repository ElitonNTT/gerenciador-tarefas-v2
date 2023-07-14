import LoginButton from "@/components/LogginButton"

export default function login() {
  return (
    <main className='h-screen flex justify-center items-center '>
      <form action="" className='flex flex-col gap-4 p-4 rounded-2xl shadow-slate-600 shadow-md bg-gray-600'>
        <h1 className='flex self-center text-white font-bold text-[48px]'>Login</h1>
        <label htmlFor="email" className='text-white font-bold text-xl'>Email</label>
        <input type="email" id='email' className='bg-gray-700 text-white border-b-2 border-white rounded-sm' />
        <label htmlFor="password" className='text-white font-bold text-xl'>Senha</label>
        <input type="password" id='password' className='bg-gray-700 text-white border-b-2 border-white rounded-sm' />
        <button type='submit' className='flex justify-center items-center self-center text-black
      bg-white w-24 h-16 rounded-2xl shadow-2xl hover:scale-105 hover:bg-green-700 hover:text-white'>Entrar</button>
        <h2 className='text-white pl-2'>Ou acessar usando:</h2>
        <LoginButton />
      </form>
    </main>
  )
}