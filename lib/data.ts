// ─── Project types ────────────────────────────────────────────────────────────

export type CaseContent =
  | { type: 'paragraph'; text: string; links?: { label: string; href: string }[] }
  | { type: 'list'; items: string[] }
  | { type: 'full'; text: string };

export interface ProjectCase {
  label: string;
  content: CaseContent;
}

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  id: string;
  index: string;
  title: string;
  filename: string;
  kicker: string;
  status: string;
  tabMeta: string;
  tabLinks?: ProjectLink[];
  internalNote?: string;
  summary: string;
  cases: ProjectCase[];
}

// ─── Projects ─────────────────────────────────────────────────────────────────

export const projects: Project[] = [
  {
    id: 'sezone',
    index: '01',
    title: 'Sezone',
    filename: 'sezone.case-study.ts',
    kicker: 'saas platform | end-to-end ownership',
    status: 'live',
    tabMeta: 'sezone.in / moon.sezone.in',
    tabLinks: [
      { label: 'visit website', href: 'https://www.sezone.in/' },
      { label: 'visit moon.sezone.in', href: 'https://moon.sezone.in' },
    ],
    summary:
      'Sezone is the strongest example of my ownership as a software developer. I built and continue to manage the SaaS platform across system design, backend architecture, frontend development, admin panel, client panel, deployment, optimization, and ongoing maintenance.',
    cases: [
      {
        label: 'problem',
        content: {
          type: 'paragraph',
          text: 'The business needed a SaaS platform that could support multiple tenants, separate operational concerns cleanly, and give both admins and clients a usable system instead of disconnected internal scripts.',
        },
      },
      {
        label: 'context',
        content: {
          type: 'paragraph',
          text: 'I owned the build across the full stack: system design, backend, frontend, deployment, website work, optimization, and ongoing maintenance. The platform had to support 200,000+ records per run, 1,400+ credentials, concurrent schedules, and production troubleshooting.',
        },
      },
      {
        label: 'approach',
        content: {
          type: 'paragraph',
          text: "I designed the system around tenant-aware scheduling, queue-based execution, and operational clarity. The goal was not just to ship features, but to build something the team could run, debug, and trust under live conditions.",
        },
      },
      {
        label: 'architecture',
        content: {
          type: 'list',
          items: [
            'Designed backend services and async workers to isolate failures and improve throughput.',
            'Built the frontend surfaces, admin panel, and client-facing flows needed for real-world use.',
            'Standardized deployments with Docker, Nginx, and PM2 to reduce manual dependency.',
            'Maintained and optimized the product as a live SaaS application instead of treating launch as the finish line.',
          ],
        },
      },
      {
        label: 'live links',
        content: {
          type: 'paragraph',
          text: 'Visit {website} and {Moon Sezone}.',
          links: [
            { label: 'website', href: 'https://www.sezone.in/' },
            { label: 'Moon Sezone', href: 'https://moon.sezone.in' },
          ],
        },
      },
      {
        label: 'outcome',
        content: {
          type: 'paragraph',
          text: 'Sezone reached about 99% pipeline reliability, improved deployment speed by roughly 60%, and gave the business a maintainable product that I continue to operate and improve.',
        },
      },
      {
        label: 'reflection',
        content: {
          type: 'full',
          text: 'This project proved that my best work is in high-ownership environments where I can shape the system from first design decisions through production maintenance and optimization.',
        },
      },
    ],
  },
  {
    id: 'rpacpc-utility',
    index: '02',
    title: 'RPACPC Utility',
    filename: 'rpacpc-utility.case-study.ts',
    kicker: 'desktop automation utility',
    status: 'live',
    tabMeta: 'desktop exe application',
    internalNote: 'internal desktop app',
    summary:
      'An Electron.js desktop application used for RPACPC services where operators can upload and process very large data batches across workflows such as PAN to GST, PAN to Udyam, and related verification-heavy service operations.',
    cases: [
      {
        label: 'problem',
        content: {
          type: 'paragraph',
          text: 'RPACPC service workflows involved very large operational batches, often in lakhs of records, which made manual processing too slow, too repetitive, and too error-prone for daily business use.',
        },
      },
      {
        label: 'context',
        content: {
          type: 'paragraph',
          text: 'The application is used like a real desktop platform by internal teams. Users provide bulk data batches for service flows such as PAN to GST, PAN to Udyam, and other RPACPC processing tasks that require long-running automation and visible execution state.',
        },
      },
      {
        label: 'approach',
        content: {
          type: 'paragraph',
          text: 'I worked on the utility as production software: maintaining the Electron.js application, improving execution reliability, handling debugging and packaging, and keeping the batch-processing experience usable for operators handling large-scale workloads.',
        },
      },
      {
        label: 'architecture',
        content: {
          type: 'list',
          items: [
            'Electron.js desktop shell for operator-facing execution and batch handling.',
            'Workflow support for bulk RPACPC services such as PAN to GST and PAN to Udyam.',
            'Ongoing maintenance, debugging, packaging, and reliability improvements.',
            'Progress visibility and operational usability for long-running batch jobs.',
          ],
        },
      },
      {
        label: 'outcome',
        content: {
          type: 'paragraph',
          text: 'The utility helped convert large repetitive service workflows into a faster desktop-driven batch process, significantly reducing manual effort and supporting large operational runs more reliably.',
        },
      },
      {
        label: 'reflection',
        content: {
          type: 'full',
          text: 'This project showed how valuable desktop automation can be when business operations depend on large batch execution and the users need a tool they can monitor, trust, and run repeatedly.',
        },
      },
    ],
  },
  {
    id: 'rpacpc-client',
    index: '03',
    title: 'RPACPC Client Panel',
    filename: 'rpacpc-client.case-study.ts',
    kicker: 'client workflow automation',
    status: 'live',
    tabMeta: 'console.rpacpc.com',
    tabLinks: [{ label: 'visit console.rpacpc.com', href: 'https://console.rpacpc.com/' }],
    summary:
      'I contributed to the RPACPC Client Panel by improving API integration, verification workflow automation, and client-side operational flow so the system felt smoother and more dependable in real use.',
    cases: [
      {
        label: 'problem',
        content: { type: 'paragraph', text: 'Client-side verification flows needed to be faster, smoother, and less dependent on repetitive manual checks.' },
      },
      {
        label: 'context',
        content: { type: 'paragraph', text: 'This was part of a live operational product, so correctness and flow clarity mattered more than purely cosmetic frontend changes.' },
      },
      {
        label: 'approach',
        content: { type: 'paragraph', text: 'I worked on workflow automation and API integration to make the client-side process more reliable and easier to operate.' },
      },
      {
        label: 'architecture',
        content: {
          type: 'list',
          items: [
            'Improved client-side verification workflows.',
            'Worked on API integrations that supported smoother form operations.',
            'Helped reduce friction in real operational usage.',
          ],
        },
      },
      {
        label: 'live link',
        content: {
          type: 'paragraph',
          text: 'Visit {RPACPC Client Panel}.',
          links: [{ label: 'RPACPC Client Panel', href: 'https://console.rpacpc.com/' }],
        },
      },
      {
        label: 'outcome',
        content: {
          type: 'paragraph',
          text: 'The panel became better suited for repeated operational use by improving flow reliability and reducing manual dependency in verification-heavy tasks.',
        },
      },
      {
        label: 'reflection',
        content: {
          type: 'full',
          text: 'This project reinforced how much small workflow improvements matter when the same users repeat the same process every day.',
        },
      },
    ],
  },
  {
    id: 'rpacpc-admin',
    index: '04',
    title: 'RPACPC Admin Panel',
    filename: 'rpacpc-admin.case-study.ts',
    kicker: 'admin operations | api automation',
    status: 'live',
    tabMeta: 'adminv2.rpacpc.com',
    tabLinks: [{ label: 'visit adminv2.rpacpc.com', href: 'https://adminv2.rpacpc.com/' }],
    summary:
      'I contributed to the RPACPC Admin Panel through API verification automation, backend development, and stronger request and response validation for admin-side operations.',
    cases: [
      {
        label: 'problem',
        content: { type: 'paragraph', text: 'Admin-side verification needed to be more reliable, more consistent, and less dependent on repetitive manual checks.' },
      },
      {
        label: 'context',
        content: { type: 'paragraph', text: 'This work sat close to operational workflows, so backend correctness and validation quality were directly tied to usability.' },
      },
      {
        label: 'approach',
        content: { type: 'paragraph', text: 'I focused on verification flow automation and stronger validation logic so the panel could support admin teams with less manual overhead.' },
      },
      {
        label: 'architecture',
        content: {
          type: 'list',
          items: [
            'Worked on backend APIs for admin operations.',
            'Improved automation around verification flows.',
            'Strengthened request and response validation behavior.',
          ],
        },
      },
      {
        label: 'live link',
        content: {
          type: 'paragraph',
          text: 'Visit {RPACPC Admin Panel}.',
          links: [{ label: 'RPACPC Admin Panel', href: 'https://adminv2.rpacpc.com/' }],
        },
      },
      {
        label: 'outcome',
        content: { type: 'paragraph', text: 'The panel gained stronger verification support and more dependable backend behavior for admin-side use.' },
      },
      {
        label: 'reflection',
        content: {
          type: 'full',
          text: 'This project showed how much trust in internal software depends on validation quality, not just whether the interface loads correctly.',
        },
      },
    ],
  },
  {
    id: 'azapi',
    index: '05',
    title: 'AZAPI.ai',
    filename: 'azapi.case-study.ts',
    kicker: 'live company product',
    status: 'live',
    tabMeta: 'azapi.ai',
    tabLinks: [{ label: 'visit azapi.ai', href: 'https://azapi.ai/' }],
    summary: 'AZAPI.ai is one of the live company products I contributed to as a software developer during my work at AZlogics.',
    cases: [
      { label: 'role', content: { type: 'paragraph', text: 'Contributed as part of the software development work delivered inside my current company.' } },
      { label: 'context', content: { type: 'paragraph', text: 'This is included here to show the breadth of live products I have worked on, beyond my flagship ownership work on Sezone.' } },
      { label: 'live link', content: { type: 'paragraph', text: 'Visit {AZAPI.ai}.', links: [{ label: 'AZAPI.ai', href: 'https://azapi.ai/' }] } },
      { label: 'note', content: { type: 'paragraph', text: 'I have kept this summary intentionally concise because the strongest detailed ownership story on this portfolio is Sezone.' } },
    ],
  },
  {
    id: 'azom360',
    index: '06',
    title: 'Azom360',
    filename: 'azom360.case-study.ts',
    kicker: 'live company product',
    status: 'live',
    tabMeta: 'azom360.azlogics.com',
    tabLinks: [{ label: 'visit azom360.azlogics.com', href: 'https://azom360.azlogics.com/' }],
    summary: 'Azom360 is another live product I contributed to as part of my current company work.',
    cases: [
      { label: 'role', content: { type: 'paragraph', text: 'Worked on this project as a software developer contributing within the AZlogics product and delivery environment.' } },
      { label: 'context', content: { type: 'paragraph', text: 'It reflects the range of client and company-facing software I have supported while working on multiple live systems in parallel.' } },
      { label: 'live link', content: { type: 'paragraph', text: 'Visit {Azom360}.', links: [{ label: 'Azom360', href: 'https://azom360.azlogics.com/' }] } },
      { label: 'note', content: { type: 'paragraph', text: 'I am keeping the description brief here so the project list stays accurate without overstating details I have not written out fully yet.' } },
    ],
  },
  {
    id: 'apex',
    index: '07',
    title: 'APEX',
    filename: 'apex.case-study.ts',
    kicker: 'website delivery',
    status: 'live',
    tabMeta: 'apexmodulars.com',
    tabLinks: [{ label: 'visit apexmodulars.com', href: 'https://apexmodulars.com/' }],
    summary: 'APEX is one of the live web projects I contributed to during my current company work.',
    cases: [
      { label: 'role', content: { type: 'paragraph', text: 'Contributed as part of the software and website delivery work handled inside the company.' } },
      { label: 'context', content: { type: 'paragraph', text: 'This project adds evidence that my experience is not limited to one system or one type of product.' } },
      { label: 'live link', content: { type: 'paragraph', text: 'Visit {APEX}.', links: [{ label: 'APEX', href: 'https://apexmodulars.com/' }] } },
      { label: 'note', content: { type: 'paragraph', text: 'I can expand this section later with more detailed delivery notes if you want this project to carry more weight on the page.' } },
    ],
  },
  {
    id: 'neurite',
    index: '08',
    title: 'Neurite AI',
    filename: 'neurite.case-study.ts',
    kicker: 'medical AI | retrieval and validation',
    status: 'active',
    tabMeta: 'neuriteai.com',
    tabLinks: [{ label: 'visit neuriteai.com', href: 'https://neuriteai.com/' }],
    summary:
      'At Neurite AI, I contributed to a medical-domain AI product where trustworthy responses depended on the quality of retrieval, grounding, data preparation, and evaluation rather than model confidence alone.',
    cases: [
      {
        label: 'problem',
        content: { type: 'paragraph', text: 'Medical users needed reliable answers from large document sets, but generic LLM behavior was too risky unless responses stayed grounded enough to verify.' },
      },
      {
        label: 'context',
        content: { type: 'paragraph', text: 'I worked on data preparation, validation, retrieval quality, and model-support tasks for a domain where correctness matters more than interface novelty.' },
      },
      {
        label: 'approach',
        content: { type: 'paragraph', text: 'I focused on retrieval quality, semantic chunking, and evaluation-minded thinking so the system would return more useful and medically grounded answers.' },
      },
      {
        label: 'architecture',
        content: {
          type: 'list',
          items: [
            'Improved semantic chunking and retrieval preparation for better context quality.',
            'Worked on dataset validation and refinement for more dependable domain behavior.',
            'Supported grounding-oriented response design instead of relying only on prompting.',
            'Treated evaluation as part of engineering, not just a later review step.',
          ],
        },
      },
      {
        label: 'live link',
        content: { type: 'paragraph', text: 'Visit {Neurite AI}.', links: [{ label: 'Neurite AI', href: 'https://neuriteai.com/' }] },
      },
      {
        label: 'outcome',
        content: { type: 'paragraph', text: 'The work is ongoing, with contributions aimed at making responses more accurate, better grounded, and more useful in a medical context.' },
      },
      {
        label: 'reflection',
        content: {
          type: 'full',
          text: 'This project reinforced that in AI systems, confident output is not enough. The real work is improving what the model sees, how it retrieves context, and how its answers can be checked.',
        },
      },
    ],
  },
];

