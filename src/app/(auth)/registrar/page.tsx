import RegisterAuth from "./RegisterAuth";

export default function Registrar() {
  return (
    <main className='h-screen flex justify-center items-center '>
      <div className='flex flex-col gap-4 p-4 rounded-2xl shadow-slate-600 shadow-md bg-gray-600'>
        <RegisterAuth />
      </div>
    </main>
  )
}