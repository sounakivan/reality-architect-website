import { ReactNode } from "react";

export interface Project {
  slug: string;
  categorySlug: string; 
  title: string;
  category: string;
  description: string;
  techStack: string[];
  image?: string;
  challenge?: string;
  impact?: string;
  content?: { title: string; body: string }[];
}

export const projects: Project[] = [
  {
    slug: "inner-light",
    categorySlug: "neuro-tech",
    title: "Inner Light (BCI + VR Neurotech)",
    category: "Neuro-tech",
    description: "Real-time brain-computer interface (BCI) translation and VR biofeedback architecture.",
    techStack: ["BCI", "Unity", "C#", "Signal Processing"],
    image: "/projects/Inner-Light-Cover.gif",
    challenge: "Translating raw EEG data (brainwaves) into an intuitive, real-time visual embodied metaphor in VR without noticeable latency, while avoiding motion sickness in biofeedback loops.",
    impact: "Successfully prototyped a zero-perceptible-latency EEG-to-avatar system, bridging the gap between raw neurological data and fluid human-computer interaction.",
    content: [
      {
        title: "Architecture & Implementation",
        body: "Signal processing pipelines are notoriously difficult to implement in real-time graphic engines. Inner Light leverages custom C# buffers to handle asynchronous UDP streams from the Emotiv EEG headset, performing lightweight FFT (Fast Fourier Transform) directly inside the Unity thread to map specific frequency bands (Alpha/Theta) to the shader graph parameters of the user's avatar."
      },
      {
        title: "Human-in-the-Loop Biofeedback",
        body: "The core of the system relies on a continuous feedback loop. As the user alters their emotional state, the BCI detects shifts in neural oscillations. This data modifies the avatar's light emission and particle behavior in real-time, which in turn influences the user's psychological state. To preserve frame rate (90 FPS required for VR), all particle calculation is offloaded to GPU Compute Shaders."
      }
    ]
  },
  {
    slug: "transfr-vr-education",
    categorySlug: "vr-education",
    title: "Transfr: VR Education at Scale",
    category: "VR Education",
    description: "Building VR simulations for career education and training reaching 100,000+ customers.",
    techStack: ["Unity", "C#", "Oculus", "EdTech"],
    image: "/projects/Transfr logo.png",
    challenge: "Scaling VR production from a handful of bespoke experiences to hundreds of standardized, high-quality training simulations across diverse industries (manufacturing, automotive, hospitality) while maintaining consistent pedagogical standards.",
    impact: "Enabled the rapid deployment of career exploration and instructional training modules, directly contributing to Transfr's ability to serve over 100,000 learners nationwide.",
    content: [
      {
        title: "The Scale of Immersion",
        body: "Moving from prototype to production in XR requires a fundamental shift in how applications are architected. The challenge wasn't just building a simulation—it was building a factory that builds simulations. Every interaction, from picking up a digital wrench to operating a highly complex CNC machine, needed to be intuitive, performant, and instructionally sound."
      },
      {
        title: "Pedagogical Systems Design",
        body: "I focused on aligning the technical capabilities of standalone VR headsets (Oculus/Meta Quest) with strict instructional design frameworks. This meant optimizing draw calls, managing asset bundles dynamically, and ensuring that the physical interactions felt responsive enough to build actual muscle memory."
      }
    ]
  },
  {
    slug: "modular-xr-system",
    categorySlug: "xr-design",
    title: "Tool-based XR Interaction System",
    category: "XR Design",
    description: "Modular templates and XR design system for improved production efficiency and design quality.",
    techStack: ["Design Systems", "Figma", "Unity", "UX/UI"],
    image: "/projects/drill.gif",
    challenge: "Fragmented UI/UX patterns across dozens of VR simulations led to inconsistent user experiences and bloated production timelines as designers rebuilt basic interaction models from scratch.",
    impact: "Established a unified spatial design system that improved production efficiency by 40% and drastically elevated the baseline quality and accessibility of all new VR content.",
    content: [
      {
        title: "Standardizing Spatial Computing",
        body: "A design system for 2D screens is complex; a design system for 3D spatial computing requires accounting for depth, ergonomics, physical fatigue, and tracking volumes. I led the development of a modular architecture that bridged Figma components directly to Unity prefabs."
      },
      {
        title: "Component-Driven Architecture",
        body: "The system included standardized interaction paradigms (grab points, snap zones, toolbelt mechanics) and a unified UI library optimized for VR rendering (distance-based scaling, high-contrast legibility). By componentizing these elements, technical artists and designers could assemble complex training scenarios simply by dragging and dropping validated prefabs."
      }
    ]
  },
  {
    slug: "e2engine",
    categorySlug: "agentic-workflows",
    title: "E2Engine: Automated VR Sim Creation",
    category: "E2Engine",
    description: "AI Workflow Automation for instant sim content generation.",
    techStack: ["AI Automation", "Python", "LLMs", "Toolchain"],
    image: "/projects/nodeflow templates.png",
    challenge: "The instructional design phase of VR simulation development required weeks of manual writing, storyboarding, and logic mapping before a single line of code was written.",
    impact: "Architected E2Engine, transforming a 3-week manual design process into an automated, instant content generation pipeline, drastically reducing the time-to-market for new training modules.",
    content: [
      {
        title: "Automating the Un-automatable",
        body: "Creating VR training requires highly specific state-machine logic. E2Engine leverages Large Language Models to parse standard operating procedures (SOPs) and automatically generate the underlying JSON state-machine logic required by the Unity runtime."
      },
      {
        title: "Human-in-the-Loop Architecture",
        body: "The system doesn't replace the instructional designer; it supercharges them. E2Engine parses raw manuals, generates the Unity-ready logic structure, and presents it in a custom visual editor. The designer reviews, tweaks, and approves the logic, which is then instantly ingestible by the VR platform."
      }
    ]
  },
  {
    slug: "agentic-youtube-pipeline",
    categorySlug: "agentic-workflows",
    title: "YouTube Automation using AI (n8n)",
    category: "AI Workflows",
    description: "End-to-end multi-agent orchestration converting conceptual ideas into production-ready assets automatically.",
    techStack: ["n8n", "ElevenLabs", "GPT-4", "Airtable"],
    image: "/projects/youtube automation n8n.png",
    challenge: "Generating consistent, high-quality YouTube content involved a fragmented, manual process jumping between ideation, scriptwriting, voiceover recording, and asset management.",
    impact: "Built a fully autonomous pipeline that manages the entire pre-production lifecycle, reducing human effort from hours to a single 2-minute approval checkpoint.",
    content: [
      {
        title: "The Orchestration Layer",
        body: "This system replaces disparate SaaS subscriptions and manual labor with a unified n8n orchestration graph. Operating on a cron schedule, the master agent queries an Airtable content backlog, selecting the next viable topic based on priority and readiness."
      },
      {
        title: "Human Gatekeeping",
        body: "Before utilizing expensive audio generation credits, the workflow halts. It sends a Slack notification to the human operator containing the generated assets. Only upon clicking 'Approve' via webhook does the system proceed to final assembly."
      }
    ]
  },
  {
    slug: "looking-inside-cells",
    categorySlug: "vr-education",
    title: "Looking Inside Cells",
    category: "Educational VR",
    description: "Verizon-sponsored research bringing cellular biology to middle schoolers via immersive environments. Designed utilizing Unreal Engine and Substance Painter.",
    techStack: ["Unreal Engine", "Maya", "Substance Painter", "VR"],
    image: "/projects/lab01.png"
  },
  {
    slug: "freehand-assistant",
    categorySlug: "xr-design",
    title: "Freehand Assistant",
    category: "Spatial UX",
    description: "Voice and gaze-controlled hand interactions designed to make XR more accessible for users with limited mobility.",
    techStack: ["Spatial UX", "Blender", "Figma", "Research"],
    image: "/projects/FreehandAssistant Cover.gif"
  },
  {
    slug: "embodied-vr-therapy",
    categorySlug: "neuro-tech",
    title: "Embodied VR Therapy",
    category: "Medical VR",
    description: "3D Design of avatars, therapeutic environments, and interfaces for Foretell Reality, a platform aiming to redefine group support and psychological therapy.",
    techStack: ["Maya", "Unity", "VR/Avatars"],
    image: "/projects/Screenshot.png"
  },
  {
    slug: "ar-athlete",
    categorySlug: "xr-design",
    title: "Victorious Athlete in AR",
    category: "Museum AR",
    description: "A location-based AR app revealing the long-lost history of one of the Getty Villa's most prized bronze statues.",
    techStack: ["Unity", "Photogrammetry", "AR"],
    image: "/projects/ar athlete.png"
  },
  {
    slug: "documentation-support-rag",
    categorySlug: "agentic-workflows",
    title: "Documentation Support RAG Agent",
    category: "Generative AI",
    description: "An interactive, LLM-powered RAG (Retrieval-Augmented Generation) agent built for intelligent documentation search and conversational support.",
    techStack: ["LangChain", "Vector DB", "OpenAI API", "RAG"],
    image: "/projects/Interaction Framework.png"
  },
  {
    slug: "breathsync",
    categorySlug: "neuro-tech",
    title: "BreathSync",
    category: "Wellness VR",
    description: "A research-backed VR biofeedback experience teaching deep belly breathing to promote mindfulness and reduce stress.",
    techStack: ["Unity", "Biofeedback", "Shader Graph", "VR"],
    image: "/projects/breathync.jpg",
    challenge: "Devising a real-time physiological monitoring method using consumer hardware by strapping a VR controller to the user's belly to track breathing patterns.",
    impact: "Won 'Best Research Application' at the 2021 XR Brain Jam for its innovative approach to promoting positive mental health.",
    content: [
      {
        title: "Biofeedback Mechanics",
        body: "The core interaction relies on syncing the user's physiological breathing rate with the virtual environment. As the user performs 'box breathing', the hypoxic technique oxygenates the blood and the environment dynamically responds, revealing new visual layers."
      },
      {
        title: "Role & Implementation",
        body: "Serving as Producer, Developer, and Technical Artist, I managed the multidisciplinary team while directly implementing the controller-tracking math and writing the custom shaders that visualized the breath-state transitions in real-time."
      }
    ]
  },
  {
    slug: "scubas-ocean-odyssey",
    categorySlug: "vr-education",
    title: "Scuba's Ocean Odyssey",
    category: "Educational VR",
    description: "An educational virtual reality game exploring plastic pollution through the eyes of a sentient submersible.",
    techStack: ["Maya", "Unity", "Substance Painter", "Oculus Rift"],
    image: "/projects/web_11.jpg",
    challenge: "Designing a highly-performant yet visually rich underwater environment for VR that maintained 90 FPS while rendering complex lighting and particle systems for ocean pollution.",
    impact: "Successfully showcased at Play NYC 2018 to enthusiastic reception and released publicly on the Oculus Rift platform for widespread educational access.",
    content: [
      {
        title: "3D Asset & Environment Design",
        body: "Led the complete 3D asset creation workflow using a PBR (Physically Based Rendering) pipeline. I modeled, UV-unwrapped, and textured the main character 'Scuba', the underwater hub stations, and all interactive props utilizing Maya and Substance Painter."
      },
      {
        title: "Level Design Flow",
        body: "Assembled the final ocean scenes in Unity, balancing the aesthetic requirements of a cinematic underwater narrative with strict VR performance budgets. Gameplay flow was iteratively playtested to ensure maximum educational retention without inducing simulation sickness."
      }
    ]
  },
  {
    slug: "divine-waltz",
    categorySlug: "",
    title: "Divine Waltz",
    category: "Mixed Media Animation",
    description: "A short mixed-media animated film exploring universal themes of growth and self-discovery, adapted from original poetry.",
    techStack: ["Motion Capture", "3D Animation", "Cinematography", "Storyboarding"],
    image: "/projects/Divine-Waltz.jpg",
    challenge: "Translating abstract, written poetry into a cohesive visual language that merged traditional 2D animation sensibilities with complex 3D rendering and motion capture data.",
    impact: "Created a deeply personal and visually stunning narrative that established my foundational approach to emotional storytelling and human-in-the-loop performance capture.",
    content: [
      {
        title: "Poetic Adaptation",
        body: "The project required dismantling a written poem into emotional beats, which were then mapped to visual metaphors and storyboards. Every color palette shift and camera movement was designed to mirror the stanza's pacing."
      },
      {
        title: "Performance & Mocap",
        body: "To capture authentic human expression, standard keyframe animation was augmented with motion capture technology. This hybrid approach allowed for hyper-realistic weight and momentum within a stylized, mixed-media digital aesthetic."
      }
    ]
  }
];
