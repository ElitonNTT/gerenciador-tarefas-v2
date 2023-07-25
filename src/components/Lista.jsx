"use client";
import Link from "next/link";
import Accordion from "./Accordion";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
export default function Lista() {
  const [filtro, setFiltro] = useState("");

  const getFetchData = async () => {
    const response = await fetch("/api/tasks");
    const data = await response.json();
    return data;
  };
  const { data, isLoading, isError } = useQuery({
    queryKey: ["task-data"],
    queryFn: getFetchData,
  });

  //filtro de busca
  const handleFilter = (e) => {
    const search = e.target.value;
    setFiltro(search);
  };
  const filteredList = data?.filter((element) =>
    element.titulo.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
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
          value={filtro}
          onChange={handleFilter}
          placeholder="Buscar..."
          className="flex self-center outline-none border-b-2 w-5/6 md:w-2/5"
        />
        {isLoading ? (
          <div className="flex self-center justify-center animate-spin border-t-4 border-b-4 w-10 h-10 rounded-full"></div>
        ) : (
          <>
            {filteredList.map((task, index) => (
              <Accordion
                key={index}
                id={task.id}
                user={task.user}
                titulo={task.titulo}
                descricao={task.descricao}
                executado={task.executado}
              />
            ))}
          </>
        )}
      </main>
    </>
  );
}
