import { Header } from "@/components/header";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { AchievementsSection } from "@/components/sections/achievements-section";
import { MediaSection } from "@/components/sections/media-section";
import { ContactFooter } from "@/components/footer";
import { EnjoySection } from "@/components/sections/enjoy-section";
import { Separator } from "@/components/ui/separator";
import { SkillsSection } from "@/components/sections/skills-section";

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col bg-background text-foreground">
      <Header />
      <HeroSection />
      <main className="container mx-auto px-4 md:px-6">
        <AboutSection />
        <Separator className="my-12 h-px bg-gray-400" />
        <SkillsSection />
        <Separator className="my-12 h-px bg-gray-400" />
        <ProjectsSection />
        <Separator className="my-12 h-px bg-gray-400" />
        <EnjoySection />
        <Separator className="my-12 h-px bg-gray-400" />
        <AchievementsSection />
        <Separator className="my-12 h-px bg-gray-400" />
        <MediaSection />
        <ContactFooter />
      </main>
    </div>
  );
}
