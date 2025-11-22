"use client";

import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function HeroSection() {
    return (
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 via-background to-background p-8 sm:p-16 text-center border border-border/50">
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative z-10 max-w-2xl mx-auto space-y-6"
            >
                <Badge
                    variant="secondary"
                    className="border-primary/20 bg-primary/5 text-primary px-3 py-1 text-sm"
                >
                    <Zap className="mr-2 h-4 w-4" />
                    Master Critical Thinking
                </Badge>
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl text-balance text-foreground">
                    Spot the Flaws in <span className="text-primary">Every Argument</span>
                </h1>
                <p className="text-lg text-muted-foreground text-balance">
                    A modern, comprehensive guide to logical fallacies. Learn to identify,
                    understand, and dismantle poor reasoning in everyday life.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                    <Button asChild size="lg" className="rounded-full px-8 shadow">
                        <Link href="/categories">Explore Categories</Link>
                    </Button>
                    <Button
                        asChild
                        variant="outline"
                        size="lg"
                        className="rounded-full px-8"
                    >
                        <Link href="#all-fallacies">View All Fallacies</Link>
                    </Button>
                </div>
            </motion.div>
        </section>
    );
}
