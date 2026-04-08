const nav = document.getElementById('nav');
document.documentElement.classList.add('js');

const themeToggle = document.getElementById('themeToggle');
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const mobileLinks = document.querySelectorAll('.mobile-link');
const focusEl = document.getElementById('focusRotating');
const projectTabs = document.querySelectorAll('[data-project-target]');
const projectPanels = document.querySelectorAll('.project-panel');
const principles = document.querySelectorAll('.principle');
const caseCards = document.querySelectorAll('.case-card');
const revealTargets = document.querySelectorAll('.hero-copy, .hero-terminal, .workspace, .project-panel, .principles, .principle, .experience-grid, .experience-card, .dashboard-grid, .dashboard-card, .incident-list, .incident-card, .contact-panel');
const mobileProjectMatcher = window.matchMedia('(max-width: 767px)');
const root = document.documentElement;

function applyTheme(theme) {
  root.dataset.theme = theme;
  localStorage.setItem('portfolio-theme', theme);

  if (!themeToggle) return;

  themeToggle.textContent = `theme: ${theme}`;
  themeToggle.setAttribute('aria-pressed', String(theme === 'dark'));
}

if (themeToggle) {
  applyTheme(root.dataset.theme === 'light' ? 'light' : 'dark');

  themeToggle.addEventListener('click', () => {
    const nextTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    applyTheme(nextTheme);
  });
}

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 24);
}, { passive: true });

function closeMenu() {
  hamburger.classList.remove('open');
  hamburger.setAttribute('aria-expanded', 'false');
  mobileMenu.classList.remove('open');
  document.body.style.overflow = '';
}

if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    const isOpen = hamburger.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', String(isOpen));
    mobileMenu.classList.toggle('open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });
}

mobileLinks.forEach((link) => link.addEventListener('click', closeMenu));

const focusTerms = [
  'building software teams can run, debug, and trust',
  'owning SaaS products end to end',
  'reducing person-dependent workflows',
  'retrieval systems that can be evaluated',
  'production reliability under load'
];

if (focusEl) {
  let focusIndex = 0;
  window.setInterval(() => {
    focusEl.style.opacity = '0';
    window.setTimeout(() => {
      focusIndex = (focusIndex + 1) % focusTerms.length;
      focusEl.textContent = focusTerms[focusIndex];
      focusEl.style.opacity = '1';
    }, 180);
  }, 2800);
}

function activateProject(tab) {
  const targetId = tab.dataset.projectTarget;
  if (!targetId) return;

  projectTabs.forEach((item) => {
    const active = item === tab;
    const matchesTarget = item.dataset.projectTarget === targetId;
    item.classList.toggle('is-active', matchesTarget);
    item.setAttribute('aria-selected', String(matchesTarget));
    item.tabIndex = matchesTarget ? 0 : -1;
  });

  projectPanels.forEach((panel) => {
    const active = panel.id === targetId;
    panel.classList.toggle('is-active', active);
    panel.hidden = !active;
    if (active) panel.classList.add('visible');
  });
}

projectTabs.forEach((tab) => {
  tab.addEventListener('click', () => activateProject(tab));
  tab.addEventListener('keydown', (event) => {
    const siblingTabs = Array.from(tab.parentElement.querySelectorAll('[data-project-target]'));
    const currentIndex = siblingTabs.indexOf(tab);
    if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
      event.preventDefault();
      const next = siblingTabs[(currentIndex + 1) % siblingTabs.length];
      next.focus();
      activateProject(next);
    }
    if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
      event.preventDefault();
      const prev = siblingTabs[(currentIndex - 1 + siblingTabs.length) % siblingTabs.length];
      prev.focus();
      activateProject(prev);
    }
  });
});

const mobileStepMap = {
  problem: '01 / problem',
  context: 'detail / context',
  approach: '02 / thinking',
  architecture: '03 / execution',
  'trade-offs': 'detail / trade-offs',
  outcome: '04 / outcome',
  reflection: 'detail / reflection'
};

function setupCaseCards() {
  caseCards.forEach((card) => {
    if (card.dataset.enhanced === 'true') return;

    const label = card.querySelector('.case-label');
    if (!label) return;

    const labelText = label.textContent.trim().toLowerCase();
    const isCore = ['problem', 'approach', 'outcome'].includes(labelText);
    const content = document.createElement('div');
    const toggle = document.createElement('button');
    const labelSpan = document.createElement('span');
    const icon = document.createElement('span');

    card.dataset.mobileStep = mobileStepMap[labelText] || `detail / ${labelText}`;
    card.classList.add(isCore ? 'is-core' : 'is-collapsible');

    labelSpan.className = 'case-label';
    labelSpan.textContent = label.textContent;

    icon.className = 'case-card-icon';
    icon.setAttribute('aria-hidden', 'true');
    icon.textContent = '+';

    toggle.className = 'case-card-toggle';
    toggle.type = 'button';
    toggle.append(labelSpan, icon);

    content.className = 'case-card-content';

    let sibling = label.nextElementSibling;
    while (sibling) {
      const next = sibling.nextElementSibling;
      content.appendChild(sibling);
      sibling = next;
    }

    label.replaceWith(toggle);
    card.appendChild(content);
    card.dataset.enhanced = 'true';
  });
}

function syncCaseCards() {
  const mobileView = mobileProjectMatcher.matches;

  caseCards.forEach((card) => {
    const toggle = card.querySelector('.case-card-toggle');
    const expanded = card.classList.contains('is-core') ? true : card.classList.contains('is-expanded');

    card.dataset.mobileStep = card.dataset.mobileStep || '';

    if (!toggle) return;

    if (mobileView) {
      toggle.disabled = false;
      toggle.setAttribute('aria-expanded', String(expanded));
    } else {
      card.classList.remove('is-expanded');
      toggle.disabled = true;
      toggle.setAttribute('aria-expanded', 'true');
    }
  });
}

setupCaseCards();
syncCaseCards();

if (typeof mobileProjectMatcher.addEventListener === 'function') {
  mobileProjectMatcher.addEventListener('change', syncCaseCards);
} else if (typeof mobileProjectMatcher.addListener === 'function') {
  mobileProjectMatcher.addListener(syncCaseCards);
}

caseCards.forEach((card) => {
  const toggle = card.querySelector('.case-card-toggle');
  if (!toggle || card.classList.contains('is-core')) return;

  toggle.addEventListener('click', () => {
    if (!mobileProjectMatcher.matches) return;
    const isExpanded = card.classList.toggle('is-expanded');
    toggle.setAttribute('aria-expanded', String(isExpanded));
  });
});

principles.forEach((principle) => {
  principle.addEventListener('click', () => {
    principles.forEach((item) => {
      if (item !== principle) item.classList.remove('open');
    });
    principle.classList.toggle('open');
  });
});

revealTargets.forEach((target, index) => {
  target.classList.add('reveal', 'visible');
  target.style.transitionDelay = `${Math.min(index * 0.03, 0.18)}s`;
});
