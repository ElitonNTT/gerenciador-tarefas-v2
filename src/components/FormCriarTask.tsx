'use client'
import { useState } from "react"

interface FormDataProps {
  user: string,
  titulo: string,
  descricao: string
}

export default function FormCriarTask() {
  const [formData, setFormData] = useState<FormDataProps>({
    user: '',
    titulo: '',
    descricao: '',
  })

  const handleSubmit = async () => {
    const data = await fetch('/api/tasks', {
      method: 'POST',
      body: JSON.stringify(formData)
    })

    const json = await data.json()
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
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <h2 className="flex self-center">Gerenciador</h2>
        <input type="text" id="titulo" name="titulo" value={formData.titulo} onChange={handleForm} />
        <input type="text" id="descricao" name="descricao" value={formData.descricao} onChange={handleForm} />
        <button type="submit" className="bg-red-400 p-4">Criar</button>
      </form>
    </>
  )
}