"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  ResponsiveContainer,
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ZAxis,
  Tooltip,
} from "recharts";
import { cn } from "@/lib/utils";
import { BookOpen, Users } from "lucide-react";

// Move data declarations outside component
const companyData = {
  "LLM Reasoning & Planning": [
    {
      name: "Anthropic",
      description: "Constitutional AI and reasoning research",
      logo: "/companies/anthropic-logo.png",
      link: "",
    },
    {
      name: "DeepMind",
      description: "Advanced LLM reasoning capabilities",
      logo: "",
      link: "",
    },
    {
      name: "OpenAI",
      description: "Code interpreter and reasoning tools",
      logo: "/companies/openai-logo.jpg",
      link: "",
    },
    {
      name: "Adept AI",
      description: "Action-focused language models",
      logo: "",
      link: "",
    },
  ],
  "Efficient Fine-tuning": [
    {
      name: "Hugging Face",
      description: "Leading fine-tuning infrastructure",
      logo: "",
      link: "",
    },
    {
      name: "Scale AI",
      description: "Enterprise model customization",
      logo: "",
      link: "",
    },
    {
      name: "Together AI",
      description: "Efficient training platforms",
      logo: "",
      link: "",
    },
    {
      name: "Weights & Biases",
      description: "Fine-tuning optimization tools",
      logo: "",
      link: "",
    },
  ],

  "Code Generation": [
    {
      name: "GitHub",
      description: "Copilot and code AI tools",
      logo: "",
      link: "",
    },
    {
      name: "Replit",
      description: "AI-powered coding platform",
      logo: "",
      link: "",
    },
    {
      name: "Amazon CodeWhisperer",
      description: "Code generation service",
      logo: "",
      link: "",
    },
    {
      name: "Tabnine",
      description: "Code completion and generation",
      logo: "",
      link: "",
    },
  ],

  "Vision-Language Models": [
    {
      name: "OpenAI",
      description: "DALL-E and GPT-4V development",
      logo: "/companies/openai-logo.jpg",
      link: "",
    },
    {
      name: "Stability AI",
      description: "Open source vision-language models",
      logo: "/companies/stabilityai-logo.jpg",
      link: "",
    },
    {
      name: "Midjourney",
      description: "Advanced image generation",
      logo: "/companies/midjourney-logo.png",
      link: "",
    },
    {
      name: "Anthropic",
      description: "Claude 3 vision capabilities",
      logo: "/companies/anthropic-logo.png",
      link: "",
    },
  ],

  "Video Generation": [
    {
      name: "Runway",
      description: "AI video creation platform",
      logo: "",
      link: "",
    },
    {
      name: "Synthesia",
      description: "AI video synthesis",
      logo: "",
      link: "",
    },
    {
      name: "D-ID",
      description: "Digital human videos",
      logo: "",
      link: "",
    },
    {
      name: "Hour One",
      description: "AI video generation platform",
      logo: "",
      link: "",
    },
  ],

  "Audio-Visual Learning": [
    {
      name: "Descript",
      description: "Audio-visual content editing",
      logo: "",
      link: "",
    },
    {
      name: "AssemblyAI",
      description: "Speech and audio AI",
      logo: "",
      link: "",
    },
    {
      name: "Papercup",
      description: "AI dubbing technology",
      logo: "",
      link: "",
    },
    {
      name: "Respeecher",
      description: "Voice synthesis and cloning",
      logo: "",
      link: "",
    },
  ],

  "Multi-Agent Systems": [
    {
      name: "LangChain",
      description: "LangGraph agent framework",
      logo: "/companies/langchain-logo.jpg",
      link: "https://www.langchain.com/",
    },
    {
      name: "AutoGPT",
      description: "Autonomous AI agents",
      logo: "",
      link: "",
    },
    {
      name: "Fixie.ai",
      description: "Enterprise agent infrastructure",
      logo: "",
      link: "",
    },
    {
      name: "Cognitive AI",
      description: "Multi-agent systems research",
      logo: "",
      link: "",
    },
  ],

  "Agent Tool Use": [
    {
      name: "LangChain",
      description: "Agent and tool integration framework",
      logo: "",
      link: "",
    },
    {
      name: "Fennel AI",
      description: "Agent orchestration platform",
      logo: "",
      link: "",
    },
    {
      name: "Zapier",
      description: "AI automation tools",
      logo: "",
      link: "",
    },
    {
      name: "E2B",
      description: "Agent development platform",
      logo: "",
      link: "",
    },
  ],

  "Agent Memory & Learning": [
    {
      name: "Rewind AI",
      description: "Personal AI memory systems",
      logo: "",
      link: "",
    },
    {
      name: "Mem.ai",
      description: "AI-powered memory tools",
      logo: "",
      link: "",
    },
    {
      name: "Context.ai",
      description: "Continuous learning systems",
      logo: "",
      link: "",
    },
    {
      name: "Mem0",
      description: "The memory layer for AI agents",
      logo: "/companies/mem0-logo.jpeg",
      link: "https://www.mem0.ai/",
    },
  ],

  "Offline RL": [
    {
      name: "Wayve",
      description: "Autonomous vehicle learning",
      logo: "",
      link: "",
    },
    {
      name: "Covariant",
      description: "Robotic manipulation",
      logo: "",
      link: "",
    },
    {
      name: "Osaro",
      description: "Industrial automation",
      logo: "",
      link: "",
    },
    {
      name: "Intrinsic",
      description: "Industrial robotics",
      logo: "",
      link: "",
    },
  ],

  "Decision Transformers": [
    {
      name: "DeepMind",
      description: "Advanced RL architectures",
      logo: "",
      link: "",
    },
    {
      name: "Anthropic",
      description: "Constitutional decision-making",
      logo: "/companies/anthropic-logo.png",
      link: "",
    },
    {
      name: "Generally Intelligent",
      description:
        "Research on scalable neural networks and foundation models for AGI",
      logo: "",
      link: "",
    },
    {
      name: "Keen Technologies",
      description: "Decision systems",
      logo: "",
      link: "",
    },
  ],

  "Multi-Agent RL": [
    {
      name: "Embodied AI",
      description: "Multi-agent robotics",
      logo: "",
      link: "",
    },
    {
      name: "Cooperative AI",
      description: "Multi-agent systems",
      logo: "",
      link: "",
    },
    {
      name: "Mobius Labs",
      description: "Distributed AI systems",
      logo: "",
      link: "",
    },
    {
      name: "RLlib",
      description: "Multi-agent RL framework",
      logo: "",
      link: "",
    },
  ],

  "Attribution Methods": [
    {
      name: "Arthur AI",
      description: "ML monitoring and explainability",
      logo: "",
      link: "",
    },
    {
      name: "Fiddler AI",
      description: "Model monitoring and explainability",
      logo: "",
      link: "",
    },
    {
      name: "Arize AI",
      description: "ML observability",
      logo: "",
      link: "",
    },
    {
      name: "WhyLabs",
      description: "AI observability platform",
      logo: "",
      link: "",
    },
  ],

  "Model Interpretability": [
    {
      name: "Robust Intelligence",
      description: "Model testing and validation",
      logo: "",
      link: "",
    },
    {
      name: "TruEra",
      description: "Model quality management",
      logo: "",
      link: "",
    },
    {
      name: "DataRobot",
      description: "AutoML with interpretability",
      logo: "",
      link: "",
    },
    {
      name: "H2O.ai",
      description: "Explainable AI platforms",
      logo: "",
      link: "",
    },
  ],

  "Safety & Robustness": [
    {
      name: "Anthropic",
      description: "Constitutional AI and scalable AI safety research",
      logo: "/companies/anthropic-logo.png",
      link: "",
    },
    {
      name: "Aligned AI",
      description: "AI alignment solutions",
      logo: "",
      link: "",
    },
    {
      name: "Redwood Research",
      description: "AI safety research",
      logo: "",
      link: "",
    },
    {
      name: "Conjecture",
      description: "AI safety and robustness",
      logo: "",
      link: "",
    },
  ],
};

