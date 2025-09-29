import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

const SkillCategory = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <Separator className="mb-4 h-px bg-gray-400" />
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            {children}
        </ul>
    </div>
);

const SkillItem = ({ term, definition }: { term: string, definition: string }) => (
    <li>
        <span className="font-semibold text-foreground">{term}</span> - {definition}
    </li>
)

export function SkillsSection() {
    return (
        <section id="skills" className="w-full py-12 md:py-24 lg:py-32 px-4 md:px-6">
            <div className="flex justify-center text-center">
                <Dialog>
                    <DialogTrigger asChild>
                        <Button variant="link" className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl 
text-decoration-line: underline underline-offset-8 text-[#05def6] hover:text-blue-500" >
                            Skills
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[625px]">
                        <DialogHeader>
                            <DialogTitle className="text-2xl">My Skills</DialogTitle>
                            <Separator className="mt-4 h-px bg-gray-400" />
                        </DialogHeader>
                        <ScrollArea className="h-[70vh] pr-6">
                            <div className="flex flex-col space-y-6 py-4">
                                <SkillCategory title="🚀 My Most Prized Skills">
                                    <SkillItem term="Rapid Learning" definition="lowkey good at getting good." />
                                    <SkillItem term="Mathematical Reasoning & Analytical Thinking" definition="being a math nerd pays off." />
                                    <SkillItem term="Pragmatism" definition="chill guy, lock in hard when it matters." />
                                    <SkillItem term="Leadership & Communication" definition="Head of student council for 4 years, keeping both students and teachers satisfied; Math club head for 2 years mentoring peers and discovering alternative proofs, organizing hackathons and leading multiple projects." />
                                    <SkillItem term="Connection" definition="I love learning from and connecting with people." />
                                </SkillCategory>

                                <Separator />

                                <SkillCategory title="🤖 Artificial Intelligence & Machine Learning">
                                    <SkillItem term="LLMs from Scratch" definition="tokenization, training, optimization." />
                                    <SkillItem term="AI Agents" definition="building fully automated workflows (Vertex AI + other tools)." />
                                    <SkillItem term="Deep Learning" definition="neural networks, computer vision, CNNs, and more to come." />
                                    <SkillItem term="ML Pipelines" definition="scikit-learn, PyTorch, TensorFlow for end-to-end modeling." />
                                </SkillCategory>

                                <Separator />

                                <SkillCategory title="💻 Computer Science & Software Development">
                                    <div>
                                        <h4 className="font-semibold text-foreground mb-1">Programming:</h4>
                                        <ul className="list-disc list-inside space-y-1 pl-4 text-muted-foreground">
                                            <li>Python (general + ML applications)</li>
                                            <li>C++ (basic DSA)</li>
                                            <li>HTML (Intermediate), CSS (Intermediate), JavaScript (beginner but growing)</li>
                                            <li>Good at adapting to new tools as projects and interests demand :)</li>
                                        </ul>
                                    </div>
                                </SkillCategory>

                                <Separator />

                                <SkillCategory title="🎨 Other Interests & Creative Skills">
                                    <SkillItem term="Design & Drawing" definition="plain pen-and-paper sketching (elite tier planning hack)." />
                                    <SkillItem term="Video Editing" definition="intermediate, mostly on DaVinci Resolve." />
                                    <SkillItem term="Teaching" definition="math club, school peers, mentoring my brother, schoolhouse.world." />
                                    <SkillItem term="Writing" definition="academic clarity + creative storytelling (cornball final boss)." />
                                </SkillCategory>
                            </div>
                        </ScrollArea>
                    </DialogContent>
                </Dialog>
            </div>
        </section>
    );
}
