export type Focus = "xr-interaction" | "spatial-ai" | "neuro-wellness" | "learning";

export const focusAreas: { id: Focus; label: string; blurb: string }[] = [
  {
    id: "xr-interaction",
    label: "XR Interaction",
    blurb: "Hand, tool and multimodal interaction systems — designed as reusable patterns, shipped in production SDKs.",
  },
  {
    id: "spatial-ai",
    label: "Spatial & Applied AI",
    blurb: "Context-aware AI for smartglasses and spatial computing, plus agentic pipelines that generate XR content.",
  },
  {
    id: "neuro-wellness",
    label: "Neuro & Wellness",
    blurb: "BCI, biofeedback and avatar embodiment — XR that responds to the body and mind.",
  },
  {
    id: "learning",
    label: "Learning & Training",
    blurb: "Immersive training and education used by 100k+ learners, grounded in user testing and efficacy research.",
  },
];

/** A path under /public. `.mp4` files render as silent looping video with a `-poster.jpg` sibling. */
export type MediaItem = string | { src: string; caption?: string };

export interface Metric {
  value: string;
  label: string;
  /** How the number was measured — shown under the metric for credibility. */
  method?: string;
}

export interface Project {
  slug: string;
  focus: Focus[];
  title: string;
  category: string;
  description: string;
  /** One-line, hiring-manager-facing outcome shown on cards. */
  highlight?: string;
  year?: string;
  platform?: string;
  team?: string;
  featured?: boolean;
  /** Draft projects render in `npm run dev` only, never in the production build. */
  draft?: boolean;
  techStack: string[];
  /** Card thumbnail; also the case-study hero when there is no `heroMedia` or `videoUrl`. */
  image?: string;
  heroMedia?: string;
  /** "contain" for diagrams that must not be cropped in the 16:9 hero frame. */
  heroFit?: "cover" | "contain";
  videoUrl?: string;
  challenge?: string;
  impact?: string;
  /** First-person "What I did" bullets for the case-study summary. */
  contributions?: string[];
  metrics?: Metric[];
  links?: { label: string; href: string }[];
  /** Content gaps still to fill — shown as placeholders in dev only. See CONTENT_CHECKLIST.md. */
  todo?: string[];
  hidden?: boolean;
  caseStudyMeta?: { role: string; company: string; companyUrl: string; timeline: string };
  steamEmbed?: string;
  content?: { title?: string; body?: string; list?: string[]; images?: MediaItem[]; centerImage?: boolean; compactGrid?: boolean; videoUrl?: string; videoUrls?: string[]; }[];
}

