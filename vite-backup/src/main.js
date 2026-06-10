import './style.css'
import contentData from './content.json'

// State
let currentLang = 'en';

// DOM Elements
const langSwitchBtn = document.getElementById('lang-switch');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  console.log('Consiglieri loaded - Auto-deploy active');
  updateContent();
  setupObserver();
  setupTriage();
  setupContactForm();

  langSwitchBtn.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'pt' : 'en';
    updateContent();
  });
});

function updateContent() {
  const data = contentData[currentLang];

  // 1. Simple Text Replacements
  const keys = [
    'nav.principles', 'nav.diagnostic', 'nav.engagement', 'nav.cases', 'nav.contact',
    'hero.h1', 'hero.subline', 'hero.supporting', 'hero.cta',
    'principles.title',
    // New Diagnostic fields
    'diagnostic.title', 'diagnostic.usage', 'diagnostic.received',
    'diagnostic.preparation_title', 'diagnostic.preparation_body',
    'diagnostic.subsection_title', 'diagnostic.outcome_disclaimer', 'diagnostic.exclusion',

    'engagement_model.title', 'engagement_model.explicit_statement', 'engagement_model.not_fit_title',
    'cases.title',
    'contact.header', 'contact.disclaimer',
    'contact.form.name', 'contact.form.email', 'contact.form.message', 'contact.form.submit',
    'footer.boundary_title', 'footer.boundary_body', 'footer.rights'
  ];

  keys.forEach(key => {
    const els = document.querySelectorAll(`[data-i18n="${key}"]`);
    els.forEach(el => {
      const value = getNestedValue(data, key);
      if (value) {
        // Handle newlines for specific body text fields
        if (key.includes('body') || key.includes('received')) {
          el.innerHTML = value.replace(/\n/g, '<br>');
        } else {
          el.textContent = value;
        }
      }
    });
  });

  // 2. Dynamic Lists/Grids

  // Principles
  renderPrinciples(data.principles.items);

  // Hero Benefits
  renderList('hero-benefits', data.hero.benefits);

  // Diagnostic Outcomes
  renderList('diagnostic-outcomes', data.diagnostic.outcomes);

  // Engagement Model Items
  renderEngagementItems(data.engagement_model.model_items);

  // Not Fit List
  renderList('not-fit-list', data.engagement_model.not_fit_items);

  // Cases
  renderCases(data.cases.items);

  // Dynamic Elements
  langSwitchBtn.textContent = currentLang === 'en' ? 'PT' : 'EN';
}

function setupTriage() {
  const btnTriage = document.getElementById('btn-triage');
  const select = document.getElementById('primary-need');
  const triageStep = document.getElementById('triage-step');
  const contactFields = document.getElementById('contact-fields');
  const notFitMsg = document.getElementById('not-fit-message');

  if (!btnTriage) return;

  // Reset visibility just in case
  btnTriage.addEventListener('click', () => {
    const val = select.value;
    if (!val) {
      select.style.borderColor = 'red';
      return;
    }

    if (val === 'execution' || val === 'software') {
      // Block
      triageStep.style.display = 'none';
      notFitMsg.style.display = 'block';
    } else {
      // Allow
      triageStep.style.display = 'none';
      contactFields.style.display = 'block';
    }
  });
}

function setupContactForm() {
  const submitBtn = document.querySelector('#contact-fields button');
  const primaryNeedInput = document.getElementById('primary-need');

  if (!submitBtn) return;

  submitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    // Get values
    const name = document.querySelector('input[type="text"]').value;
    const email = document.querySelector('input[type="email"]').value;
    const message = document.querySelector('textarea').value;
    const need = primaryNeedInput.options[primaryNeedInput.selectedIndex].text;

    // Basic Validation
    if (!name || !email) {
      alert('Please fill in your Name and Email.');
      return;
    }

    // Construct Email
    const subject = encodeURIComponent(`Consiglieri Inquiry: ${need} - ${name}`);
    const bodyHeader = `Name: ${name}%0D%0AEmail: ${email}%0D%0APrimary Need: ${need}%0D%0A%0D%0A--------------------------------%0D%0A%0D%0AMessage:%0D%0A`;
    const bodyContent = encodeURIComponent(message);
    const fullBody = bodyHeader + bodyContent;

    // Open Mail Client
    window.location.href = `mailto:contact@consiglieri.solutions?subject=${subject}&body=${fullBody}`;
  });
}


function renderPrinciples(items) {
  const grid = document.getElementById('principles-grid');
  if (!grid) return;
  grid.innerHTML = '';
  items.forEach(item => {
    const col = document.createElement('div');
    col.className = 'principle-col';
    col.innerHTML = `
            <h3>${item.title}</h3>
            <p>${item.body.replace(/\n/g, '<br>')}</p> 
        `;
    grid.appendChild(col);
  });
}

function renderEngagementItems(items) {
  const grid = document.getElementById('engagement-model-items');
  if (!grid) return;
  grid.innerHTML = '';
  items.forEach(item => {
    const div = document.createElement('div');
    div.className = 'engagement-col';
    div.innerHTML = `
            <h3>${item.title}</h3>
            <p>${item.body.replace(/\n/g, '<br>')}</p>
        `;
    grid.appendChild(div);
  });
}

function renderList(elementId, items) {
  const ul = document.getElementById(elementId);
  if (!ul) return;
  ul.innerHTML = items.map(item => `<li>${item}</li>`).join('');
}

function renderCases(items) {
  const container = document.getElementById('cases-list');
  if (!container) return;
  container.innerHTML = '';
  items.forEach(item => {
    const div = document.createElement('div');
    div.className = 'case-item';
    div.innerHTML = `
            <h3>${item.title}</h3>
            <p>${item.body.replace(/\n/g, '<br>')}</p>
        `;
    container.appendChild(div);
  });
}

function getNestedValue(obj, path) {
  return path.split('.').reduce((acc, part) => acc && acc[part], obj);
}

function setupObserver() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.institutional-section').forEach(section => {
    section.classList.add('flow-section');
    observer.observe(section);
  });
}