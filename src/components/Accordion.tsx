'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import EditSvg from "@/assets/create-outline.svg";
import Checkbox from "@/assets/checkbox-outline.svg";
import DeleteButton from './DeleteButton';
import { useSession } from "next-auth/react"
import { useQueryClient } from '@tanstack/react-query';

interface AccordionProps {
  id: string,
  user?: string,
  titulo?: string,
  descricao?: string,
  executado?: string
}

function Accordion(props: AccordionProps) {
  const { data: session } = useSession()
  const [isOpen, setIsOpen] = useState(false)
  const [visible, setVisible] = useState(false)
  const queryClient = useQueryClient();

  const handleAccordion = () => {
    visible ? setVisible(false) : setVisible(true)
    setIsOpen(false)
  }
  const handleModalExec = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true)
  }
  async function handleSubmitExec(e: any) {
    e.preventDefault();
    const resp = await fetch('/api/tasks', {
      method: 'PUT',
      body: JSON.stringify({ id: props.id, executado: session?.user?.name })
    });
    const data = await resp.json();
    alert('Atualizado');
    setIsOpen(false)
    queryClient.invalidateQueries({ queryKey: ["task-data"] });
    return data;
  }

  useEffect(() => {
  }, [isOpen])

  return (
    <main className="bg-gray-200 flex flex-col justify-center p-4 rounded-md border-b-2 border-gray-300">
      <div className="flex justify-between">
        <div className='flex gap-2 items-center w-full'>
          <button type='button' onClick={handleModalExec}><Image src={Checkbox} alt='check' width={26} /></button>
          {isOpen &&
            (<div className="absolute left-2 bg-white rounded-md justify-between z-10 flex flex-col p-4 shadow-md gap-2">
              <h2 className="text-lg font-semibold">Iniciar Tarefa</h2>
              <button onClick={handleSubmitExec} className='bg-green-400 hover:bg-green-600 hover:text-white rounded-md px-4 py-2'>
                Confirmar
              </button>
              <button className='text-sm hover:text-gray-400' onClick={() => setIsOpen(false)}>Cancelar</button>
            </div >)}
          <h3 className="font-bold text-xl cursor-pointer w-full" onClick={handleAccordion}>{props.titulo}</h3>
        </div>
        <div className="flex gap-2">
          <button type="button">
            <Link href={"/editar/" + props.id}>
              <Image
                src={EditSvg}
                alt="edit"
                width={26}
                className="hover:scale-105"
              />
            </Link>
          </button>
          <DeleteButton id={props.id} />
        </div>
      </div>
      {visible && (
        <>
          <div className='text-sm font-light mt-4'>Criado por:{props.user}</div>
          {props.executado && <div className='text-sm font-light text-green-400'>Sendo executado por:{props.executado}</div>}
          <div className='text-lg font-normal'>{props.descricao}</div>
        </>
      )}
    </main>
  )
}

export default Accordion