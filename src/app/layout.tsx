import "./globals.css";
import type { Metadata } from "next";
import Provider from "@/components/Provider";
import Header from "@/components/Header";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Gerenciador de Tarefas",
  description: "Tarefas",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Provider>
        <body className="min-h-screen bg-gradient-to-t  from-purple-300 to bg-purple-400">
          <Header />
          {children}
        </body>
      </Provider>
    </html>
  );
}
