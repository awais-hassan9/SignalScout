"use client";
import React, { useState, useEffect } from "react";

import { cn } from "@/lib/utils";
import { Linkedin } from "lucide-react";
import { Paper } from "@/data/papers"; // Import Paper type
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Typewriter } from "@/components/ui/typewriter";

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-xl border bg-card text-card-foreground shadow",
      className
    )}
    {...props}
  />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardHeader2 = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex flex-col p-6", className)} {...props} />
));
CardHeader2.displayName = "CardHeader2";

const CardTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("font-semibold leading-none tracking-tight", className)}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardTitle2 = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "font-semibold text-sm leading-none tracking-tight",
      className
    )}
    {...props}
  />
));
CardTitle2.displayName = "CardTitle2";

const CardDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardDescription2 = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-xs text-muted-foreground leading-relaxed", className)}
    {...props}
  />
));
CardDescription2.displayName = "CardDescription2";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

// CardGrid Component
const CardGrid = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("grid gap-6", className)} {...props} />
));
CardGrid.displayName = "CardGrid";

// CardGridItems Component
const CardGridItems = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("grid grid-cols-2 gap-2", className)}
    {...props}
  />
));
CardGridItems.displayName = "CardGridItems";

// CardGridItem Component
interface CardGridItemProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: React.ReactNode;
  value: string | number;
}

const CardGridItem = React.forwardRef<HTMLDivElement, CardGridItemProps>(
  ({ className, icon, value = "-", ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex items-center gap-2", className)}
      {...props}
    >
      {icon}
      <span className="text-sm font-medium text-muted-foreground">{value}</span>
    </div>
  )
);
CardGridItem.displayName = "CardGridItem";

// CardFounder Component
interface CardFounderProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  role: string;
  background?: string;
  linkedin?: string;
}

const CardFounder = React.forwardRef<HTMLDivElement, CardFounderProps>(
  ({ className, name, role, background, linkedin, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-col flex-1", className)} {...props}>
      <div className="flex items-center gap-2">
        <h3 className="font-semibold">{name}</h3>
        {linkedin && (
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-gray-500 rounded-sm p-1 hover:bg-gray-600"
          >
            <Linkedin
              className="h-2.5 w-2.5 stroke-white fill-white"
              strokeWidth={0}
            />
          </a>
        )}
      </div>
      <p className="text-xs font-semibold text-muted-foreground mt-1">{role}</p>
      <p className="text-sm text-muted-foreground mt-2">
        {background ||
          "Previously worked at leading tech companies focusing on AI/ML and enterprise software. Expert in scaling early-stage startups and building high-performance engineering teams."}
      </p>
    </div>
  )
);
CardFounder.displayName = "CardFounder";

interface PaperCardProps extends React.HTMLAttributes<HTMLDivElement> {
  paper: Paper;
}

const PaperCard = React.forwardRef<HTMLDivElement, PaperCardProps>(
  ({ paper, className, ...props }, ref) => (
    <Card ref={ref} className={cn(className)} {...props}>
      <div className="grid grid-cols-[240px_1fr_200px] gap-1">
        <div className="flex items-center justify-center">
          <Image
            src={paper.image}
            width={200}
            height={100}
            alt={paper.title}
            className="overflow-hidden"
          />
        </div>
        <div>
          <CardHeader>
            <CardTitle className="mb-2">
              <Link href={paper.arxivLink}>{paper.title}</Link>
            </CardTitle>
            <CardDescription2 className="flex">
              <Link
                href={paper.githubRepo.link}
                className="flex items-center gap-1"
              >
                <Image
                  src="/icons/github.svg"
                  width={10}
                  height={10}
                  alt="Github"
                  className="overflow-hidden"
                />
                <span className="hover:underline">{paper.githubRepo.name}</span>
              </Link>
              <span className="mx-1">•</span>
              <span className="date">{paper.date}</span>
            </CardDescription2>
          </CardHeader>
          <CardContent className="-mt-2 grid gap-2">
            <CardDescription2>
              <span className="font-semibold">Summary:</span>
              <Typewriter text={paper.summary} baseSpeed={6} />
            </CardDescription2>
            <CardDescription2>
              <span className="font-semibold">Significance:</span>
              <Typewriter text={paper.significance} baseSpeed={6} />
            </CardDescription2>
            <div className="gap-8 mt-4">
              <div className="flex justify-start gap-4">
                {paper.categories.map((category) => (
                  <Button key={category.name} variant="outline">
                    <Image
                      src={category.icon}
                      width={16}
                      height={16}
                      alt="Icon"
                      className="overflow-hidden mr-1"
                    />
                    {category.name}
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </div>
        <div>
          <CardHeader2>
            <CardTitle2 className="mb-2">Authors</CardTitle2>
            {paper.authors.map((author) => (
              <CardDescription2 key={author.name} className="hover:underline">
                <Link href={author.link || "#"}>{author.name}</Link>
              </CardDescription2>
            ))}
          </CardHeader2>
        </div>
      </div>
    </Card>
  )
);
PaperCard.displayName = "PaperCard";

export {
  Card,
  CardHeader,
  CardHeader2,
  CardFooter,
  CardTitle,
  CardTitle2,
  CardDescription,
  CardDescription2,
  CardContent,
  CardGrid,
  CardGridItems,
  CardGridItem,
  CardFounder,
  PaperCard,
};
