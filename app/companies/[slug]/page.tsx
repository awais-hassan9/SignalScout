"use client";
import { use } from "react";

import React, { useState, useEffect } from "react";
import { companies } from "@/data/companies";

import { notFound } from "next/navigation"; // To handle 404 errors
import Image from "next/image";
import Link from "next/link";
import { Typewriter } from "@/components/ui/typewriter";

import {
  Calendar,
  ChevronLeft,
  Globe2,
  Home,
  LineChart,
  Package,
  BookOpen,
  PanelLeft,
  PlusCircle,
  Search,
  Sparkles,
  Tag,
  Settings,
  Users2,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  CardGrid,
  CardGridItems,
  CardGridItem,
  CardFounder,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";

import { RadarChartComponent } from "@/components/ui/radar-chart";
import { TextValue } from "@/components/ui/read-only-text";

interface Company {
  id: string;
  slug: string;
  name: string;
  website: string | null;
  status: "Great Product" | "Great Team" | "Great Market";
  description: string;
  founded: number;
  created_at: string;
  logo?: string;
  // Add additional fields for company details
  industry?: string;
  headquarters?: string;
  employees?: number;
  stage?: string;
  funding?: number;
  keyProducts?: string[];
  founders?: Array<{
    name: string;
    role: string;
    linkedin?: string;
  }>;
  ai_summary?: string;
  added_at: string;
  investors?: string;
  scores?: {
    productInnovation: number;
    marketSize: number;
    teamExperience: number;
    execution: number;
    traction: number;
    businessModel: number;
  };
}

interface CompanyProfileProps {
  params: Promise<{ slug: string }>; // Update type to reflect Promise
}

const CompanyProfile = ({ params }: CompanyProfileProps) => {
  const unwrappedParams = use(params);
  const company = companies.find((c) => c.slug === unwrappedParams.slug);

  if (!company) {
    return <div>Company not found</div>;
  }

  return (
    <TooltipProvider>
      <div className="flex min-h-screen w-full flex-col bg-muted/40">
        <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
          <nav className="flex flex-col items-center gap-4 px-2 py-4">
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                >
                  <Home className="h-5 w-5" />
                  <span className="sr-only">Dashboard</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Dashboard</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                >
                  <Users2 className="h-5 w-5" />
                  <span className="sr-only">Founders</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Founders</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/papers"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                >
                  <BookOpen className="h-5 w-5" />
                  <span className="sr-only">Papers</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Papers</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/analytics"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                >
                  <LineChart className="h-5 w-5" />
                  <span className="sr-only">Analytics</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Analytics</TooltipContent>
            </Tooltip>
          </nav>
          <nav className="mt-auto flex flex-col items-center gap-4 px-2 py-4">
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                >
                  <Settings className="h-5 w-5" />
                  <span className="sr-only">Settings</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Settings</TooltipContent>
            </Tooltip>
          </nav>
        </aside>
        <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
          <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
            <Sheet>
              <SheetTrigger asChild>
                <Button size="icon" variant="outline" className="sm:hidden">
                  <PanelLeft className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="sm:max-w-xs">
                <nav className="grid gap-6 text-lg font-medium">
                  <Link
                    href="#"
                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  >
                    <Home className="h-5 w-5" />
                    Dashboard
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-4 px-2.5 text-foreground"
                  >
                    <Package className="h-5 w-5" />
                    All Companies
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  >
                    <Users2 className="h-5 w-5" />
                    Founders
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  >
                    <LineChart className="h-5 w-5" />
                    Settings
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
            <Breadcrumb className="hidden md:flex">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link href="/">Dashboard</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link href="/">All Companies</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Company Profile</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <div className="relative ml-auto flex-1 md:grow-0">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search..."
                className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[320px]"
              />
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="overflow-hidden rounded-full"
                >
                  <Image
                    src="/users/jay-icon.png"
                    width={36}
                    height={36}
                    alt="Avatar"
                    className="overflow-hidden rounded-full"
                  />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Support</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </header>
          <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
            <div className="w-full mx-auto grid max-w-[90rem] flex-1 auto-rows-max gap-4">
              <div className="flex items-center gap-4">
                <Link href="/">
                  <Button variant="outline" size="icon" className="h-7 w-7">
                    <ChevronLeft className="h-4 w-4" />
                    <span className="sr-only">Back</span>
                  </Button>
                </Link>
                <div className="flex items-center space-x-2">
                  {company.logo && (
                    <Image
                      src={company.logo}
                      alt={company.name}
                      width={32}
                      height={32}
                      className="rounded-lg"
                    />
                  )}
                  <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
                    {company.name}
                  </h1>
                </div>
                <Badge variant="outline" className="ml-auto sm:ml-0">
                  {company.signal}
                </Badge>
                <div className="hidden items-center gap-2 md:ml-auto md:flex">
                  <Button variant="outline" size="sm">
                    Delete
                  </Button>
                  <Button size="sm">Save Company</Button>
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-[2fr_300px] lg:grid-cols-[2fr_440px] lg:gap-8">
                <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
                  <Card x-chunk="dashboard-07-chunk-0">
                    <CardHeader>
                      <CardTitle>Company Details</CardTitle>
                      <CardDescription>{company.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="w-full">
                      <CardGrid className="w-full">
                        <CardGridItems className="w-full">
                          <CardGridItem
                            icon={
                              <Globe2
                                className="h-4 w-4 text-muted-foreground"
                                strokeWidth={2}
                              />
                            }
                            value={company.website || ""}
                          />
                          <CardGridItem
                            icon={
                              <Tag
                                className="h-4 w-4 text-muted-foreground"
                                strokeWidth={2}
                              />
                            }
                            value="Enterprise SaaS"
                          />
                          <CardGridItem
                            icon={
                              <Calendar
                                className="h-4 w-4 text-muted-foreground"
                                strokeWidth={2}
                              />
                            }
                            value={company.founded}
                          />
                          <CardGridItem
                            icon={
                              <LineChart
                                className="h-4 w-4 text-muted-foreground"
                                strokeWidth={2}
                              />
                            }
                            value={company.stage || ""}
                          />
                          <CardGridItem
                            icon={
                              <Home
                                className="h-4 w-4 text-muted-foreground"
                                strokeWidth={2}
                              />
                            }
                            value={company.headquarters || ""}
                          />
                          <CardGridItem
                            icon={
                              <Users2
                                className="h-4 w-4 text-muted-foreground"
                                strokeWidth={2}
                              />
                            }
                            value={company.employees || ""}
                          />
                        </CardGridItems>
                      </CardGrid>
                      <div className="grid gap-3 mt-6 w-full">
                        <div className="flex items-center gap-1">
                          <Sparkles className="h-4 w-4 fill-indigo-500 text-indigo-500" />
                          <Label className="text-indigo-500 font-semibold">
                            AI Summary
                          </Label>
                        </div>
                        <div className="border-l-2 border-indigo-500 pl-3 w-full">
                          <Typewriter
                            text={company.ai_summary || ""}
                            className="text-sm text-muted-foreground"
                            baseSpeed={4}
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card x-chunk="dashboard-07-chunk-1">
                    <CardHeader>
                      <CardTitle>Team</CardTitle>
                      <CardDescription></CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-6">
                        {company.founders?.map((founder, index) => (
                          <div
                            key={index}
                            className="flex gap-4 p-4 border rounded-lg"
                          >
                            <div className="flex-shrink-0">
                              <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
                                {founder.name.charAt(0)}
                              </div>
                            </div>
                            <CardFounder
                              name={founder.name}
                              role={founder.role}
                              background={founder.background}
                              linkedin={founder.linkedin}
                            />
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className="grid auto-rows-max items-start gap-4 lg:gap-8 w-full">
                  <RadarChartComponent
                    data={[
                      {
                        category: "Product Innovation",
                        score: company.scores?.productInnovation || 60,
                      },
                      {
                        category: "Market Size",
                        score: company.scores?.marketSize || 60,
                      },
                      {
                        category: "Team Experience",
                        score: company.scores?.teamExperience || 60,
                      },
                      {
                        category: "Execution",
                        score: company.scores?.execution || 60,
                      },
                      {
                        category: "Traction",
                        score: company.scores?.traction || 60,
                      },
                      {
                        category: "Business Model",
                        score: company.scores?.businessModel || 60,
                      },
                    ]}
                  />
                </div>
              </div>
              <div className="flex items-center justify-center gap-2 md:hidden">
                <Button variant="outline" size="sm">
                  Delete
                </Button>
                <Button size="sm">Save Company</Button>
              </div>
            </div>
          </main>
        </div>
      </div>
    </TooltipProvider>
  );
};

export default CompanyProfile;
