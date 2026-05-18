"use client";
import React from "react";
import { TrendingUp } from "lucide-react";

import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Label,
  LabelList,
  Line,
  LineChart,
  PolarAngleAxis,
  RadialBar,
  RadialBarChart,
  Rectangle,
  ReferenceLine,
  XAxis,
  YAxis,
} from "recharts";
import {
  BookOpen,
  Home,
  LineChart as LineChartAlt,
  Package,
  Package2,
  PanelLeft,
  Search,
  Settings,
  ShoppingCart,
  Users2,
} from "lucide-react";

import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components//ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components//ui/chart";

import { Separator } from "@/components//ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { Piechart } from "@/components/ui/piechart";

import { RadarChartComponent } from "@/components/ui/radar-chart";

const Analytics: React.FC = () => {
  return (
    <TooltipProvider>
      <div className="flex min-h-screen w-full flex-col bg-muted/40">
        <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
          <nav className="flex flex-col items-center gap-4 px-2 py-4">
            <Link
              href="/"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
            >
              <Home className="h-5 w-5" />
                  <span className="sr-only">Deal Pipeline</span>
            </Link>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                >
                  <Users2 className="h-5 w-5" />
                  <span className="sr-only">Founder Network</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Founder Network</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/papers"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                >
                  <BookOpen className="h-5 w-5" />
                  <span className="sr-only">Research Watchlist</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Research Watchlist</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
                >
                  <LineChartAlt className="h-4 w-4 transition-all group-hover:scale-110" />
                  <span className="sr-only">Sourcing Analytics</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Sourcing Analytics</TooltipContent>
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
                    className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
                  >
                    <Package2 className="h-5 w-5 transition-all group-hover:scale-110" />
                    <span className="sr-only">SignalScout</span>
                  </Link>
                  <Link
                    href="/"
                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  >
                    <Home className="h-5 w-5" />
                    Deal Pipeline
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  >
                    <ShoppingCart className="h-5 w-5" />
                    Signals
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-4 px-2.5 text-foreground"
                  >
                    <Package className="h-5 w-5" />
                    Startup Pipeline
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  >
                    <Users2 className="h-5 w-5" />
                    Founder Network
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  >
                    <LineChart className="h-5 w-5" />
                    Source Settings
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
            <Breadcrumb className="hidden md:flex">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbPage>Sourcing Analytics</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <div className="relative ml-auto flex-1 md:grow-0">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search metrics, signals..."
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
                <DropdownMenuLabel>Scout Profile</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Support</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </header>
          <div className="chart-wrapper mx-auto flex max-w-6xl flex-col flex-wrap items-start justify-center gap-6 p-6 sm:flex-row sm:p-8">
            <div className="grid w-full gap-6 sm:grid-cols-2 lg:max-w-[22rem] lg:grid-cols-1 xl:max-w-[25rem]">
              <Card className="lg:max-w-md" x-chunk="charts-01-chunk-0">
                <CardHeader className="space-y-0 pb-2">
                  <CardDescription>This month</CardDescription>
                  <CardTitle className="text-4xl tabular-nums">
                    584{" "}
                    <span className="font-sans text-sm font-normal tracking-normal text-muted-foreground">
                      startups
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ChartContainer
                    config={{
                      companies: {
                        label: "companies",
                        color: "hsl(var(--chart-1))",
                      },
                    }}
                  >
                    <BarChart
                      accessibilityLayer
                      margin={{
                        left: -4,
                        right: -4,
                      }}
                      data={[
                        {
                          date: "2024-01",
                          companies: 200,
                        },
                        {
                          date: "2024-02",
                          companies: 100,
                        },
                        {
                          date: "2024-03",
                          companies: 200,
                        },
                        {
                          date: "2024-04",
                          companies: 1300,
                        },
                        {
                          date: "2024-05",
                          companies: 1400,
                        },
                        {
                          date: "2024-06",
                          companies: 2500,
                        },
                        {
                          date: "2024-07",
                          companies: 1600,
                        },
                      ]}
                    >
                      <Bar
                        dataKey="companies"
                        fill="var(--color-companies)"
                        radius={5}
                        fillOpacity={0.6}
                        activeBar={<Rectangle fillOpacity={0.8} />}
                      />
                      <XAxis
                        dataKey="date"
                        tickLine={false}
                        axisLine={false}
                        tickMargin={4}
                        tickFormatter={(value) => {
                          return new Date(value).toLocaleDateString("en-US", {
                            month: "short",
                          });
                        }}
                      />
                      <ChartTooltip
                        defaultIndex={2}
                        content={
                          <ChartTooltipContent
                            hideIndicator
                            labelFormatter={(value) => {
                              return new Date(value).toLocaleDateString(
                                "en-US",
                                {
                                  day: "numeric",
                                  month: "long",
                                  year: "numeric",
                                }
                              );
                            }}
                          />
                        }
                        cursor={false}
                      />
                      <ReferenceLine
                        y={1200}
                        stroke="hsl(var(--muted-foreground))"
                        strokeDasharray="3 3"
                        strokeWidth={1}
                      >
                        <Label
                          position="insideBottomLeft"
                          value="Average # of Startups"
                          offset={10}
                          fill="hsl(var(--foreground))"
                        />
                        <Label
                          position="insideTopLeft"
                          value="343"
                          className="text-lg"
                          fill="hsl(var(--foreground))"
                          offset={10}
                          startOffset={100}
                        />
                      </ReferenceLine>
                    </BarChart>
                  </ChartContainer>
                </CardContent>
                <CardFooter className="flex-col items-start gap-1">
                  <CardDescription>
                    Over the past 7 months, you have reviewed{" "}
                    <span className="font-medium text-foreground">1,305</span>{" "}
                    startups.
                  </CardDescription>
                </CardFooter>
              </Card>
              <Card
                className="flex flex-col lg:max-w-md"
                x-chunk="charts-01-chunk-1"
              >
                <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-2 [&>div]:flex-1">
                  <div>
                    <CardDescription>Average Score</CardDescription>
                    <CardTitle className="flex items-baseline gap-1 text-4xl tabular-nums">
                      62
                    </CardTitle>
                  </div>
                  <div>
                    <CardDescription>Variability</CardDescription>
                    <CardTitle className="flex items-baseline gap-1 text-4xl tabular-nums">
                      15
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-1 items-center">
                  <ChartContainer
                    config={{
                      score: {
                        label: "score",
                        color: "hsl(var(--chart-1))",
                      },
                    }}
                    className="w-full"
                  >
                    <LineChart
                      accessibilityLayer
                      margin={{
                        left: 14,
                        right: 14,
                        top: 10,
                      }}
                      data={[
                        {
                          date: "2024-01-01",
                          score: 62,
                        },
                        {
                          date: "2024-02-01",
                          score: 72,
                        },
                        {
                          date: "2024-03-01",
                          score: 35,
                        },
                        {
                          date: "2024-04-01",
                          score: 62,
                        },
                        {
                          date: "2024-05-01",
                          score: 52,
                        },
                        {
                          date: "2024-06-01",
                          score: 62,
                        },
                        {
                          date: "2024-07-01",
                          score: 70,
                        },
                      ]}
                    >
                      <CartesianGrid
                        strokeDasharray="4 4"
                        vertical={false}
                        stroke="hsl(var(--muted-foreground))"
                        strokeOpacity={0.5}
                      />
                      <YAxis hide domain={["dataMin - 10", "dataMax + 10"]} />
                      <XAxis
                        dataKey="date"
                        tickLine={false}
                        axisLine={false}
                        tickMargin={8}
                        tickFormatter={(value) => {
                          return new Date(value).toLocaleDateString("en-US", {
                            month: "short",
                          });
                        }}
                      />
                      <Line
                        dataKey="score"
                        type="natural"
                        fill="var(--color-score)"
                        stroke="var(--color-score)"
                        strokeWidth={2}
                        dot={false}
                        activeDot={{
                          fill: "var(--color-score)",
                          stroke: "var(--color-score)",
                          r: 4,
                        }}
                      />
                      <ChartTooltip
                        content={
                          <ChartTooltipContent
                            indicator="line"
                            labelFormatter={(value) => {
                              return new Date(value).toLocaleDateString(
                                "en-US",
                                {
                                  day: "numeric",
                                  month: "long",
                                  year: "numeric",
                                }
                              );
                            }}
                          />
                        }
                        cursor={false}
                      />
                    </LineChart>
                  </ChartContainer>
                </CardContent>
              </Card>
            </div>
            <div className="grid w-full flex-1 gap-6 lg:max-w-[20rem]">
              <Card className="max-w-xs" x-chunk="charts-01-chunk-2">
                <CardHeader>
                  <CardTitle>Progress</CardTitle>
                  <CardDescription>
                    You've reviewed more companies a day this month than last
                    month.
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                  <div className="grid auto-rows-min gap-2">
                    <div className="flex items-baseline gap-1 text-2xl font-bold tabular-nums leading-none">
                      53
                      <span className="text-sm font-normal text-muted-foreground">
                        companies/day
                      </span>
                    </div>
                    <ChartContainer
                      config={{
                        companies: {
                          label: "companies",
                          color: "hsl(var(--chart-1))",
                        },
                      }}
                      className="aspect-auto h-[32px] w-full"
                    >
                      <BarChart
                        accessibilityLayer
                        layout="vertical"
                        margin={{
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                        }}
                        data={[
                          {
                            date: "July 2024",
                            companies: 53,
                          },
                        ]}
                      >
                        <Bar
                          dataKey="companies"
                          fill="var(--color-companies)"
                          radius={4}
                          barSize={32}
                        >
                          <LabelList
                            position="insideLeft"
                            dataKey="date"
                            offset={8}
                            fontSize={12}
                            fill="white"
                          />
                        </Bar>
                        <YAxis
                          dataKey="date"
                          type="category"
                          tickCount={1}
                          hide
                        />
                        <XAxis dataKey="companies" type="number" hide />
                      </BarChart>
                    </ChartContainer>
                  </div>
                  <div className="grid auto-rows-min gap-2">
                    <div className="flex items-baseline gap-1 text-2xl font-bold tabular-nums leading-none">
                      23
                      <span className="text-sm font-normal text-muted-foreground">
                        companies/day
                      </span>
                    </div>
                    <ChartContainer
                      config={{
                        companies: {
                          label: "companies",
                          color: "hsl(var(--muted))",
                        },
                      }}
                      className="aspect-auto h-[32px] w-full"
                    >
                      <BarChart
                        accessibilityLayer
                        layout="vertical"
                        margin={{
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                        }}
                        data={[
                          {
                            date: "June 2024",
                            companies: 23,
                          },
                        ]}
                      >
                        <Bar
                          dataKey="companies"
                          fill="var(--color-companies)"
                          radius={4}
                          barSize={32}
                        >
                          <LabelList
                            position="insideLeft"
                            dataKey="date"
                            offset={8}
                            fontSize={12}
                            fill="hsl(var(--muted-foreground))"
                          />
                        </Bar>
                        <YAxis
                          dataKey="date"
                          type="category"
                          tickCount={1}
                          hide
                        />
                        <XAxis dataKey="companies" type="number" hide />
                      </BarChart>
                    </ChartContainer>
                  </div>
                </CardContent>
              </Card>
              <RadarChartComponent />
            </div>
            <div className="grid w-full flex-1 gap-6">
              <Piechart />
              <Card className="max-w-xs" x-chunk="charts-01-chunk-7">
                <CardHeader className="space-y-0 pb-0">
                  <CardDescription>Founder Response Rate</CardDescription>
                  <CardTitle className="flex items-baseline gap-1 text-4xl tabular-nums">
                    83.5
                    <span className="font-sans text-sm font-normal tracking-normal text-muted-foreground">
                      %
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <ChartContainer
                    config={{
                      time: {
                        label: "Time",
                        color: "hsl(var(--chart-2))",
                      },
                    }}
                  >
                    <AreaChart
                      accessibilityLayer
                      data={[
                        {
                          date: "2024-01-01",
                          time: 8.5,
                        },
                        {
                          date: "2024-01-02",
                          time: 7.2,
                        },
                        {
                          date: "2024-01-03",
                          time: 8.1,
                        },
                        {
                          date: "2024-01-04",
                          time: 6.2,
                        },
                        {
                          date: "2024-01-05",
                          time: 5.2,
                        },
                        {
                          date: "2024-01-06",
                          time: 8.1,
                        },
                        {
                          date: "2024-01-07",
                          time: 7.0,
                        },
                      ]}
                      margin={{
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0,
                      }}
                    >
                      <XAxis dataKey="date" hide />
                      <YAxis domain={["dataMin - 5", "dataMax + 2"]} hide />
                      <defs>
                        <linearGradient
                          id="fillTime"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="5%"
                            stopColor="var(--color-time)"
                            stopOpacity={0.8}
                          />
                          <stop
                            offset="95%"
                            stopColor="var(--color-time)"
                            stopOpacity={0.1}
                          />
                        </linearGradient>
                      </defs>
                      <Area
                        dataKey="time"
                        type="natural"
                        fill="url(#fillTime)"
                        fillOpacity={0.4}
                        stroke="var(--color-time)"
                      />
                      <ChartTooltip
                        cursor={false}
                        content={<ChartTooltipContent hideLabel />}
                        formatter={(value) => (
                          <div className="flex min-w-[120px] items-center text-xs text-muted-foreground">
                            Response rate
                            <div className="ml-auto flex items-baseline gap-0.5 font-mono font-medium tabular-nums text-foreground">
                              {value}
                              <span className="font-normal text-muted-foreground"></span>
                            </div>
                          </div>
                        )}
                      />
                    </AreaChart>
                  </ChartContainer>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
};

export default Analytics;