interface TrendBubbleData {
  topic: string;
  papers: number;
  growth: number;
  impact: number;
  category: "LLMs" | "Multi-Modal" | "Agents" | "Explainable AI" | "RL";
}

const trendData: TrendBubbleData[] = [
  // LLMs (Dominant technology)
  {
    topic: "LLM Reasoning & Planning",
    papers: 892,
    growth: 320,
    impact: 96, // Revolutionary impact across all metrics
    category: "LLMs",
  },
  {
    topic: "Efficient Fine-tuning",
    papers: 645,
    growth: 180,
    impact: 84, // Critical enabler but more technical
    category: "LLMs",
  },
  {
    topic: "Code Generation",
    papers: 423,
    growth: 85,
    impact: 78, // Specific but transformative in dev tools
    category: "LLMs",
  },

  // Multi-Modal (Second most impactful)
  {
    topic: "Vision-Language Models",
    papers: 567,
    growth: 210,
    impact: 89, // Major impact in creative industries
    category: "Multi-Modal",
  },
  {
    topic: "Video Generation",
    papers: 389,
    growth: 250,
    impact: 71, // Emerging but not yet widely deployed
    category: "Multi-Modal",
  },
  {
    topic: "Audio-Visual Learning",
    papers: 234,
    growth: 145,
    impact: 62, // Specialized applications only
    category: "Multi-Modal",
  },

  // Agents (High potential but early)
  {
    topic: "Multi-Agent Systems",
    papers: 179,
    growth: 380,
    impact: 68, // Promising but still experimental
    category: "Agents",
  },
  {
    topic: "Agent Tool Use",
    papers: 156,
    growth: 290,
    impact: 57, // Early stage, limited deployment
    category: "Agents",
  },
  {
    topic: "Agent Memory & Learning",
    papers: 123,
    growth: 240,
    impact: 55, // Mostly research, few applications
    category: "Agents",
  },

  // RL (Established but specialized)
  {
    topic: "Offline RL",
    papers: 345,
    growth: 45,
    impact: 64, // Useful in specific industries
    category: "RL",
  },
  {
    topic: "Decision Transformers",
    papers: 267,
    growth: 95,
    impact: 58, // Limited but growing applications
    category: "RL",
  },
  {
    topic: "Multi-Agent RL",
    papers: 189,
    growth: 65,
    impact: 33, // Highly specialized impact
    category: "RL",
  },

  // Explainable AI (Variable importance)
  {
    topic: "Attribution Methods",
    papers: 156,
    growth: 25,
    impact: 42, // Narrow technical impact
    category: "Explainable AI",
  },
  {
    topic: "Model Interpretability",
    papers: 234,
    growth: 55,
    impact: 41, // Important but limited tools
    category: "Explainable AI",
  },
  {
    topic: "Safety & Robustness",
    papers: 312,
    growth: 120,
    impact: 73, // Critical for deployment
    category: "Explainable AI",
  },
];

