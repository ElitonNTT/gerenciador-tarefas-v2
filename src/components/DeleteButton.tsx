'use client'
import Image from "next/image"
import DeleteSvg from "@/assets/trash-outline.svg";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

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
    toast.success('Tarefa deletada com sucesso')
    queryClient.invalidateQueries({ queryKey: ["task-data"] });
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
