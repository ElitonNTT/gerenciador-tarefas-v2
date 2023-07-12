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
