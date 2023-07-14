'use client'
import { useState } from 'react'

interface AccordionProps {
  user?: string,
  descricao?: string
}

function Accordion(props: AccordionProps) {
  const [visible, setVisible] = useState(true)
  const handleAccordion = () => {
    if (!visible) {
      setVisible(true)
    }
    setVisible(false)
  }
  return (
    <div onClick={() => handleAccordion()} className='cursor-pointer'>
      {visible && (
        <>
          <div>{props.user}</div>
          <div>{props.descricao}</div>
        </>
      )}
    </div>
  )
}

export default Accordion