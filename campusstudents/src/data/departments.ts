import { Department } from "@/types/department";

export const departments: Department[] = [
  {
    id: "computer-science",
    name: "Computer Science",
    description:
      "Software engineering, artificial intelligence, algorithms, distributed systems, and modern computing infrastructure.",
    longDescription:
      "The Department of Computer Science fosters groundbreaking research and world-class education in computing. From foundational algorithms to modern cloud infrastructure and neural architectures, students build systems that power today's digital world.",
    specializationsCount: 4,
    enrolledStudents: 320,
    icon: "terminal",
    headOfDepartment: "Dr. Elena Vance, Ph.D.",
    building: "Turing Computing Hall · Floor 4",
    established: 1984,
    contactEmail: "cs-office@campusdirectory.edu",
    specializations: [
      {
        id: "CS-SPEC-01",
        slug: "web-development",
        name: "Web Development",
        description:
          "Modern frontend architectures, full-stack frameworks, reactive interfaces, and distributed web APIs.",
        leadFaculty: "Prof. Elena Vance",
        lab: "Turing Hall 408",
        studentCount: 4,
        skills: ["Next.js", "TypeScript", "Tailwind CSS", "Distributed APIs", "GraphQL"],
      },
      {
        id: "CS-SPEC-02",
        slug: "artificial-intelligence",
        name: "Artificial Intelligence",
        description:
          "Deep neural networks, computer vision, natural language processing, and automated reasoning.",
        leadFaculty: "Dr. Alan Mercer",
        lab: "Neural Computing Wing 412",
        studentCount: 12,
        skills: ["PyTorch", "Transformers", "Computer Vision", "Reinforcement Learning"],
      },
      {
        id: "CS-SPEC-03",
        slug: "data-structures",
        name: "Data Structures & Algorithms",
        description:
          "Advanced asymptotic analysis, competitive programming, graph algorithms, and combinatorial optimization.",
        leadFaculty: "Prof. Rajesh Raman",
        lab: "Algorithmic Research Lab 305",
        studentCount: 18,
        skills: ["Graph Theory", "Dynamic Programming", "Complexity Analysis", "Optimization"],
      },
      {
        id: "CS-SPEC-04",
        slug: "systems-engineering",
        name: "Systems Engineering",
        description:
          "Kernel design, distributed consensus, low-level concurrency, microarchitectures, and virtualization.",
        leadFaculty: "Dr. Marcus Wei",
        lab: "Systems Architecture Lab 210",
        studentCount: 10,
        skills: ["Rust", "Operating Systems", "Networking", "Distributed Consensus"],
      },
    ],
  },
  {
    id: "design",
    name: "Design",
    description:
      "User experience research, visual communication, interaction design, digital product prototyping, and brand storytelling.",
    longDescription:
      "The Department of Design merges human empathy, behavioral psychology, and aesthetic mastery. Students conceptualize, prototype, and refine physical and digital products that solve complex user problems.",
    specializationsCount: 3,
    enrolledStudents: 185,
    icon: "palette",
    headOfDepartment: "Prof. Marcus Sterling, M.Des.",
    building: "Bauhaus Pavilion · Studio A",
    established: 1996,
    contactEmail: "design-faculty@campusdirectory.edu",
    specializations: [
      {
        id: "DES-SPEC-01",
        slug: "ui-ux",
        name: "UI/UX & Product Design",
        description:
          "Wireframing, high-fidelity design systems, usability benchmarking, and interactive prototyping.",
        leadFaculty: "Prof. Marcus Sterling",
        lab: "UX Usability Suite 102",
        studentCount: 68,
        skills: ["Figma", "Design Systems", "Usability Testing", "Micro-Interactions"],
      },
      {
        id: "DES-SPEC-02",
        slug: "visual-communication",
        name: "Visual Communication & Brand Identity",
        description:
          "Typography, editorial architecture, color theory, motion graphics, and corporate visual languages.",
        leadFaculty: "Dr. Chloe Martin",
        lab: "Media Arts Studio 204",
        studentCount: 62,
        skills: ["Typography", "Brand Strategy", "Motion Graphics", "Editorial Layout"],
      },
      {
        id: "DES-SPEC-03",
        slug: "interaction-design",
        name: "Interaction & Spatial Design",
        description:
          "Physical computing, spatial computing, tactile interaction, and human-centered ergonomics.",
        leadFaculty: "Prof. Kenji Sato",
        lab: "Physical Prototyping Workshop 115",
        studentCount: 55,
        skills: ["Spatial UX", "Prototyping", "Design Ethics", "Hardware Interfaces"],
      },
    ],
  },
  {
    id: "business",
    name: "Business",
    description:
      "Strategic management, venture capital, fintech analytics, international entrepreneurship, and quantitative market models.",
    longDescription:
      "The Department of Business prepares ethical leaders and data-driven founders. With immersive case methods and industry partnerships, our curriculum explores real-world economics and organizational leadership.",
    specializationsCount: 3,
    enrolledStudents: 240,
    icon: "trending-up",
    headOfDepartment: "Dr. Sophia Al-Mansoor, MBA",
    building: "Wall Street Commons · Level 3",
    established: 1978,
    contactEmail: "business-desk@campusdirectory.edu",
    specializations: [
      {
        id: "BUS-SPEC-01",
        slug: "strategic-management",
        name: "Strategic Management & Consulting",
        description:
          "Corporate strategy, global market analysis, mergers, operational excellence, and enterprise transformation.",
        leadFaculty: "Dr. Sophia Al-Mansoor",
        lab: "Executive Strategy Boardroom 312",
        studentCount: 95,
        skills: ["Financial Modeling", "Corporate Strategy", "Market Entry", "Valuation"],
      },
      {
        id: "BUS-SPEC-02",
        slug: "fintech",
        name: "FinTech & Quantitative Analytics",
        description:
          "Algorithmic trading models, blockchain economics, risk analytics, and decentralized finance protocols.",
        leadFaculty: "Prof. David Vance",
        lab: "Bloomberg Terminal Suite 308",
        studentCount: 80,
        skills: ["Financial Engineering", "Risk Analytics", "Econometrics", "Blockchain"],
      },
      {
        id: "BUS-SPEC-03",
        slug: "entrepreneurship",
        name: "Global Entrepreneurship & Venture",
        description:
          "Startup incubation, venture capital fundraising, product-market validation, and scalable business design.",
        leadFaculty: "Prof. Nadia Ross",
        lab: "Venture Incubator Hub 202",
        studentCount: 65,
        skills: ["Pitching", "Growth Marketing", "Venture Capital", "Lean Startup"],
      },
    ],
  },
];

export default departments;
