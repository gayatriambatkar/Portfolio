export type CaseContent =
  | { type: 'paragraph'; text: string; links?: { label: string; href: string }[] }
  | { type: 'list'; items: string[] }
  | { type: 'full'; text: string };

export interface RecruiterField {
  label: string;
  value: string;
}

export interface ProjectCase {
  label: string;
  content: CaseContent;
}

export interface ProjectLink {
  label: string;
  href: string;
}

export interface ProjectVisualStat {
  label: string;
  value: string;
}

export interface ProjectVisualFlow {
  from: string;
  to: string;
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
  summary: string;
  recruiterSnapshot: RecruiterField[];
  visualTitle: string;
  visualSummary: string;
  visualStats: ProjectVisualStat[];
  visualFlow: ProjectVisualFlow[];
  cases: ProjectCase[];
}

export const projects: Project[] = [
  {
    id: 'sezone',
    index: '01',
    title: 'Sezone',
    filename: 'sezone.case-study.ts',
    kicker: 'flagship SaaS | end-to-end ownership',
    status: 'live',
    tabMeta: 'sezone.in / moon.sezone.in',
    tabLinks: [
      { label: 'visit website', href: 'https://www.sezone.in/' },
      { label: 'visit moon.sezone.in', href: 'https://moon.sezone.in' },
    ],
    summary:
      'I built and continue to operate Sezone as a production SaaS system spanning architecture, backend workflows, frontend surfaces, deployment, and long-term maintenance.',
    recruiterSnapshot: [
      { label: 'Role', value: 'Software Developer, primary product owner' },
      { label: 'Team size', value: 'Small product team; I owned the engineering core' },
      { label: 'Timeline', value: '2025 - Present' },
      { label: 'Stack', value: 'Node.js, React, TypeScript, MongoDB, Docker, Nginx, PM2' },
      { label: 'What I owned', value: 'System design, backend workers, frontend panels, deployment, optimization, production support' },
      { label: 'Key outcome', value: 'Reached about 99% pipeline reliability and improved deployment speed by roughly 60%' },
    ],
    visualTitle: 'Tenant-aware execution pipeline',
    visualSummary: 'A multi-tenant SaaS flow built for scale, failure isolation, and production recovery rather than one-off demos.',
    visualStats: [
      { label: 'records / run', value: '200k+' },
      { label: 'credentials', value: '1,400+' },
      { label: 'pipeline reliability', value: '99%' },
    ],
    visualFlow: [
      { from: 'tenant jobs', to: 'queue workers' },
      { from: 'queue workers', to: 'admin/client panels' },
      { from: 'admin/client panels', to: 'deployment + monitoring' },
    ],
    cases: [
      {
        label: 'problem',
        content: {
          type: 'paragraph',
          text: 'The business needed a multi-tenant SaaS platform that could replace disconnected internal scripts with a dependable product for both admins and clients.',
        },
      },
      {
        label: 'context',
        content: {
          type: 'paragraph',
          text: 'I owned the engineering core across system design, backend execution, frontend panels, deployment, optimization, and production troubleshooting while supporting 200,000+ records per run and 1,400+ credentials.',
        },
      },
      {
        label: 'approach',
        content: {
          type: 'paragraph',
          text: 'I designed the platform around tenant-aware scheduling, queue-based execution, and operational clarity so the team could run and debug it safely under live conditions.',
        },
      },
      {
        label: 'key decision',
        content: {
          type: 'paragraph',
          text: 'I chose queue workers with tenant-aware scheduling over a more heavyweight orchestration setup because the critical need was traceability and safe recovery, not architectural complexity for its own sake.',
        },
      },
      {
        label: 'architecture',
        content: {
          type: 'list',
          items: [
            'Built backend services and async workers to isolate failures and improve throughput.',
            'Shipped frontend surfaces, admin workflows, and client-facing flows needed for real usage.',
            'Standardized deployments with Docker, Nginx, and PM2 to reduce manual dependency.',
            'Continued owning production maintenance and optimization after launch instead of treating delivery as complete.',
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
          text: 'Reached about 99% pipeline reliability, improved deployment speed by roughly 60%, and gave the business a maintainable SaaS product that I still operate and improve.',
        },
      },
      {
        label: 'reflection',
        content: {
          type: 'full',
          text: 'This is the clearest example of my best fit: high-ownership engineering where architecture, implementation, deployment, and production support all matter.',
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
    tabMeta: 'internal desktop application',
    summary:
      'I maintained and improved an Electron-based operations tool used to process very large verification-heavy service batches more reliably than manual workflows.',
    recruiterSnapshot: [
      { label: 'Role', value: 'Primary maintainer for the desktop utility' },
      { label: 'Team size', value: 'Internal operations + engineering collaboration' },
      { label: 'Timeline', value: '2025 - Present' },
      { label: 'Stack', value: 'Electron.js, Node.js, batch automation workflows' },
      { label: 'What I owned', value: 'Reliability improvements, debugging, packaging, execution visibility, operator usability' },
      { label: 'Key outcome', value: 'Reduced heavy processing time from about 6 hours to around 30 minutes for core flows' },
    ],
    visualTitle: 'Operator-facing batch workflow',
    visualSummary: 'A desktop workflow focused on visible progress, safer retries, and less manual effort for verification-heavy batches.',
    visualStats: [
      { label: 'processing time', value: '6h -> 30m' },
      { label: 'workload', value: 'large batch runs' },
      { label: 'mode', value: 'desktop ops tool' },
    ],
    visualFlow: [
      { from: 'data upload', to: 'workflow runner' },
      { from: 'workflow runner', to: 'progress + retry state' },
      { from: 'progress + retry state', to: 'operator output' },
    ],
    cases: [
      {
        label: 'problem',
        content: {
          type: 'paragraph',
          text: 'Manual RPACPC service workflows were too slow and error-prone for daily use when teams were handling very large batch volumes.',
        },
      },
      {
        label: 'context',
        content: {
          type: 'paragraph',
          text: 'Operators used the application as real production software for PAN to GST, PAN to Udyam, and related verification-heavy workflows where long-running execution had to stay visible and dependable.',
        },
      },
      {
        label: 'approach',
        content: {
          type: 'paragraph',
          text: 'I improved the Electron application as operational software, focusing on execution reliability, packaging, debugging, progress visibility, and operator-friendly recovery behavior.',
        },
      },
      {
        label: 'key decision',
        content: {
          type: 'paragraph',
          text: 'I treated progress visibility and recovery as core product requirements because hidden automation is risky when operators are running large batches and need to trust the state of the job.',
        },
      },
      {
        label: 'architecture',
        content: {
          type: 'list',
          items: [
            'Maintained an Electron shell for batch execution and operator-facing controls.',
            'Supported bulk service workflows such as PAN to GST and PAN to Udyam.',
            'Improved debugging, packaging, and execution reliability for repeated daily use.',
            'Kept status and recovery states visible for long-running jobs.',
          ],
        },
      },
      {
        label: 'outcome',
        content: {
          type: 'paragraph',
          text: 'Reduced heavy processing time from about 6 hours to roughly 30 minutes for core workflows and replaced repetitive manual effort with a faster desktop-driven batch process.',
        },
      },
      {
        label: 'reflection',
        content: {
          type: 'full',
          text: 'This project reinforced that operational software earns trust through visibility and recovery, not just by automating the happy path.',
        },
      },
    ],
  },
  {
    id: 'rpacpc-admin',
    index: '03',
    title: 'RPACPC Admin Panel',
    filename: 'rpacpc-admin.case-study.ts',
    kicker: 'admin operations | API automation',
    status: 'live',
    tabMeta: 'adminv2.rpacpc.com',
    tabLinks: [{ label: 'visit adminv2.rpacpc.com', href: 'https://adminv2.rpacpc.com/' }],
    summary:
      'I improved admin-side verification workflows by strengthening backend APIs, request validation, and automation around repetitive operational steps.',
    recruiterSnapshot: [
      { label: 'Role', value: 'Software Developer on admin-side workflow automation' },
      { label: 'Team size', value: 'Shared product delivery team' },
      { label: 'Timeline', value: '2025' },
      { label: 'Stack', value: 'Node.js, backend APIs, validation logic, admin workflows' },
      { label: 'What I owned', value: 'Verification automation, backend development, request/response validation' },
      { label: 'Key outcome', value: 'Reduced admin-side manual dependency and made verification behavior more dependable' },
    ],
    visualTitle: 'Verification-first admin flow',
    visualSummary: 'Admin-side operations improved by reducing repetitive checks and making validation behavior more explicit.',
    visualStats: [
      { label: 'focus', value: 'backend correctness' },
      { label: 'surface', value: 'admin panel' },
      { label: 'outcome', value: 'less manual dependency' },
    ],
    visualFlow: [
      { from: 'admin request', to: 'API validation' },
      { from: 'API validation', to: 'verification automation' },
      { from: 'verification automation', to: 'clearer admin operations' },
    ],
    cases: [
      {
        label: 'problem',
        content: {
          type: 'paragraph',
          text: 'Admin-side verification needed to be more reliable and less dependent on repetitive manual checks.',
        },
      },
      {
        label: 'context',
        content: {
          type: 'paragraph',
          text: 'This work sat close to live operational workflows, so backend correctness and validation quality had a direct effect on usability and trust.',
        },
      },
      {
        label: 'approach',
        content: {
          type: 'paragraph',
          text: 'I focused on verification automation and stronger validation logic so the panel could support admin teams with less manual overhead.',
        },
      },
      {
        label: 'key decision',
        content: {
          type: 'paragraph',
          text: 'I prioritized stronger request and response validation before adding more workflow convenience because trust in internal software depends on correctness more than interface speed alone.',
        },
      },
      {
        label: 'architecture',
        content: {
          type: 'list',
          items: [
            'Worked on backend APIs supporting admin operations.',
            'Improved automation around verification-heavy flows.',
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
        content: {
          type: 'paragraph',
          text: 'Reduced manual dependency in admin-side verification and made backend behavior more dependable for repeated operational use.',
        },
      },
      {
        label: 'reflection',
        content: {
          type: 'full',
          text: 'This work sharpened my instinct to fix validation and system trust first, then layer convenience on top.',
        },
      },
    ],
  },
  {
    id: 'neurite',
    index: '04',
    title: 'Neurite AI',
    filename: 'neurite.case-study.ts',
    kicker: 'medical AI | retrieval and validation',
    status: 'active',
    tabMeta: 'neuriteai.com',
    tabLinks: [{ label: 'visit neuriteai.com', href: 'https://neuriteai.com/' }],
    summary:
      'I contributed to a medical-domain AI product where retrieval quality, grounding, and dataset validation mattered more than making the model sound impressive.',
    recruiterSnapshot: [
      { label: 'Role', value: 'Engineering contributor on retrieval and validation quality' },
      { label: 'Team size', value: 'AI product team' },
      { label: 'Timeline', value: '2025 - Present' },
      { label: 'Stack', value: 'LLM workflows, retrieval pipelines, semantic chunking, dataset validation' },
      { label: 'What I owned', value: 'Retrieval preparation, data validation, grounding-oriented improvements, evaluation thinking' },
      { label: 'Key outcome', value: 'Improved grounding quality and made medical responses more dependable and checkable' },
    ],
    visualTitle: 'Grounded medical retrieval loop',
    visualSummary: 'An AI workflow optimized for context quality, verification, and dependable retrieval in a high-stakes domain.',
    visualStats: [
      { label: 'domain', value: 'medical AI' },
      { label: 'focus', value: 'grounded answers' },
      { label: 'priority', value: 'retrieval quality' },
    ],
    visualFlow: [
      { from: 'validated data', to: 'semantic chunking' },
      { from: 'semantic chunking', to: 'retrieval ranking' },
      { from: 'retrieval ranking', to: 'grounded response checks' },
    ],
    cases: [
      {
        label: 'problem',
        content: {
          type: 'paragraph',
          text: 'Medical users needed reliable answers from large document sets, but generic LLM behavior was risky unless responses stayed grounded enough to verify.',
        },
      },
      {
        label: 'context',
        content: {
          type: 'paragraph',
          text: 'I worked on data preparation, validation, retrieval quality, and model-support tasks in a domain where correctness matters more than interface novelty.',
        },
      },
      {
        label: 'approach',
        content: {
          type: 'paragraph',
          text: 'I focused on retrieval quality, semantic chunking, and evaluation-minded improvements so the system could return more useful and medically grounded answers.',
        },
      },
      {
        label: 'key decision',
        content: {
          type: 'paragraph',
          text: 'I prioritized retrieval and validation quality over prompt-only optimization because fluent output is not useful in medical contexts unless the answer is grounded and checkable.',
        },
      },
      {
        label: 'architecture',
        content: {
          type: 'list',
          items: [
            'Improved semantic chunking and retrieval preparation for better context quality.',
            'Worked on dataset validation and refinement for more dependable domain behavior.',
            'Supported grounding-oriented response design instead of relying only on prompting.',
            'Treated evaluation as part of engineering, not as a later review step.',
          ],
        },
      },
      {
        label: 'live link',
        content: {
          type: 'paragraph',
          text: 'Visit {Neurite AI}.',
          links: [{ label: 'Neurite AI', href: 'https://neuriteai.com/' }],
        },
      },
      {
        label: 'outcome',
        content: {
          type: 'paragraph',
          text: 'Improved grounding quality and made responses more accurate, more useful, and easier to verify in an ongoing medical AI product.',
        },
      },
      {
        label: 'reflection',
        content: {
          type: 'full',
          text: 'This project reinforced that trustworthy AI depends far more on what the model sees and how answers are checked than on how confident the output sounds.',
        },
      },
    ],
  },
];

export interface Principle {
  tag: string;
  text: string;
  expand: string;
}

export const principles: Principle[] = [
  {
    tag: '[HOW_I_WORK_01]',
    text: 'I optimize for systems teams can operate repeatedly, not just systems that look advanced.',
    expand:
      'That usually means choosing patterns with clearer debugging, safer recovery, and less person-dependence instead of heavier solutions that are harder to support under pressure.',
  },
  {
    tag: '[HOW_I_WORK_02]',
    text: 'I design for failure and recovery early because production pain lives between success and failure.',
    expand:
      'Progress visibility, retries, explicit state, and validation quality matter to me because real operators and teammates need to recover quickly when something goes wrong.',
  },
  {
    tag: '[HOW_I_WORK_03]',
    text: 'I treat maintainability as part of delivery, not cleanup work after launch.',
    expand:
      'Deployment flow, logs, naming, observability, and handoff quality are part of whether the software remains useful once other people depend on it every day.',
  },
];

export interface DashboardCard {
  label: string;
  text: string;
}

export interface SkillItem {
  name: string;
  category: string;
  accent: string;
  glyph: string;
  logo: string;
}

export const skills: SkillItem[] = [
  { name: 'Next.js', category: 'frontend framework', accent: 'var(--skill-slate)', glyph: 'N', logo: 'https://cdn.simpleicons.org/nextdotjs/FFFFFF' },
  { name: 'React', category: 'UI engineering', accent: 'var(--skill-cyan)', glyph: 'R', logo: 'https://cdn.simpleicons.org/react/61DAFB' },
  { name: 'TypeScript', category: 'typed apps', accent: 'var(--skill-blue)', glyph: 'TS', logo: 'https://cdn.simpleicons.org/typescript/3178C6' },
  { name: 'Node.js', category: 'backend runtime', accent: 'var(--skill-green)', glyph: 'ND', logo: 'https://cdn.simpleicons.org/nodedotjs/5FA04E' },
  { name: 'Express', category: 'API services', accent: 'var(--skill-emerald)', glyph: 'EX', logo: 'https://cdn.simpleicons.org/express/FFFFFF' },
  { name: 'MongoDB', category: 'document database', accent: 'var(--skill-lime)', glyph: 'MG', logo: 'https://cdn.simpleicons.org/mongodb/47A248' },
  { name: 'MySQL', category: 'relational data', accent: 'var(--skill-amber)', glyph: 'MY', logo: 'https://cdn.simpleicons.org/mysql/4479A1' },
  { name: 'Electron', category: 'desktop apps', accent: 'var(--skill-violet)', glyph: 'EL', logo: 'https://cdn.simpleicons.org/electron/47848F' },
  { name: 'Docker', category: 'deployment', accent: 'var(--skill-sky)', glyph: 'DK', logo: 'https://cdn.simpleicons.org/docker/2496ED' },
  { name: 'Nginx', category: 'infra gateway', accent: 'var(--skill-indigo)', glyph: 'NG', logo: 'https://cdn.simpleicons.org/nginx/009639' },
  { name: 'PM2', category: 'process runtime', accent: 'var(--skill-pink)', glyph: 'P2', logo: 'https://cdn.simpleicons.org/pm2/2B037A' },
  { name: 'Automation', category: 'workflow design', accent: 'var(--skill-orange)', glyph: 'AU', logo: 'https://cdn.simpleicons.org/n8n/EA4B71' },
  { name: 'REST APIs', category: 'integrations', accent: 'var(--skill-red)', glyph: 'API', logo: 'https://cdn.simpleicons.org/openapiinitiative/6BA539' },
  { name: 'AI Retrieval', category: 'grounded AI', accent: 'var(--skill-teal)', glyph: 'AI', logo: 'https://cdn.simpleicons.org/openai/FFFFFF' },
  { name: 'Semantic Chunking', category: 'RAG prep', accent: 'var(--skill-cyan)', glyph: 'SC', logo: 'https://cdn.simpleicons.org/weaviate/FFFFFF' },
  { name: 'CI/CD', category: 'release flow', accent: 'var(--skill-rose)', glyph: 'CI', logo: 'https://cdn.simpleicons.org/githubactions/2088FF' },
];

export const depthCards: DashboardCard[] = [
  {
    label: 'backend systems',
    text: 'Built queue-based processing, tenant-aware scheduling, and deployment flows for automation workloads that move hundreds of thousands of records.',
  },
  {
    label: 'performance + reliability',
    text: 'Improved throughput by moving fragile single-process execution into async pipelines and reduced deployment effort through more repeatable release flow.',
  },
  {
    label: 'automation tooling',
    text: 'Built operator-facing desktop automation where progress feedback, retries, and recovery behavior affected correctness as much as raw speed.',
  },
  {
    label: 'AI retrieval work',
    text: 'Worked on retrieval pipelines, dataset validation, and semantic chunking where grounded answers and evaluation quality mattered more than prompt-only tuning.',
  },
];

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
    period: 'June 2025 - Present',
    summary: 'Building and maintaining live SaaS, automation, AI, and internal platform products.',
    bullets: [
      'Own Sezone end to end across system design, backend, frontend, deployment, optimization, admin panel, client panel, and production support.',
      'Build and maintain production systems across Node.js, React, Electron, automation tooling, and AI-assisted products.',
      'Contributed to RPACPC workflows and Neurite AI inside live business environments with operational constraints.',
    ],
    note: 'This role sharpened my fit for high-ownership engineering work that spans architecture, implementation, deployment, and ongoing support.',
  },
  {
    company: 'Azlogics Pvt. Ltd.',
    role: 'Software Developer Intern',
    period: 'Jan 2025 - June 2025',
    summary: 'Worked on verification workflows, utilities, and internal automation during internship.',
    bullets: [
      'Worked on RPACPC admin and client panel workflows, API automation, and backend validation improvements.',
      'Served as the primary maintainer for the RPACPC Electron utility used by internal teams.',
      'Built internal automation support tools including OCR and CAPTCHA workflow helpers.',
    ],
    note: 'This phase gave me production exposure early and built the base for the ownership I later took on full time.',
  },
  {
    company: 'Litsbros: Laksh IT Solutions Pvt. Ltd.',
    role: 'Full-Stack Development Intern',
    period: 'June 2024 - Dec 2024',
    summary: 'Learned to become effective quickly inside a Java and Spring Boot environment.',
    bullets: [
      'Worked on full-stack development using Spring Boot, Hibernate, JDBC, SQL, and responsive UI implementation.',
      'Learned to understand unfamiliar systems by tracing logs, tests, and data flow instead of waiting for walkthroughs.',
      'Built stronger discipline around understanding real execution paths before proposing changes.',
    ],
    note: 'The biggest gain here was learning how to become useful quickly in an existing codebase with stronger conventions and less handholding.',
  },
];

export const runtimeCards: DashboardCard[] = [
  {
    label: 'current scope',
    text: 'Owning Sezone in production while contributing to workflow automation and AI-assisted product layers in live environments.',
  },
  {
    label: 'best fit',
    text: 'High-ownership software roles where I can work across architecture, backend, frontend, deployment, debugging, and long-term maintenance.',
  },
  {
    label: 'strongest environments',
    text: 'Teams that value dependable execution, clear thinking under production pressure, and engineers who can move from idea to support.',
  },
];

export interface IncidentCard {
  marker: string;
  title: string;
  text: string;
}

export const engineeringNotes: IncidentCard[] = [
  {
    marker: 'note_01',
    title: 'I care about operational clarity as much as feature delivery',
    text: 'Systems become more trustworthy when logs, progress state, and recovery paths are understandable to the team using them.',
  },
];

export const failures: IncidentCard[] = [
  {
    marker: 'lesson_01',
    title: 'I learned early that working software can still be too person-dependent',
    text: 'That pushed me to design for repeatable deployment, explicit recovery, and better handoff instead of optimizing only for initial delivery.',
  },
];
