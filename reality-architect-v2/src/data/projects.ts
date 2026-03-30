import { ReactNode } from "react";

export interface Project {
  slug: string;
  categorySlug: string;
  title: string;
  category: string;
  description: string;
  techStack: string[];
  image?: string;
  videoUrl?: string;
  challenge?: string;
  impact?: string;
  caseStudyMeta?: { role: string; company: string; companyUrl: string; timeline: string };
  content?: { title: string; body: string; list?: string[]; images?: string[]; videoUrl?: string; }[];
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
    challenge: "Exploring altered states of consciousness and providing measurable health and wellness benefits through a hybrid art and neuro-technology experiment.",
    impact: "Successfully built a real-time brain-computer interface where human brainwave frequencies directly controlled VR avatar embodiment, culminating in a simulated out-of-body experience during white light meditation.",
    caseStudyMeta: {
      role: "Creative Technologist and XR Artist",
      company: "Independent Research / Master's Thesis",
      companyUrl: "",
      timeline: "9 months"
    },
    content: [
      {
        title: "The Embodiment Experiment",
        body: "Inner Light began as a hybrid art and tech experiment. My goal was to explore how we could use VR not just as a visual medium, but as an extension of the Body-Mind. By integrating an EEG sensor, I developed a system where users could embody a virtual avatar driven entirely by their brain waves. The frequency of the neural data fed directly into the system, dynamically controlling the physical form and light emission of the avatar in real-time."
      },
      {
        title: "Facilitating an Out-of-Body Experience",
        body: "The core of the experience was built around a white light meditation. Once the user was fully embodied and reached a meditative state, the system took over. I programmed a sequence that simulated an out-of-body experience by gradually separating and removing the user from their avatar. The purpose of this was twofold: to deeply explore states of consciousness, and to tap into profound health and wellness benefits through biofeedback and complete digital dissociation, such that most people who tried it had a surprised and positive reaction during the out-of-body experience."
      },
      {
        title: "Hardware & Neurotech Integration",
        body: "I used an Emotiv headset for EEG detection. This headset had five sensors and I was using Emotiv software to get a processed signal which gives me the range for brainwave frequencies (alpha, beta, gamma, delta). For the virtual avatar I created a 3D model and used the shader to create a wave-like material. The amplitude of this wave-like material was procedurally driven by the range of the EEG data coming in. This formed a real-time mind-body user interface through Neurotech and VR."
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
    challenge: "Building highly effective, standardized career exploration and training simulations that could serve diverse populations—from high school students to incarcerated individuals undergoing workforce rehabilitation.",
    impact: "Reached 100,000+ users nationwide, building over 15 unique career simulations for the Trek VR library and actively developing the proprietary SDK that enabled Transfr's VR production at massive scale.",
    caseStudyMeta: {
      role: "Senior XR Designer",
      company: "Transfr",
      companyUrl: "https://transfrinc.com/",
      timeline: "3+ years."
    },
    content: [
      {
        title: "Building Pathways to Careers",
        body: "At Transfr, I was tasked with building career exploration simulations for a flagship product called Trek VR. The goal was massive: we wanted to build pathways directly from the classroom to the career. Over my time there, I personally built over 15 distinct simulations for the library, covering a wide array of different careers. These modules reached hundreds of thousands of users across incredible demographics—from high school classrooms to workplace facilities, and even extending into prisons to aid in workforce rehabilitation and education."
      },
      {
        title: "Engineering the Proprietary SDK",
        body: "Beyond just building individual experiences, I was deeply involved in the foundational tools themselves. I also built complex training simulations for specific instructional modules, which required a robust technical pipeline. To support this scale, I helped Transfr build and refine their proprietary SDK. This SDK became the backbone of our operations, enabling rapid, high-quality VR simulation production across the entire studio and standardizing how we built interactions."
      },
      {
        title: "Real-World Impact & Efficacy",
        body: "Hundred thousand plus customers have used this throughout the U.S. Efficacy studies show that some of the simulations I've built have better learning gains than real-world practice. These simulations have also helped thousands of students from middle schools and high schools choose their trade skills as a profession and find pathways to upward mobility."
      },
      {
        title: "The Scale of Immersion",
        body: "Moving from prototype to production in XR requires a fundamental shift in how applications are architected. The challenge wasn't just building a simulation—it was building a factory that builds simulations. Every interaction, from picking up a digital wrench to operating a highly complex CNC machine, needed to be intuitive, performant, and instructionally sound."
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
    caseStudyMeta: {
      role: "Senior Technical Designer",
      company: "Transfr",
      companyUrl: "https://transfrinc.com/",
      timeline: "8 months"
    },
    videoUrl: "https://www.youtube.com/watch?v=IeXSXgrtz3c",
    content: [
      {
        title: "The Fragmentation Problem",
        body: "When scaling VR production, fragmented UI/UX patterns across dozens of simulations inevitably led to inconsistent design quality. Our biggest hurdle was a bloated production pipeline where technical artists and designers were forced to rebuild basic assets and interaction models entirely from scratch for every new training module. Recognizing this inefficiency, I proposed a comprehensive XR design system—a modular architecture for interaction design built directly on top of the proprietary Transfr SDK.",
        images: ["/projects/xr-architecture.png"]
      },
      {
        title: "Aligning SDK Tools with Interaction Design",
        body: "This proposal led to my direct involvement in the SDK's tools development. The goal was to bridge the gap between concept and code by ensuring the SDK natively supported the strict, consistent requirements of the new XR design system. By standardizing physical hand interactions, UI scaling, and spatial ergonomics, we created an ecosystem where building a complex interaction felt like snapping together building blocks rather than coding bespoke solutions.",
        images: ["/projects/nodeflow-drill.png"]
      },
      {
        title: "Node Flow & Baked-in Logic",
        body: "A major breakthrough in this architecture was my involvement with Node Flow—a visual, node-based authoring tool for VR simulation building. I helped engineer reusable, tool-based interaction templates for standard VR objects like drills, wrenches, spray cans, scissors, wire cutters, and more. Rather than just being static 3D models, these grabbable objects came pre-configured with baked-in interaction logic, spatial audio effects, haptic feedback profiles, and UX affordances.",
        images: ["/projects/nodeflow-logic.png"]
      },
      {
        title: "Scaling Production Value",
        body: "The result was transformational. With all haptics, SFXs and UX logic baked directly into a standardized template, these interactable assets could be instantly reused across an entire VR training module - often comprising 10-12 distinct simulations. This unified approach:",
        list: [
          "saved massive amounts of redundant production time,",
          "drastically accelerated our delivery timelines, and",
          "established a consistently premium benchmark for design quality across the platform."
        ]
      }
    ]
  },
  {
    slug: "scriptr",
    categorySlug: "agentic-workflows",
    title: "Scriptr: AI-assisted VR Sim Development",
    category: "AI Automation",
    description: "An AI-powered agentic system using n8n to automate VR simulation formatting, asset population, and playable end-to-end creation.",
    techStack: ["AI Automation", "Python", "LLMs", "n8n"],
    image: "/projects/nodeflow templates.png",
    challenge: "Enhancing the efficiency of creating high-quality VR simulations by reducing vendor scope, massive production costs, and tedious, time-intensive script design.",
    impact: "Estimated to save $214,290 and 2,400 hours of production time across 15 simulations in 2025, successfully decreasing vendor timelines by 4 weeks and costs by 28.6%.",
    caseStudyMeta: {
      role: "System Designer / AI Startegist",
      company: "Transfr",
      companyUrl: "https://transfrinc.com/",
      timeline: "12 months"
    },
    content: [
      {
        title: "Phase 1: ScreenplAi — From 5 Days to 75 Minutes",
        body: "The first hurdle was scriptwriting. Vendors spent days drafting scripts that often missed the mark.",
        list: [
          "The Solution: I built ScreenplAi, an AI chatbot created using Google Gems that has a curated knowledge base of writing instructional voice-overs and format scripts for VR Sim Development. It scrapes real-world career data from O*NET and translates it into five distinct simulation concepts and task lists which can then be refined into a full script with instructional voice-over and formatting for VR interaction design.",
          "The Impact: In our pilot for a 'Food Scientist' simulation, we reduced the time to a final, formatted script from 5 days down to just 75 minutes."
        ]
      },
      {
        title: "Phase 2: Asset Bot — Eliminating Redundancy",
        body: "Once the script is generated, an AI-powered workflow searches Transfr's Asset Library for 3D assets, tools, and interaction templates to populate Unity projects. This eliminates redundant asset creation, drastically improves project scoping accuracy, and immediately flags any missing assets by autonomously creating Jira tickets for the art pipeline.\n\nUsing Gemini's vector embeddings: we created a RAG database of 3D assets with description tags. This enabled other AI workflows (like n8n) to retrieve assets from this database using Semantic Search."
      },
      {
        title: "Phase 3: E2Engine — The End-to-End Revolution",
        body: "The ultimate bottleneck in XR is waiting for a playable build to test the 'feel' of a simulation.",
        list: [
          "The Solution: E2Engine is designed to fully auto-generate a playable end-to-end (E2E) structure in Unity, complete with voice-over setup and an editable scene graph.",
          "Technical Implementation: I wrote an 11-page system prompt to context engineer how an LLM model should translate a script document into a pseudo-code structure (aligned with Transfr's SDK capabilities) parsed by a Unity C# script which runs the automation workflow in Unity.",
          "The Strategic Shift: This moves the vendor's role from 'early-stage creation' to 'high-fidelity polish,' allowing us to validate the design much earlier in the cycle."
        ]
      },
      {
        title: "The Impact: Scalable Innovation",
        body: "By bridging the gap between Engineering, Design, and AI Strategy, Scriptr delivered measurable business value:",
        list: [
          "$32,719 saved per simulation.",
          "30 days saved in production time per project.",
          "Projected Savings: For the 15 external simulations planned for 2025, this system is on track to save over $214,000 and 2,400 production hours."
        ]
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
    impact: "I used this pipeline to run three YouTube channels, successfully driving 91.4k combined views through fully autonomous content generation.",
    caseStudyMeta: {
      role: "AI Workflow Architect",
      company: "Independent Creator",
      companyUrl: "",
      timeline: "1 month"
    },
    content: [
      {
        title: "The Orchestration Layer",
        body: "As a YouTuber myself, I wanted to automate as much of the YouTube content production pipeline as possible. I architected a workflow of specialized AI agents using n8n to bridge diverse APIs and automate the content creation pipeline."
      },
      {
        title: "Automated Research & Asset Creation",
        body: "The AI Agents handled the research and script writing, as well as project management tasks such as creating the files in my Google Drive. The workflow also heavily utilized ElevenLabs for generating high-quality voiceovers."
      },
      {
        title: "Human-in-the-loop & Tracking",
        body: "Before utilizing expensive audio generation credits or finalizing the project, the workflow halted for a human-in-the-loop review step for approval. Once approved, the data was organized within an Airtable database for seamless project tracking."
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
    image: "/projects/lab01.png",
    challenge: "Translating highly complex cellular biology concepts into an engaging, performant immersive experience for middle school students.",
    impact: "Successfully developed the visual framework for a VR experience designed to research the learning efficacy of virtual reality in the classroom.",
    caseStudyMeta: {
      role: "3D Artist & Environment Designer",
      company: "Verizon / NYU Create Lab",
      companyUrl: "",
      timeline: "18 months"
    },
    content: [
      {
        title: "Visualizing the Microscopic",
        body: "I built the 3D assets for the biology simulations to successfully visualize what physical elements exist under the microscope. I utilized an Unreal Engine and Maya workflow heavily focused on Physically Based Rendering (PBR) to make the microscopic world feel tangible."
      },
      {
        title: "Shaders & Spatial Interface",
        body: "Beyond modeling, I designed custom shaders utilizing the Blueprint system in Unreal Engine. I also created the spatial UI that became the core interface for the cellular sandbox, always keeping in mind UX practices tailored specifically for middle schoolers."
      }
    ]
  },
  {
    slug: "freehand-assistant",
    categorySlug: "xr-design",
    title: "Freehand Assistant",
    category: "Spatial UX",
    description: "Voice and gaze-controlled hand interactions designed to make XR more accessible for users with limited mobility.",
    techStack: ["Spatial UX", "Blender", "Figma", "Research"],
    image: "/projects/FreehandAssistant Cover.gif",
    challenge: "Addressing the lack of inclusive XR interactions for users with disabilities impacting handedness, spanning from temporary injuries to long-term conditions like amputees.",
    impact: "Prototyped a robust multi-modal input system combining voice and gaze, paving the way for more inclusive, hands-free spatial UX.",
    caseStudyMeta: {
      role: "Spatial UX Designer",
      company: "Independent UX Research",
      companyUrl: "",
      timeline: "8 weeks"
    },
    content: [
      {
        title: "Research & Accessibility Needs",
        body: "In this project, I was looking for a solution to XR interactions tailored for users with handedness disabilities. I conducted comprehensive interviews with people with disabilities to deeply understand how they currently interact with XR and what physical pain points they face."
      },
      {
        title: "Prototyping & Iteration",
        body: "The development pipeline started with cardboard lo-fi prototypes to test initial ergonomics, and evolved into high-fidelity prototypes built in Unity utilizing advanced hand tracking."
      },
      {
        title: "Voice & Gaze Interaction Modeling",
        body: "Following the hand-tracking prototypes, I ultimately designed a voice and gaze-based interaction model. This system effectively allowed users to interact in XR entirely hands-free, ensuring the platform remained accessible regardless of physical mobility."
      }
    ]
  },
  {
    slug: "embodied-vr-therapy",
    categorySlug: "neuro-tech",
    title: "Embodied VR Therapy",
    category: "Medical VR",
    description: "3D Design of avatars, therapeutic environments, and interfaces for Foretell Reality, a platform aiming to redefine group support and psychological therapy.",
    techStack: ["Maya", "Unity", "VR/Avatars"],
    image: "/projects/Screenshot.png",
    challenge: "Creating therapeutic, psychologically safe virtual environments and avatars that facilitate vulnerable group support sessions.",
    impact: "Designed core 3D assets and environments for Foretell Reality, establishing their foundational aesthetic for virtual therapy.",
    caseStudyMeta: {
      role: "3D Artist",
      company: "Foretell Reality / Glimpse Group",
      companyUrl: "",
      timeline: "6 months"
    },
    content: [
      {
        title: "Environment Design for Psychological Safety",
        body: "The core focus of my work was designing the therapeutic environments and user interfaces. Every aspect of the environment's layout, lighting, and palette had to be constructed to promote an atmosphere of calm and psychological safety during group support therapy."
      },
      {
        title: "Avatar Representation",
        body: "I also led the 3D design of the platform's avatars, ensuring they effectively communicated bodily emotion and presence while avoiding the uncanny valley, crucial for maintaining comfort during vulnerable psychological sessions."
      }
    ]
  },
  {
    slug: "ar-athlete",
    categorySlug: "xr-design",
    title: "Victorious Athlete in AR",
    category: "Museum AR",
    description: "A location-based AR app revealing the long-lost history of one of the Getty Villa's most prized bronze statues.",
    techStack: ["Unity", "Photogrammetry", "AR"],
    image: "/projects/ar athlete.png",
    challenge: "Bringing a fragile, ancient historical artifact to life in a heavily trafficked museum setting by revealing internal conservation data without physical disruption.",
    impact: "Developed the highly-detailed digital twin models used in a location-based AR app that revealed hidden historical context to Getty Villa visitors.",
    caseStudyMeta: {
      role: "3D Artist",
      company: "Getty Villa Museum / L3A Studio",
      companyUrl: "",
      timeline: "1 month"
    },
    content: [
      {
        title: "Recreating a Digital Twin",
        body: "My role as a 3D artist involved recreating a highly accurate digital twin of the x-ray view showing what the inside of the statue looks like today. This was based directly on real conservation x-rays that give us hints into how this ancient bronze sculpture was cast over two millennia ago."
      },
      {
        title: "Photogrammetry & Texturing",
        body: "I heavily utilized advanced photogrammetry and custom texture painting workflows to accomplish this level of realism. The resulting models were then successfully integrated into the AR development and UX research pipeline managed by L3A Studio."
      }
    ]
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
    challenge: "Creating a robust, research-backed wellness VR experience tracking complex physiological breathing patterns in just three days.",
    impact: "Won 'Best Research Application' at the 2021 XR Brain Jam for its innovative approach to promoting positive mental health.",
    caseStudyMeta: {
      role: "Producer & Technical Artist",
      company: "XR Brain Jam 2021 (Games for Change Festival)",
      companyUrl: "",
      timeline: "Hackathon (3 Days)"
    },
    content: [
      {
        title: "Biofeedback Mechanics",
        body: "The core interaction relies on syncing the user's physiological breathing rate with the virtual environment. As the user performs 'box breathing', the hypoxic technique oxygenates the blood and the environment dynamically responds, revealing new visual layers."
      },
      {
        title: "Technical Implementation",
        body: "In VR the user sees a central orb that grows larger and smaller based on their inhalation or exhalation. We creatively tracked this breathing by strapping a VR controller to the user's stomach and using the controller's translational movement data to directly scale the size of the orb. The core gameplay loop became using your own breathing to keep your orb's size perfectly synced with a guiding, rhythmic orb."
      },
      {
        title: "Role & Team Execution",
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
    caseStudyMeta: {
      role: "Lead 3D Artist & Environment Designer",
      company: "Avolve Innovations",
      companyUrl: "",
      timeline: "6 months"
    },
    content: [
      {
        title: "Vision & Look Development",
        body: "I worked extensively on the vision, look development, and 3D asset creation for this Indie VR game. The core narrative focused heavily on raising environmental awareness around plastic pollution in our oceans."
      },
      {
        title: "Asset Creation Pipeline",
        body: "I utilized a Maya, Substance Painter, and Unity workflow to create the 3D assets for the underwater scenes as well as the main storyline characters. Beyond 3D art, my responsibilities also spanned the level design and fundamental concept development for the game."
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
