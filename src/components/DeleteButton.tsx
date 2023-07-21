'use client'
import Image from "next/image"
import DeleteSvg from "@/assets/trash-outline.svg";
import { useQueryClient } from "@tanstack/react-query";

interface DeleteButtonProps {
  id: string
}
export default function DeleteButton(id: DeleteButtonProps) {
  const queryClient = useQueryClient();
  const handleDelete = async (id: DeleteButtonProps) => {
    const deleteId = await fetch('/api/tasks', {
      method: 'DELETE',
      body: JSON.stringify(id)
    })
    queryClient.invalidateQueries({ queryKey: ["task-data"] });
    alert('Deletado com sucesso')
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
