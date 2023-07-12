import prisma from "@/lib/prisma/prismaClient";

const getTasks = async () => prisma.tasks.findMany({});

export default async function Lista() {
  const data = await getTasks();
  return (
    <>
      <div>
        {data.map((task, index) => (
          <div key={index}>
            <div>{task.user}</div>
            <div>{task.titulo}</div>
            <div>{task.descricao}</div>
          </div>
        ))}
      </div>
    </>
  );
}
