import "./globals.css";
import type { Metadata } from "next";
import AuthProvider from "@/components/AuthProvider";
import Providers from "@/app/providers"
import Header from "@/components/Header";

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
      <AuthProvider>
        <body className="min-h-screen bg-gradient-to-t  from-purple-300 to bg-purple-400">
          <Providers>
            <Header />
            {children}
          </Providers>
        </body>
      </AuthProvider>
    </html>
  );
}