// ─── Principles ───────────────────────────────────────────────────────────────

export interface Principle {
  tag: string;
  text: string;
  expand: string;
}

export const principles: Principle[] = [
  {
    tag: '[PRINCIPLE_01]',
    text: "Choose systems the team can reason about, not systems that only impress on paper.",
    expand:
      "In Sezone, that meant avoiding a heavier orchestration stack even though it might have looked more advanced on paper. I chose a queue-based model with tenant-aware scheduling because the real requirement was not architectural theater, it was production clarity. When something failed, the team needed to know which tenant was affected, what stage broke, what could be retried safely, and how to recover without depending on one person's memory. A system that looks sophisticated but becomes hard to debug under pressure creates more operational cost than value.",
  },
  {
    tag: '[PRINCIPLE_02]',
    text: 'Design for failure before designing for polish.',
    expand:
      'This principle showed up repeatedly in automation work like RPACPC Utility and the panel workflows. The hard part was rarely getting a demo to work once. The hard part was handling unstable sessions, partial batch completion, retries, timeouts, and ambiguous state when thousands or lakhs of records were involved. That is why I pay attention to recovery behavior, progress visibility, retry logic, and auditability early. Most real system pain does not come from the happy path. It comes from the unclear middle state between success and failure.',
  },
  {
    tag: '[PRINCIPLE_03]',
    text: 'Maintainability is a delivery feature, not something postponed until later.',
    expand:
      "I learned this most strongly from systems that became operationally important after launch. A deployment is not truly finished if somebody else cannot run it safely, understand the moving parts, and recover it when something breaks. In practice, this means repeatable deployment flow, readable logs, clear naming, observable jobs, and enough documentation for the next engineer or operator to work effectively. Maintainability is not cleanup work after delivery. It is part of whether the software remains useful once real people depend on it every day.",
  },
  {
    tag: '[PRINCIPLE_04]',
    text: 'Automation should remove repetition, not hide uncertainty.',
    expand:
      'I care about this especially in operational and verification-heavy systems. If a workflow still contains judgment, exceptions, or external instability, the software should expose that clearly instead of pretending everything is safely automated. Good automation reduces repetitive work while still showing users what is happening, where attention is needed, and how recovery should happen. That is why operator-facing progress, visible status, and explicit handling of uncertain states matter so much in the desktop utility and panel work. Hiding uncertainty behind a smooth UI usually creates more downstream confusion.',
  },
  {
    tag: '[PRINCIPLE_05]',
    text: 'Measure what matters, especially when the output looks convincing.',
    expand:
      "This became especially important in Neurite AI. In AI systems, fluent output can make a weak system look stronger than it really is. That is why I focus on retrieval quality, grounding, evaluation, and data preparation instead of treating prompting alone as the solution. The useful question is not whether the system sounds confident. The useful question is whether the answer is supported, relevant, and checkable in a domain where correctness matters. If the measurement is weak, the system can appear impressive while still failing the real task.",
  },
];

