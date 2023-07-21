import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { ReactNode } from "react";
import { authOptions } from "../api/auth/[...nextauth]/authOptions";

export type layoutProps = {
  children?: ReactNode | ReactNode[];
};

export default async function layout({ children }: layoutProps) {
  const session = await getServerSession(authOptions);

  if (session == null) {
    redirect("/login");
  }

  return <>{children}</>;
}
