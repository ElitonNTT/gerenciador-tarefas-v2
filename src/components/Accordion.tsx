'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import EditSvg from "@/assets/create-outline.svg";
import DeleteButton from './DeleteButton';


interface AccordionProps {
  id: string,
  user?: string,
  titulo?: string,
  descricao?: string
}

function Accordion(props: AccordionProps) {
  const [visible, setVisible] = useState(false)
  const handleAccordion = () => {
    visible ? setVisible(false) : setVisible(true)
  }
  return (
    <main className="bg-gray-200 flex flex-col justify-center p-2 rounded-md border-b-2 border-gray-300">
      <div className="flex justify-between">
        <h3 className="font-bold text-xl cursor-pointer w-full" onClick={handleAccordion}>{props.titulo}</h3>
        <div className="flex gap-2">
          <button type="button">
            <Link href={"/editar/" + props.id}>
              <Image
                src={EditSvg}
                alt="edit"
                width={20}
                className="hover:scale-105"
              />
            </Link>
          </button>
          <DeleteButton id={props.id} />
        </div>
      </div>
      <div className='mt-2'>
        {visible && (
          <>
            <div className='text-sm font-light'>{props.user}</div>
            <div className='text-lg font-normal'>{props.descricao}</div>
          </>
        )}
      </div>
    </main>
  )
}

export default Accordion