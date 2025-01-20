export interface Author {
    name: string;
    link?: string;
  }
  
export interface Paper {
    id: string;
    title: string;
    arxivLink: string;
    githubRepo: {
      name: string;
      link: string;
    };
    date: string;
    image: string;
    summary: string;
    significance: string;
    categories: Array<{
      name: string;
      icon: string;
    }>;
    authors: Author[];
  }
  
  export const papers: Paper[] = [
    {
      id: "mindsearch-2024",
      title: "MindSearch: Mimicking Human Minds Elicits Deep AI Searcher",
      arxivLink: "https://arxiv.org/abs/2407.20183",
      githubRepo: {
        name: "internlm/mindsearch",
        link: "https://github.com/internlm/mindsearch",
      },
      date: "29 Jul 2024",
      image: "/papers/paper1.png",
      summary: "Inspired by the cognitive process when humans solve these problems, we introduce MindSearch to mimic the human minds in web information seeking and integration, which can be instantiated by a simple yet effective LLM-based multi-agent framework.",
      significance: "Further builds out the AI agent infrastructure with better information retrieval.",
      categories: [
        {
          name: "Information Retrieval",
          icon: "/icons/globe.svg"
        },
        {
          name: "Multi-Agent",
          icon: "/icons/dataflow.svg"
        }
      ],
      authors: [
        { name: "Zehui Chen" },
        { name: "Kuikun Liu" },
        { name: "Qiuchen Wang" },
        { name: "Jiangning Liu" },
        { name: "Wenwei Zhang" }
      ]
    },
    {
      id: "funaudiollm-2024",
      title: "FunAudioLLM: Voice Understanding and Generation Foundation Models for Natural Interaction Between Humans and LLMs",
      arxivLink: "https://arxiv.org/html/2407.04051v2",
      githubRepo: {
        name: "funaudiollm/cosyvoice",
        link: "https://fun-audio-llm.github.io/"
      },
      date: "4 Jul 2024",
      image: "/papers/paper2.png",
      summary: "This report introduces FunAudioLLM, a model family designed to enhance natural voice interactions between humans and large language models (LLMs).",
      significance: "The technique has potential to make voice LLMs more natural-sounding and broaden their application scenarios.",
      categories: [
        {
          name: "Audio LLMs",
          icon: "/icons/microphone.svg"
        }
      ],
      authors: [
        { name: "Keyu An" },
        { name: "Qian Chen" },
        { name: "Chong Deng" },
        { name: "Zhihao Du" },
        { name: "Changfeng Gao" }
      ]
    },
    {
      id: "agentscope-2024",
      title: "Very Large-Scale Multi-Agent Simulation in AgentScope",
      arxivLink: "https://arxiv.org/abs/2407.17789",
      githubRepo: {
        name: "modelscope/agentscope",
        link: "https://github.com/modelscope/agentscope"
      },
      date: "25 Jul 2024",
      image: "/papers/paper3.png",
      summary: "Recent advances in large language models (LLMs) have opened new avenues for applying multi-agent systems in very large-scale simulations.",
      significance: "One of the first breakthroughs in large-scale multi-agent systems.",
      categories: [
        {
          name: "Multi-Agent",
          icon: "/icons/dataflow.svg"
        }
      ],
      authors: [
        { name: "Xuchen Pan" },
        { name: "Dawei Gao" },
        { name: "Yuexiang Xie" },
        { name: "Zhewei Wei" },
        { name: "Yaliang Li" }
      ]
    },
    {
      id: "liveportrait-2024",
      title: "LivePortrait: Efficient Portrait Animation with Stitching and Retargeting Control",
      arxivLink: "https://arxiv.org/abs/2407.03168",
      githubRepo: {
        name: "KwaiVGI/LivePortrait",
        link: "https://liveportrait.github.io/"
      },
      date: "4 Jul 2024",
      image: "/papers/paper4.png",
      summary: "Instead of following mainstream diffusion-based methods, we explore and extend the potential of the implicit-keypoint-based framework, which effectively balances computational efficiency and controllability.",
      significance: "Potentially makes video-generation models more computationally efficient.",
      categories: [
        {
          name: "Video LLMs",
          icon: "/icons/play-square.svg"
        }
      ],
      authors: [
        { name: "Jianzhu Guo" },
        { name: "Dingyun Zhang" },
        { name: "Xiaoqiang Liu" },
        { name: "Zhizhou Zhong" },
        { name: "Yuan Zhang" }
      ]
    }
  ];
  
  // Stats and category aggregation
  export const getStats = () => {
    const allCategories = papers.flatMap(paper => paper.categories);
    const categoryCount = allCategories.reduce((acc, curr) => {
      acc[curr.name] = (acc[curr.name] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
  
    const authorCount = new Set(papers.flatMap(paper => paper.authors.map(a => a.name))).size;
  
    return {
      totalPapers: papers.length,
      categoryCount,
      authorCount,
      categories: Object.entries(categoryCount).map(([name, count]) => ({
        name,
        count
      }))
    };
  };
  
  export const GITHUB_ICON = "/icons/github.svg";