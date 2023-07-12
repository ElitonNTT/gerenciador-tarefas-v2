import FormCriarTask from "@/components/FormCriarTask"
import Lista from "@/components/Lista"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <FormCriarTask />
      <Lista />
    </main>
  )
}