export const projects: Project[] = [
  {
    slug: "inner-light",
    focus: ["neuro-wellness", "xr-interaction"],
    contributions: ["Built the real-time EEG pipeline: Emotiv headset → Alpha, Beta, Gamma and Delta band data → Unity", "Wrote a procedural wave shader whose amplitude and light emission are driven by live EEG data", "Built a full-body IK avatar from head and controller tracking to deepen embodiment", "Scripted the out-of-body sequence that gradually separates the viewpoint from the avatar", "Ran user tests and documented how responses to digital dissociation diverged"],
    links: [{"label": "Read the thesis (ProQuest)", "href": "https://www.proquest.com/openview/d850eeb668d48ecf11a179d30c028609/1?pq-origsite=gscholar&cbl=18750&diss=y"}],
    year: "2022",
    platform: "Oculus Rift + Emotiv EEG headset",
    team: "Solo",
    highlight: "Exhibited at MOCDA 2022 · NYU master's thesis",
    featured: true,
    title: "Inner Light (BCI + VR Neurotech)",
    category: "Neuro-tech",
    description: "EEG biofeedback in VR: a meditating user's brainwave data drives the light of their own full-body avatar, in real time.",
    techStack: ["BCI", "Unity", "C#", "Signal Processing"],
    image: "/projects/inner-light-cover.mp4",
    challenge: "Make invisible neural activity something a user can see and feel: stream EEG data into Unity in real time and use it to drive a virtual body the user inhabits.",
    impact: "In user tests, seeing their brain activity on their own avatar gave people a strong sense of embodiment, and the out-of-body sequence split responses between freedom and unease. The work was shown at MOCDA (Museum of Contemporary Digital Art) in the 2022 Digital Summer Show and published as my NYU master's thesis.",
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
        images: ["/projects/eeg-vr-feedback-loop.jpg"]
      },
      {
        title: "The Technical Dialogue: Brainwaves as Brushes",
        body: "The design challenge was a real-time feedback loop between a user's internal state and their digital body: the user's brain activity changes the avatar, and seeing the avatar change shapes the user's state.",
        images: ["/projects/eeg-headset.png", "/projects/eeg-data.mp4"]
      },
      {
        list: [
          "Neurotech Integration: an Emotiv EEG headset with five sensors captured brain activity, and Emotiv's software separated it into Alpha, Beta, Gamma and Delta frequency bands. I streamed that band data into Unity as a live signal of the user's focus and relaxation.",
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
          "Embodiment: The experience began with a guided white light meditation. Seeing their own \"brainwaves\" reflected in the avatar they occupied, users described feeling that the virtual body was their own.",
          "Digital Dissociation: Once a stable meditative state was reached, the system initiated a programmed sequence I designed to simulate an out-of-body experience. I scripted the camera and avatar transform logic to gradually separate the user's viewpoint from the virtual form they had just inhabited.",
          "The Conceptual Framework: This idea of simulating an out-of-body experience to explore consciousness was informed by research from Mel Slater at the University of Barcelona, which demonstrated that such virtual experiences can effectively reduce the fear of death."
        ],
        images: ["/projects/user-test-1.webp", "/projects/user-test-2.webp"]
      },
      {
        title: "Learnings: The Tension of the Void",
        body: "During the development and testing of this experiment, I discovered that the human response to digital \"detachment\" is far from uniform.\nI initially anticipated that the transition to an out-of-body state following a white light meditation would be an almost universally liberating feeling. While many participants did describe a sense of profound freedom and lightness, a subset of users felt a distinct sense of unease during the separation as well. This divergence brought the experiment back to its core philosophical root: the fear of dying, and how we each respond to it."
      },
      {
        title: "Impact & Recognition",
        body: "Inner Light brought together neuroscience, contemplative practice and XR engineering. It was an exploratory study: the responses above come from user tests and participants' own descriptions, not clinical measurement.",
        list: [
          "Featured Artist: Presented at MOCDA (Museum of Contemporary Digital Art) during the 2022 Digital Summer Show.",
          "Published as Academic Thesis in Integrated Digital Media from NYU Tandon School of Engineering in 2022. Read it here: https://www.proquest.com/openview/d850eeb668d48ecf11a179d30c028609/1?pq-origsite=gscholar&cbl=18750&diss=y"
        ]
      }
    ]
  },
  {
    slug: "transfr-vr-education",
    focus: ["learning", "xr-interaction"],
    contributions: ["Designed and built 25+ career-training VR simulations in Unity on the Transfr SDK", "Translated real-world physical tasks — CNC machines, lab tools — into standardized XR interaction patterns", "Partnered with SDK engineers on Node Flow Studio, Asset Manager, interaction templates and voice-over generation", "Coordinated instructional designers, technical artists and sound designers for each simulation", "Ran continuous user testing and feedback loops with learners"],
    metrics: [{"value": "100k+", "label": "users across the U.S."}, {"value": "25+", "label": "VR simulations designed and built"}],
    links: [{"label": "Read the efficacy study", "href": "https://transfrinc.com/resources/efficacy-studies/coastal-bend-efficacy"}],
    year: "2022–present",
    platform: "Meta Quest 2, 3 & 3S",
    team: "Cross-functional — instructional designers, 3D artists, technical artists, SDK developers, SMEs and a project manager",
    highlight: "100k+ users reached · 25+ simulations shipped",
    featured: true,
    title: "VR Education at Scale",
    category: "VR Education",
    description: "Building VR simulations for career education and training reaching 100,000+ users.",
    techStack: ["Unity", "C#", "Meta Quest", "EdTech"],
    image: "/projects/flagger-hand-signals.mp4",
    challenge: "Building highly effective, standardized career exploration and training simulations that could serve diverse populations—from high school students to incarcerated individuals undergoing workforce rehabilitation.",
    impact: "I designed and built 25+ of the career simulations in Transfr's Trek VR library and helped shape the SDK that produces them. The library reaches 100,000+ users across the U.S., and Transfr's Coastal Bend efficacy study found learning gains from its simulations.",
    caseStudyMeta: {
      role: "Senior Technical XR Designer",
      company: "Transfr",
      companyUrl: "https://transfrinc.com/",
      timeline: "~4 years"
    },
    content: [
      {
        title: "The Mission: Building Pathways to Upward Mobility",
        body: "At Transfr, the goal was to build a direct bridge from the classroom to a career. As a Senior Technical XR Designer, I've led the design and development of 25+ VR simulations across technical trades, from automotive technicians to pipefitting specialists. They're used in high school classrooms and workplace facilities across the U.S., by 100,000+ users."
      },
      {
        body: "My role on each simulation:",
        list: [
          "Build the scene in Unity and the simulation logic on the Transfr SDK, working with instructional designers, technical artists and sound designers.",
          "Work with SDK developers to improve the tools we build with: interaction templates, nodes and components, voice-over generation and NPC animations.",
          "Solve the interaction problem unique to each career, so a physical task feels natural in VR."
        ]
      },
      {
        title: "Deep Dive: The Flagger Sim",
        body: "Flagger trains learners to direct traffic through a road work zone: holding a STOP/SLOW paddle in one hand, giving slow, stop and go hand signals with the other, and coordinating with a second flagger over the radio. In September 2025, E2Engine built Flagger's initial structure and saved ~4 days of setup. I put that time into the sim's three hardest design problems."
      },
      {
        title: "Design Challenge 1: Hand Signals From Controller Movement",
        body: "Hand signals are the main interaction throughout the sim — they're how the learner controls traffic. The challenge was reading a hand gesture with nothing but a hand controller: no hand tracking and no buttons to press for each signal.",
        list: [
          "Orientation and movement: the sim reads the controller's orientation and how it moves to work out which gesture the hand is making — stop, slow or go.",
          "Hand poses follow detection: as a signal is detected, the virtual hand changes to that signal's pose, so the learner sees what the sim has read and can correct it.",
          "Color for clarity: a highlight shader outlines the hand in the color of the detected signal — red for stop, yellow for slow, green for go — so the signal reads at a glance.",
          "Learn, then perform: the lead flagger demonstrates each signal and the learner copies it, then uses the signals to control live traffic for the rest of the sim."
        ],
        images: [
          { src: "/projects/flagger-hand-signals.mp4", caption: "Hand-signal detection: controller orientation and movement drive the gesture, and the hand pose changes as each signal is detected." }
        ],
        centerImage: true
      },
      {
        title: "Design Challenge 2: Choosing Where to Stand",
        body: "In one part of the sim, the flagger has to decide where to stand, and the choice itself is what's being taught. A normal teleport would let the learner wander anywhere, so we designed a multi-select teleport: the learner picks between two spots on a minimap of the street.",
        list: [
          "Default: a small flagger figure stands beside a minimap with two pins, and the prompt reads \"Pick up and place to teleport\".",
          "Grabbed: the learner picks up the figure and places it on one of the two spots.",
          "Placed: a radial countdown runs before the teleport, and the learner can grab the figure again to change their mind.",
          "Character: the sketch gave the figure personality — it reaches up on hover, goes limp like a ragdoll when grabbed, and waves goodbye as the countdown finishes."
        ],
        images: [
          { src: "/projects/flagger-teleport-sketch.webp", caption: "Design sketch of the multi-select teleport's default, grabbed and placed states, by Joey Fonacier." },
          { src: "/projects/flagger-teleport-final.webp", caption: "The final implementation in the sim: a minimap with two spots and the prompt \"Pick up and place to teleport\"." }
        ]
      },
      {
        title: "Design Challenge 3: Showing the Consequences",
        body: "The mistakes that matter most for a flagger are the ones that cause traffic accidents — exactly what can't be practiced safely on a real road. VR can show them safely, so we decided to simulate the real consequences instead of just marking an answer wrong.",
        list: [
          "Every action has an outcome: a wrong hand signal, or forgetting to radio the other flagger, plays out as a traffic consequence inside the sim.",
          "Learn from the result: the learner sees what their mistake would cause on the road, then gets the chance to do it right.",
          "Assessed too: wrong signals are also recorded for assessment, so instructors can see which ones a learner confused."
        ],
        images: [
          { src: "/projects/flagger-consequences.mp4", caption: "Consequences of a wrong action, simulated safely in VR: traffic reacts to what the flagger did, or didn't, do." }
        ],
        centerImage: true
      },
      {
        title: "Bridging Design, Product, and Engineering",
        body: "We were building the car and the factory at the same time. Alongside the simulations, I worked with multi-disciplinary teams on Transfr's Unity SDK and its XR interaction system, as the company moved from single prototypes to a library of simulations.",
        list: [
          "Interaction patterns: I helped turn real-world physical tasks — operating a CNC machine, handling laboratory tools — into standard XR interaction patterns. The tool templates became the VR Design System for Hands-On Tools.",
          "SDK tools: I helped shape Node Flow Studio and Asset Manager, which keep visual and instructional standards consistent across modules.",
          "Production workflows: I designed AI-driven workflows to speed up simulation development, which grew into E2Engine and Scriptr.",
          "Selected simulations (videos below, in order): knee surgery assist, automotive oil change, hospital power outage, residential solar panel install, commercial pipe preparation and diesel mechanics."
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
        title: "Real-World Impact",
        body: "These are company-level results for the library my simulations are part of:",
        list: [
          "Learning gains: Transfr's efficacy studies found its simulations often produced higher learning gains than real-world practice alone. Read the Coastal Bend study: https://transfrinc.com/resources/efficacy-studies/coastal-bend-efficacy",
          "Reach: 100,000+ users across the U.S., in high schools and workforce programs.",
          "Learner feedback: user testing with learners fed back into both the simulations and the SDK tools."
        ],
        videoUrl: "https://www.youtube.com/watch?v=uvEmhJ1RrmA"
      }
    ]
  },
  {
    slug: "modular-xr-system",
    focus: ["xr-interaction", "learning"],
    contributions: ["Proposed a modular XR design system built on top of the Transfr SDK", "Standardized hand interactions, UI scaling and spatial ergonomics across simulations", "Built reusable tool templates — drills, wrenches, spray cans, scissors, wire cutters — in Node Flow with baked-in logic, spatial audio, haptics and affordances", "Worked with SDK engineers so the tooling natively supported the design system"],
    metrics: [{"value": "40%", "label": "improvement in production efficiency", "method": "Measured from time tracked on projects per sprint"}],
    year: "2025–present",
    team: "SDK developers, instructional designers, SMEs and a project manager",
    platform: "Unity · Transfr SDK",
    highlight: "40% production efficiency gain across VR modules",
    featured: true,
    title: "VR Design System for Hands-On Tools",
    category: "XR Design",
    description: "Modular templates and XR design system for improved production efficiency and design quality.",
    techStack: ["Design Systems", "Unity", "Node Flow", "XR Interaction"],
    image: "/projects/tool-asset-templates.mp4",
    challenge: "Fragmented UI/UX patterns across dozens of VR simulations led to inconsistent user experiences and bloated production timelines as designers rebuilt basic interaction models from scratch.",
    impact: "Production efficiency improved by 40%, measured from time tracked on projects per sprint. Every new module now starts from the same tool templates, so hand interactions, audio and haptics behave the same way across its simulations.",
    caseStudyMeta: {
      role: "Senior Technical XR Designer",
      company: "Transfr",
      companyUrl: "https://transfrinc.com/",
      timeline: "8 months"
    },
    videoUrl: "https://www.youtube.com/watch?v=IeXSXgrtz3c",
    content: [
      {
        title: "The Fragmentation Problem",
        body: "As Transfr's library grew, the same tools — a drill, a wrench, a spray can — were rebuilt for each new training module. Technical artists and designers rebuilt the asset and its interaction from scratch every time, so the same tool could look, sound and behave differently from one module to the next. I proposed an XR design system: a modular layer for interaction design built on top of the Transfr SDK.",
        images: ["/projects/xr-architecture.webp"]
      },
      {
        title: "Aligning SDK Tools with Interaction Design",
        body: "The proposal led to my direct involvement in the SDK's tools development. The design system only works if the tooling supports it, so I worked with SDK engineers to build its rules into the SDK: standard hand interactions, UI scaling and spatial ergonomics. Building an interaction became a matter of assembling standard parts instead of coding a one-off.",
        images: ["/projects/nodeflow-drill.png"]
      },
      {
        title: "Anatomy of a Tool Template",
        body: "The templates are built in Node Flow, Transfr's visual, node-based authoring tool for VR simulations. I helped build reusable templates for drills, wrenches, spray cans, scissors, wire cutters and more. Each one is a grabbable object that arrives with four layers already configured:",
        list: [
          "Interaction logic: the tool's behavior is wired in Node Flow, so a designer connects it to a step instead of scripting it.",
          "Spatial audio: sound effects play from the tool's position in the scene.",
          "Haptics: a feedback profile for the controller in the learner's hand.",
          "Affordances: the visual cues that tell a learner what the tool does and how to hold it."
        ],
        images: ["/projects/nodeflow-logic.webp"]
      },
      {
        title: "Before and After",
        list: [
          "Before: each simulation rebuilt its tools and their interactions from scratch, and the same tool could behave differently between simulations.",
          "After: one template, with logic, audio, haptics and affordances included, is reused across a whole training module, which is often 10–12 simulations.",
          "Result: production efficiency improved by 40%, measured from time tracked on projects per sprint."
        ]
      }
    ]
  },
  {
    slug: "e2engine",
    focus: ["spatial-ai"],
    contributions: [
      "Framed the goal: get from storyboard to a playable scene fast enough that design decisions happen in the headset, not on paper",
      "Designed the first-generation agentic n8n pipeline — storyboard intake, object and dimension extraction, LLM conversion and a Sim DSL file delivered back to the designer",
      "Wrote the 11-page context prompt that defined the Sim DSL rules, and designed hallucination out with exact-name templates and storyboard guidelines",
      "Ran the test program, logging every run and categorizing failures as parse errors vs. generative deltas",
      "Led the migration to Claude skills: rebuilt storyboard-to-E2E as a skill that builds the sim directly in Unity through the Transfr SDK's MCP tool actions, then play-tests it",
      "Extended the skill to scored choices and assessment templates",
      "Partnered with the lead developer, who built the first-generation Unity parser as a Transfr SDK package",
    ],
    metrics: [
      {"value": "2 days", "label": "from storyboard to designers in headset", "method": "First Fiber Optics Training sim"},
      {"value": "~7 days", "label": "of repetitive setup work saved per sim", "method": "First Fiber Optics Training sim"},
      {"value": "~$0.08", "label": "LLM cost per storyboard conversion", "method": "~14k input / ~9k output tokens per run (v2)"},
      {"value": "$32.7k", "label": "estimated savings per simulation", "method": "Estimate, calculated from time saved per sprint on each task"},
      {"value": "$214k", "label": "projected savings across 15 simulations", "method": "Projection, not a measured result: the 15 external simulations planned for 2025"},
    ],
    year: "2025–present",
    team: "Senior Unity developers, content owners, creative director, Senior XR Designer",
    platform: "Unity · Transfr SDK · Claude",
    highlight: "Storyboard to in-headset in 2 days · $214k projected savings",
    featured: true,
    title: "E2Engine: Storyboard to Playable VR",
    category: "AI Automation",
    description: "An AI system that turns a VR sim storyboard into a playable, self-tested Unity scene — evolved from an n8n + DSL pipeline into Claude skills that build directly in Unity through the Transfr SDK's MCP tools.",
    techStack: ["Claude Skills", "MCP", "Unity CLI", "n8n", "Unity", "C#"],
    image: "/projects/e2engine-banner.webp",
    heroMedia: "/projects/e2engine-unity-run.jpg",
    challenge: "Every Transfr sim started as a storyboard and spent weeks in production before anyone could put on a headset and judge the design — Lockout Tagout took ~6 weeks. Problems only became obvious in VR, so design changes landed late, as costly vendor change requests.",
    impact: "On the first Fiber Optics Training sim, the design team was in headset 2 days after the storyboard, saving ~7 days of repetitive setup for about $0.08 in LLM cost. As part of Scriptr, Transfr's AI production system, it was projected (not yet measured) to save $214,290 and 2,400 hours across 15 simulations. Today it runs as Claude skills that build and play-test sims directly in Unity.",
    caseStudyMeta: {
      role: "System Designer / AI Strategist",
      company: "Transfr",
      companyUrl: "https://transfrinc.com/",
      timeline: "16+ months"
    },
    content: [
      {
        title: "At a Glance",
        list: [
          "Input: a sim storyboard. Output: a playable, structurally complete Unity scene the design team can review in headset.",
          "Chapter 1 (2025 to early 2026): an n8n workflow and Gemini write a plain-text Sim DSL, and a deterministic Unity parser builds the scene from it.",
          "Chapter 2 (October 2026): Claude skills build the sim directly in Unity through the Transfr SDK's MCP tools, then play-test it themselves.",
          "Measured so far: designers in headset 2 days after the storyboard, ~7 days of setup saved, ~$0.08 per run."
        ]
      },
      {
        title: "The Bottleneck: Waiting to Feel the Sim",
        body: "In XR, a storyboard can't tell you whether an interaction works — you only find out in the headset. At Transfr, getting there meant weeks of repetitive setup: building the step hierarchy, wiring Node Flow graphs, placing templates and hooking up coach voice-over. By the time designers could play a sim, changes were expensive.\nI set the goal as a question of speed to judgment: how fast can we go from a storyboard to something the team can stand inside and critique?"
      },
      {
        title: "How It Evolved",
        body: "E2Engine grew on real production sims, with each one exposing the next gap.",
        list: [
          "June 2025 · v1: the first E2Engine workflow ships as a Transfr SDK package.",
          "July 2025 · Lockout Tagout sim: I build the n8n workflow that converts this legacy storyboard — a sim that had taken ~6 weeks in production — into the Sim DSL, proving the format end to end.",
          "September 2025 · Flagger sim: the initial set-up shows which parser features are missing and measures the delta between the agent's output and a fully playable sim. The ~4 days saved go into prototyping the hand-signal interactions.",
          "January 2026 · v2: improved Unity tooling and system prompt, based on what we learned.",
          "April 2026 · Fiber Optics Training sim: the first sim built with v2 — ~7 days saved, designers in headset 2 days after the storyboard.",
          "October 2026 · v3: the pipeline moves to Claude skills, unity-cli and the Transfr SDK's MCP tools. The agent now builds and play-tests the sim inside Unity."
        ]
      },
      {
        title: "Chapter 1 — Decision 1: Separate the Generative Step From the Deterministic One",
        body: "Rather than asking an AI to build a Unity scene directly, the first generation split the pipeline in two. An n8n agentic workflow converted the storyboard into a plain-text Sim DSL; a Unity tool then parsed that file and built the scene with the SDK. With the tools available in 2025, this was the right call:",
        list: [
          "Inspectable: the DSL is human-readable, so a designer can review or hand-edit the LLM's output before anything touches Unity.",
          "Debuggable: when a run fails, we can tell whether the model generated the wrong thing or the parser couldn't read it.",
          "Reliable: everything that touches the scene is deterministic code, so the same file always produces the same result."
        ],
        images: [
          { src: "/projects/e2engine-how-it-works.webp", caption: "The first-generation architecture: storyboard → n8n → Sim DSL text file → Unity → playable E2E." },
          { src: "/projects/e2engine-n8n-workflow.webp", caption: "The n8n workflow: per-sim-type context prompts, object-dimension extraction, then the main conversion call to Gemini 2.5 Pro." }
        ]
      },
      {
        title: "Decision 2: A Language Designed for an LLM to Write",
        body: "The Sim DSL was pseudo-code shaped around how our sims are actually built — and around what a language model can produce consistently.",
        list: [
          "Indentation expresses hierarchy: child nodes sit under their parents.",
          "A \"+\" chains a node after the previous one, so sequence is explicit.",
          "Curly brackets carry hierarchy paths to GameObjects and the input variables for each node.",
          "Template types and coach audio IDs are declared inline, so interactions and voice-over are created together."
        ],
        images: [
          { src: "/projects/e2engine-storyboard-to-dsl.webp", caption: "A Fiber Optics storyboard (left) and the Sim DSL the pipeline generated from it (right)." }
        ],
        centerImage: true
      },
      {
        title: "The 11-Page Context Prompt",
        body: "The DSL only worked if the model followed its rules exactly. I wrote an 11-page context prompt that taught it how to initialize each playspace (player position, coach location, preferences UI), build node chains, reference GameObjects by path, switch between coach and NPC voice-over, apply templates from our library, and lay out graphs for branching and any-order interactions. Different sim types got different context prompts."
      },
      {
        title: "Decision 3: Design Hallucination Out",
        body: "An LLM inventing a template name that doesn't exist will break a build. Instead of hoping the model got it right, we constrained what it could say:",
        list: [
          "Templates referenced in exactly three ways — an Asset Manager asset, a packaged SDK template, or a local prefab — always by exact name.",
          "Conditional paths written as IF statements, giving branching a predictable structure.",
          "The same guidelines baked into ScreenplAi, our storyboard-writing assistant, so storyboards arrived in a format the pipeline expected.",
          "On the Unity side, unrecognized nodes became empty Flow Nodes instead of crashing the run."
        ]
      },
      {
        title: "Testing Like a Product",
        body: "I tracked every run ID and sorted each failure into one of two buckets: parse errors (the Unity tool couldn't read valid intent) and generative deltas (the model produced something different from the storyboard). That split told us whether a fix belonged in the parser, the prompt or the storyboard guidelines — and turned anecdotal bugs into a prioritized backlog.\nThe Fiber Optics Training review showed where the v2 pipeline still fell short, and set the next backlog:",
        list: [
          "Play spaces needed a better-organized structure when generated.",
          "Conditional interactions for decision-making had no defined structure yet.",
          "Assessment nodes weren't supported.",
          "Custom tools weren't well integrated."
        ],
        videoUrl: "https://www.youtube.com/watch?v=o8P4NtaDxYY"
      },
      {
        title: "Chapter 2 — Decision 4: Let the Agent Build, and Test, Inside Unity",
        body: "Chapter 1 proved the value, and its own maintenance list showed the cost: the context prompt, the DSL and the parser all had to stay in lockstep with a changing SDK, and failures only surfaced after the file was handed off. Once agents could operate the editor directly, the intermediate language became a layer to maintain rather than a safeguard. I led the migration to Claude skills.",
        list: [
          "Builds in Unity: a storyboard-to-E2E skill reads the storyboard and builds the sim through the Transfr SDK's tool actions over unity-cli and MCP — step spine, coach and NPC voice-over, object visibility, the named interaction templates and Asset Manager props, persistent tools and branches. No DSL, no parser.",
          "Grounded in shared documentation: instead of one system prompt, the agent works from the team's Sim Dev authoring docs, and checks the live tool catalogs for node, template and socket names on every run.",
          "Tests its own work: it lints the graph, generates a drive script and plays the sim through its happy path with the InteractionSimulator — fixing and rerunning until the playthrough completes.",
          "Small by design: the skill deliberately builds a structural v1 and records everything else (mechanics, animation, SFX) as deferred for the team. A small, correct draft is faster to build on than a large one that's wrong in a hundred places.",
          "Asks only what it can't decide: a speaker with no voice configuration, an ambiguous step spine, or an asset the storyboard doesn't name."
        ],
        images: [
          { src: "/projects/e2engine-testing-log.webp", caption: "The testing log from the DSL-era runs: every run ID tagged by storyboard and complexity, its parse or generative delta, the fix, priority and status." }
        ],
        centerImage: true
      },
      {
        title: "Results So Far",
        body: "Measured on production sims, separate from the projections above:",
        list: [
          "Flagger sim (v1): ~4 days saved, ~$0.08 per run (14,186 input / 8,656 output tokens). The time went into prototyping the hand-signal interaction.",
          "Fiber Optics Training sim (v2): ~7 days saved, ~$0.08 per run, and the design team was in headset 2 days after the storyboard. Instructional designers could make changes early, avoiding later change requests with vendors.",
          "v3 (Claude skills, October 2026): newly in use. Its numbers will be added here once measured on production sims."
        ]
      },
      {
        title: "A Broader Foundation",
        body: "Because the agent works with the same tools and documentation a developer would, the foundation reaches past first drafts. I extended the E2E skill to scored choices and assessment templates — closing two of the gaps the Fiber Optics review had flagged — and the same tool layer now supports QA bug fixing and unattended, headless test runs."
      },
      {
        title: "What Changed for the Team",
        list: [
          "Design reviews moved into the headset: red flags became obvious and decisions were made faster than on a storyboard.",
          "Instructional designers could make changes early, avoiding late change requests with vendors.",
          "Production velocity rose once the team could see the sim in VR, freeing time for new and more important features.",
          "Vendors shifted from early-stage creation to high-fidelity polish."
        ]
      },
      {
        title: "The System Around It: Scriptr",
        body: "E2Engine is the final stage of Scriptr, a three-part AI production system I designed for Transfr's sim pipeline.",
        list: [
          "ScreenplAi: a Gemini Gem with a curated knowledge base that turns O*NET career data into simulation concepts and formatted VR scripts. In a 'Food Scientist' pilot it cut the time to a final script from 5 days to 75 minutes.",
          "Asset Bot: an n8n workflow that uses Gemini vector embeddings for semantic search over Transfr's 3D asset library, populates Unity projects, and files Jira tickets for missing assets."
        ],
        images: ["/projects/scriptr-agentic-system.png"]
      },
      {
        title: "What I Learned",
        list: [
          "Ship the version the tools allow, then revisit. The n8n + DSL design was right for 2025: inspectable, cheap at ~$0.08 a run, and it proved its value on real sims.",
          "Every intermediate format is a contract to maintain. The more a system depends on a prompt, a DSL and a parser agreeing, the more of your time goes to keeping them in sync.",
          "Put verification inside the loop. An agent that plays its own output catches problems a hand-off never would.",
          "Scope is a design decision. Deciding what the agent should not build mattered as much as what it should."
        ]
      }
    ]
  },
  {
    slug: "looking-inside-cells",
    focus: ["learning"],
    contributions: ["Modeled and animated a library of cellular structures in Maya, with a PBR pipeline into Unreal Engine", "Wrote custom shaders for translucent, fluid cellular matter", "Prototyped the VR tools and UI students use to navigate the cell in Blueprints", "Iterated interactions with learning researchers so each one reinforced a biology concept"],
    links: [{"label": "View on Steam", "href": "https://store.steampowered.com/app/1889880/"}],
    team: "Lead developer, PhD researchers and me (3D artist)",
    platform: "HTC Vive · PC VR (Steam)",
    highlight: "Released on Steam · Verizon-sponsored research",
    title: "Looking Inside Cells",
    category: "Educational VR",
    description: "Verizon-sponsored research bringing cellular biology to middle schoolers via immersive environments. Designed utilizing Unreal Engine and Substance Painter.",
    techStack: ["Unreal Engine", "Maya", "Substance Painter", "VR"],
    image: "/projects/lab01.webp",
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
        images: ["/projects/cells-1.mp4", "/projects/cells-2.mp4", "/projects/cells-3.mp4", "/projects/cells-4.mp4"],
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
        images: ["/projects/blueprints-1.png", "/projects/blueprints-2.png"]
      },
      {
        title: "The Intersection of Science and Design",
        body: "\"Looking Inside Cells\" required a deep commitment to human-centric design. By focusing on performance optimization and computer graphics, I helped create a world where students could stop \"looking\" at biology and start \"experiencing\" it. This project reinforced my belief that when we make the invisible tangible, we unlock a deeper capacity for curiosity and learning."
      }
    ]
  },
  {
    slug: "freehand-assistant",
    focus: ["xr-interaction"],
    contributions: ["Interviewed 6 people in the disability community and synthesized a spectrum-of-needs user profile", "Sketched and built low-fidelity prototypes, including a head-mounted laser pointer as a gaze stand-in", "Designed a voice + gaze interaction model that replaces every hand input", "Built the prototype assets and flows in Blender and Figma"],
    year: "2020",
    platform: "Oculus Rift",
    team: "Solo",
    highlight: "100% hands-free voice + gaze interaction model",
    title: "Freehand Assistant",
    category: "Spatial UX",
    description: "Voice and gaze-controlled hand interactions designed to make XR more accessible for users with limited mobility.",
    techStack: ["Spatial UX", "Blender", "Figma", "Research"],
    image: "/projects/freehandassistant-cover.mp4",
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
          "User Interviews: I conducted in-depth interviews with six individuals in the disability community. These conversations moved beyond technical needs and into the emotional landscape of immersion - understanding the frustration of being \"locked out\" of a digital world due to rigid hardware requirements.",
          "User Profiling: I synthesized these insights into a specific user profile that spanned the spectrum of accessibility needs. This helped me move away from \"edge-case\" thinking and toward a \"universal design\" mindset.",
          "Low-Fidelity Prototyping: I built initial cardboard prototypes with laser pointers strapped to my head to act as the gaze pointer. Could a user effectively navigate a 3D space without the tactile feedback of a trigger or grip?",
          "The Multi-Modal Solution: The final prototype utilized a Voice and Gaze-based interaction model. By combining eye-tracking for selection and natural language processing for execution, I created a seamless \"Free Hand\" experience that offered 100% functionality without a single hand gesture."
        ],
        images: ["/projects/freehand-hero-shot.png", "/projects/freehand-1.mp4", "/projects/freehand-2.mp4", "/projects/freehand-3.mp4"],
        compactGrid: true
      },
      {
        title: "Learnings: From Accessibility to \"Superpowers\"",
        body: "In the process of solving the physical mobility problem, I stumbled upon a realization that changed my perspective on the future of XR.\n\nWhile I was focused on creating an alternative for those who couldn't use their hands, I discovered that this interaction schema actually functions as a digital superpower for everyone. When we stop viewing gaze and voice as \"replacements\" and start viewing them as \"extensions,\" the possibilities explode.\n\nImagine a VR environment where you use your physical hands for tactile work, while your gaze and voice act as a second or third set of \"ghost hands\" to manage menus or move distant objects simultaneously. By designing for the \"limited\" case, we inadvertently unlock new tiers of human performance for the general user. It raises a compelling question for the future of spatial computing: Why settle for two hands when the digital world allows us to have many?",
        images: ["/projects/freehand-super.webp"]
      }
    ]
  },
  {
    slug: "embodied-vr-therapy",
    focus: ["neuro-wellness"],
    contributions: ["Designed calming therapy rooms using environmental psychology: warm palette, soft lighting, grounded layouts", "Researched avatar styles from realistic to stylized, and built an avatar customization system", "Built the Avatar Selection and Room Selection UI", "Optimized assets and shaders for VR performance with product designers and engineers"],
    year: "2019",
    team: "Lead developer, back-end developer, UI designer, QA and me (3D artist)",
    platform: "Meta Quest 2",
    highlight: "Shipped on XR Health's VR therapy platform",
    title: "Foretell Reality: Avatars and Environments for VR Therapy",
    category: "Medical VR",
    description: "3D Design of avatars, therapeutic environments, and interfaces for Foretell Reality, a platform aiming to redefine group support and psychological therapy.",
    techStack: ["Maya", "Unity", "VR/Avatars"],
    image: "/projects/screenshot.webp",
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
        images: ["/projects/screenshot.webp"]
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
        images: ["/projects/lobbyroom.webp"]
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
    focus: ["xr-interaction"],
    title: "Victorious Athlete in AR",
    category: "Museum AR",
    hidden: true,
    description: "A location-based AR app revealing the long-lost history of one of the Getty Villa's most prized bronze statues.",
    techStack: ["Unity", "Photogrammetry", "AR"],
    image: "/projects/ar-athlete.webp",
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
    focus: ["neuro-wellness"],
    team: "4 — researcher, designer, engineer and me",
    contributions: ["Produced the team through a 72-hour hackathon, keeping the build true to the researcher's clinical intent", "Implemented the math that maps a belly-strapped controller's motion to breath depth in real time", "Authored shaders that reveal new layers of the environment as the user's breath syncs with the guide orb"],
    links: [{"label": "Watch the Games for Change showcase talk", "href": "https://www.youtube.com/watch?v=t5q-uYwq8AI"}],
    year: "2021",
    platform: "VR · Controller-as-sensor",
    highlight: "Best Research Application · XR Brain Jam 2021",
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
        body: "In 2021, I collaborated with a research specialist in therapeutic gaming to tackle the problem of anxiety through box breathing - a paced breathing technique that slows respiration and calms the nervous system. The goal was to move beyond a simple \"instructional\" video and create an environment that dynamically responded to the user's own physiological rhythm, making the invisible process of breathing a tangible, interactive experience.",
        images: ["/projects/breathsync-problem-space.jpg"]
      },
      {
        title: "The Creative Hack: Turning Controllers into Sensors",
        body: "The core design challenge was capturing accurate respiratory data without a dedicated sensor. We developed a creative hardware \"hack\" that became the technical foundation of the project:",
        list: [
          "Physical Integration: We strapped a standard VR controller to the user's stomach, utilizing its high-fidelity IMU sensors to track the physical expansion and contraction of the abdomen.",
          "Translational Mapping: I implemented the math required to translate the controller's raw translational movement into a real-time data stream. This stream directly scaled a central virtual orb: as the user inhaled, the orb grew; as they exhaled, it shrank.",
          "The Gameplay Loop: The experience became a meditative \"syncing\" game. Users were tasked with matching the size and rhythm of their personal orb with a guiding, rhythmic orb that moved at the ideal pace for anxiety reduction."
        ],
        images: ["/projects/breathsync-vr-solution.jpg"]
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
        body: "The success of this project led to a public talk at the Games for Change Festival 2021, where I presented our findings on biofeedback-driven design. This work reinforced my belief that the most profound technological solutions often come from looking at existing hardware through a creative, human-centric lens.",
        videoUrl: "https://www.youtube.com/watch?v=t5q-uYwq8AI"
      }
    ]
  },
  {
    slug: "scubas-ocean-odyssey",
    focus: ["learning"],
    contributions: ["Developed the concept, levels and narrative beats", "Designed Scuba, the submersible-bot protagonist", "Ran the full 3D pipeline — modeling, UVs, texturing, rigging, animation — in Maya and Substance Painter", "Led level design in Unity, produced trailers, and pitched at festivals to support crowdfunding"],
    team: "Developer, project manager, story writer and me (lead 3D artist)",
    year: "2018",
    platform: "Oculus Rift",
    highlight: "Showcased at Play NYC 2018 · Released on Oculus Rift",
    title: "Scuba's Ocean Odyssey",
    category: "Educational VR",
    description: "An educational virtual reality game exploring plastic pollution through the eyes of a sentient submersible.",
    techStack: ["Maya", "Unity", "Substance Painter", "Oculus Rift"],
    image: "/projects/web-11.webp",
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
        images: ["/projects/shot3.webp"]
      },
      {
        title: "The Asset Creation Pipeline: From Maya to Unity",
        body: "To bring this indie project to life on a startup budget, I utilized a streamlined, high-efficiency technical pipeline.",
        list: [
          "3D Asset Workflow: I managed the full 3D pipeline—including modeling, UV mapping, texturing, rigging, and animation - using Maya and Substance Painter.",
          "Character and Level Design: I designed the main character named Scuba, who is a submersible bot (inspired by Wall-E from Disney). I translated these designs into game-ready assets for Unity, where I led the level design to create intuitive, exploratory environments that maximized the sense of presence in a 360-degree VR space."
        ],
        images: ["/projects/web-04.webp", "/projects/web-11.webp", "/projects/hub-01.jpg", "/projects/scuba.jpeg"],
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
  },
  {
    slug: "lookwise",
    focus: ["spatial-ai", "xr-interaction"],
    contributions: [
      "Designed the core loop — See, Know, Listen, Show — so guidance reaches the rep without breaking eye contact",
      "Owned the guidance model: a sales-intelligence pipeline that turns every customer turn into a structured profile, then composes discovery questions or a recommendation",
      "Designed the glanceable HUD for the glasses display and the rep-facing mobile app",
      "After the online round, took Lookwise to the Berlin finals and built it out as a working demo on Meta Ray-Ban Display glasses",
      "Co-developed the pitch: market sizing, competitive landscape, privacy risks and a 12-week validation pilot",
      "Partnered with Mokshith Pyla, who owned the capture pipeline, glasses integration and Azure backend",
    ],
    metrics: [
      {"value": "1st", "label": "place, Sales Track", "method": "XRCC 2026 finals, Berlin — judged against teams from across the XR industry"},
      {"value": "48 hrs", "label": "to a working prototype on glasses", "method": "Capture, identify, price and coach, end to end"},
      {"value": "< 3 s", "label": "question-to-answer target", "method": "Design target for the live answer loop, not yet measured"},
    ],
    links: [{"label": "Watch the trailer and demo", "href": "https://youtu.be/BjCliTRhhQY"}],
    year: "2026",
    platform: "Meta Ray-Ban Display · phone (device-agnostic)",
    team: "Mokshith Pyla (Sr. UX Engineer, Microsoft) and me",
    highlight: "1st place, XRCC 2026 Berlin · UnitedXR Builders Program",
    featured: true,
    title: "Lookwise: AI Sales Intelligence for Smart Glasses",
    category: "Smartglasses AI",
    description: "Live product knowledge, pricing and coaching on a sales rep's smart-glasses display — hands-free, mid-conversation.",
    techStack: ["Meta Ray-Ban Display", "React Native", "Azure OpenAI", "GPT-4 Vision", "Whisper", "Cosmos DB"],
    image: "/projects/lookwise/lookwise-banner.webp",
    heroMedia: "/projects/lookwise/lookwise-hero.jpg",
    challenge: "A customer asks a real question in front of a product, and the rep has about twenty seconds to answer — accurately, and without looking away. Catalogs change weekly while training happens quarterly, the answer lives on a phone or laptop, and call-intelligence tools only coach after the deal is done.",
    impact: "We reached the finals from the online round of XRCC 2026, then took 1st place in the Sales Track in Berlin, and Lookwise was selected for the Builders Program at UnitedXR in Brussels. The MVP runs end to end on Meta Ray-Ban Display glasses — it identifies the product, prices it against the brand catalog, and coaches the rep with the best match, alternatives and the next question to ask.",
    caseStudyMeta: {
      role: "Co-creator — guidance model, HUD and rep app",
      company: "XRCC 2026 Hackathon",
      companyUrl: "",
      timeline: "Online round → Berlin finals"
    },
    content: [
      {
        title: "The Knowledge Gap in Live Selling",
        body: "Retail floors and technical B2B sales share one moment: a customer asks something specific, in front of the product, and the rep either knows the answer or doesn't. Three things make that moment harder than it should be:",
        list: [
          "Catalogs move faster than training: specs, pricing and stock change weekly, while onboarding happens quarterly.",
          "The answer lives on a screen: reaching for a phone or laptop breaks eye contact and kills momentum.",
          "Coaching arrives after the deal: call intelligence improves the next conversation, not this one."
        ]
      },
      {
        title: "Why Glasses, Why Now",
        body: "Smart glasses are projected to ship 112M units a year by 2030, up from 2.7M in 2024 (Citi Research), and in 2026 displays arrived in ordinary frames. Reps will wear these anyway. We designed Lookwise to be device-agnostic: a camera, a microphone and a display are enough. Phones work today; glasses make it invisible."
      },
      {
        title: "Design Principle: Never Break the Conversation",
        body: "Everything follows from one constraint — the rep's attention belongs to the customer. Lookwise runs a four-step loop, and the only thing the rep ever sees is the last step.",
        list: [
          "See: vision AI identifies the product the rep and customer are looking at.",
          "Know: it's matched to the brand catalog — live price, stock, specs and alternatives.",
          "Listen: the conversation builds a structured profile of budget, use case and concerns.",
          "Show: guidance appears on the glasses display, silently, with no wake-word gymnastics."
        ],
        images: [
          { src: "/projects/lookwise/lookwise-loop.webp", caption: "The same loop works in a store aisle, on a factory floor or beside a hospital bed — only the catalog changes." }
        ],
        centerImage: true,
        videoUrl: "https://youtu.be/BjCliTRhhQY"
      },
      {
        title: "Decision: Every Turn Refines the Profile, Not Just the Answer",
        body: "A chatbot answers the last question. A good salesperson remembers everything the customer has said. I designed the guidance model as a pipeline that carries the conversation's state forward:",
        list: [
          "Materiality gate: a cheap, non-AI filter skips filler like \"yeah\", \"ok\" and \"mm-hmm\", so we only pay for turns that matter.",
          "Profile update: GPT-4 merges each turn into a structured customer profile — use case, priorities, concerns, budget — without losing earlier context.",
          "Budget and tier signals: amounts and ranges are mapped to value, mid or premium tiers.",
          "Catalog matching: the evolving profile is matched against the brand catalog for a best match and same-category alternatives.",
          "Discovery gate: when budget and key needs are still unknown, Lookwise holds back the product and suggests a clarifying question instead. A price-context check flags budgets below the cheapest in-stock model.",
          "Guidance composer: discovery questions if the profile is thin, a recommendation and pitch if it's confident — with the fields that changed this turn highlighted."
        ],
        images: [
          { src: "/projects/lookwise/lookwise-intelligence-pipeline.webp", caption: "The sales-intelligence layer: state persists across turns, so each answer is grounded in everything said so far." }
        ]
      },
      {
        title: "Designing the HUD: One Glance, One Action",
        body: "The glasses display is small and sits in the rep's line of sight, so the HUD shows exactly one thing at a time — the guidance composer's output, not the profile behind it.",
        list: [
          "Lead with the action: each card opens with a short label for what to do (\"ASK\") above a single line the rep can say out loud.",
          "Keep the face clear: guidance sits to the side of the view, so the rep never looks through text to see the customer.",
          "Show the system is listening: an \"Updating…\" state appears while the profile refreshes after a turn, so the rep doesn't act on stale guidance.",
          "Questions before products: when the discovery gate holds back a recommendation, the HUD shows the clarifying question instead — here, the customer's budget."
        ],
        images: [
          { src: "/projects/lookwise/lookwise-hud.webp", caption: "The HUD from the rep's point of view: a discovery question (\"ASK\") with an \"Updating…\" state, placed beside the customer rather than over her." }
        ],
        centerImage: true
      },
      {
        title: "Architecture: A Swappable Capture Layer",
        body: "The platform isn't tied to one headset. Capture can come from Meta Ray-Ban Display glasses, a phone camera or ambient audio, feeding a React Native (Expo) app and a Node.js backend on Azure Container Apps.",
        list: [
          "AI engine: Azure OpenAI — GPT-4 Vision for product identification, Whisper for speech recognition, and vision grounding.",
          "Live price lookup through Google Shopping data, and catalog matching against brand catalogs in Azure Cosmos DB.",
          "Outputs: visual coaching on the glasses HUD, product and price cards in the app, and a brand admin portal."
        ],
        images: [
          { src: "/projects/lookwise/lookwise-architecture.webp", caption: "Technical architecture: capture, mobile app, backend platform and outputs, on Azure." }
        ]
      },
      {
        title: "Designing for Trust",
        body: "A device that listens on a shop floor has to earn its place. We designed the risks in from the start:",
        list: [
          "Recording customers: no video retention; the transcript stays client-side and is discarded per turn. Capture is rep-initiated, with in-store notice and a consent mode for EU deployments, hosted in an Azure EU region.",
          "Hardware timing: phone camera and earpiece deliver value today, and glasses are the upgrade path — whichever frames land first.",
          "Enterprise friction: pilots start with a flat catalog import (CSV or read-only API). No CRM write access, and no system of record to replace before value shows up."
        ]
      },
      {
        title: "What's Still Unproven",
        body: "Clienteling tablets make the rep look down, XR field-service tools have no catalog or customer, and sales-enablement platforms coach after the conversation. Lookwise fills that gap on paper. What it hasn't done yet is prove itself on a real sales floor: the under-3-second answer loop, the HUD's readability mid-conversation and the effect on sales all still need testing with working reps."
      },
      {
        title: "Achievements",
        list: [
          "Finalist in the online round of the XRCC 2026 hackathon.",
          "1st place, Sales Track at the XRCC 2026 finals in Berlin — judged against teams from across the XR industry.",
          "Selected for the Builders Program at UnitedXR in Brussels (December 2026), where Lookwise will be pitched on stage and in front of investors."
        ]
      }
    ]
  },
  {
    slug: "reskin-surface-studio",
    focus: ["spatial-ai", "xr-interaction"],
    contributions: [
      "Developed the WebXR experience with Spark.js, so users can stand inside the gaussian splat and switch between surface options in VR",
      "Architected the workflow execution end to end: browser inputs → SAM 3 surface detection → ComfyUI surface replacement → World Labs splat generation → back to the browser",
      "Partnered with Joey Fonacier (XR design, World Labs), Eros Carrascos (XR development) and Fernando Herrera (ComfyUI, web design)",
    ],
    links: [{"label": "Watch the pitch video", "href": "https://www.youtube.com/watch?v=Mk4gOMQwxvQ"}],
    year: "2026",
    platform: "WebXR · browser and VR headset",
    team: "Joey Fonacier (XR designer, World Labs), Eros Carrascos (XR developer), Fernando Herrera (ComfyUI, web design) and me (WebXR developer)",
    highlight: "One 360° photo → a walkable, reskinned room in WebXR",
    featured: true,
    title: "Reskin Surface Studio",
    category: "Spatial Capture · WebXR",
    description: "Reskin any surface of a room — walls, floors, backsplashes — from a single 360° photo, then walk through the result as a gaussian splat in WebXR.",
    techStack: ["WebXR", "Spark.js", "Gaussian Splatting", "SAM 3", "ComfyUI", "World Labs API"],
    image: "/projects/reskin/reskin-thumb.mp4",
    challenge: "Choosing a tile or wallpaper from a swatch or a flat render makes it hard to judge how it will feel across a whole wall, at real scale, in your own room. We set out to let anyone see a new surface in their actual space — in VR, straight from a web browser.",
    impact: "Built at the Worlds in Action hackathon at SIGGRAPH 2026 in Los Angeles: a working pipeline that turns one 360° photo and a few texture references into gaussian-splat versions of the room, which you can step into in VR from the browser and switch between in place.",
    caseStudyMeta: {
      role: "WebXR Developer & Workflow Architect",
      company: "Worlds in Action Hackathon · SIGGRAPH 2026",
      companyUrl: "",
      timeline: "Hackathon"
    },
    content: [
      {
        title: "How It Works",
        body: "Reskin Surface Studio chains four steps across the browser, an image-generation backend and a world-model API:",
        list: [
          "Capture and choose: upload a 360° image of the room and reference images of the tiles or wallpaper you want.",
          "Detect: SAM 3 finds and isolates surfaces — for example, the brick wall.",
          "Replace: a ComfyUI workflow swaps that surface in the 360° panorama for the user's reference.",
          "Reconstruct and experience: the new panorama goes to World Labs to generate a gaussian splat, which comes back to the browser to explore in WebXR."
        ],
        videoUrl: "https://www.youtube.com/watch?v=Mk4gOMQwxvQ"
      },
      {
        title: "1. Inputs and Surface Detection",
        body: "Everything starts in the web app. A 360° capture of the space and a handful of texture references are the only inputs — no 3D scanning or modeling. SAM 3 segments the panorama so the user can pick exactly which surface to reskin.",
        images: [
          { src: "/projects/reskin/reskin-inputs-sam3.webp", caption: "Web app input: a 360° image of the space, the texture references, and SAM 3 surface detection." }
        ],
        centerImage: true
      },
      {
        title: "2. Replacing the Surface in 2D",
        body: "The edit happens on the flat 360° panorama, not in 3D. A ComfyUI backend workflow — with Gemini for panorama generation — replaces the selected surface with the reference texture, producing one new panorama per option.",
        images: [
          { src: "/projects/reskin/reskin-comfyui.webp", caption: "The ComfyUI workflow and the reskinned panoramas it generates, one per texture reference." }
        ],
        centerImage: true
      },
      {
        title: "3. From Panorama to Gaussian Splat",
        body: "After the user confirms the result in the web app, each new panorama is sent to World Labs through its API to generate a gaussian splat — a photoreal 3D version of the room with the new surface in place.",
        images: [
          { src: "/projects/reskin/reskin-world-labs.webp", caption: "Web app confirmation, then World Labs gaussian-splat creation." }
        ],
        centerImage: true
      },
      {
        title: "4. Stepping Inside in WebXR",
        body: "I built the WebXR experience with Spark.js for gaussian-splat rendering on the web. The finished splat streams back to the browser, and from there you can enter VR, look around the room at real scale, and switch between texture references to compare options in place.",
        images: [
          { src: "/projects/reskin/reskin-webxr.webp", caption: "The WebXR experience: switching between reskinned versions of the room in VR." }
        ],
        centerImage: true
      },
      {
        title: "Architecting the Workflow",
        body: "My other role was making the pieces run as one system. The pipeline crosses the browser, SAM 3, a ComfyUI backend and the World Labs API, and each hand-off had to carry the right image, mask and references to the next step — then return a splat the WebXR viewer could load.",
        list: [
          "Decision: edit in 2D, reconstruct in 3D only at the end. Surface replacement runs on the flat panorama, where it's fast to iterate on, and the gaussian splat is generated once per approved option as the final, viewable output.",
          "Decision: a confirmation step before reconstruction. The user approves each reskinned panorama in the web app before it goes to World Labs, so only results worth walking through become splats.",
          "Decision: compare in place. All options are loaded for the same room, so in VR the user switches surfaces while standing in one spot instead of re-entering a new scene."
        ],
        images: [
          { src: "/projects/reskin/reskin-team-demo.webp", caption: "Demoing Reskin Surface Studio in VR at the Worlds in Action hackathon, SIGGRAPH 2026." }
        ],
        centerImage: true
      },
      {
        title: "What's Still Unproven",
        body: "Reskin Surface Studio is a hackathon prototype, built and demoed over the event. It hasn't yet been tested with people choosing finishes for a real room — the next step to find out whether walking through options at full scale changes the decision."
      }
    ]
  },
  {
    slug: "brain-candy",
    focus: ["neuro-wellness"],
    contributions: [
      "Wrote the breath-detection system in C# for Unity, reading breathing from the headset's own forward tilt",
      "Made it self-calibrating: a rolling ~5-second window of min and max head tilt adapts to each user's posture and breathing depth",
      "Classified every moment as inhale, exhale or hold by comparing smoothed values across a ~1-second window",
      "Drove real-time feedback from it: a breath orb that rises and falls, changes color, and cues in, out and hold",
      "Open-sourced the algorithm on GitHub under the MIT license",
    ],
    metrics: [
      {"value": "0", "label": "extra sensors — headset motion only"},
      {"value": "~5 s", "label": "self-calibration when a session starts", "method": "Rolling 300-frame window at 60 fps"},
      {"value": "3", "label": "breath states detected: inhale, exhale and hold"},
    ],
    links: [
      {"label": "View the breath-detection code", "href": "https://github.com/sounakivan/Breath-Detection-VR"},
      {"label": "Breathwork DLC on the Meta store", "href": "https://www.meta.com/experiences/breathwork/1455318926161711/"},
      {"label": "Brain Candy on the Meta store", "href": "https://www.meta.com/experiences/brain-candy/8052379494880098/"},
      {"label": "Brain Candy website", "href": "https://braincandyapp.com/main.html"},
    ],
    year: "2022",
    platform: "Meta Quest",
    team: "Brain Candy is created by David Lobser; I contributed breath detection to the Breathwork DLC",
    highlight: "Breath detection from headset motion alone — no extra sensors",
    title: "Brain Candy: Breath Detection for VR Breathwork",
    category: "Wellness XR",
    description: "A breath-detection system for Brain Candy's Breathwork DLC on Meta Quest — it reads inhale, exhale and hold from the headset's own motion, with no extra hardware.",
    techStack: ["Unity", "C#", "Meta Quest", "Signal Processing"],
    image: "/projects/brain-candy/brain-candy-hero.webp",
    challenge: "Breathwork guidance works best when the experience responds to how you're actually breathing. But consumer VR headsets have no breath sensor, and asking people to strap on extra hardware breaks the calm the experience is trying to create.",
    impact: "I built the breath detection for Breathwork, a DLC of over two dozen breathing experiences for Brain Candy, a flicker-light VR app by David Lobser on the Meta Quest store (4.5★ across 46 reviews). It reads breathing from headset motion alone after a ~5-second self-calibration, and the algorithm is open source.",
    caseStudyMeta: {
      role: "Contributor — Breathwork DLC (breath detection)",
      company: "Brain Candy",
      companyUrl: "https://braincandyapp.com/main.html",
      timeline: ""
    },
    content: [
      {
        title: "From a Controller on the Belly to the Headset Itself",
        body: "In BreathSync (2021), my team detected breathing by strapping a VR controller to the user's stomach. It worked, but it asked people to wear extra hardware. For Brain Candy I wanted the same responsiveness with nothing added at all.\nThe insight: breathing moves the head too. As the chest and shoulders rise and fall, the headset's forward tilt shifts by a small, rhythmic amount — enough to track if you calibrate for it."
      },
      {
        title: "How the Algorithm Works",
        body: "The detector runs every frame in Unity, in four stages:",
        list: [
          "Calibrate: it records the headset's forward tilt over a rolling ~5-second window and averages the window's minimum and maximum, giving a personal range for each user.",
          "Normalize and smooth: the current tilt is mapped into that range, clamped, and smoothed so small jitters don't read as breaths.",
          "Classify: comparing the smoothed value with its value about a second earlier tells rising (inhale) from falling (exhale); a change below a small threshold reads as a held breath.",
          "Respond: the breath state drives a breath orb that rises and falls, changes color, and cues the user to breathe in, out or hold."
        ]
      },
      {
        title: "Design Decisions",
        list: [
          "Self-calibrating, not fixed thresholds: posture, headset fit and breathing depth differ for every person, so the range is learned live and keeps adapting.",
          "A dead band for holds: breath holds are part of breathwork, so a small, deliberate threshold separates a still breath from noise.",
          "Smoothing over speed: a calm, steady signal matters more in a meditative experience than reacting to every micro-movement.",
          "Honest feedback during setup: a short calibration message tells the user to settle in while the detector learns their range."
        ]
      },
      {
        title: "About Brain Candy",
        body: "Brain Candy, created by David Lobser, is a VR app for Meta Quest and Steam that uses flicker light stimulation, sound and visual patterns to support relaxation, focus and creative exploration. I contributed the breath detection for its Breathwork DLC, and published the algorithm as open source so others can build breath-aware VR without extra sensors.\nBreathwork is an add-on to Brain Candy on the Meta Quest store: over two dozen breathing experiences that pair breathing pacers with pattern entrainment, including box breathing, holotropic breathing, mindful breathing, parasympathetic breathing and voice-guided sessions.",
        videoUrl: "https://www.youtube.com/watch?v=55dKWNyePXo"
      }
    ]
  }
];

// Display order on the Work page — strongest case study first.
const order = [
  "e2engine",
  "lookwise",
  "modular-xr-system",
  "reskin-surface-studio",
  "inner-light",
  "transfr-vr-education",
  "brain-candy",
  "freehand-assistant",
  "looking-inside-cells",
  "embodied-vr-therapy",
  "breathsync",
  "scubas-ocean-odyssey",
];

export const isDev = process.env.NODE_ENV !== "production";

/** Projects that get a public page: drafts only exist in `npm run dev`. */
export const publishedProjects = projects.filter((p) => isDev || !p.draft);

export const visibleProjects = publishedProjects
  .filter((p) => !p.hidden)
  .sort((a, b) => order.indexOf(a.slug) - order.indexOf(b.slug));

export const featuredProjects = visibleProjects.filter((p) => p.featured);
