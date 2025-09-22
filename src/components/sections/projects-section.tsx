"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import Image from "next/image";
import { Separator } from "../ui/separator";

const projects = [
  {
    title: "Parkinson's Detector",
    shortDescription: "Motivated by family history, an early-screening app using vocal/acoustic markers for low-cost preclinical triage for Parkinson's disease.",
    longDescription: "From my experience, patients suffer from speech and motor impairment, using those markers, I am developing an application for early-stage Parkinson's screening. It uses a machine learning model that analyzes acoustic markers like vocal jitter, shimmer, and formants from voice recordings to provide a non-invasive, low-cost method for preclinical triage; Currently refining model.",
    image: "/parkinsons.png",
    imageHint: "brainwave chart"
  },
  {
    title: "Farm Assistance App",
    shortDescription: "Highly motivated by high farmer suicide rates in birthplace, built an AI-powered advisory app that provides sustainable crop suggestions to improve farm income; simulated ~5% lift in farm income with localised advice.",
    longDescription: "This application takes a farmer's photo, location, plot area, soil/budget, and preferences to provide sustainable crop suggestions. The goal is to make advanced agricultural technology accessible. Simulations showed an average lift of ~5% in farm income with its localized advice.",
    image: "/farm.png",
    imageHint: "lush farmland"
  },
  {
    title: "AI Intern @ Pigeepost",
    shortDescription: "An AI intern project to create an AI sales agent and the initial framework (20–50x faster than humans*) that generates, enriches, and parses sales leads for personalized outreach.",
    longDescription: "During my internship at pigeepost, with the help of CEO (internship mentor) I planned and built a model to generate, enrich, and parse sales leads; trained a model on this data to prioritize leads and perform personalized outreach. This involved creating core AI agents and planning their integration into the sales workflow.",
    image: "/agent.png",
    imageHint: "glowing circuit"
  },
  {
    title: "Astrophysical Transient Discovery with AI",
    shortDescription: "Working with a team to build unsupervised AI models for analyzing LSST's ~10M nightly alerts for rare astrophysical events.",
    longDescription: "This is a team-based project in its initial stage, focused on the Vera C. Rubin Observatory's Large Synoptic Survey Telescope (LSST), which generates nearly 10 million nightly alerts from sky surveys. Traditional supervised ML methods are limited to pre-labeled classes, while our approach explores unsupervised AI/ML models to automatically detect anomalies and flag novel or rare astrophysical transients. These could range from unusual supernovae and variable stars to entirely unknown phenomena. By combining astrophysics expertise, large-scale data processing, and advanced ML, the project aims to expand the frontier of time-domain astronomy and open the door to unexpected discoveries.",
    image: "/space.png",
    imageHint: "cosmic telescope"
  },
   {
     title: "Gamified Productivity Website",
     shortDescription: "Inspired by duolingo; a platform turning to-dos into quests, with mechanics (XP, streaks, rankings) that drive measurable gains in focus and consistency. (Private beta)",
     longDescription: "This project combines productivity with gaming. Users can create to-do lists that are framed as quests in a role-playing game. Completing tasks earns them experience points, items, and achievements. The goal is to make productivity more engaging and less of a chore by leveraging game mechanics like rewards and competition through leaderboards.",
     image: "/gaming.png",
     imageHint: "fantasy landscape"
   },
   {
     title: "Others",
     shortDescription: "A collection of side projects spanning AI, science communication, writings, and student initiatives.",
     longDescription: "LLM from Scratch (CS336-inspired): Ongoing self-study + covering tokenization, training, optimization. (Tough, currently on the first assignment).\n\nBreakthrough Junior Challenge Video: \"Can Math make you Immortal\" - my attempt at merging storytelling, neuroscience, and AI for science communication.\n\nSmall Kaggle & ML Projects: Housing price prediction, disease detection, soil condition modeling and other small models.\n\nHackathon Organizer (Student Launchpad): Coming REALLY SOON; no/low-code hackathon with workshops, sponsors, and student-focused tools.\n\nAttempting to write White Paper on ASI: Exploring multiple branching scenarios on how the emergence of superintelligence could impact the world and getting to know more.",
     image: "/other.png",
     imageHint: "diverse projects collage"
   },
   
];

export function ProjectsSection() {
  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32 px-4 md:px-6">
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Selected Projects & Internships ❤️</h2>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 max-w-5xl justify-center">
          {projects.map((project, index) => (
            <Dialog key={index}>
              <Card className="flex flex-col h-full overflow-hidden transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-[0_0_15px_hsl(var(--primary))]">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold">{project.title}</CardTitle>
                </CardHeader>
                <div className="flex-grow p-6 pt-0">
                  <CardDescription className="text-gray-300 text-base">{project.shortDescription}</CardDescription>
                </div>
                <CardFooter>
                  <DialogTrigger asChild>
                    <Button variant="link" className="p-0 h-auto text-[#05def6]">Read more</Button>
                  </DialogTrigger>
                </CardFooter>
              </Card>
              <DialogContent className="sm:max-w-[625px]">
                <DialogHeader>
                  <DialogTitle className="text-2xl">{project.title}</DialogTitle>
                </DialogHeader>
                <div className="py-4 grid gap-4">
                  <div className="aspect-video overflow-hidden rounded-lg">
                    <Image
                      src={project.image}
                      alt={`Project image for ${project.title}`}
                      data-ai-hint={project.imageHint}
                      width={450}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-base text-gray-300 whitespace-pre-line">
                    {project.longDescription}
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}
