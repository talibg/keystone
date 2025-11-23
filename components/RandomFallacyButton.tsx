"use client"

import { Shuffle } from "lucide-react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

type RandomFallacyButtonProps = {
  slugs: string[]
}

export default function RandomFallacyButton({
  slugs
}: RandomFallacyButtonProps) {
  const router = useRouter()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const handleRandom = () => {
    if (slugs.length === 0) return
    const randomSlug = slugs[Math.floor(Math.random() * slugs.length)]
    router.push(`/fallacies/${randomSlug}`)
  }

  if (!isMounted) return null

  return (
    <button
      type="button"
      onClick={handleRandom}
      className="group flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/20"
      aria-label="Go to a random fallacy"
    >
      <Shuffle className="h-4 w-4 transition-transform group-hover:rotate-180" />
      <span className="hidden sm:inline">Random</span>
    </button>
  )
}