// ─── Technical Depth ──────────────────────────────────────────────────────────

export interface DashboardCard {
  label: string;
  text: string;
}

export const depthCards: DashboardCard[] = [
  {
    label: 'backend_systems',
    text: 'Built queue-based processing, tenant-aware scheduling, and deployment flows for automation workloads that move hundreds of thousands of records. The main problem was not writing workers; it was keeping failure isolation, traceability, and operational confidence as load grew.',
  },
  {
    label: 'performance_and_reliability',
    text: 'Improved throughput by moving fragile single-process execution into async pipelines and reduced deployment time through Docker, Nginx, and CI/CD standardization. The useful gains came from removing avoidable manual steps and unstable execution paths.',
  },
  {
    label: 'automation_tooling',
    text: 'Built operator-facing desktop automation where usability affected correctness. Progress feedback, retries, manifests, and recovery behavior mattered because the software replaced manual operational work rather than supporting it from a distance.',
  },
  {
    label: 'data_and_retrieval',
    text: 'Worked on retrieval pipelines, dataset validation, and semantic chunking for medical document querying. The technical challenge was not simply connecting an LLM, but improving how the right context is found, ranked, and verified.',
  },
];

// ─── Experience ───────────────────────────────────────────────────────────────

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  summary: string;
  bullets: string[];
  note: string;
}

