export const metadata = {
    title: "Privacy Policy",
    description:
        "Privacy policy for The Fallacy Guide - how we handle your data and protect your privacy.",
};

export default function PrivacyPage() {
    return (
        <div className="space-y-8 max-w-3xl">
            <header className="space-y-2">
                <h1 className="text-3xl font-semibold text-foreground">
                    Privacy Policy
                </h1>
                <p className="text-sm text-muted-foreground">
                    Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                </p>
            </header>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">
                    Our Commitment to Privacy
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                    The Fallacy Guide is committed to protecting your privacy. This
                    privacy policy explains how we handle information when you use our
                    website.
                </p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">
                    Data Collection
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                    <strong>We do not collect, store, or process any personal data.</strong>
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>No user accounts or registration required</li>
                    <li>No cookies or tracking technologies</li>
                    <li>No analytics or third-party tracking scripts</li>
                    <li>No forms or data input (except search, which is local only)</li>
                    <li>No server-side logging of user activity</li>
                </ul>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">
                    Local Storage
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                    Your browser may store preferences locally (such as theme selection)
                    using browser storage. This data never leaves your device and is not
                    transmitted to our servers or any third parties.
                </p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">
                    Third-Party Services
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                    This website is hosted on a third-party platform. Standard web server
                    logs (IP addresses, browser type, timestamps) may be collected by the
                    hosting provider for security and performance purposes. We do not have
                    access to or control over this data.
                </p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">
                    External Links
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                    Our website may contain links to external sites. We are not
                    responsible for the privacy practices of other websites. We encourage
                    you to review the privacy policies of any third-party sites you visit.
                </p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">
                    Children's Privacy
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                    This website is appropriate for all ages. We do not knowingly collect
                    any information from children or adults, as we collect no personal
                    data whatsoever.
                </p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">
                    Changes to This Policy
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                    We may update this privacy policy from time to time. Any changes will
                    be posted on this page with an updated revision date.
                </p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">Contact</h2>
                <p className="text-muted-foreground leading-relaxed">
                    If you have questions about this privacy policy, please contact us
                    through our GitHub repository.
                </p>
            </section>
        </div>
    );
}
