import { translations, type Lang } from '../data/translations';

const videoLoader = document.getElementById('videoLoader');
const bgVideo = document.getElementById('bgVideo') as HTMLVideoElement | null;

function hideVideoLoader() {
  videoLoader?.classList.add('is-loaded');
}

if (bgVideo) {
  if (bgVideo.readyState >= 2) {
    hideVideoLoader();
  } else {
    bgVideo.addEventListener('loadeddata', hideVideoLoader, { once: true });
  }
} else {
  hideVideoLoader();
}

const navbar = document.getElementById('navbar');

function handleScroll() {
  if (window.scrollY > 50) {
    navbar?.classList.add('scrolled');
  } else {
    navbar?.classList.remove('scrolled');
  }
}

window.addEventListener('scroll', handleScroll);
handleScroll();

const hScrollWrapper = document.getElementById('hScrollWrapper');
const hScrollTrack = document.getElementById('hScrollTrack');

const SECTION_IDS = ['skills', 'proyectos', 'sobre-mi', 'formacion'];
const PANEL_COUNT = SECTION_IDS.length;
const MAX_SHIFT = ((PANEL_COUNT - 1) / PANEL_COUNT) * 100;

const mobileQuery = window.matchMedia('(max-width: 1024px)');
const isMobileScroll = () => mobileQuery.matches;

function updateHorizontalScroll() {
  if (!hScrollWrapper || !hScrollTrack || isMobileScroll()) return;
  const rect = hScrollWrapper.getBoundingClientRect();
  const scrollableDistance = hScrollWrapper.offsetHeight - window.innerHeight;
  const progress = scrollableDistance > 0 ? Math.min(Math.max(-rect.top / scrollableDistance, 0), 1) : 0;
  hScrollTrack.style.transform = `translateX(-${progress * MAX_SHIFT}%)`;
}

window.addEventListener('scroll', updateHorizontalScroll, { passive: true });
window.addEventListener('resize', updateHorizontalScroll);
updateHorizontalScroll();

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (e) => {
    const targetId = link.getAttribute('href')?.slice(1);
    if (!targetId) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const targetEl = document.getElementById(targetId);
    if (!targetEl) return;
    const panelIndex = SECTION_IDS.indexOf(targetId);

    if (isMobileScroll() || panelIndex === -1 || !hScrollWrapper) {
      e.preventDefault();
      targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }

    e.preventDefault();
    const wrapperTop = window.scrollY + hScrollWrapper.getBoundingClientRect().top;
    const scrollableDistance = hScrollWrapper.offsetHeight - window.innerHeight;
    const targetFraction = panelIndex / (PANEL_COUNT - 1);
    const destination = wrapperTop + targetFraction * scrollableDistance;
    window.scrollTo({ top: destination, behavior: 'smooth' });
  });
});

const revealElements = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle('is-visible', entry.isIntersecting);
    });
  },
  { threshold: 0.15 }
);
revealElements.forEach((el) => revealObserver.observe(el));

const navSectionLinks = new Map<string, HTMLAnchorElement>();
SECTION_IDS.concat('contacto').forEach((id) => {
  const link = document.querySelector<HTMLAnchorElement>(`.nav-links a[href="#${id}"]`);
  if (link) navSectionLinks.set(id, link);
});

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const link = navSectionLinks.get(entry.target.id);
      if (link) link.classList.toggle('active', entry.isIntersecting);
    });
  },
  { threshold: 0.5 }
);
navSectionLinks.forEach((_link, id) => {
  const section = document.getElementById(id);
  if (section) sectionObserver.observe(section);
});

const langToggle = document.getElementById('langToggle');
const i18nElements = document.querySelectorAll('[data-i18n]');
const langOptions = document.querySelectorAll('.lang-option');

function applyLang(lang: Lang) {
  i18nElements.forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (key && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  langOptions.forEach((el) => {
    el.classList.toggle('is-active', el.getAttribute('data-lang-option') === lang);
  });

  document.documentElement.setAttribute('lang', lang);
  localStorage.setItem('lang', lang);
}

langToggle?.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('lang') === 'en' ? 'en' : 'es';
  applyLang(current === 'es' ? 'en' : 'es');
});

const savedLang = localStorage.getItem('lang');
if (savedLang === 'en') {
  applyLang('en');
}

// Lógica de Menú Móvil
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-links a');

menuToggle?.addEventListener('click', () => {
  const isOpen = navLinks?.classList.toggle('is-open');
  menuToggle.classList.toggle('is-open');
  navbar?.classList.toggle('menu-open', isOpen);
  menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  document.body.classList.toggle('menu-open', isOpen);
});

navLinksItems.forEach((link) => {
  link.addEventListener('click', () => {
    navLinks?.classList.remove('is-open');
    menuToggle?.classList.remove('is-open');
    navbar?.classList.remove('menu-open');
    menuToggle?.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-open');
  });
});
