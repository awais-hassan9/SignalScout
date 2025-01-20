"use client";
import { TrendingUp } from "lucide-react";
import { MathJax, MathJaxContext } from "better-react-mathjax";
import React, { useState } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  ReferenceDot,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type TimelineDataPoint = {
  date: string;
  llms: number;
  multiModal: number;
  agents: number;
  keyPaper?: string;
  category?: "LLMs" | "Multi-Modal" | "Agents";
};

// Define the timeline data with key papers and events
const timelineData = [
  {
    date: "Q1 '22",
    llms: 35,
    multiModal: 20,
    agents: 15,
    keyPaper: "InstructGPT",
    category: "LLMs",
    notes:
      "Pioneering work in alignment and instruction following. Introduced supervised fine-tuning (SFT) and reinforcement learning from human feedback (RLHF) at scale. Demonstrated significant improvements in following complex instructions while reducing unwanted behaviors.",
  },
  {
    date: "Q2 '22",
    llms: 38,
    multiModal: 45,
    agents: 18,
    keyPaper: "DALL-E 2",
    category: "Multi-Modal",
    notes:
      "Major advancement in latent diffusion models for image generation. Introduced CLIP-guided diffusion and classifier-free guidance. Achieved unprecedented photorealism and semantic consistency in text-to-image generation.",
  },
  {
    date: "Q3 '22",
    llms: 42,
    multiModal: 48,
    agents: 20,
    notes:
      "Period marked by refinements in transformer architectures and training methodologies. Focus on improving compute efficiency and reducing training costs.",
  },
  {
    date: "Q4 '22",
    llms: 65,
    multiModal: 50,
    agents: 25,
    keyPaper: "ChatGPT",
    category: "LLMs",
    notes:
      "Revolutionary implementation of conversational AI using InstructGPT principles. Introduced innovative prompt engineering techniques and conversation handling. Demonstrated remarkable zero-shot generalization across diverse tasks.",
  },
  {
    date: "Q1 '23",
    llms: 78,
    multiModal: 52,
    agents: 35,
    keyPaper: "GPT-4",
    category: "LLMs",
    notes:
      "Significant leap in multi-task reasoning and domain expertise. Implemented sophisticated few-shot learning capabilities and improved context window handling. Demonstrated human-level or superior performance across various professional and academic benchmarks.",
  },
  {
    date: "Q2 '23",
    llms: 82,
    multiModal: 55,
    agents: 45,
    keyPaper: "Claude",
    category: "LLMs",
    notes:
      "Advanced implementation of constitutional AI principles. Introduced novel approaches to truthfulness and bias reduction. Demonstrated superior performance in reasoning tasks and code generation while maintaining strong safety guardrails.",
  },
  {
    date: "Q3 '23",
    llms: 84,
    multiModal: 70,
    agents: 48,
    keyPaper: "Stable Diffusion XL",
    category: "Multi-Modal",
    notes:
      "Breakthrough in open-source image generation. Implemented advanced conditioning mechanisms and multi-stage refinement pipeline. Introduced innovative techniques for style consistency and compositional accuracy.",
  },
  {
    date: "Q4 '23",
    llms: 86,
    multiModal: 72,
    agents: 60,
    keyPaper: "GPTs",
    category: "Agents",
    notes:
      "Introduction of customizable AI agents with specialized capabilities. Implemented novel approaches to task-specific fine-tuning and context handling. Demonstrated effective domain adaptation and tool use capabilities.",
  },
  {
    date: "Q1 '24",
    llms: 88,
    multiModal: 85,
    agents: 75,
    notes:
      "Significant advances in mathematical reasoning and formal proof generation. Implementation of improved symbolic manipulation capabilities and theorem proving.",
  },
  {
    date: "Q2 '24",
    llms: 90,
    multiModal: 86,
    agents: 78,
    notes:
      "Continued refinements in model architectures and training methodologies. Focus on improving computational efficiency and reducing inference costs.",
  },
  {
    date: "Q3 '24",
    llms: 91,
    multiModal: 87,
    agents: 80,
    keyPaper: "Q* (O-1)",
    category: "Agents",
    notes:
      "Breakthrough in automated reasoning combining neural and symbolic approaches. Implementation of novel architectures for mathematical problem-solving and formal verification. Demonstrated superior performance in complex optimization tasks.",
  },
  {
    date: "Q4 '24",
    llms: 92,
    multiModal: 88,
    agents: 82,
    notes:
      "Expected advancements in model scaling and architecture optimization. Projected improvements in cross-domain transfer learning and few-shot capabilities.",
  },
];

export default timelineData;

