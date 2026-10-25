// Portfolio Project Dataset inspired by Cathy Dollé's brutalist project architecture
export const projects = [
  {
    id: "rea-engine",
    num: "01",
    title: "REA Engine",
    subtitle: "Automated Reverse Engineering & Binary Analysis Agent",
    category: "systems",
    year: "2026",
    role: "Lead Systems Architect",
    summary: "An autonomous agentic CLI that decomposes native binaries, analyzes PE/ELF layout, and reconstructs ASTs with zero execution risk.",
    description: "Built for automated security research and binary inspection. Connects to LLM agents via Model Context Protocol (MCP) to analyze function call boundaries, extract embedded strings, inspect dynamic relocations, and generate verifiable Evidence-backed reconstruction obligation ledgers.",
    stack: ["Rust", "TypeScript", "Node.js", "MCP", "Rizin", "WebAssembly"],
    metrics: [
      { label: "Analyzed Artifacts", val: "2,400+" },
      { label: "Decompile Speed", val: "<420ms" },
      { label: "Binary Formats", val: "ELF / PE / Mach-O" }
    ],
    github: "https://github.com/example/rea-engine",
    demo: "https://rea-engine.dev",
    highlights: [
      "Zero-execution static decompilation sandbox",
      "Model Context Protocol (MCP) server integration exposing 200+ analysis tools",
      "Cryptographically verified evidence bundles with SHA-256 provenance"
    ],
    svgPattern: "binary"
  },
  {
    id: "neurograph-ai",
    num: "02",
    title: "NeuroGraph AI",
    subtitle: "Real-Time Agentic Memory & Knowledge Graph Visualizer",
    category: "ai",
    year: "2026",
    role: "Full-Stack Engineer",
    summary: "Visualizing high-dimensional vector embeddings and multi-hop reasoning graphs in real time at 120 FPS.",
    description: "An interactive canvas exploration engine for complex multi-agent architectures. Tracks context windows, entity relationships, and conversational memory graphs using custom WebGL shaders and force-directed spatial clustering.",
    stack: ["TypeScript", "WebGL", "Python", "FastAPI", "Three.js", "GLSL"],
    metrics: [
      { label: "Graph Render Node Limit", val: "100,000+" },
      { label: "FPS Stability", val: "120 FPS" },
      { label: "Latency", val: "18ms" }
    ],
    github: "https://github.com/example/neurograph",
    demo: "https://neurograph.ai",
    highlights: [
      "Custom GPU instancing pipeline capable of rendering 100k nodes smoothly",
      "Multi-agent reasoning path replay with timeline scrubber",
      "Streaming WebSocket connection for live telemetry"
    ],
    svgPattern: "graph"
  },
  {
    id: "hypergl-shaderlab",
    num: "03",
    title: "HyperGL ShaderLab",
    subtitle: "Browser-Based WebGPU Compute & Raymarching Studio",
    category: "creative",
    year: "2025",
    role: "Creative Developer",
    summary: "A high-performance live coding playground for WebGPU compute shaders, procedural noise, and raymarching fractals.",
    description: "Inspired by demoscene aesthetics and Swiss typography. HyperGL gives graphics programmers instant feedback with hot-reloading shaders, uniform audio-analysis binding, and lossless HDR texture export directly in the browser.",
    stack: ["WebGPU", "WGSL", "GLSL", "Vanilla JS", "Web Audio API"],
    metrics: [
      { label: "Active Creators", val: "18,500+" },
      { label: "Shader Compilation", val: "Instant (<10ms)" },
      { label: "Audio FFT Bands", val: "1024 Bands" }
    ],
    github: "https://github.com/example/hypergl",
    demo: "https://hypergl.studio",
    highlights: [
      "Zero-latency WGSL hot reloading with compilation diagnostics",
      "Native Web Audio API FFT spectrum analyzer bound to shader uniforms",
      "Export directly to WebM 4K 60fps canvas recordings"
    ],
    svgPattern: "shader"
  },
  {
    id: "chronokv-store",
    num: "04",
    title: "ChronoKV",
    subtitle: "Distributed Raft Consensus & Time-Series Key-Value Engine",
    category: "systems",
    year: "2025",
    role: "Core Developer",
    summary: "LSM-tree based persistent storage engine featuring multi-raft clustering and sub-millisecond point lookups.",
    description: "Designed to handle high-write ingest with predictable P99 latency. Implements the Raft consensus algorithm with pipelined append entries, write-ahead logging (WAL), and memory-mapped block compression.",
    stack: ["Rust", "Tokio", "gRPC", "RocksDB", "Protobuf"],
    metrics: [
      { label: "Write Throughput", val: "1.2M ops/sec" },
      { label: "P99 Read Latency", val: "0.85ms" },
      { label: "Consensus Election", val: "<150ms" }
    ],
    github: "https://github.com/example/chronokv",
    demo: "https://chronokv.internal",
    highlights: [
      "Deterministic Raft simulation testing under simulated network partitions",
      "Zero-copy serialization with flatbuffers & memory-mapped pages",
      "Dynamic shard rebalancing with live cluster membership changes"
    ],
    svgPattern: "storage"
  },
  {
    id: "zenith-micro-framework",
    num: "05",
    title: "Zenith UI",
    subtitle: "Ultra-Lightweight 1.8KB Reactive Virtual DOM Engine",
    category: "frontend",
    year: "2025",
    role: "Author & Maintainer",
    summary: "A micro-frontend library built on modern Web Standards, fine-grained signals, and zero build step.",
    description: "Zenith proves you do not need 150KB bundles for high-interaction web apps. Powered by ES Modules and modern DOM reconciliation algorithms with zero runtime dependencies. Adopted across dozens of lightweight production dashboards.",
    stack: ["JavaScript (ESM)", "Web Standards", "HTML5", "CSS3"],
    metrics: [
      { label: "Minified & Gzipped", val: "1.8 KB" },
      { label: "GitHub Stars", val: "4,200★" },
      { label: "Dependencies", val: "0" }
    ],
    github: "https://github.com/example/zenith",
    demo: "https://zenithjs.org",
    highlights: [
      "Pure signal-based reactivity with fine-grained DOM surgical updates",
      "Native Template Literal parser with zero AST compilation overhead",
      "Compatible with any modern browser with zero build configuration"
    ],
    svgPattern: "minimal"
  },
  {
    id: "monolith-whiteboard",
    num: "06",
    title: "Monolith Canvas",
    subtitle: "Infinite Multiplayer Collaboration Surface with CRDTs",
    category: "fullstack",
    year: "2025",
    role: "Full-Stack Engineer",
    summary: "Real-time vector canvas with peer-to-peer WebRTC sync, sub-16ms stroke latency, and infinite zoom.",
    description: "A digital workspace engineered for software architecture diagrams, freeform ideation, and technical sprint retros. Built with conflict-free replicated data types (CRDTs) to guarantee zero loss during offline edits and reconnections.",
    stack: ["TypeScript", "HTML5 Canvas", "Yjs", "WebRTC", "WebSockets", "Node.js"],
    metrics: [
      { label: "Concurrent Peers / Room", val: "250+" },
      { label: "Stroke Latency", val: "<12ms" },
      { label: "Zoom Scale", val: "0.01x - 100x" }
    ],
    github: "https://github.com/example/monolith-canvas",
    demo: "https://monolithcanvas.app",
    highlights: [
      "Spatial quadtree indexing for frustum culling millions of strokes",
      "Offline-first synchronization powered by indexedDB and Yjs",
      "Presence radar tracking collaborators in infinite coordinates"
    ],
    svgPattern: "canvas"
  },
  {
    id: "etherflow-dex",
    num: "07",
    title: "EtherFlow Protocol",
    subtitle: "High-Frequency MEV-Protected Limit Orderbook Protocol",
    category: "systems",
    year: "2024",
    role: "Smart Contract & Protocol Engineer",
    summary: "Off-chain cryptographically signed order matching with on-chain batch settlement and atomic arbitrage guards.",
    description: "Solves frontrunning and miner extractable value (MEV) exploits using commit-reveal cryptographic rounds and gas-optimized batch settlements verified on Ethereum Layer-2 rollups.",
    stack: ["Solidity", "Go", "Foundry", "Ethers.js", "Docker"],
    metrics: [
      { label: "Processed Volume", val: "$480M+" },
      { label: "Gas Savings", val: "-68%" },
      { label: "Audit Rating", val: "100% Pass" }
    ],
    github: "https://github.com/example/etherflow",
    demo: "https://etherflow.exchange",
    highlights: [
      "Batch auction matching preventing sandwich attacks and front-running",
      "Formal verification with Certora and Slither static analysis",
      "Sub-second websocket orderbook feed written in Go"
    ],
    svgPattern: "crypto"
  },
  {
    id: "pulse-ebpf",
    num: "08",
    title: "Pulse eBPF",
    subtitle: "Kernel-Level Linux Observability & Threat Detection Daemon",
    category: "systems",
    year: "2024",
    role: "Kernel & Systems Programmer",
    summary: "Deep kernel tracing of TCP connections, system calls, and file descriptors with near-zero CPU footprint.",
    description: "Pulse hooks safely into the Linux kernel using eBPF bytecode. Inspects process creation, socket buffer anomalies, and privilege escalation patterns in high-security Kubernetes production clusters.",
    stack: ["C", "eBPF", "Go", "Linux Kernel", "Prometheus"],
    metrics: [
      { label: "CPU Overhead", val: "<0.4%" },
      { label: "Events / Sec", val: "4.5M" },
      { label: "Kernel Safety", val: "Verified" }
    ],
    github: "https://github.com/example/pulse-ebpf",
    demo: "https://pulse-ebpf.org",
    highlights: [
      "Ring-buffer memory mapping between kernel and user space",
      "Prometheus & OpenTelemetry metrics exporter",
      "Automated anomaly scoring using dynamic syscall baseline modeling"
    ],
    svgPattern: "kernel"
  },
  {
    id: "audiomatrix-synth",
    num: "09",
    title: "AudioMatrix Modular",
    subtitle: "Virtual Eurorack Node Synthesizer & DSP Sound Lab",
    category: "creative",
    year: "2024",
    role: "DSP & Audio Developer",
    summary: "Patch virtual cables between oscillators, custom biquad filters, and step sequencers right inside the browser.",
    description: "A love letter to modular analog synthesizers. Features customized Web Audio AudioWorklets executing DSP math in real-time, MIDI controller support, and oscilloscope visualizers running on HTML5 Canvas.",
    stack: ["Web Audio API", "AudioWorklet", "TypeScript", "Canvas 2D", "Web MIDI"],
    metrics: [
      { label: "Audio Latency", val: "4.2ms" },
      { label: "Available Modules", val: "36 Units" },
      { label: "Sound Sample Rate", val: "96 kHz" }
    ],
    github: "https://github.com/example/audiomatrix",
    demo: "https://audiomatrix.io",
    highlights: [
      "True multi-threaded AudioWorklet DSP executing custom wave-shaping",
      "Physics-based patch cable rendering with realistic gravity and tension",
      "Hardware Web MIDI input support with instant hotplug detection"
    ],
    svgPattern: "audio"
  },
  {
    id: "devos-terminal",
    num: "10",
    title: "DevOS Workflow Hub",
    subtitle: "Agentic Developer Terminal & Process Management Deck",
    category: "fullstack",
    year: "2024",
    role: "Full-Stack Engineer",
    summary: "A unified cockpit uniting terminals, Docker containers, git worktrees, and AI pair-programming agents.",
    description: "Designed for developers who juggle dozens of repositories and background services. Streamlines local development environments with instant status snapshots, smart port conflict resolution, and integrated terminal multiplexing.",
    stack: ["Node.js", "Electron", "Rust", "Xterm.js", "TailwindCSS"],
    metrics: [
      { label: "Daily Active Devs", val: "12,000+" },
      { label: "Memory Footprint", val: "<60 MB" },
      { label: "Startup Time", val: "180ms" }
    ],
    github: "https://github.com/example/devos",
    demo: "https://devos.app",
    highlights: [
      "High performance PTY terminal backend powered by Rust",
      "One-click service orchestrator parsing docker-compose and Procfiles",
      "Integrated AI command generator with local context awareness"
    ],
    svgPattern: "terminal"
  }
];

