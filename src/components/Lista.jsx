import prisma from "@/lib/prisma/prismaClient";
import EditSvg from "@/assets/create-outline.svg";
import Image from "next/image";
import Link from "next/link";
import DeleteButton from "./DeleteButton";
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
        {data.map((task, index) => (
          <div
            key={index}
            className="bg-gray-200 flex flex-col justify-center p-2 rounded-md border-b-2 border-gray-300"
          >
            <div className="flex justify-between">
              <h3 className="font-semibold">{task.titulo}</h3>
              <div className="flex gap-2">
                <button type="button">
                  <Link href={"/editar/" + task.id}>
                    <Image
                      src={EditSvg}
                      alt="edit"
                      width={20}
                      className="hover:scale-105"
                    />
                  </Link>
                </button>
                <DeleteButton id={task.id} />
              </div>
            </div>
            <Accordion user={task.user} descricao={task.descricao} />
          </div>
        ))}
      </main>
    </>
  );
}
