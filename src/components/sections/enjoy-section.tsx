
"use client";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Separator } from "../ui/separator";

const enjoyments = [
  {
    title: "Reading",
    description: "Reading and reflecting on self-help, philosophy, psychology, history, and personal growth books to develop new insights and formulate my own perceptions.",
    booksRead: [
      "Bhagavad Gita",
      "Psycho-Cybernetics",
      "Poor Charlie's Almanack",
      "The Almanack of Naval Ravikant",
      "The Beginning of Infinity",
      "How to Win Friends and Influence People",
      "Atomic Habits",
      "Meditations",
    ],
    booksToBeRead: [
      "The Creative Act: A Way of Being",
      "Paradigms of Artificial Intelligence Programming",
      "Why Greatness Cannot Be Planned",
      "Sapiens: A Brief History of Humankind",
      "Elon Musk by Walter Isaacson",
      "Think and Grow Rich",
      "The Psychology of Money",
    ]
  },
  { 
    title: "Journaling & Writing", 
    description: "Using writing when thinking becomes heavy, to articulate insights from books, and explore interesting topics like responsiblity, rationality, intuition, consciousness etc.",
    pdfLink: "/journal-sample.pdf"
  },
  { title: "Meditating", description: "Practicing Jhana and Vipassana meditation to attempt at gaining mental clarity, understand my inner voice, and realize my responsibilities." },
  { title: "Playing Softball", description: "Competed in softball up to the state level, enjoying the teamwork and competitive spirit of the sport." },
  { title: "Student Leadership", description: "Served as Head of the Student Council for 4 years, focusing on reforms that resonated with everyone; bridging the gap between faculty and students." },
  { title: "Community Service", 
    description: 
    (
      <>
        Teaching in general feels really good.
        <br />
        Taught math using sign language and organized fundraising drives, purchasing Braille kits and hearing aids for those in need.
      </>
    )
  },
  { title: "Others" , description: "Painting, sketching, designing; cricket & football; calisthenics; building stuff (useful or just fun); occasional gaming/watching; vibing on music; and of course - admiring Hrithik Roshan. 😳"},
];

export function EnjoySection() {
  return (
    <section id="enjoy" className="w-full py-12 md:py-24 lg:py-32 px-4 md:px-6">
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Things I Enjoy</h2>
        </div>
        <Carousel
          opts={{
            align: "center",
          }}
          className="w-full max-w-sm sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl"
        >
          <CarouselContent>
            {enjoyments.map((item: any, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-2 h-full">
                  <Card className="flex flex-col h-full transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-[0_0_15px_hsl(var(--primary))]">
                    <CardHeader className="p-6">
                      <CardTitle className="text-xl">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-6 pt-0 flex-grow">
                      <p className="text-gray-300">{item.description}</p>
                    </CardContent>
                    {(item.booksRead || item.pdfLink) && (
                      <CardFooter className="p-6 pt-0">
                        {item.booksRead ? (
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button variant="outline" size="sm" className="hover:bg-[#05def6]/90 hover:text-white transition-all">Reading List</Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[425px]">
                              <DialogHeader>
                                <DialogTitle>Reading List</DialogTitle>
                                <Separator className="mt-4 h-px bg-gray-400" />
                              </DialogHeader>
                              <div className="flex flex-col space-y-4">
                                <div>
                                    <h3 className="text-lg font-semibold mb-2">My Reading List</h3>
                                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                                      {item.booksRead.map((book: string, bookIndex: number) => (
                                        <li key={bookIndex}>{book}</li>
                                      ))}
                                    </ul>
                                </div>
                                <Separator className="bg-gray-400" />
                                <div>
                                    <h3 className="text-lg font-semibold mb-2">To Be Read</h3>
                                    <Separator className="mb-2 h-px bg-gray-400" />
                                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                                      {item.booksToBeRead?.map((book: string, bookIndex: number) => (
                                        <li key={bookIndex}>{book}</li>
                                      ))}
                                    </ul>
                                </div>
                              </div>
                            </DialogContent>
                          </Dialog>
                        ) : item.pdfLink ? (
                          <Button variant="outline" size="sm" asChild className="hover:bg-[#05def6]/90 hover:text-white transition-all">
                            <a href={item.pdfLink} target="_blank" rel="noopener noreferrer">Sneak peek 👀</a>
                          </Button>
                        ) : null}
                      </CardFooter>
                    )}
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}