export const developerBio = {
  name: "DEVASHREE NAIK",
  role: "Software Engineer & Tech Explorer",
  tagline: "Woman in Tech // Writer of 'Code & Capital'",
  location: "INDIA / REMOTE // UTC+5:30",
  status: "OPEN FOR ENGINEERING ROLES & SELECT COLLABORATIONS (2026)",
  email: "devashree.naik@gmail.com",
  github: "https://github.com/DevashreeNaik24",
  linkedin: "https://www.linkedin.com/in/devashree-naik-91880428a/",
  substack: "https://devashreenaik.substack.com/?utm_campaign=profile_chips",
  publication: "Code & Capital",
  image: "assets/devashree.jpg",
  bio: "Hey, I'm a woman in tech. I explore software systems, AI agents, modern web architectures, and everything I'm curious about, while learning how to build financial independence along the way. Author of 'Code & Capital' on Substack — learning, questioning, and figuring it out in public.",
  skills: [
    { category: "Languages & Core", items: ["Python", "TypeScript", "JavaScript", "SQL", "HTML5 / CSS3", "C++"] },
    { category: "Web & Frontend", items: ["React", "Next.js", "Node.js", "REST APIs", "Modern DOM", "TailwindCSS", "Design Systems"] },
    { category: "AI & Data Systems", items: ["LLM Agents", "Vector Embeddings", "RAG Pipelines", "Machine Learning", "Data Analysis", "Prompt Engineering"] },
    { category: "Cloud & DevTools", items: ["Git / GitHub", "Docker", "Linux", "PostgreSQL", "Cloud Deployment", "CI/CD Workflows"] }
  ],
  experience: [
    { period: "2024 — PRESENT", title: "Software Engineer & Tech Author", company: "Code & Capital", description: "Publishing deep dives on software architecture, AI tooling, and financial independence. Building open-source web and agent applications." },
    { period: "2023 — 2024", title: "Software Development Engineer", company: "Tech & Systems", description: "Engineered scalable web applications, REST services, and database optimizations with high uptime and test coverage." },
    { period: "2022 — 2023", title: "Engineering Intern / Associate", company: "Software Innovations", description: "Developed full-stack features, automated testing pipelines, and responsive user interfaces." }
  ]
};
