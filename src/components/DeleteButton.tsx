'use client'
import Image from "next/image"
import DeleteSvg from "@/assets/trash-outline.svg";
import { useRouter } from "next/navigation";

interface DeleteButtonProps {
  id: string
}
export default function DeleteButton(id: DeleteButtonProps) {
  const router = useRouter()
  const handleDelete = async (id: DeleteButtonProps) => {
    const deleteId = await fetch('/api/tasks', {
      method: 'DELETE',
      body: JSON.stringify(id)
    })
    alert('Deletado com sucesso')
    router.refresh()
  }

  return (
    <button type="button" onClick={() => handleDelete(id)}>
      <Image
        src={DeleteSvg}
        alt="delete"
        width={26}
        className="hover:scale-105"
      />
    </button>
  )
}
