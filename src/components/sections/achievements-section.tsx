import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const achievements = [
  { title: "International Olympiads", description: "Competed and achieved few international Ranks (<500) in the Math, Science, and Cyber sof Olympiads. Awarded 14x Gold medals over the years 2014-15 to 2021-22." },
  { 
    title: "Academics", 
    description: (
      <>
        Maintained Rank 1 for four consecutive years.
        <br />
        Grade IX: 99.20%
        <br />
        Grade X: 98.6%
        <br />
        Grade XI: 99.40%
        <br />
        Grade XII: 98+% (predictive)
      </>
    )
  },
  { title: "CBSE Grade X Global Achievement", description: "Ranked 7th internationally among 2.25 million students with a score of 98.60% (Core 5 subjects, higher otherwise)." },
  { 
    title: "Standardized Testing", 
    description: (
      <>
        SAT: 1540 (first attempt)
        <br />
        AP Scores:
        <br />
        5 in Calculus BC
        <br />
        5 in Chemistry
        <br /> 5 in Physics C: Mechanics (all self-studied)
      </>
    ) 
  },
  { title: "Brilliant.org & Mathacademy", description: "Ranked in the Top 1% out of over 10 million global learners on problem-solving platforms, achieving 90 percentile in Mathacademy within 2 months." },
  { title: "Competitive Challenges", description: "2x Selected as top 100 students Nation-wide in the Aryabhatta Mathematics Challenge from my region; qualified for the Homi Bhabha Balvaidnyanik Examination both levels two times." },
  { title: "Community Service", description: "Taught math using sign language and organized fundraising drives - convincing families to spend on Braille kits and hearing aids for Apang Vidyalaya instead of fireworks. Raised ₹20,000 to support students in need." },
  {title: "Others", description: "Stacked wins across school debates; city robotics, conservation drives, singing, and math contests; plus certificates from Kaggle challenges, multiple courses, and mit hackathon, and much more."},
];

export function AchievementsSection() {
  return (
    <section id="achievements" className="w-full py-12 md:py-24 lg:py-32 px-4 md:px-6">
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Achievements</h2>
        </div>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-sm sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl"
        >
          <CarouselContent>
            {achievements.map((achievement, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-2 h-full">
                  <Card className="flex flex-col h-full transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-[0_0_15px_hsl(var(--primary))]">
                    <CardHeader className="p-6">
                      <CardTitle className="text-xl">{achievement.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-6 pt-0 flex-grow">
                      <p className="text-gray-300">{achievement.description}</p>
                    </CardContent>
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