export const experience: ExperienceItem[] = [
  {
    company: 'Azlogics Pvt. Ltd.',
    role: 'Software Developer',
    period: 'July 2025 - Present',
    summary: 'Building and maintaining live SaaS, automation, AI, and internal platform products.',
    bullets: [
      'Own Sezone end to end across system design, backend, frontend, deployment, optimization, admin panel, client panel, and production support.',
      'Build and maintain production systems across MERN, Node.js, Electron, automation tooling, and AI-assisted products.',
      'Contributed to RPACPC panels, RPACPC Utility, AZAPI.ai, Azom360, APEX, and Neurite AI in live business environments.',
    ],
    note: 'This role strengthened my ability to work across product scope, architecture, implementation, deployment, and ongoing operational ownership.',
  },
  {
    company: 'Azlogics Pvt. Ltd.',
    role: 'Software Developer Intern',
    period: 'Jan 2025 - June 2025',
    summary: 'Worked on verification workflows, utilities, and internal automation during internship.',
    bullets: [
      'Worked on RPACPC admin and client panel workflows, API automation, and backend validation improvements.',
      'Served as the primary developer maintaining and enhancing the RPACPC Electron utility used by internal teams.',
      'Built internal automation support tools including AZAPI-oriented OCR and CAPTCHA workflow helpers.',
    ],
    note: 'This phase gave me real production exposure early and built the base for the ownership I took on later as a full-time developer.',
  },
  {
    company: 'Litsbros: Laksh IT Solutions Pvt. Ltd.',
    role: 'Full-Stack Development Intern',
    period: 'June 2024 - Dec 2024',
    summary: 'Learned to become effective quickly inside a Java and Spring Boot environment.',
    bullets: [
      'Worked on full-stack development using Spring Boot, Hibernate, JDBC, SQL, and responsive UI implementation.',
      'Learned to understand unfamiliar systems by tracing logs, tests, and data flow instead of waiting for walkthroughs.',
      'Became more disciplined about understanding real execution paths before proposing changes.',
    ],
    note: 'The biggest gain here was learning how to become useful quickly in an existing codebase with stronger conventions and less handholding.',
  },
];