const categoryColors = {
  LLMs: "hsl(var(--chart-1) / 0.5)",
  "Multi-Modal": "hsl(var(--chart-2) / 0.5)",
  Agents: "hsl(var(--chart-3) / 0.5)",
  "Explainable AI": "hsl(var(--chart-4) / 0.5)",
  RL: "hsl(var(--chart-5) / 0.5)",
};

const paperData = {
  "LLM Reasoning & Planning": [
    {
      title:
        "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models",
      authors: "Wei, J., Wang, X., et al.",
      year: 2023,
      citations: 2134,
      venue: "Nature Machine Intelligence",
    },
    {
      title:
        "Self-Consistency Improves Chain of Thought Reasoning in Language Models",
      authors: "Mitchell, E., et al.",
      year: 2023,
      citations: 856,
      venue: "ICML",
    },
  ],
  "Efficient Fine-tuning": [
    {
      title: "LoRA: Low-Rank Adaptation of Large Language Models",
      authors: "Hu, E., et al.",
      year: 2023,
      citations: 1245,
      venue: "ICLR",
    },
    {
      title: "QLoRA: Efficient Finetuning of Quantized LLMs",
      authors: "Dettmers, T., et al.",
      year: 2023,
      citations: 678,
      venue: "NeurIPS",
    },
  ],
  "Code Generation": [
    {
      title: "Competition-Level Code Generation with AlphaCode",
      authors: "Li, Y., et al.",
      year: 2023,
      citations: 945,
      venue: "Science",
    },
    {
      title: "Learning to Generate Programs with Code Structure and Semantics",
      authors: "Chen, M., et al.",
      year: 2023,
      citations: 567,
      venue: "ICLR",
    },
  ],
  "Vision-Language Models": [
    {
      title: "Scaling Up Vision-Language Pre-training for Image Recognition",
      authors: "Li, J., et al.",
      year: 2023,
      citations: 923,
      venue: "CVPR",
    },
    {
      title: "DALL-E 3: Improving Image Generation with Better Captions",
      authors: "Ramesh, A., et al.",
      year: 2023,
      citations: 845,
      venue: "arXiv",
    },
  ],
  "Video Generation": [
    {
      title: "Generative Video Models as World Simulators",
      authors: "Wu, Y., et al.",
      year: 2023,
      citations: 445,
      venue: "ICCV",
    },
    {
      title: "High-Resolution Video Synthesis with Latent Diffusion Models",
      authors: "Zhang, P., et al.",
      year: 2023,
      citations: 389,
      venue: "CVPR",
    },
  ],
  "Audio-Visual Learning": [
    {
      title: "Learning Audio-Visual Speech Recognition from Raw Data",
      authors: "Wang, L., et al.",
      year: 2023,
      citations: 234,
      venue: "INTERSPEECH",
    },
    {
      title: "Joint Audio-Visual Learning for Enhanced Speech Recognition",
      authors: "Kim, H., et al.",
      year: 2023,
      citations: 187,
      venue: "ICASSP",
    },
  ],
  "Multi-Agent Systems": [
    {
      title: "Emergent Communication in Multi-Agent Language Models",
      authors: "Thompson, B., et al.",
      year: 2023,
      citations: 312,
      venue: "ACL",
    },
    {
      title: "Cooperative AI through Multi-Agent Language Interaction",
      authors: "Garcia, F., et al.",
      year: 2023,
      citations: 245,
      venue: "AAAI",
    },
  ],
  "Agent Tool Use": [
    {
      title: "ToolFormer: Language Models Can Teach Themselves to Use Tools",
      authors: "Schick, T., et al.",
      year: 2023,
      citations: 478,
      venue: "ICLR",
    },
    {
      title:
        "Teaching Language Models to Use APIs Through Interactive Learning",
      authors: "Anderson, M., et al.",
      year: 2023,
      citations: 289,
      venue: "NeurIPS",
    },
  ],
  "Agent Memory & Learning": [
    {
      title: "Long-Term Memory in Large Language Model Agents",
      authors: "Roberts, A., et al.",
      year: 2023,
      citations: 234,
      venue: "ICML",
    },
    {
      title: "Continual Learning in Language Model-based Agents",
      authors: "Lee, S., et al.",
      year: 2023,
      citations: 167,
      venue: "ICLR",
    },
  ],
  "Offline RL": [
    {
      title: "Conservative Q-Learning for Offline Reinforcement Learning",
      authors: "Kumar, A., et al.",
      year: 2023,
      citations: 567,
      venue: "ICML",
    },
    {
      title: "Offline Reinforcement Learning with Implicit Q-Learning",
      authors: "Kostrikov, I., et al.",
      year: 2023,
      citations: 423,
      venue: "NeurIPS",
    },
  ],
  "Decision Transformers": [
    {
      title:
        "Decision Transformer: Reinforcement Learning via Sequence Modeling",
      authors: "Chen, L., et al.",
      year: 2023,
      citations: 789,
      venue: "ICML",
    },
    {
      title: "Trajectory Transformer: Planning with Learned Behavior Priors",
      authors: "Janner, M., et al.",
      year: 2023,
      citations: 456,
      venue: "CoRL",
    },
  ],
  "Multi-Agent RL": [
    {
      title:
        "Value Decomposition Networks For Cooperative Multi-Agent Learning",
      authors: "Park, J., et al.",
      year: 2023,
      citations: 345,
      venue: "AAMAS",
    },
    {
      title: "Multi-Agent Reinforcement Learning for Autonomous Systems",
      authors: "Liu, R., et al.",
      year: 2023,
      citations: 234,
      venue: "ICRA",
    },
  ],
  "Attribution Methods": [
    {
      title: "Integrated Gradients: Axiomatic Attribution for Deep Networks",
      authors: "Patel, K., et al.",
      year: 2023,
      citations: 345,
      venue: "ICML",
    },
    {
      title: "Attribution-Based Explanations that Provide Actionable Insights",
      authors: "Martinez, C., et al.",
      year: 2023,
      citations: 234,
      venue: "AIES",
    },
  ],
  "Model Interpretability": [
    {
      title: "Understanding Deep Networks through Feature Attribution",
      authors: "Brown, A., et al.",
      year: 2023,
      citations: 456,
      venue: "NeurIPS",
    },
    {
      title: "Interpretable Neural Networks through Feature Distillation",
      authors: "Wilson, E., et al.",
      year: 2023,
      citations: 312,
      venue: "ICLR",
    },
  ],
  "Safety & Robustness": [
    {
      title: "Certifiable Robustness in Deep Learning Models",
      authors: "Johnson, R., et al.",
      year: 2023,
      citations: 567,
      venue: "ICML",
    },
    {
      title: "Safety Considerations in Large Language Models",
      authors: "Smith, T., et al.",
      year: 2023,
      citations: 478,
      venue: "ACL",
    },
  ],
};

