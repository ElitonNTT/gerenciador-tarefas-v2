import prisma from "@/lib/prisma/prismaClient";
import EditSvg from "@/assets/create-outline.svg";
import DeleteSvg from "@/assets/trash-outline.svg";
import Image from "next/image";
import Link from "next/link";

const getTasks = async () => prisma.tasks.findMany({});

export default async function Lista() {
  const data = await getTasks();
  return (
    <>
      <main className="flex flex-col h-5/6 w-5/6 gap-2 bg-white p-4 rounded-md shadow-lg shadow-purple-400">
        <div className="flex justify-between items-center mb-4">
          <h2>Gerenciador de Tarefas</h2>
          <button
            value="Criar"
            className="bg-green-400 hover:bg-green-600 hover:text-white rounded-md px-4 py-2 w-2/5"
          >
            <Link href="/criar">Criar</Link>
          </button>
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
                <button>
                  <Image
                    src={DeleteSvg}
                    alt="delete"
                    width={20}
                    className="hover:scale-105"
                  />
                </button>
              </div>
            </div>
            {/* <div>{task.user}</div> */}
            <div className="text-sm font-medium text-gray-700">
              {task.descricao}
            </div>
          </div>
        ))}
      </main>
    </>
  );
}
