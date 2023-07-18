'use client'
import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"

interface FormDataProps {
  id: string,
  user: string,
  titulo: string,
  descricao: string
}

export default function FormEditarTask(props: { id: string, user: string, titulo: string, descricao: string }) {

  const router = useRouter()

  const [formData, setFormData] = useState<FormDataProps>({
    id: props.id,
    user: props.user,
    titulo: props.titulo,
    descricao: props.descricao,
  })

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    const data = await fetch('/api/tasks', {
      method: 'PUT',
      body: JSON.stringify(formData)
    })
    const json = await data.json()
    router.push('/')
    return json
  }

  const handleForm = (e: any) => {
    const { name, value } = e.target
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value
      }
    })
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col h-5/6 w-5/6 gap-2 bg-white p-4 rounded-md shadow-lg shadow-purple-400">
        <h2 className="flex self-center font-bold text-4xl">Editar tarefa</h2>
        <h3>Criado por: {props.user}</h3>
        <label htmlFor="titulo" className="font-semibold text-lg">Titulo:</label>
        <input type="text" id="titulo" name="titulo" value={formData.titulo} onChange={handleForm}
          className="bg-gray-200 rounded-sm p-2 outline-none" />
        <label htmlFor="descricao" className="font-semibold text-lg">Descrição</label>
        <input type="text" id="descricao" name="descricao" value={formData.descricao} onChange={handleForm}
          className="bg-gray-200 rounded-sm p-2 outline-none" />
        <div className="flex justify-between">
          <button type="submit" className='bg-green-400 hover:bg-green-600 hover:text-white rounded-md px-4 py-2 w-2/5'>Atualizar</button>
          <button type="button"><Link href='/' className="text-gray-400 hover:text-gray-500 pr-2">Cancelar</Link></button>
        </div>
      </form>
    </>
  )
}