interface BubbleChartProps extends React.HTMLAttributes<HTMLDivElement> {
  data?: TrendBubbleData[];
}

// Separate components into their own functions to prevent hydration issues
const PapersSection = React.memo(({ topic }: { topic: string }) => {
  const papers = paperData[topic as keyof typeof paperData] || [];

  if (papers.length === 0) {
    return null;
  }

  return (
    <div className="mt-8">
      <div className="flex items-center gap-2 mb-4">
        <CardTitle className="text-sm flex items-center gap-1.5">
          <BookOpen className="w-4 h-4" />
          Top Papers
        </CardTitle>
      </div>
      <div className="grid gap-4">
        {papers.map((paper) => (
          <div
            key={paper.title}
            className="p-4 rounded-lg border bg-card hover:bg-accent transition-colors"
          >
            <h4 className="font-medium text-sm">{paper.title}</h4>
            <p className="text-sm text-muted-foreground mt-1">
              {paper.authors}
            </p>
            <div className="flex flex-wrap justify-between items-center mt-2 gap-2">
              <span className="text-xs text-muted-foreground">
                {paper.venue} {paper.year}
              </span>
              <span className="text-xs text-muted-foreground">
                Citations: {paper.citations}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});
PapersSection.displayName = "PapersSection";

const CompanySection = React.memo(({ topic }: { topic: string }) => {
  const companies = companyData[topic as keyof typeof companyData] || [];

  return (
    <div className="mt-8">
      <div className="mb-4">
        <CardTitle className="text-sm flex items-center gap-1.5">
          <Users className="w-4 h-4" />
          Example Companies
        </CardTitle>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {companies.map((company) => (
          <div
            key={company.name}
            className="flex flex-col items-center p-4 rounded-lg border bg-card hover:bg-accent transition-colors"
          >
            {company.logo ? (
              <img
                src={company.logo}
                alt={company.name}
                className="w-16 h-16 rounded-full object-cover mb-2"
              />
            ) : (
              <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-2">
                <span className="text-xl font-bold">{company.name[0]}</span>
              </div>
            )}
            <h4 className="font-medium text-sm">{company.name}</h4>
            <p className="text-xs text-muted-foreground text-center mt-1">
              {company.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
});
CompanySection.displayName = "CompanySection";

const CustomTooltip = React.memo(({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="rounded-lg border bg-background p-3 shadow-sm">
        <p className="font-semibold text-sm">{data.topic}</p>
        <div className="mt-1 grid gap-2 text-xs">
          <div className="flex items-center justify-between gap-8">
            <span className="text-muted-foreground">Papers:</span>
            <span className="font-medium">{data.papers}</span>
          </div>
          <div className="flex items-center justify-between gap-8">
            <span className="text-muted-foreground">Growth:</span>
            <span className="font-medium">{data.growth}%</span>
          </div>
          <div className="flex items-center justify-between gap-8">
            <span className="text-muted-foreground">Impact:</span>
            <span className="font-medium">{data.impact}</span>
          </div>
        </div>
      </div>
    );
  }
  return null;
});
CustomTooltip.displayName = "CustomTooltip";

const TrendBubbleChart = React.forwardRef<HTMLDivElement, BubbleChartProps>(
  ({ data = trendData, className, ...props }, ref) => {
    const [activeBubble, setActiveBubble] = useState<string | null>(null);
    const [activeCategory, setActiveCategory] = useState<string | null>(null);
    const [isMounted, setIsMounted] = useState(false);

    React.useEffect(() => {
      setIsMounted(true);
    }, []);

    const handleBubbleClick = React.useCallback((event: any) => {
      if (!event?.payload) return;

      const clickedTopic = event.payload.topic;
      const clickedCategory = event.payload.category;

      setActiveBubble((prev) => (prev === clickedTopic ? null : clickedTopic));
      setActiveCategory((prev) =>
        prev === clickedCategory ? null : clickedCategory
      );
    }, []);

    const getModifiedData = React.useCallback(
      (categoryData: TrendBubbleData[]) => {
        return categoryData.map((item) => ({
          ...item,
          fillOpacity: !activeBubble
            ? 1
            : activeBubble === item.topic
            ? 1
            : 0.2,
        }));
      },
      [activeBubble]
    );

    return (
      <Card ref={ref} className={cn("", className)} {...props}>
        <CardHeader>
          <CardTitle>AI/ML Research Trends</CardTitle>
          <CardDescription>
            Impact vs. Growth rate, with bubble size representing number of
            papers
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="min-h-[300px] h-[376px]">
            {isMounted ? (
              <ResponsiveContainer width="100%" height="100%" minWidth={300}>
                <ScatterChart
                  margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                >
                  <XAxis
                    dataKey="impact"
                    name="Impact"
                    type="number"
                    domain={[0, 100]}
                    label={{
                      value: "Impact Score",
                      position: "bottom",
                      offset: 0,
                    }}
                  />
                  <YAxis
                    dataKey="growth"
                    name="Growth"
                    unit="%"
                    domain={[0, 400]}
                    label={{
                      value: "Growth Rate (%)",
                      angle: -90,
                      position: "insideLeft",
                      offset: -4,
                      textAnchor: "middle",
                    }}
                  />
                  <ZAxis type="number" dataKey="papers" range={[20, 5000]} />
                  <Tooltip content={<CustomTooltip />} />
                  {Object.entries(categoryColors).map(([category, color]) => (
                    <Scatter
                      key={category}
                      name={category}
                      data={getModifiedData(
                        data.filter((item) => item.category === category)
                      )}
                      fill={color}
                      onClick={handleBubbleClick}
                      cursor="pointer"
                    />
                  ))}
                </ScatterChart>
              </ResponsiveContainer>
            ) : null}
          </div>
          <div className="mt-6 flex flex-wrap gap-4 px-4">
            {Object.entries(categoryColors).map(([category, color]) => (
              <div key={category} className="flex items-center gap-2">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: color }}
                />
                <span className="text-sm text-muted-foreground">
                  {category}
                </span>
              </div>
            ))}
          </div>
          {activeBubble && (
            <>
              <div className="mt-8 border-t pt-8">
                <CardTitle className="mb-4">Topic: {activeBubble}</CardTitle>
                <PapersSection topic={activeBubble} />
                <CompanySection topic={activeBubble} />
              </div>
            </>
          )}
        </CardContent>
      </Card>
    );
  }
);
TrendBubbleChart.displayName = "TrendBubbleChart";

export { TrendBubbleChart, type TrendBubbleData };
