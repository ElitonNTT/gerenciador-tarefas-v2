import FormEditarTask from "@/components/FormEditarTask"
import prisma from "@/lib/prisma/prismaClient"

async function page({ params }: { params: { id: string } }) {
  const getData = async () => prisma.tasks.findUnique({
    where: {
      id: params.id
    }
  })
  const data = await getData()

  if (data == null) {
    return <>Carregando!</>
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <FormEditarTask
        id={params.id}
        user={data.user}
        titulo={data.titulo}
        descricao={data.descricao}
      />
    </div>
  )
}

export default page