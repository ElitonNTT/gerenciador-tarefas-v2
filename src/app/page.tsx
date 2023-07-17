import Lista from "@/components/Lista"
import Loading from "@/components/Loading"
import { Suspense } from "react"

export default function Home() {
  return (
    <main className="flex min-h-screen justify-center my-2">
      <Suspense fallback={<Loading />}>
        <Lista />
      </Suspense>

    </main>
  )
}
