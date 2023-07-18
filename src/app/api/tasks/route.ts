import prisma from "@/lib/prisma/prismaClient";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { user, titulo, descricao } = await request.json();

    const create = await prisma.tasks.create({
      data: {
        user: user,
        titulo: titulo,
        descricao: descricao,
      },
    });
    return NextResponse.json({
      user: create.user,
      titulo: create.titulo,
      descricao: create.descricao,
    });
  } catch (error) {
    return NextResponse.error;
  }
}

export async function PUT(request: Request) {
  try {
    const { id, user, titulo, descricao, executado } = await request.json();

    const update = await prisma.tasks.update({
      where: {
        id: id,
      },
      data: {
        user: user,
        titulo: titulo,
        descricao: descricao,
        executado: executado,
      },
    });
    return NextResponse.json({
      user: update.user,
      titulo: update.titulo,
      descricao: update.descricao,
      executado: update.executado,
    });
  } catch (error) {
    return NextResponse.error;
  }
}

export async function DELETE(request: Request) {
  try {
    const { id } = await request.json();

    const deleteTask = await prisma.tasks.delete({
      where: {
        id: id,
      },
    });
    return NextResponse.json("deletado com sucesso");
  } catch (error) {
    return NextResponse.error;
  }
}
