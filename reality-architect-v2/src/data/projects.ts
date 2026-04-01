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
  hidden?: boolean;
  caseStudyMeta?: { role: string; company: string; companyUrl: string; timeline: string };
  steamEmbed?: string;
  content?: { title?: string; body?: string; list?: string[]; images?: string[]; centerImage?: boolean; compactGrid?: boolean; videoUrl?: string; videoUrls?: string[]; }[];
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
    challenge: "The project required architecting a real-time system to translate complex EEG data into a procedural virtual avatar, turning invisible neural activity into a tangible, immersive embodiment.",
    impact: "This experiment demonstrated that biofeedback-driven XR can induce profound psychological shifts and was recognized with a showcase at MOCDA (Museum of Contemporary Digital Art) during the 2022 Digital Summer Show.",
    videoUrl: "https://www.youtube.com/watch?v=DdbErMHHXC4",
    caseStudyMeta: {
      role: "Creative Technologist and XR Artist",
      company: "Independent Research / Master's Thesis",
      companyUrl: "",
      timeline: "9 months"
    },
    content: [
      {
        title: "Can We Code a Connection to the Self?",
        body: "Inner Light was born from a desire to move VR beyond a purely visual medium and create an embodied extension of the body-mind as a whole. The project served as both an immersive art installation and an academic exploration into the efficacy of neurofeedback within virtual environments.",
        images: ["/projects/eeg vr feedback loop.jpg"]
      },
      {
        title: "The Technical Dialogue: Brainwaves as Brushes",
        body: "The design challenge was to create a real-time, bi-directional dialogue between a user’s internal state and their digital representation. I approached this by architecting a system that translated invisible neural activity into tangible, physical form.",
        images: ["/projects/EEG headset.png", "/projects/EEG data.gif"]
      },
      {
        list: [
          "Neurotech Integration: I utilized an Emotiv EEG headset with five sensors to capture raw neural data. Using Emotiv's software, I isolated the frequency ranges for Alpha, Beta, Gamma, and Delta waves, providing a structured data stream representing the user's focus and relaxation levels.",
          "Procedural Visualization: In Unity, I developed a custom 3D avatar with a specialized wave-like shader. I programmed the amplitude and light emission of this shader to be procedurally driven by the incoming EEG data.",
          "The Interface: This created a Neuro-Immersive UI where the \"user interface\" wasn't a menu, but the user's own virtual skin. When the user reached a state of meditative focus, the avatar’s light would stabilize and pulse in synchronicity with their neural rhythm.",
          "Full Body IK Avatar: for the embodiment to be realistic and truly felt, I had to make the avatar a full-body IK system by targeting only the head and the two controllers. This heightened the sense of embodiment that users felt with this virtual body."
        ],
        videoUrl: "https://www.youtube.com/watch?v=ZLCiP7Zhvg8"
      },
      {
        title: "The Experience: From Embodiment to Dissociation",
        body: "The narrative arc of Inner Light followed a specific psychological protocol designed to test the limits of digital presence.",
        list: [
          "Deep Embodiment: The experience began with a guided white light meditation. By seeing their own \"brainwaves\" reflected in the avatar they occupied, users experienced a profound sense of embodiment - a feeling that the virtual body was truly their own.",
          "Digital Dissociation: Once a stable meditative state was reached, the system initiated a programmed sequence I designed to simulate an out-of-body experience. I scripted the camera and avatar transform logic to gradually separate the user's viewpoint from the virtual form they had just inhabited.",
          "The Conceptual Framework: This idea of simulating an out-of-body experience to explore consciousness was informed by research from Mel Slater at the University of Barcelona, which demonstrated that such virtual experiences can effectively reduce the fear of death."
        ],
        images: ["/projects/user test 1.jpeg", "/projects/user test 2.jpeg"]
      },
      {
        title: "Learnings: The Tension of the Void",
        body: "During the development and testing of this experiment, I discovered that the human response to digital \"detachment\" is far from uniform.\nI initially anticipated that the transition to an out-of-body state following a white light meditation would be an almost universally liberating feeling. While many participants did describe a sense of profound freedom and lightness, a subset of users felt a distinct sense of unease during the separation as well. This divergence brought the experiment back to its core philosophical root: the fear of dying, and how we each respond to it."
      },
      {
        title: "Impact & Recognition",
        body: "This experiment bridged the gap between Neuroscience, Spiritual Tradition, and XR Engineering. It proved that biofeedback, when integrated with intentional storytelling, can produce measurable psychological shifts.",
        list: [
          "Featured Artist: Presented at MOCDA (Museum of Contemporary Digital Art) during the 2022 Digital Summer Show.",
          "Published as Academic Thesis in Integrated Digital Media from NYU Tandon School of Engineering in 2022. Read it here: https://www.proquest.com/openview/d850eeb668d48ecf11a179d30c028609/1?pq-origsite=gscholar&cbl=18750&diss=y"
        ]
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
    image: "/projects/hand signals 1POV.gif",
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
        title: "The Mission: Building Pathways to Upward Mobility",
        body: "At Transfr, the goal was to build a direct bridge from the classroom to a career. I served as a Senior Technical Designer leading the design and development of over 15 distinct VR simulations, covering a wide array of technical trades - from automotive technicians to pipefitting specialists. These modules were deployed in high school classrooms and workplace facilities across the U.S., providing thousands of students with the trade skills necessary for economic advancement."
      },
      {
        body: "My responsibilities:",
        list: [
          "Coordinating with instruction designer, technical artists and sound designers to build the scene in Unity and developing the simulation logic using the Transfr SDK.",
          "Collaborate with SDK developers to improve the tooling and features to build VR simulations like interaction templates, nodes and components, voice-over generation. NPC animations, and more.",
          "Solve design problems unique to each career and training simulation and provide a seamless UX experience in XR."
        ]
      },
      {
        title: "Bridging Design, Product, and Engineering",
        body: "We were not only building the car but also the factory while building the car. In this effort, I collaborated with multi-disciplinary teams to build and refine Transfr’s proprietary SDK (in Unity) and XR interaction system for training. I helped the company scale from building single prototypes to a library of enterprise-grade VR simulations. These are a few of my contributions.",
        list: [
          "XR Standardization at Scale: I helped translate complex, real-world physical interactions - like operating a CNC machine or handling specialized laboratory tools - into standardized XR interaction patterns.",
          "Product and Engineering: I helped drive the SDK’s development, which enabled us to maintain high-quality visual and instructional standards across every module, through proprietary tools like Node Flow Studio and Asset Manager.",
          "Production Workflows: Beyond design, I focused on system design and building AI-driven workflows to scale production, connect verticals and increase the efficiency of our simulation development."
        ],
        videoUrls: [
          "https://www.youtube.com/watch?v=k3s7FKBwGUM",
          "https://www.youtube.com/watch?v=JVDBVQJN8gE",
          "https://www.youtube.com/watch?v=bYTgL4Epbm0",
          "https://www.youtube.com/watch?v=1gRl3-z30Ow",
          "https://www.youtube.com/watch?v=kIoA0NYGLWg",
          "https://www.youtube.com/watch?v=2EGeHwZ_DPU"
        ]
      },
      {
        title: "Real-World Impact & Efficacy",
        body: "The true value of these simulations was validated through rigorous testing and real-world deployment.",
        list: [
          "Learning Gains: Efficacy studies demonstrated that the simulations we built often resulted in higher learning gains than traditional real-world practice alone.",
          "Human-Centric Design: By facilitating continuous user testing and feedback loops, I ensured that our tools evolved alongside the needs of the learners they served.",
          "National Reach: With over 100,000 customers using these tools throughout the U.S., we successfully proved that immersive technology could be a primary driver for workforce development and vocational education."
        ],
        videoUrl: "https://www.youtube.com/watch?v=uvEmhJ1RrmA"
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
    image: "/projects/tool asset templates.gif",
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
    image: "/projects/Scriptr Agentic System thumbnail.png",
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
        images: ["/projects/Scriptr Agentic System.png"]
      },
      {
        title: "Phase 1: ScreenplAi — From 5 Days to 75 Minutes",
        body: "The first hurdle was scriptwriting. Vendors spent days drafting scripts that often missed the mark.",
        list: [
          "The Solution: I built ScreenplAi, an AI chatbot created using Google Gems that has a curated knowledge base of writing instructional voice-overs and format scripts for VR Sim Development. It scrapes real-world career data from O*NET and translates it into five distinct simulation concepts and task lists which can then be refined into a full script with instructional voice-over and formatting for VR interaction design.",
          "The Impact: In our pilot for a 'Food Scientist' simulation, we reduced the time to a final, formatted script from 5 days down to just 75 minutes."
        ],
        images: ["/projects/screenplai.gif"],
        centerImage: true
      },
      {
        title: "Phase 2: Asset Bot — Eliminating Redundancy",
        body: "Once the script is generated:",
        list: [
          "An AI workflow (n8n) searches Transfr's Asset Library for 3D assets, tools, and interaction templates to populate Unity projects.",
          "This eliminates redundant asset creation, drastically improves project scoping accuracy, and immediately flags any missing assets by autonomously creating Jira tickets for the art pipeline.",
          "Using Gemini's vector embeddings: we created a RAG database of 3D assets with description tags. This enabled other AI workflows (like n8n) to retrieve assets from this database using Semantic Search."
        ],
        images: ["/projects/Asset Search Workflow.png"],
        videoUrl: "https://www.youtube.com/watch?v=QTTlHD1bFL0"
      },
      {
        title: "Phase 3: E2Engine — The End-to-End Revolution",
        body: "The ultimate bottleneck in XR is waiting for a playable build to test the 'feel' of a simulation.",
        list: [
          "The Solution: E2Engine is designed to fully auto-generate a playable end-to-end (E2E) structure in Unity, complete with voice-over setup and an editable scene graph.",
          "Technical Implementation: I wrote an 11-page system prompt to context engineer how an LLM model should translate a script document into a pseudo-code structure (aligned with Transfr's SDK capabilities) parsed by a Unity C# script which runs the automation workflow in Unity.",
          "The Strategic Shift: This moves the vendor's role from 'early-stage creation' to 'high-fidelity polish,' allowing us to validate the design much earlier in the cycle."
        ],
        images: ["/projects/E2Engine Workflow.png"],
        videoUrl: "https://www.youtube.com/watch?v=o8P4NtaDxYY"
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
    image: "/projects/n8n human loop.gif",
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
        images: ["/projects/youtube automation n8n.png"]
      },
      {
        title: "The Architecture: An Agentic Ecosystem",
        body: "I used n8n as the orchestrator to build a multi-agentic ecosystem that bridged the gap between creative ideation and technical execution.",
        list: [
          "Intelligent Scripting & Research: I built agents that scrape trending data and research niche topics, synthesizing that information into structured scripts that follow proven engagement frameworks.",
          "Cost-Aware Voiceover Strategy: To maximize ROI, I added a human-in-the-loop review. The system sends the script for human approval before calling the ElevenLabs API. This strategic delay ensures we save tokens on high-fidelity voiceover generation until the narrative is finalized.",
          "The Command Center: I integrated an Airtable database to serve as the project's central nervous system. Every step - script research, file creation, and status updates - is logged in real-time, providing a transparent view of the autonomous production line.",
          "Automated Project Management: The workflow automatically handles file creation and organization, ensuring that the final \"package\" is ready for a video editor or an automated assembly tool with all necessary assets in place."
        ]
      },
      {
        title: "The Result: Scalable Creative Output",
        body: "This pipeline proved that with the right AI strategy, one person can operate at the scale of an entire production studio. The 91.4k views weren't just a win for the algorithm; they were a validation of how agentic systems change the game. By automating the repetitive \"drudgery\" of content management, I free up the space needed to focus on generating good video ideas that truly resonate with an audience."
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
    steamEmbed: "https://store.steampowered.com/widget/1889880/",
    content: [
      {
        title: "Visualizing the Invisible",
        body: "To make the microscopic world feel grounded, I moved beyond simple modeling. I built a library of 3D assets and animations - from mitochondria to the cell membrane - designed to accurately represent what exists under a microscope.",
        list: [
          "The Workflow: I utilized a high-precision pipeline between Maya and Unreal Engine, heavily focused on Physically Based Rendering (PBR).",
          "The Result: This approach gave the cellular environment a \"tangible\" quality, using realistic materials and light behavior to help students distinguish between different organic structures."
        ],
        images: ["/projects/cells 1.gif", "/projects/cells 2.gif", "/projects/cells 3.gif", "/projects/cells 4.gif"],
        compactGrid: true
      },
      {
        title: "Building Functional Prototypes in Unreal Engine",
        body: "My role extended into the technical architecture of the experience, bridging the gap between static art and interactive education.",
        list: [
          "Interactive Shaders: I developed custom shaders to simulate the translucent, fluid nature of cellular matter, ensuring the environment felt alive and responsive.",
          "Blueprint Scripting: Using the Unreal Engine Blueprint system, I built functional prototypes for the VR tools and UIs that students used to navigate the cell.",
          "Instructional Design: I worked closely with researchers to iteratively design interactions that weren't just \"cool,\" but instructionally sound, ensuring every movement in the VR space reinforced a biological concept."
        ],
        images: ["/projects/blueprints 1.png", "/projects/blueprints 2.png"]
      },
      {
        title: "The Intersection of Science and Design",
        body: "\"Looking Inside Cells\" required a deep commitment to human-centric design. By focusing on performance optimization and computer graphics, I helped create a world where students could stop \"looking\" at biology and start \"experiencing\" it. This project reinforced my belief that when we make the invisible tangible, we unlock a deeper capacity for curiosity and learning."
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
    challenge: "Most XR interaction models are built on a \"hand-centric\" bias, assuming users have full, bilateral mobility. This leaves a massive accessibility gap for individuals with disabilities impacting handedness - ranging from temporary injuries to long-term conditions and limb differences.",
    impact: "Developed a functional interaction protocol that allows users to navigate and interact with XR environments hands-free. This project established a blueprint for inclusive XR design, ensuring that immersive experiences are accessible to everyone, regardless of their physical mobility.",
    caseStudyMeta: {
      role: "Spatial UX Designer",
      company: "Independent UX Research",
      companyUrl: "",
      timeline: "8 weeks"
    },
    content: [
      {
        images: ["/projects/sketches.jpeg"],
        centerImage: true
      },
      {
        title: "The Design Journey: From Empathy to Architecture",
        body: "Inclusive design isn't just a technical challenge; it's a human one. My process was rooted in a deep, iterative cycle of research and prototyping.",
        list: [
          "Ideation & Sketching: I began with rapid sketches, exploring how we could \"un-map\" standard controller inputs and redistribute them across other human sensory channels.",
          "User Interviews: I conducted in-depth interviews with individuals in the disability community. These conversations moved beyond technical needs and into the emotional landscape of immersion - understanding the frustration of being \"locked out\" of a digital world due to rigid hardware requirements.",
          "User Profiling: I synthesized these insights into a specific user profile that spanned the spectrum of accessibility needs. This helped me move away from \"edge-case\" thinking and toward a \"universal design\" mindset.",
          "Low-Fidelity Prototyping: I built initial cardboard prototypes with laser pointers strapped to my head to act as the gaze pointer. Could a user effectively navigate a 3D space without the tactile feedback of a trigger or grip?",
          "The Multi-Modal Solution: The final prototype utilized a Voice and Gaze-based interaction model. By combining eye-tracking for selection and natural language processing for execution, I created a seamless \"Free Hand\" experience that offered 100% functionality without a single hand gesture."
        ],
        images: ["/projects/Freehand Hero shot.png", "/projects/freehand 1.gif", "/projects/freehand 2.gif", "/projects/freehand 3.gif"],
        compactGrid: true
      },
      {
        title: "Learnings: From Accessibility to \"Superpowers\"",
        body: "In the process of solving the physical mobility problem, I stumbled upon a realization that changed my perspective on the future of XR.\n\nWhile I was focused on creating an alternative for those who couldn't use their hands, I discovered that this interaction schema actually functions as a digital superpower for everyone. When we stop viewing gaze and voice as \"replacements\" and start viewing them as \"extensions,\" the possibilities explode.\n\nImagine a VR environment where you use your physical hands for tactile work, while your gaze and voice act as a second or third set of \"ghost hands\" to manage menus or move distant objects simultaneously. By designing for the \"limited\" case, we inadvertently unlock new tiers of human performance for the general user. It raises a compelling question for the future of spatial computing: Why settle for two hands when the digital world allows us to have many?",
        images: ["/projects/freehand super.png"]
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
    challenge: "Traditional therapy can be daunting, but VR group therapy presents a unique set of obstacles: how do you design a digital space and a representation of the self that fosters enough trust for deep, personal disclosure?",
    impact: "Successfully shipped the experience on a VR therapy platform (XR Health) where users felt secure enough to engage in group sessions. By blending environmental psychology with intentional avatar design, we created a virtual sanctuary that made mental health support more accessible remotely.",
    caseStudyMeta: {
      role: "3D Artist",
      company: "Foretell Reality / Glimpse Group",
      companyUrl: "",
      timeline: "6 months"
    },
    content: [
      {
        title: "The Architecture of Trust: Designing a Digital Sanctuary",
        body: "In a therapy setting, the environment is also a part of the healing. I approached the design of the virtual rooms through the lens of environmental psychology, focusing on elements that promote an atmosphere of calm.",
        list: [
          "Palette & Materials: I moved away from sterile, \"tech-heavy\" aesthetics in favor of warm colors and earthy materials like wood.",
          "Atmospheric Lighting: I engineered the lighting to feel soft and inviting, avoiding harsh shadows to ensure the space felt open yet intimate.",
          "Spatial Layout: The layout was constructed to promote a sense of groundedness, providing enough space for group connection without making the user feel exposed or overwhelmed."
        ],
        images: ["/projects/Screenshot.png"]
      },
      {
        title: "Avatars as a Shield: Balancing Anonymity and Expression",
        body: "One of the most critical aspects of group therapy is the user's sense of safety in disclosing to others. I led a research phase into avatar representations, studying the spectrum from hyper-realistic to highly stylized forms and what emotions they evoked.",
        list: [
          "The Findings: My research showed that while realism can be impressive, stylized avatars often provide a higher degree of psychological \"ease\" and anonymity.",
          "Anonymity: I developed a customization system that allowed users to tailor their appearance. This granted them a level of digital \"masking\" that acted as a shield, making them feel safer and more comfortable during vulnerable group interactions."
        ],
        videoUrl: "https://www.youtube.com/watch?v=vVOJIVCT6MQ"
      },
      {
        title: "Bridging the Experience: Technical Implementation & Collaboration",
        body: "My work extended beyond the aesthetic into the functional to ensure the user's journey was seamless from the moment they put on the headset.",
        list: [
          "UI/UX System Design: I built the UI systems for both the Avatar Selection and the Room Selection modules. The goal was to make the process of entering a therapy session feel as frictionless and calming as the session itself.",
          "Cross-Functional Delivery: I collaborated closely with a team of product designers and engineers to ensure the 3D assets, shaders, and UI elements were optimized for performance without sacrificing the \"warmth\" of the visual style."
        ],
        images: ["/projects/LobbyRoom.jpg"]
      },
      {
        title: "Learnings: The Value of \"Digital Distance\"",
        list: [
          "Embodiment is self-expression: This project reinforced my belief that in XR, less can often be more. By intentionally designing for anonymity through stylized avatars, we unlocked a new way for people to connect.",
          "A humanistic approach to Telehealth: I learned that the \"distance\" provided by a digital representation doesn't hinder empathy - it often enables it by removing the fear of judgment. In the future of VR therapy, the most powerful tool we can offer a user is a space where they feel truly seen, even when they choose to remain hidden."
        ]
      }
    ]
  },
  {
    slug: "ar-athlete",
    categorySlug: "xr-design",
    title: "Victorious Athlete in AR",
    category: "Museum AR",
    hidden: true,
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
    slug: "breathsync",
    categorySlug: "neuro-tech",
    title: "BreathSync",
    category: "Wellness VR",
    description: "A research-backed VR biofeedback experience teaching deep belly breathing to promote mindfulness and reduce stress.",
    techStack: ["Unity", "Biofeedback", "Shader Graph", "VR"],
    image: "/projects/breathync.jpg",
    challenge: "How can we guide a user through anxiety-reducing breathwork using only standard consumer VR hardware? In a high-pressure, three-day hackathon environment, my team was tasked with creating an accessible, research-backed tool for anxiety reduction that didn't rely on specialized medical sensors.",
    impact: "Awarded Best Research Application at the 2021 XR Brain Jam and showcased at Games for Change Festival, our project was recognized for its innovative use of biofeedback to promote physiological regulation and successfully bridging clinical research with creative engineering.",
    caseStudyMeta: {
      role: "Producer & Technical Artist",
      company: "XR Brain Jam 2021 (Games for Change Festival)",
      companyUrl: "",
      timeline: "Hackathon (3 Days)"
    },
    content: [
      {
        videoUrl: "https://www.youtube.com/watch?v=l-tr_QAobac"
      },
      {
        title: "Visualizing the Internal State",
        body: "In 2021, I collaborated with a research specialist in therapeutic gaming to tackle the problem of anxiety through box breathing—a hypoxic technique designed to oxygenate the blood and calm the nervous system. The goal was to move beyond a simple \"instructional\" video and create an environment that dynamically responded to the user's own physiological rhythm, making the invisible process of breathing a tangible, interactive experience.",
        images: ["/projects/BreathSync Problem Space.jpg"]
      },
      {
        title: "The Creative Hack: Turning Controllers into Sensors",
        body: "The core design challenge was capturing accurate respiratory data without a dedicated sensor. We developed a creative hardware \"hack\" that became the technical foundation of the project:",
        list: [
          "Physical Integration: We strapped a standard VR controller to the user's stomach, utilizing its high-fidelity IMU sensors to track the physical expansion and contraction of the abdomen.",
          "Translational Mapping: I implemented the math required to translate the controller's raw translational movement into a real-time data stream. This stream directly scaled a central virtual orb: as the user inhaled, the orb grew; as they exhaled, it shrank.",
          "The Gameplay Loop: The experience became a meditative \"syncing\" game. Users were tasked with matching the size and rhythm of their personal orb with a guiding, rhythmic orb that moved at the ideal pace for anxiety reduction."
        ],
        images: ["/projects/BreathSync VR Solution.jpg"]
      },
      {
        title: "Role & Multi-Disciplinary Execution",
        body: "Serving as Producer, Developer, and Technical Artist, I was responsible for ensuring the technical implementation never lost sight of the researcher's clinical intent.",
        list: [
          "Technical Artistry: I authored custom shaders that responded to the \"breath-state\" transitions. As the user achieved a perfect sync, the environment would dynamically reveal new visual layers, providing a rewarding, multi-sensory confirmation of their calm state.",
          "Multidisciplinary Management: Under the intense 72-hour deadline of the XR Brain Jam, I managed the workflow between our researcher, designer, and engineer, ensuring we delivered a functional, stable prototype that stood up to the rigors of an academic and industry review."
        ]
      },
      {
        title: "Impact & Recognition",
        body: "The success of this project led to a public talk at the Games for Change Festival 2021, where I presented our findings on biofeedback-driven design. This work reinforced my belief that the most profound technological solutions often come from looking at existing hardware through a creative, human-centric lens."
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
        videoUrl: "https://www.youtube.com/watch?v=mKKaZsjjy6g"
      },
      {
        title: "Crafting an Underwater Narrative",
        body: "As the Lead 3D Artist and Story Writer, I was responsible for bridging the gap between scientific reality and digital storytelling. My work began with the fundamental concept development, where I designed the levels and narrative beats to ensure the message of conservation remained the heartbeat of the gameplay.",
        list: [
          "Building the Atmosphere: I worked extensively on the vision and look development to create an underwater world that felt both beautiful and fragile.",
          "Character-Driven Education: I developed the main storyline characters and environments to guide players through the \"Ocean Odyssey,\" ensuring the visual style supported the game's educational goals."
        ],
        images: ["/projects/Shot3.jpg"]
      },
      {
        title: "The Asset Creation Pipeline: From Maya to Unity",
        body: "To bring this indie project to life on a startup budget, I utilized a streamlined, high-efficiency technical pipeline.",
        list: [
          "3D Asset Workflow: I managed the full 3D pipeline—including modeling, UV mapping, texturing, rigging, and animation - using Maya and Substance Painter.",
          "Character and Level Design: I designed the main character named Scuba, who is a submersible bot (inspired by Wall-E from Disney). I translated these designs into game-ready assets for Unity, where I led the level design to create intuitive, exploratory environments that maximized the sense of presence in a 360-degree VR space."
        ],
        images: ["/projects/web_04.jpg", "/projects/web_11.jpg", "/projects/HUb-01.jpg", "/projects/scuba.jpeg"],
        compactGrid: true
      },
      {
        title: "Beyond the Screen: Marketing & Advocacy",
        body: "Because this was an indie venture, my role extended far beyond the technical. I acted as a primary advocate for the project, ensuring it found the audience and funding it needed to thrive.",
        list: [
          "Visual Storytelling: I produced marketing materials, including game trailers and promotional videos, to communicate the game's vision to potential backers.",
          "Pitched for Growth: I represented the project at various conferences and festivals, pitching the game to build an audience and successfully raise the crowdfunding necessary for continued development."
        ]
      }
    ]
  }
];
