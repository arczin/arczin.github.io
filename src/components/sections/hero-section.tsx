"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Mail, FileText } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative flex h-dvh min-h-[600px] w-full flex-col items-center justify-center overflow-hidden">
       <Image
        src="/eye.png"
        alt="Abstract background image"
        data-ai-hint="abstract multicolor"
        fill
        className="object-cover object-center z-0 opacity-40"
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="container relative z-10 flex flex-col items-center justify-center gap-4 text-center px-4 md:px-6"
      >
        <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl">
          Arnav Chhajed
        </h1>
        <p className="max-w-[700px] text-lg text-foreground md:text-xl drop-shadow-md">
          17 | Experiencing time-blurs through Mathematics & AI
        </p>
        <div className="mt-4 flex flex-col gap-4 min-[400px]:flex-row">
          <Button variant="outline" size="lg" asChild className="min-w-[150px] transition-all hover:scale-105 hover:bg-[#05def6]/90 hover:text-white">
            <a href="/Arnav-Chhajed-Resume.pdf" target="_blank" rel="noopener noreferrer">
              <FileText className="mr-2 h-5 w-5" />
              Résumé
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild className="min-w-[150px] transition-all hover:scale-105 hover:bg-[#05def6]/90 hover:text-white">
            <a href="mailto:arnav.chhajed.000@gmail.com">
              <Mail className="mr-2 h-5 w-5" />
              Email
            </a>
          </Button>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="absolute bottom-10 z-10"
      >
        <Link href="#about" aria-label="Scroll to about section">
          <ArrowDown className="h-6 w-6 animate-bounce text-muted-foreground" />
        </Link>
      </motion.div>
    </section>
  );
}
