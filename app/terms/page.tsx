import type { Metadata } from "next"
import { canonicalPath } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Terms of use for The Fallacy Guide - legal terms and conditions for using this website.",
  alternates: {
    canonical: canonicalPath("/terms")
  }
}

export default function TermsPage() {
  return (
    <div className="space-y-8 max-w-3xl">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold text-foreground">Terms of Use</h1>
        <p className="text-sm text-muted-foreground">
          Last updated:{" "}
          {new Date().toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric"
          })}
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">
          Acceptance of Terms
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          By accessing and using The Fallacy Guide ("the Website"), you accept
          and agree to be bound by these Terms of Use. If you do not agree to
          these terms, please do not use this Website.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">
          Purpose and Scope
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          The Fallacy Guide is an educational reference website designed to help
          users identify and understand logical fallacies. The content is
          provided for informational and educational purposes only.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Use License</h2>
        <p className="text-muted-foreground leading-relaxed">
          You are granted a limited, non-exclusive, non-transferable license to:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li>
            Access and browse the Website for personal, educational, or
            professional use
          </li>
          <li>Reference and cite content with proper attribution</li>
          <li>Share links to the Website</li>
        </ul>
        <p className="text-muted-foreground leading-relaxed mt-4">
          You may not:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li>
            Republish, redistribute, or sell the content without permission
          </li>
          <li>Modify or create derivative works for commercial purposes</li>
          <li>Use automated tools to scrape or download content in bulk</li>
          <li>Use the content in a misleading or defamatory manner</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">
          Disclaimer of Warranties
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          <strong>
            This website is provided "as is" without any warranties, express or
            implied.
          </strong>
        </p>
        <ul className="list-disc pl-6 space-y-2  text-muted-foreground">
          <li>
            We make no guarantees about the accuracy, completeness, or
            timeliness of the content
          </li>
          <li>
            Content may contain errors, omissions, or outdated information
          </li>
          <li>
            We do not warrant that the Website will be uninterrupted or
            error-free
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">
          Not Professional Advice
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          The content on this Website is for educational purposes only and does
          not constitute:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li>Legal, financial, medical, or professional advice</li>
          <li>A substitute for professional consultation</li>
          <li>Coaching, training, or formal education</li>
        </ul>
        <p className="text-muted-foreground leading-relaxed mt-4">
          Always consult with qualified professionals for matters requiring
          expert guidance.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">
          Limitation of Liability
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          To the fullest extent permitted by law, The Fallacy Guide and its
          contributors shall not be liable for any damages arising from:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li>Use or inability to use the Website</li>
          <li>Reliance on any content provided</li>
          <li>Errors, omissions, or inaccuracies in the content</li>
          <li>Unauthorized access to or alteration of your data</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">
          Content Accuracy
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          While we strive to provide accurate and well-researched content, the
          field of logic and rhetoric includes varied interpretations and
          classifications. Users should:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li>Verify information from multiple sources</li>
          <li>Consider context when applying concepts</li>
          <li>Exercise critical judgment in all cases</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Open Source</h2>
        <p className="text-muted-foreground leading-relaxed">
          This project is open source and maintained in a public repository.
          Contributions and corrections are welcome through the project's
          repository according to its license terms.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">
          Intellectual Property
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Content on this Website draws from public domain sources, academic
          literature, and original compilation. While individual fallacy
          concepts are not copyrightable, the specific explanations,
          organization, and presentation are protected by applicable
          intellectual property laws.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">
          Changes to Terms
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          We reserve the right to modify these terms at any time. Changes will
          be effective immediately upon posting to this page. Your continued use
          of the Website constitutes acceptance of any modifications.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">
          Governing Law
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          These terms shall be governed by and construed in accordance with
          applicable laws. Any disputes shall be resolved in the appropriate
          courts.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Contact</h2>
        <p className="text-muted-foreground leading-relaxed">
          For questions about these terms, please contact us through our GitHub
          repository.
        </p>
      </section>
    </div>
  )
}