const chartConfig = {
  llms: {
    label: "LLMs",
    color: "hsl(var(--chart-1))",
  },
  multiModal: {
    label: "Multi-Modal",
    color: "hsl(var(--chart-2))",
  },
  agents: {
    label: "Agents",
    color: "hsl(var(--chart-4))",
  },
};

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="rounded-lg border bg-background p-3 shadow-sm">
        <p className="font-semibold text-sm">{label}</p>
        {data.keyPaper && (
          <div className="mt-2 text-xs">
            <span className="font-medium">Key Paper: </span>
            <span className="text-muted-foreground">{data.keyPaper}</span>
            {data.notes && (
              <div className="mt-1">
                <span className="font-medium">Notes: </span>
                <span className="text-muted-foreground text-[11px]">
                  {data.notes}
                </span>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
  return null;
};

export function ResearchTimeline() {
  // Create filtered data for reference dots
  const keyPaperData = timelineData.filter(
    (item) => item.keyPaper && item.category
  );

  const [selectedLine, setSelectedLine] = React.useState<string | null>(null);

  const getLineOpacity = (dataKey: string) => {
    if (!selectedLine) return 1;
    return selectedLine === dataKey ? 1 : 0.4;
  };

  return (
    <MathJaxContext
      config={{
        loader: { load: ["[tex]/html"] },
        tex: {
          packages: { "[+]": ["html"] },
          inlineMath: [["$", "$"]],
          displayMath: [["$$", "$$"]],
        },
      }}
    >
      <Card className="w-full">
        <CardHeader>
          <CardTitle>AI Research Progression</CardTitle>
          <CardDescription>
            Timeline of key developments (2022-2024)
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="min-h-[300px] h-[376px]">
            <LineChart
              width={600}
              height={350}
              data={timelineData}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 20,
              }}
            >
              <CartesianGrid vertical={false} stroke="hsl(var(--border))" />
              <XAxis
                dataKey="date"
                tickLine={false}
                axisLine={true}
                tickMargin={4}
                tick={{ fontSize: 11, fill: "#71717a" }}
              />
              <YAxis
                label={{
                  value: "Research Maturity",
                  angle: -90,
                  position: "insideLeft",
                }}
                domain={[0, 100]}
                tick={{ fill: "#71717a" }}
              />
              <Tooltip content={<CustomTooltip />} />

              {/* Main trend lines */}
              <Line
                type="monotone"
                dataKey="llms"
                stroke={chartConfig.llms.color}
                strokeWidth={2}
                dot={false}
                opacity={getLineOpacity("llms")}
                onClick={() =>
                  setSelectedLine(selectedLine === "llms" ? null : "llms")
                }
                style={{ cursor: "pointer" }}
              />
              <Line
                type="monotone"
                dataKey="multiModal"
                stroke={chartConfig.multiModal.color}
                strokeWidth={2}
                dot={false}
                opacity={getLineOpacity("multiModal")}
                onClick={() =>
                  setSelectedLine(
                    selectedLine === "multiModal" ? null : "multiModal"
                  )
                }
                style={{ cursor: "pointer" }}
              />
              <Line
                type="monotone"
                dataKey="agents"
                stroke={chartConfig.agents.color}
                strokeWidth={2}
                dot={false}
                opacity={getLineOpacity("agents")}
                onClick={() =>
                  setSelectedLine(selectedLine === "agents" ? null : "agents")
                }
                style={{ cursor: "pointer" }}
              />

              {/* Add reference dots only for key papers */}
              {keyPaperData.map((item, index) => {
                const categoryKey = item.category
                  ?.toLowerCase()
                  .replace("-", "") as keyof typeof chartConfig;
                const value = item[categoryKey];

                return (
                  <ReferenceDot
                    key={`${item.date}-${item.keyPaper}`}
                    x={item.date}
                    y={value}
                    r={6}
                    fill={chartConfig[categoryKey]?.color || "#000"}
                    stroke="white"
                    strokeWidth={2}
                    opacity={getLineOpacity(categoryKey)}
                  />
                );
              })}
            </LineChart>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <div className="flex w-full items-start gap-4">
            {Object.entries(chartConfig).map(([key, config]) => (
              <div
                key={key}
                className="flex items-center gap-2 cursor-pointer"
                onClick={() =>
                  setSelectedLine(selectedLine === key ? null : key)
                }
                style={{ opacity: getLineOpacity(key) }}
              >
                <div
                  className="h-3 w-3 rounded-full"
                  style={{ backgroundColor: config.color }}
                />
                <span className="text-sm font-medium text-muted-foreground">
                  {config.label}
                </span>
              </div>
            ))}
          </div>
          {/* <div className="p-3 bg-muted rounded-md">
            <p className="text-sm font-medium">
              Research Maturity Index Formula:
            </p>
            <p className="font-mono text-sm mt-1">
              <MathJax>
                {
                  "$M = \\omega \\cdot (R \\cdot P \\cdot S)^{\\frac{1}{3}} \\cdot (1 + \\log(1 + T))$"
                }
              </MathJax>
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              where ω is the domain weight, R is research impact, P is practical
              applications, S is scalability, and T is time since initial
              breakthrough
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              <MathJax>
                {
                  "$R = \\sum_{i=1}^n (p_i \\cdot c_i \\cdot r_i) \\cdot e^{-\\lambda t}$"
                }
              </MathJax>
              <MathJax>
                {
                  "$P = (1 - \\frac{\\sigma}{\\mu}) \\cdot \\log(1 + \\Delta s) \\cdot (1 - e^{-\\beta t})$"
                }
              </MathJax>
              <MathJax>
                {"$S = (B \\cdot M) \\cdot (1 + \\log(1 + A))$"}
              </MathJax>
              <MathJax>
                {"$T = \\int_0^t (\\frac{dR}{dt} + \\frac{dP}{dt}) dt$"}
              </MathJax>
              <MathJax>
                {`$$\\begin{flalign*}
                  &\\text{Variables:} \\\\
                  &\\omega: \\text{field-specific weight vector } [\\omega_1, \\omega_2, \\omega_3] \\\\
                  &p_i: \\text{normalized paper count} \\\\
                  &c_i: \\text{citation impact} \\\\
                  &r_i: \\text{reproducibility score} \\\\
                  &\\lambda: \\text{time decay constant} \\\\
                  &\\sigma: \\text{variance in top results} \\\\
                  &\\mu: \\text{mean performance} \\\\
                  &\\Delta s: \\text{SOTA improvement rate} \\\\
                  &\\beta: \\text{convergence rate} \\\\
                  &B: \\text{benchmark adoption rate} \\\\
                  &M: \\text{metric consistency} \\\\
                  &A: \\text{API availability}
                \\end{flalign*}$$`}
              </MathJax>
            </p>
          </div> */}
        </CardFooter>
      </Card>
    </MathJaxContext>
  );
}
