/* =====================
   CURSOR
===================== */
const cursor = document.getElementById('cursor');
document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top  = e.clientY + 'px';
});
document.querySelectorAll('a, button, .proj-card, .tech-cloud span').forEach(el => {
  el.addEventListener('mouseenter', () => { cursor.style.width = '24px'; cursor.style.height = '24px'; });
  el.addEventListener('mouseleave', () => { cursor.style.width = '12px'; cursor.style.height = '12px'; });
});

/* =====================
   NAV SCROLL STYLE
===================== */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.style.background = window.scrollY > 60
    ? 'rgba(6,8,16,0.98)'
    : 'rgba(6,8,16,0.85)';
});

/* =====================
   ACTIVE NAV LINK
===================== */
const sections = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 130) current = s.id;
  });
  navLinks.forEach(link => {
    link.style.color = (link.getAttribute('href') === `#${current}`) ? 'var(--accent)' : '';
  });
});

/* =====================
   SCROLL REVEAL
===================== */
const revealEls = document.querySelectorAll('.proj-card, .tl-card, .sk-card, .cert-item, .cert-box, .edu-box, .c-row');

const revObs = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      const delay = (Array.from(revealEls).indexOf(e.target) % 3) * 80;
      setTimeout(() => {
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateY(0)';
      }, delay);
      revObs.unobserve(e.target);
    }
  });
}, { threshold: 0.08 });

revealEls.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(32px)';
  el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
  revObs.observe(el);
});

/* =====================
   SKILL BARS
===================== */
const fills = document.querySelectorAll('.sk-fill');
const fillObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('go');
      fillObs.unobserve(e.target);
    }
  });
}, { threshold: 0.3 });
fills.forEach(f => fillObs.observe(f));

/* =====================
   PIPELINE ANIMATION
===================== */
const pipeStages = document.querySelectorAll('.ps');
let activeIdx = 0;
function animatePipeline() {
  pipeStages.forEach((s, i) => {
    s.style.borderColor = '';
    s.style.color = '';
    s.style.background = '';
  });
  if (pipeStages.length) {
    const el = pipeStages[activeIdx % pipeStages.length];
    el.style.borderColor = 'var(--accent)';
    el.style.color = 'var(--accent)';
    el.style.background = 'rgba(0,229,255,0.06)';
    activeIdx++;
  }
}
setInterval(animatePipeline, 1000);

/* =====================
   TECH CLOUD HOVER
===================== */
document.querySelectorAll('.tech-cloud span').forEach(chip => {
  chip.addEventListener('mouseenter', () => {
    chip.style.transform = 'scale(1.08) translateY(-2px)';
  });
  chip.addEventListener('mouseleave', () => {
    chip.style.transform = '';
  });
});

/* =====================
   SMOOTH SCROLL
===================== */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

/* =====================
   PAGE ENTER FADE
===================== */
document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.5s ease';
window.addEventListener('load', () => {
  document.body.style.opacity = '1';
});

console.log('%c⚙️ Portfolio — Manjukrishna M', 'color:#00e5ff;font-size:15px;font-weight:bold;');
console.log('%cDevOps & AWS Engineer', 'color:#5a6080;font-size:12px;');
