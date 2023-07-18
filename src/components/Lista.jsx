import prisma from "@/lib/prisma/prismaClient";
import Link from "next/link";
import Accordion from "./Accordion";

const getTasks = async () => prisma.tasks.findMany({});

export default async function Lista() {
  const data = await getTasks();

  return (
    <>
      <main className="flex flex-col h-5/6 w-5/6 gap-2 bg-white p-4 rounded-md shadow-lg shadow-purple-400">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-bold text-4xl">Gerenciador de Tarefas</h2>
          <Link
            href="/criar"
            className="flex justify-center items-center bg-green-400 hover:bg-green-600 hover:text-white rounded-md px-4 py-2 w-2/5"
          >
            Criar
          </Link>
        </div>
        <input
          type="text"
          placeholder="Buscar..."
          className="flex self-center outline-none border-b-2 w-2/5"
        />
        {data.map((task, index) => (
          <Accordion
            key={index}
            id={task.id}
            user={task.user}
            titulo={task.titulo}
            descricao={task.descricao}
            executado={task.executado}
          />
        ))}
      </main>
    </>
  );
}
