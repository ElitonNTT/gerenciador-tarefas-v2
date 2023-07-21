import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"

interface ModalExecProps {
  id: string,
}

function ModalExec(props: ModalExecProps) {

  const router = useRouter()
  const { data: session } = useSession()

  const handleSubmitExec = async (e: any) => {
    e.preventDefault()
    const data = await fetch('/api/tasks', {
      method: 'PUT',
      body: JSON.stringify({ id: props.id, executado: session?.user?.name })
    })
    const json = await data.json()
    alert('Atualizado')
    router.refresh()
    return json
  }

  return (
    <div className="absolute left-2 bg-white rounded-md justify-between z-10 flex flex-col p-4 shadow-md gap-2">
      <h2 className="text-lg font-semibold">Iniciar Tarefa</h2>
      <button onClick={handleSubmitExec} className='bg-green-400 hover:bg-green-600 hover:text-white rounded-md px-4 py-2'>Confirmar</button>
    </div >
  )
}

export default ModalExec