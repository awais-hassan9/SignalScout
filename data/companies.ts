export interface Company {
    id: string;
    slug: string;
    name: string;
    website: string | null;
    signal: "Great Product" | "Good Founder" | "Good Market";
    description: string;
    founded: number;
    created_at: string;
    logo?: string;
    stage?: string;
    industry?: string;
    ai_score?: number;
    headquarters?: string;
    employees?: string;
    funding?: number;
    keyProducts?: string[];
    founders?: Array<{
      name: string;
      role: string;
      linkedin?: string;
      background?: string;
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
    aiStack?: string[];
  }

  export const companies: Company[] = [
    {
      id: "1",
      slug: "landscape",
      name: "Landscape",
      website: "https://www.landscape.vc/",
      signal: "Great Product",
      description: "The AI operating system for venture",
      founded: 2020,
      created_at: "2024-09-15T08:00:00Z",
      logo: "/companies/landscape-logo.jpeg",
      stage: "Pre-Seed",
      industry: "Artificial Intelligence",
      headquarters: "London, UK",
      ai_score: 90,
      employees: "1-10",
      funding: 1300000,
      keyProducts: ["Landscape AI"],
      founders: [
        {
          name: "Joe Perkins",
          role: "CEO",
          linkedin: "https://www.linkedin.com/in/joe-perkins-a9952a117",
          background: "Previously worked at leading tech companies focusing on AI/ML and enterprise software. Expert in scaling early-stage startups and building high-performance engineering teams."
        },
        {
            name: "Gabriel Shin",
            role: "COO",
            linkedin: "https://www.linkedin.com/in/joe-perkins-a9952a117",
            background: "Previously worked at leading tech companies focusing on AI/ML and enterprise software. Expert in scaling early-stage startups and building high-performance engineering teams."
          }
      ],
      added_at: "2024-09-15T08:00:00Z",
      ai_summary: "Landscape is the AI operating system for venture capital. We are building the first AI-native venture capital firm, and we are using AI to transform the way we invest, build, and scale companies.",
      investors: "Angels",
      scores: {
        productInnovation: 95,
        marketSize: 85,
        teamExperience: 90,
        execution: 80,
        traction: 75,
        businessModel: 85
      },
      aiStack: [
        "Vector Embeddings",
        "Multi-Agent Systems",
        "Agent Memory & Learning"
      ]
    },
    {
      id: "2",
      slug: "brainbase",
      name: "Brainbase",
      website: "https://usebrainbase.xyz/",
      signal: "Good Founder",
      description: "AI-powered workflow automation",
      founded: 2024,
      created_at: "2024-09-16T10:30:00Z",
      logo: "/companies/brainbase-logo.png",
      stage: "Seed",
      industry: "Artificial Intelligence",
      headquarters: "San Francisco, CA",
      ai_score: 82,
      employees: "1-10",
      funding: 0,
      keyProducts: ["Brainbase"],
      founders: [
        {
          name: "Gokhan Egri",
          role: "CEO",
          linkedin: "https://www.linkedin.com/in/gokhan-egri/",
          background: "Previously worked at leading tech companies focusing on AI/ML and enterprise software. Expert in scaling early-stage startups and building high-performance engineering teams."
        }
      ],
      added_at: "2024-10-15T08:00:00Z",
      ai_summary: "Brainbase is an AI-powered workflow automation platform that helps businesses streamline their operations and improve efficiency.",
      investors: "Y Combinator",
      scores: {
        productInnovation: 85,
        marketSize: 80,
        teamExperience: 75,
        execution: 70,
        traction: 65,
        businessModel: 80
      },
      aiStack: [    "LLMs",
        "Sequence Models",
        "Document Processing"]
    },
    {
      id: "3",
      slug: "aptitude",
      name: "Aptitude",
      website: "https://tryaptitude.ai/",
      signal: "Good Founder",
      description: "AI-driven customer research solutions",
      founded: 2024,
      created_at: "2024-09-16T10:30:00Z",
      logo: "/companies/aptitude-logo.png",
      stage: "Seed",
      industry: "Artificial Intelligence",
      headquarters: "San Francisco, CA",
      ai_score: 74,
      employees: "1-10",
      funding: 0,
      keyProducts: ["Aptitude"],
      founders: [
        {
          name: "Curtis Lee",
          role: "CEO",
          linkedin: "https://www.linkedin.com/in/curtislee645/",
          background: "Previously worked at leading tech companies focusing on AI/ML and enterprise software. Expert in scaling early-stage startups and building high-performance engineering teams."
        }
      ],
      added_at: "2024-10-21T08:00:00Z",
      ai_summary: "Aptitude AI offers AI-driven customer research solutions that allow businesses to conduct and analyze conversational interviews at scale. Their platform replaces traditional research methods with AI-moderated interviews, enabling users to gather deep qualitative and quantitative insights quickly. Aptitude AI is designed for market researchers, user researchers, and product managers to test advertising concepts, perform usability testing, and analyze product feedback efficiently.",
      investors: "",
      scores: {
        productInnovation: 75,
        marketSize: 90,
        teamExperience: 67,
        execution: 70,
        traction: 65,
        businessModel: 70
      },
      aiStack: [   "LLMs",
        "Sentiment Analysis",
        "Text Classification"]
    },
    {
      id: "4",
      slug: "resiquant",
      name: "Resiquant",
      website: "https://www.resiquant.ai/",
      signal: "Good Founder",
      description: "Helping insurers enhance productivity and underwriting confidence",
      founded: 2024,
      created_at: "2024-09-28T10:30:00Z",
      logo: "/companies/resiquant-logo.png",
      stage: "Seed",
      industry: "Artificial Intelligence",
      headquarters: "San Francisco, CA",
      ai_score: 67,
      employees: "1-10",
      funding: 0,
      keyProducts: ["Resiquant"],
      founders: [
        {
          name: "Omar Issa",
          role: "CEO",
          linkedin: "https://www.linkedin.com/in/omarissa-stanford/",
          background: "Previously worked at leading tech companies focusing on AI/ML and enterprise software. Expert in scaling early-stage startups and building high-performance engineering teams."
        }
      ],
      added_at: "2024-10-28T08:00:00Z",
      ai_summary: "ResiQuant is a company that helps insurers enhance productivity and underwriting confidence by providing engineer-verified property data and using transparent AI technologies. They offer a property intelligence platform designed to automate submission processing, enrich data, and cover the entire property data lifecycle, helping insurers maximize profitability. ResiQuant integrates structural engineering expertise and AI to improve the accuracy and effectiveness of underwriting processes. Their platform supports the processing of various submission documents, enhances data with current building characteristics, and provides real-time portfolio insights, ultimately aiming to significantly boost underwriting productivity.",
      investors: "",
      scores: {
        productInnovation: 67,
        marketSize: 65,
        teamExperience: 80,
        execution: 70,
        traction: 60,
        businessModel: 70
      },
      aiStack: [    "OCR",
        "Computer Vision",
        "Document Understanding Models"]
    },
    {
      id: "5",
      slug: "retellai",
      name: "Retell AI",
      website: "https://www.retellai.com/",
      signal: "Good Founder",
      description: "Interactive voice agents",
      founded: 2024,
      created_at: "2024-09-28T10:30:00Z",
      logo: "/companies/retellai-logo.png",
      stage: "Seed",
      industry: "Artificial Intelligence",
      headquarters: "San Francisco, CA",
      ai_score: 64,
      employees: "1-10",
      funding: 0,
      keyProducts: ["Retell AI"],
      founders: [
        {
          name: "Todd Li",
          role: "CEO",
          linkedin: "https://www.linkedin.com/in/zhengtaoli/",
          background: "Previously worked at leading tech companies focusing on AI/ML and enterprise software. Expert in scaling early-stage startups and building high-performance engineering teams."
        }
      ],
      added_at: "2024-10-28T08:00:00Z",
      ai_summary: "The startup provides an API for creating interactive voice agents with human-like conversational skills. They aim to help build the next generation of voice products, from AI-powered call agents to voice-enabled coaching apps. The API offers features such as low latency, ultra-realistic voices with emotions, and smart turn-taking handling. It is designed for easy integration into products with comprehensive documentation and developer support. The pricing for the API is $0.2 per minute and includes everything.",
      investors: "",
      scores: {
        productInnovation: 67,
        marketSize: 65,
        teamExperience: 80,
        execution: 70,
        traction: 60,
        businessModel: 70
      },
      aiStack: [    "Speech Recognition",
        "Text-to-Speech",
        "Voice Synthesis",
        "Real-time ASR"]
    },
    {
      id: "6",
      slug: "codebuff",
      name: "Codebuff",
      website: "https://www.codebuff.com/",
      signal: "Good Market",
      description: "Code at the speed of thought",
      founded: 2024,
      created_at: "2024-09-16T10:30:00Z",
      logo: "/companies/codebuff-logo.png",
      stage: "Seed",
      industry: "Artificial Intelligence",
      headquarters: "San Francisco, CA",
      ai_score: 71,
      employees: "1-10",
      funding: 0,
      keyProducts: ["Codebuff"],
      founders: [
        {
          name: "Brandon Chen",
          role: "Founder",
          linkedin: "https://www.linkedin.com/in/brandon-chen-37b95910a/",
          background: "Previously worked at leading tech companies focusing on AI/ML and enterprise software. Expert in scaling early-stage startups and building high-performance engineering teams."
        }
      ],
      added_at: "2024-10-21T08:00:00Z",
      ai_summary: "Codebuff is a CLI tool that writes code for you. It is a tool that allows you to write code faster and more efficiently.",
      investors: "",
      scores: {
        productInnovation: 75,
        marketSize: 90,
        teamExperience: 67,
        execution: 70,
        traction: 65,
        businessModel: 70
      },
      aiStack: ["LLMs",
    "Code Generation Models",
    "AST Analysis"]
    },
    {
      id: "7",
      slug: "mem0",
      name: "Mem0",
      website: "https://mem0.ai/",
      signal: "Good Founder",
      description: "The memory layer for AI agents",
      founded: 2024,
      created_at: "2024-09-16T10:30:00Z",
      logo: "/companies/mem0-logo.jpeg",
      stage: "Seed",
      industry: "Artificial Intelligence",
      headquarters: "San Francisco, CA",
      ai_score: 74,
      employees: "1-10",
      funding: 0,
      keyProducts: ["Mem0"],
      founders: [
        {
          name: "Dershraj Yadav",
          role: "CEO",
          linkedin: "https://www.linkedin.com/in/deshrajdry/",
          background: "Previously worked at leading tech companies focusing on AI/ML and enterprise software. Expert in scaling early-stage startups and building high-performance engineering teams."
        }
      ],
      added_at: "2024-10-21T08:00:00Z",
      ai_summary: "Mem0 provides a memory layer for AI applications, enabling them to learn from past user interactions to enhance intelligence and personalization. This service improves AI responses, saves costs, and integrates easily with existing models. It is useful for applications in customer support, personal AI companions, AI assistants, and personalized learning.",
      investors: "Y Combinator",
      scores: {
        productInnovation: 75,
        marketSize: 90,
        teamExperience: 67,
        execution: 70,
        traction: 65,
        businessModel: 70
      },
      aiStack: [   "Vector Embeddings",
        "Neural Cache",
        "Retrieval Models"]
    },
    {
      id: "8",
      slug: "niva",
      name: "Niva",
      website: "https://www.niva.co/",
      signal: "Good Market",
      description: "Automate KYB with AI",
      founded: 2024,
      created_at: "2024-09-16T10:30:00Z",
      logo: "/companies/niva-logo.png",
      stage: "Seed",
      industry: "Artificial Intelligence",
      headquarters: "New York, NY",
      ai_score: 84,
      employees: "1-10",
      funding: 0,
      keyProducts: ["Niva"],
      founders: [
        {
          name: "Abhinav Rai",
          role: "CEO",
          linkedin: "https://www.linkedin.com/in/abhinavr95/",
          background: "Previously worked at leading tech companies focusing on AI/ML and enterprise software. Expert in scaling early-stage startups and building high-performance engineering teams."
        }
      ],
      added_at: "2024-10-21T08:00:00Z",
      ai_summary: "Niva is a business identity platform that helps institutions globally verify and onboard other businesses faster, safer, and smarter using AI. Their platform automates Know Your Business (KYB) processes, reduces fraud, and ensures compliance by leveraging various public and private data sources. Niva focuses on optimizing the onboarding experience, minimizing application processing time, and providing high-security standards. The platform supports global usage, with specific features available in countries like the US, Mexico, Brazil, and Colombia.",
      investors: "",
      scores: {
        productInnovation: 80,
        marketSize: 90,
        teamExperience: 87,
        execution: 70,
        traction: 65,
        businessModel: 70
      },
      aiStack: [ "Document Understanding",
        "Entity Recognition",
        "Anomaly Detection"]
    },
    {
      id: "9",
      slug: "solomonai",
      name: "Solomon AI",
      website: "https://solomonlegal.ai/",
      signal: "Good Market",
      description: "The most reliable AI assistant for tax research",
      founded: 2024,
      created_at: "2024-09-16T10:30:00Z",
      logo: "/companies/solomonai-logo.png",
      stage: "Seed",
      industry: "Artificial Intelligence",
      headquarters: "New York, NY",
      ai_score: 84,
      employees: "1-10",
      funding: 0,
      keyProducts: ["Solomon AI"],
      founders: [
        {
          name: "Kik Lee",
          role: "CEO",
          linkedin: "https://www.linkedin.com/in/kik-lee-ab9906a9/",
          background: "Previously worked at leading tech companies focusing on AI/ML and enterprise software. Expert in scaling early-stage startups and building high-performance engineering teams."
        }
      ],
      added_at: "2024-10-21T08:00:00Z",
      ai_summary: "Solomon AI is the most reliable AI assistant for tax research. They are building the world's most accurate tax research engine, using a combination of AI and human expertise to provide the most accurate and up-to-date tax information.",
      investors: "",
      scores: {
        productInnovation: 80,
        marketSize: 90,
        teamExperience: 77,
        execution: 70,
        traction: 65,
        businessModel: 70
      },
      aiStack: ["Vector Embeddings",
    "Knowledge Graphs",
    "Information Retrieval"]
    },
    {
      id: "10",
      slug: "quno",
      name: "Quno",
      website: "https://www.quno.ai/",
      signal: "Good Market",
      description: "Market research on autopilot",
      founded: 2024,
      created_at: "2024-09-16T10:30:00Z",
      logo: "/companies/quno-logo.png",
      stage: "Seed",
      industry: "Artificial Intelligence",
      headquarters: "San Francisco, CA",
      ai_score: 84,
      employees: "1-10",
      funding: 0,
      keyProducts: ["Quno"],
      founders: [
        {
          name: "Quan Tan",
          role: "CEO",
          linkedin: "https://www.linkedin.com/in/quan-tan/",
          background: "Previously worked at leading tech companies focusing on AI/ML and enterprise software. Expert in scaling early-stage startups and building high-performance engineering teams."
        }
      ],
      added_at: "2024-10-21T08:00:00Z",
      ai_summary: "Quno AI is a qualitative research platform that uses AI to help companies understand their customers and market better. It conducts ongoing, in-depth, photorealistic AI interviews, combining the depth of conversations with the reach of surveys.",
      investors: "",
      scores: {
        productInnovation: 80,
        marketSize: 90,
        teamExperience: 77,
        execution: 70,
        traction: 65,
        businessModel: 70
      },
      aiStack: ["LLMs",
    "Sentiment Analysis",
    "Text Classification"]
    },
    {
      id: "11",
      slug: "aiforge",
      name: "AI Forge",
      website: "https://www.aiforge.dev/",
      signal: "Good Market",
      description: "Enterprise AI development platform",
      founded: 2024,
      created_at: "2024-09-16T10:30:00Z", 
      logo: "/companies/default-logo.png",
      stage: "Seed",
      industry: "Artificial Intelligence",
      headquarters: "Boston, MA",
      ai_score: 62,
      employees: "1-10",
      funding: 0,
      keyProducts: ["AI Forge Platform"],
      founders: [
        {
          name: "Sarah Johnson",
          role: "CEO",
          linkedin: "https://www.linkedin.com/in/sarahjohnson/",
          background: "Previously worked at leading tech companies focusing on AI/ML and enterprise software. Expert in scaling early-stage startups and building high-performance engineering teams."
        }
      ],
      added_at: "2024-10-21T08:00:00Z",
      ai_summary: "AI Forge provides enterprises with a comprehensive platform for developing and deploying AI solutions at scale.",
      investors: "",
      scores: {
        productInnovation: 85,
        marketSize: 90,
        teamExperience: 75,
        execution: 70,
        traction: 60,
        businessModel: 75
      },
      aiStack: ["Python", "JAX", "React", "FastAPI", "AWS", "Hugging Face"]
    },
    {
      id: "12", 
      slug: "datamind",
      name: "DataMind",
      website: "https://www.datamind.ai/",
      signal: "Good Founder",
      description: "AI-powered data analytics",
      founded: 2024,
      created_at: "2024-09-16T10:30:00Z",
      logo: "/companies/default-logo.png",
      stage: "Seed",
      industry: "Artificial Intelligence",
      headquarters: "Austin, TX",
      ai_score: 58,
      employees: "1-10",
      funding: 0,
      keyProducts: ["DataMind Analytics"],
      founders: [
        {
          name: "Michael Chen",
          role: "CEO",
          linkedin: "https://www.linkedin.com/in/michaelchen/",
          background: "Previously worked at leading tech companies focusing on AI/ML and enterprise software. Expert in scaling early-stage startups and building high-performance engineering teams."
        }
      ],
      added_at: "2024-10-21T08:00:00Z",
      ai_summary: "DataMind helps businesses unlock insights from their data using advanced AI and machine learning techniques.",
      investors: "",
      scores: {
        productInnovation: 80,
        marketSize: 85,
        teamExperience: 70,
        execution: 65,
        traction: 60,
        businessModel: 75
      },
      aiStack: ["Python", "PyTorch", "React", "Django", "GCP", "Vertex AI"]
    },
    {
      id: "13",
      slug: "neuralnet",
      name: "NeuralNet",
      website: "https://www.neuralnet.io/",
      signal: "Great Product",
      description: "Neural network optimization tools",
      founded: 2023,
      created_at: "2024-09-17T09:15:00Z",
      logo: "/companies/default-logo.png",
      stage: "Pre-Seed",
      industry: "Artificial Intelligence",
      headquarters: "San Francisco, CA",
      ai_score: 55,
      employees: "1-10",
      funding: 500000,
      keyProducts: ["NeuralNet Optimizer"],
      founders: [
        {
          name: "Emily Zhang",
          role: "CTO",
          linkedin: "https://www.linkedin.com/in/emilyzhang/",
          background: "PhD in Machine Learning from Stanford University. Previously worked on neural network optimization at Google Brain."
        }
      ],
      added_at: "2024-10-22T08:00:00Z",
      ai_summary: "NeuralNet provides cutting-edge tools for optimizing neural networks, improving efficiency and performance for AI researchers and developers.",
      investors: "Angel investors",
      scores: {
        productInnovation: 85,
        marketSize: 75,
        teamExperience: 80,
        execution: 60,
        traction: 50,
        businessModel: 70
      },
      aiStack: ["Python", "JAX", "React", "FastAPI", "GCP", "TensorFlow"]
    },
    {
      id: "14",
      slug: "aiethics",
      name: "AI Ethics",
      website: "https://www.aiethics.org/",
      signal: "Good Market",
      description: "Ethical AI development framework",
      founded: 2023,
      created_at: "2024-09-18T11:45:00Z",
      logo: "/companies/default-logo.png",
      stage: "Seed",
      industry: "Artificial Intelligence",
      headquarters: "Washington, D.C.",
      ai_score: 51,
      employees: "11-50",
      funding: 2000000,
      keyProducts: ["EthicalAI Framework"],
      founders: [
        {
          name: "Dr. Alicia Thompson",
          role: "CEO",
          linkedin: "https://www.linkedin.com/in/aliciathompson/",
          background: "Former ethics advisor for major tech companies. PhD in Philosophy with a focus on AI ethics."
        }
      ],
      added_at: "2024-10-23T08:00:00Z",
      ai_summary: "AI Ethics provides a comprehensive framework for developing ethical AI systems, helping companies navigate the complex landscape of AI governance and responsibility.",
      investors: "Tech for Good Fund, Ethical AI Ventures",
      scores: {
        productInnovation: 75,
        marketSize: 80,
        teamExperience: 85,
        execution: 65,
        traction: 55,
        businessModel: 70
      },
      aiStack: ["Python", "PyTorch", "React", "Django", "AWS", "OpenAI API"]
    },
    {
      id: "15",
      slug: "quantumml",
      name: "QuantumML",
      website: "https://www.quantumml.tech/",
      signal: "Good Founder",
      description: "Quantum-inspired machine learning algorithms",
      founded: 2024,
      created_at: "2024-09-19T14:30:00Z",
      logo: "/companies/default-logo.png",
      stage: "Pre-Seed",
      industry: "Artificial Intelligence",
      headquarters: "Toronto, Canada",
      ai_score: 48,
      employees: "1-10",
      funding: 250000,
      keyProducts: ["QuantumML Engine"],
      founders: [
        {
          name: "Dr. Samantha Lee",
          role: "CEO",
          linkedin: "https://www.linkedin.com/in/samanthalee/",
          background: "PhD in Quantum Computing from MIT. Previously worked on quantum algorithms at IBM Research."
        }
      ],
      added_at: "2024-10-24T08:00:00Z",
      ai_summary: "QuantumML develops machine learning algorithms inspired by quantum computing principles, aiming to solve complex problems more efficiently than classical ML approaches.",
      investors: "Quantum Ventures",
      scores: {
        productInnovation: 90,
        marketSize: 70,
        teamExperience: 85,
        execution: 55,
        traction: 40,
        businessModel: 65
      },
      aiStack: ["Python", "Qiskit", "React", "FastAPI", "IBM Cloud", "TensorFlow Quantum"]
    },
    {
      id: "16",
      slug: "aihealth",
      name: "AI Health",
      website: "https://www.aihealth.care/",
      signal: "Good Market",
      description: "AI-powered healthcare diagnostics",
      founded: 2023,
      created_at: "2024-09-20T16:00:00Z",
      logo: "/companies/default-logo.png",
      stage: "Seed",
      industry: "Healthcare",
      headquarters: "Boston, MA",
      ai_score: 57,
      employees: "11-50",
      funding: 3000000,
      keyProducts: ["HealthAI Diagnostic Platform"],
      founders: [
        {
          name: "Dr. James Wilson",
          role: "CEO",
          linkedin: "https://www.linkedin.com/in/jameswilson/",
          background: "MD from Harvard Medical School. Previously led AI initiatives at a major healthcare provider."
        }
      ],
      added_at: "2024-10-25T08:00:00Z",
      ai_summary: "AI Health leverages artificial intelligence to improve healthcare diagnostics, offering faster and more accurate disease detection and prediction.",
      investors: "Health Tech Fund, AI in Medicine Accelerator",
      scores: {
        productInnovation: 80,
        marketSize: 85,
        teamExperience: 75,
        execution: 70,
        traction: 60,
        businessModel: 75
      },
      aiStack: ["Python", "TensorFlow", "React", "FastAPI", "Azure", "MONAI"]
    },
    {
      id: "17",
      slug: "aiagri",
      name: "AI Agri",
      website: "https://www.aiagri.farm/",
      signal: "Good Market",
      description: "AI solutions for precision agriculture",
      founded: 2023,
      created_at: "2024-09-21T10:00:00Z",
      logo: "/companies/default-logo.png",
      stage: "Seed",
      industry: "Agriculture",
      headquarters: "Des Moines, Iowa",
      ai_score: 53,
      employees: "11-50",
      funding: 2500000,
      keyProducts: ["FarmAI Platform"],
      founders: [
        {
          name: "John Farmer",
          role: "CEO",
          linkedin: "https://www.linkedin.com/in/johnfarmer/",
          background: "Agricultural engineer with 15 years of experience in precision farming. Previously led innovation at a major agricultural equipment manufacturer."
        }
      ],
      added_at: "2024-10-26T08:00:00Z",
      ai_summary: "AI Agri develops AI-powered solutions for precision agriculture, helping farmers optimize crop yields, reduce resource usage, and increase sustainability.",
      investors: "AgTech Ventures, Sustainable Farming Fund",
      scores: {
        productInnovation: 75,
        marketSize: 80,
        teamExperience: 70,
        execution: 65,
        traction: 60,
        businessModel: 70
      },
      aiStack: ["Python", "PyTorch", "React", "Django", "AWS", "Computer Vision APIs"]
    },
    {
      id: "18",
      slug: "aiedu",
      name: "AI Edu",
      website: "https://www.aiedu.learn/",
      signal: "Great Product",
      description: "AI-powered personalized learning platform",
      founded: 2024,
      created_at: "2024-09-22T13:30:00Z",
      logo: "/companies/default-logo.png",
      stage: "Pre-Seed",
      industry: "Education",
      headquarters: "New York, NY",
      ai_score: 50,
      employees: "1-10",
      funding: 750000,
      keyProducts: ["EduAI Platform"],
      founders: [
        {
          name: "Lisa Chen",
          role: "CEO",
          linkedin: "https://www.linkedin.com/in/lisachen/",
          background: "Former educator with a Master's in Educational Technology. Previously led product development at an edtech startup."
        }
      ],
      added_at: "2024-10-27T08:00:00Z",
      ai_summary: "AI Edu leverages artificial intelligence to create personalized learning experiences, adapting to each student's needs and learning style.",
      investors: "EdTech Innovators Fund",
      scores: {
        productInnovation: 80,
        marketSize: 85,
        teamExperience: 65,
        execution: 60,
        traction: 45,
        businessModel: 70
      }
    },
    {
      id: "19",
      slug: "ailegal",
      name: "AI Legal",
      website: "https://www.ailegal.law/",
      signal: "Good Market",
      description: "AI-powered legal research and analytics",
      founded: 2023,
      created_at: "2024-09-23T15:45:00Z",
      logo: "/companies/default-logo.png",
      stage: "Seed",
      industry: "Legal Tech",
      headquarters: "Chicago, IL",
      ai_score: 56,
      employees: "11-50",
      funding: 3500000,
      keyProducts: ["LegalAI Research Platform"],
      founders: [
        {
          name: "Sarah Johnson",
          role: "CEO",
          linkedin: "https://www.linkedin.com/in/sarahjohnson/",
          background: "Former corporate lawyer with a JD from Yale Law School. Previously led legal tech initiatives at a major law firm."
        }
      ],
      added_at: "2024-10-28T08:00:00Z",
      ai_summary: "AI Legal develops AI-powered tools for legal research and analytics, helping lawyers work more efficiently and effectively.",
      investors: "Legal Tech Fund, AI for Law Accelerator",
      scores: {
        productInnovation: 75,
        marketSize: 80,
        teamExperience: 80,
        execution: 70,
        traction: 65,
        businessModel: 75
      }
    },
    {
      id: "20",
      slug: "aifinance",
      name: "AI Finance",
      website: "https://www.aifinance.money/",
      signal: "Great Product",
      description: "AI-driven financial analysis and forecasting",
      founded: 2024,
      created_at: "2024-09-24T09:00:00Z",
      logo: "/companies/default-logo.png",
      stage: "Pre-Seed",
      industry: "Finance",
      headquarters: "London, UK",
      ai_score: 52,
      employees: "1-10",
      funding: 1000000,
      keyProducts: ["FinanceAI Platform"],
      founders: [
        {
          name: "Alex Thompson",
          role: "CEO",
          linkedin: "https://www.linkedin.com/in/alexthompson/",
          background: "Former quantitative analyst with a PhD in Financial Engineering. Previously worked at a major investment bank."
        }
      ],
      added_at: "2024-10-29T08:00:00Z",
      ai_summary: "AI Finance uses artificial intelligence to provide advanced financial analysis and forecasting, helping businesses and investors make data-driven decisions.",
      investors: "FinTech Ventures",
      scores: {
        productInnovation: 80,
        marketSize: 85,
        teamExperience: 75,
        execution: 60,
        traction: 50,
        businessModel: 70
      }
    },
    {
      id: "21",
      slug: "airobotics",
      name: "AI Robotics",
      website: "https://www.airobotics.tech/",
      signal: "Good Founder",
      description: "AI-powered robotic systems for manufacturing",
      founded: 2023,
      created_at: "2024-09-25T11:15:00Z",
      logo: "/companies/default-logo.png",
      stage: "Seed",
      industry: "Robotics",
      headquarters: "Munich, Germany",
      ai_score: 59,
      employees: "11-50",
      funding: 4000000,
      keyProducts: ["RoboAI Platform"],
      founders: [
        {
          name: "Dr. Hans Schmidt",
          role: "CEO",
          linkedin: "https://www.linkedin.com/in/hansschmidt/",
          background: "PhD in Robotics from TU Munich. Previously led robotics research at a major automotive manufacturer."
        }
      ],
      added_at: "2024-10-30T08:00:00Z",
      ai_summary: "AI Robotics develops intelligent robotic systems for manufacturing, combining advanced AI algorithms with precision robotics to improve efficiency and flexibility in production lines.",
      investors: "Industrial Tech Fund, AI in Manufacturing Accelerator",
      scores: {
        productInnovation: 85,
        marketSize: 80,
        teamExperience: 85,
        execution: 70,
        traction: 60,
        businessModel: 75
      }
    }
  ];  
