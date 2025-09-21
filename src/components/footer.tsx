import Image from "next/image";
import { Github, Linkedin } from "lucide-react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

function XIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
        </svg>
    )
}

export function ContactFooter() {
  return (
    <footer id="contact" className="w-full py-12 md:py-24 lg:py-32">
       <Separator className="my-8" />
       <div className="flex flex-col items-center text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">Get in Touch</h2>
        <div className="mb-6">
            <Image
                src="/Cropped Image from Imageresizer.jpg"
                alt="Arnav Chhajed"
                width={128}
                height={128}
                className="rounded-lg object-cover w-32 h-32 shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-[0_0_15px_hsl(var(--primary))]"
                data-ai-hint="portrait man"
            />
        </div>
        <a href="mailto:arnav.chhajed.000@gmail.com" className="text-lg text-gray-400 mb-6 hover:text-primary hover:underline">
          arnav.chhajed.000@gmail.com
        </a>
        <div className="flex space-x-2 mb-8">
          <Button variant="ghost" size="icon" asChild className="hover:bg-[#05def6]/90 hover:text-white transition-all">
            <a href="https://www.linkedin.com/in/arcz" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-6 w-6" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild className="hover:bg-[#05def6]/90 hover:text-white transition-all">
            <a href="https://x.com/arczyn_" target="_blank" rel="noopener noreferrer" aria-label="X">
              <XIcon className="h-6 w-6" />
            </a>
          </Button>
        </div>
        <p className="text-lg text-foreground mb-4">
            A satisfying gift for making it this far!
        </p>
         <Button
            variant="ghost"
            className="h-32 w-32 p-0 transform transition-transform duration-150 ease-in-out hover:scale-105 active:translate-y-1 hover:shadow-none hover:bg-transparent"
            aria-label="A satisfying gift"
         >
          <Image
            src="/Ballblue.png"
            alt="A satisfying blue orb"
            width={128}
            height={128}
            data-ai-hint="blue sphere"
          />
        </Button>
         <p className="text-xs text-gray-400 mt-8">
          &copy; {new Date().getFullYear()} Arnav Chhajed. All Rights Reserved.
        </p>
        <p className="text-xs text-gray-400 mt-2">
          Built with Next.js, Tailwind CSS, and Love.
        </p>
      </div>
    </footer>
  );
}
