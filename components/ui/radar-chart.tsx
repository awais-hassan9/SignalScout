"use client";

import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const defaultRadarData = [
  { category: "Market", score: 82 },
  { category: "Traction", score: 74 },
  { category: "Team", score: 88 },
  { category: "Product", score: 79 },
  { category: "Timing", score: 69 },
  { category: "Moat", score: 72 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

interface RadarChartProps {
  data?: Array<{
    category: string;
    score: number;
  }>;
}

export const RadarChartComponent: React.FC<RadarChartProps> = ({
  data = defaultRadarData,
}) => {
  return (
    <Card>
      <CardHeader className="items-center pb-4">
        <CardTitle>Company Score Analysis</CardTitle>
        <CardDescription>Evaluation across key metrics</CardDescription>
      </CardHeader>
      <CardContent className="pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[350px]" // Increased height
        >
          <RadarChart
            data={data}
            margin={{ top: 20, right: 80, bottom: 20, left: 80 }} // Kept margins
            width={350} // Added explicit width
            height={350} // Added explicit height
          >
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <PolarAngleAxis dataKey="category" tick={{ fontSize: 11 }} dy={3} />
            <PolarGrid />
            <Radar
              dataKey="score"
              fill="var(--color-desktop)"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Overall Score Analysis
        </div>
        <div className="flex items-center gap-2 leading-none text-muted-foreground">
          Based on multiple evaluation criteria
        </div>
      </CardFooter>
    </Card>
  );
};
