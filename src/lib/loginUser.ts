import { compare } from "bcrypt";
import { UserLoginData } from "@/types/UserLoginData";
import prisma from "@/lib/prisma/prismaClient";

export async function loginUser({ email, password }: UserLoginData) {
  const user = await prisma.user.findUnique({ where: { email } });

  if (!user || user.password == null) {
    throw new Error("Invalid email");
  }

  const isValid = await compare(password, user.password);

  if (!isValid) {
    throw new Error("Invalid password");
  }

  return user;
}