// ─── Runtime (Now) ────────────────────────────────────────────────────────────

export const runtimeCards: DashboardCard[] = [
  {
    label: 'current_scope',
    text: 'Owning Sezone in production while contributing to live company products including RPACPC workflows, Neurite AI, AZAPI.ai, Azom360, and other operational software.',
  },
  {
    label: 'learning',
    text: 'How retrieval systems, evaluation workflows, and AI-assisted product layers behave when correctness, grounding, and trust matter more than novelty.',
  },
  {
    label: 'best_fit',
    text: 'High-ownership software roles where I can work across architecture, backend, frontend, deployment, debugging, and long-term maintenance.',
  },
  {
    label: 'looking_for',
    text: 'Engineering teams that value dependable execution, production thinking, and developers who can take responsibility for complete systems.',
  },
];

// ─── Engineering Notes ────────────────────────────────────────────────────────

export interface IncidentCard {
  marker: string;
  title: string;
  text: string;
}

export const engineeringNotes: IncidentCard[] = [
  {
    marker: 'note_01',
    title: 'Teams trust software faster when they can see what it is doing',
    text: 'Logs, progress state, and explicit recovery paths are often more persuasive than promising that the system is automated.',
  },
  {
    marker: 'note_02',
    title: 'The right architecture is often the one the team can operate repeatedly',
    text: 'Operational clarity beats theoretical elegance when the same people have to ship, support, and debug the system.',
  },
  {
    marker: 'note_03',
    title: 'Most production pain comes from ambiguous state',
    text: 'When a record is neither clearly processed nor clearly failed, every downstream step becomes more expensive.',
  },
];

// ─── Failures ─────────────────────────────────────────────────────────────────

export const failures: IncidentCard[] = [
  {
    marker: 'lesson_01',
    title: 'I have built systems that worked but were too dependent on me',
    text: 'A deployment process is not done when it is technically successful. It is done when somebody else can run it, understand it, and recover it without guesswork.',
  },
  {
    marker: 'lesson_02',
    title: 'I have added automation before failure handling was mature enough',
    text: 'The result was ambiguous state and harder recovery. That experience made me much more deliberate about manifests, retries, and explicit recovery design.',
  },
];
