import { Github } from "lucide-react";

export const metadata = {
    title: "Contact",
    description:
        "Get in touch with The Fallacy Guide - connect via GitHub or X (Twitter).",
};

export default function ContactPage() {
    return (
        <div className="space-y-8 max-w-2xl">
            <header className="space-y-2">
                <h1 className="text-3xl font-semibold text-foreground">Contact</h1>
                <p className="text-muted-foreground">
                    Connect with us through the following channels.
                </p>
            </header>

            <div className="grid gap-4 sm:grid-cols-2">
                {/* GitHub */}
                <a
                    href="https://github.com/talibg/keystone"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:border-primary/50 hover:shadow-md"
                >
                    <div className="flex items-start gap-4">
                        <div className="rounded-lg bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                            <Github className="h-6 w-6" />
                        </div>
                        <div className="flex-1 space-y-1">
                            <h2 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                                GitHub
                            </h2>
                            <p className="text-sm text-muted-foreground">
                                View the source code, report issues, or contribute to the
                                project.
                            </p>
                            <p className="text-sm font-medium text-primary">
                                talibg/keystone →
                            </p>
                        </div>
                    </div>
                </a>

                {/* X (Twitter) */}
                <a
                    href="https://x.com/talibguyani"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:border-primary/50 hover:shadow-md"
                >
                    <div className="flex items-start gap-4">
                        <div className="rounded-lg bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                            <svg
                                className="h-6 w-6"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                        </div>
                        <div className="flex-1 space-y-1">
                            <h2 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                                X (Twitter)
                            </h2>
                            <p className="text-sm text-muted-foreground">
                                Follow for updates and engage in discussions.
                            </p>
                            <p className="text-sm font-medium text-primary">
                                @talibguyani →
                            </p>
                        </div>
                    </div>
                </a>
            </div>

            <section className="rounded-xl border border-border bg-muted/30 p-6 space-y-2">
                <h2 className="text-lg font-semibold text-foreground">
                    Contributing
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                    This is an open-source project. If you'd like to contribute
                    corrections, improvements, or new fallacy examples, please visit the
                    GitHub repository. Issues and pull requests are welcome!
                </p>
            </section>
        </div>
    );
}
