import type { Metadata } from "next"
import { canonicalPath } from "@/lib/seo"

export const metadata: Metadata = {
  title: "About",
  description:
    "Why this guide exists, how it is maintained, and how to use it responsibly.",
  alternates: {
    canonical: canonicalPath("/about")
  }
}

export default function AboutPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold text-foreground">
        About The Fallacy Guide
      </h1>
      <p className="text-muted-foreground">
        The Fallacy Guide is a concise reference to common reasoning errors. It
        is maintained in-repo with static data so it can be reviewed, improved,
        and extended without external dependencies.
      </p>
      <section className="space-y-2">
        <h2 className="text-xl font-semibold text-foreground">
          Editorial goals
        </h2>
        <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
          <li>Keep explanations short, pattern-focused, and example-driven.</li>
          <li>
            Surface recognition and response strategies that can be applied
            quickly.
          </li>
          <li>Stay neutral: highlight structure, not ideology.</li>
        </ul>
      </section>
      <section className="space-y-2">
        <h2 className="text-xl font-semibold text-foreground">Limitations</h2>
        <p className="text-muted-foreground">
          This site is not legal advice or debate coaching. It is a static
          reference and may not capture every nuance or edge case. Always pair
          definitions with context, evidence, and the norms of your audience.
        </p>
      </section>
      <section className="space-y-2">
        <h2 className="text-xl font-semibold text-foreground">
          Contact & contributions
        </h2>
        <p className="text-muted-foreground">
          If you find errors or want to add more examples, extend the dataset in
          the repository. The project intentionally avoids external APIs so it
          can be audited easily.
        </p>
      </section>
    </div>
  )
}
