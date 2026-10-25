// ==========================================================================
// ALEXANDER VANCE // DEVELOPER PORTFOLIO
// Architecture: Vanilla ES Modules (Inspired by Cathy Dollé)
// ==========================================================================

import { projects, developerBio } from './projects.js';

// Application State
const state = {
  activeView: 'list', // 'list' | 'slider' | 'labs'
  activeFilter: 'all',
  searchQuery: '',
  audioEnabled: true,
  theme: 'dark',
  hoveredProject: null,
  selectedPaletteIndex: 0,
  paletteResults: []
};

// Web Audio API Synthesizer (Zero external dependencies)
class SoundFX {
  constructor() {
    this.ctx = null;
  }

  init() {
    if (!this.ctx && (window.AudioContext || window.webkitAudioContext)) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  click() {
    if (!state.audioEnabled) return;
    this.init();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const now = this.ctx.currentTime;

      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, now);
      osc.frequency.exponentialRampToValueAtTime(120, now + 0.025);

      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.025);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.026);
    } catch {
      // Audio fallback silent
    }
  }

  modalChirp(open = true) {
    if (!state.audioEnabled) return;
    this.init();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const now = this.ctx.currentTime;

      osc.type = 'triangle';
      if (open) {
        osc.frequency.setValueAtTime(320, now);
        osc.frequency.exponentialRampToValueAtTime(680, now + 0.06);
      } else {
        osc.frequency.setValueAtTime(680, now);
        osc.frequency.exponentialRampToValueAtTime(240, now + 0.06);
      }

      gain.gain.setValueAtTime(0.1, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.061);
    } catch {
      // Audio fallback silent
    }
  }
}

const sfx = new SoundFX();

// Procedural SVG Generator for Project Artwork (Crisp, High-DPI Vector Aesthetics)
function getSvgPattern(type, title) {
  const strokeColor = 'currentColor';
  switch (type) {
    case 'binary':
      return `
        <svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg" style="color: #ffffff;">
          <defs>
            <pattern id="grid-bin" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#222" stroke-width="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="#080808"/>
          <rect width="100%" height="100%" fill="url(#grid-bin)"/>
          <g stroke="${strokeColor}" stroke-width="1.2" opacity="0.8">
            <rect x="60" y="40" width="80" height="40" stroke-dasharray="2 2"/>
            <rect x="220" y="40" width="120" height="50"/>
            <rect x="140" y="140" width="100" height="45"/>
            <path d="M 140 60 L 220 60" />
            <path d="M 280 90 L 280 160 L 240 160" />
            <path d="M 100 80 L 100 160 L 140 160" />
            <circle cx="220" cy="60" r="3" fill="#fff"/>
            <circle cx="140" cy="160" r="3" fill="#fff"/>
          </g>
          <text x="70" y="65" fill="#888" font-family="monospace" font-size="9">PE/ELF::0x7F</text>
          <text x="230" y="70" fill="#fff" font-family="monospace" font-size="11">AST::RECONSTRUCT</text>
          <text x="150" y="168" fill="#888" font-family="monospace" font-size="10">MCP_SERVER</text>
        </svg>
      `;
    case 'graph':
      return `
        <svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg" style="color: #ffffff;">
          <rect width="100%" height="100%" fill="#080808"/>
          <g stroke="#333" stroke-width="0.75">
            <line x1="80" y1="120" x2="200" y2="60"/>
            <line x1="80" y1="120" x2="160" y2="180"/>
            <line x1="200" y1="60" x2="300" y2="100"/>
            <line x1="160" y1="180" x2="280" y2="170"/>
            <line x1="300" y1="100" x2="280" y2="170"/>
            <line x1="200" y1="60" x2="280" y2="170"/>
          </g>
          <g fill="#fff">
            <circle cx="80" cy="120" r="5"/>
            <circle cx="200" cy="60" r="7"/>
            <circle cx="160" cy="180" r="4"/>
            <circle cx="300" cy="100" r="6"/>
            <circle cx="280" cy="170" r="5"/>
          </g>
          <circle cx="200" cy="60" r="16" stroke="#fff" stroke-width="1" stroke-dasharray="2 4"/>
          <text x="210" y="45" fill="#888" font-family="monospace" font-size="9">EMBEDDING_CLUSTER_A</text>
        </svg>
      `;
    case 'shader':
      return `
        <svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg" style="color: #ffffff;">
          <rect width="100%" height="100%" fill="#080808"/>
          <g stroke="#555" stroke-width="1">
            ${Array.from({ length: 14 }).map((_, i) => `
              <line x1="${i * 30}" y1="0" x2="${400 - i * 30}" y2="240" stroke-opacity="${0.2 + (i % 3) * 0.2}"/>
              <line x1="0" y1="${i * 20}" x2="400" y2="${240 - i * 20}" stroke-opacity="${0.2 + (i % 2) * 0.25}"/>
            `).join('')}
          </g>
          <rect x="140" y="70" width="120" height="100" stroke="#fff" stroke-width="1.5" fill="none"/>
          <text x="150" y="125" fill="#fff" font-family="monospace" font-size="11" font-weight="bold">RAYMARCH::4K</text>
        </svg>
      `;
    case 'storage':
      return `
        <svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg" style="color: #ffffff;">
          <rect width="100%" height="100%" fill="#080808"/>
          <g stroke="#fff" stroke-width="1">
            <rect x="60" y="40" width="280" height="28" stroke-dasharray="3 3"/>
            <rect x="60" y="80" width="280" height="28"/>
            <rect x="60" y="120" width="280" height="28" stroke-dasharray="3 3"/>
            <rect x="60" y="160" width="280" height="28"/>
            <line x1="140" y1="40" x2="140" y2="188" stroke-opacity="0.4"/>
            <line x1="220" y1="40" x2="220" y2="188" stroke-opacity="0.4"/>
          </g>
          <text x="70" y="58" fill="#888" font-family="monospace" font-size="9">MEMTABLE // WAL</text>
          <text x="70" y="98" fill="#fff" font-family="monospace" font-size="9">SSTABLE_L0 // RAFT LEADER</text>
          <text x="70" y="138" fill="#888" font-family="monospace" font-size="9">COMPACTED_BLOCK_L1</text>
          <text x="70" y="178" fill="#fff" font-family="monospace" font-size="9">SPARSE_INDEX // SHARD 03</text>
        </svg>
      `;
    case 'minimal':
      return `
        <svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg" style="color: #ffffff;">
          <rect width="100%" height="100%" fill="#080808"/>
          <circle cx="200" cy="120" r="70" stroke="#444" stroke-width="1"/>
          <circle cx="200" cy="120" r="35" stroke="#fff" stroke-width="1.5"/>
          <circle cx="200" cy="120" r="4" fill="#fff"/>
          <line x1="200" y1="20" x2="200" y2="220" stroke="#333" stroke-width="0.5" stroke-dasharray="4 4"/>
          <line x1="70" y1="120" x2="330" y2="120" stroke="#333" stroke-width="0.5" stroke-dasharray="4 4"/>
          <text x="210" y="115" fill="#fff" font-family="monospace" font-size="9">1.8KB::ZERO_DEP</text>
        </svg>
      `;
    default:
      return `
        <svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg" style="color: #ffffff;">
          <rect width="100%" height="100%" fill="#080808"/>
          <g stroke="#333" stroke-width="1">
            <line x1="40" y1="40" x2="360" y2="200"/>
            <line x1="40" y1="200" x2="360" y2="40"/>
            <rect x="120" y="60" width="160" height="120" stroke="#fff"/>
          </g>
          <circle cx="200" cy="120" r="6" fill="#fff"/>
          <text x="130" y="125" fill="#fff" font-family="monospace" font-size="10">${title.toUpperCase()}</text>
        </svg>
      `;
  }
}

// DOM Elements Cache
const DOM = {
  header: document.getElementById('siteHeader'),
  toggleList: document.getElementById('toggleList'),
  toggleSlider: document.getElementById('toggleSlider'),
  toggleLabs: document.getElementById('toggleLabs'),
  searchTriggerBtn: document.getElementById('searchTriggerBtn'),
  aboutTriggerBtn: document.getElementById('aboutTriggerBtn'),
  audioToggleBtn: document.getElementById('audioToggleBtn'),
  audioStatusText: document.getElementById('audioStatusText'),
  themeToggleBtn: document.getElementById('themeToggleBtn'),
  liveClock: document.getElementById('liveClock'),
  filterPills: document.querySelectorAll('.filter-pill'),
  resultsCount: document.getElementById('resultsCount'),

  // Viewports
  listViewSection: document.getElementById('listViewSection'),
  sliderViewSection: document.getElementById('sliderViewSection'),
  labsViewSection: document.getElementById('labsViewSection'),
  projectListContainer: document.getElementById('projectListContainer'),
  sliderTrack: document.getElementById('sliderTrack'),
  sliderPrevBtn: document.getElementById('sliderPrevBtn'),
  sliderNextBtn: document.getElementById('sliderNextBtn'),
  sliderCounter: document.getElementById('sliderCounter'),
  hoverPreviewBox: document.getElementById('hoverPreviewBox'),

  // Hover Preview Elements
  previewNum: document.getElementById('previewNum'),
  previewCategory: document.getElementById('previewCategory'),
  previewYear: document.getElementById('previewYear'),
  previewArt: document.getElementById('previewArt'),
  previewTitle: document.getElementById('previewTitle'),
  previewSubtitle: document.getElementById('previewSubtitle'),
  previewStack: document.getElementById('previewStack'),

  // Crosshair
  crosshair: document.getElementById('pixelCrosshair'),
  crosshairAction: document.getElementById('crosshairAction'),

  // Command Palette
  searchModal: document.getElementById('searchModal'),
  paletteInput: document.getElementById('paletteInput'),
  paletteClearBtn: document.getElementById('paletteClearBtn'),
  paletteResultsList: document.getElementById('paletteResultsList'),
  closePaletteBtn: document.getElementById('closePaletteBtn'),
  paletteMatchesStatus: document.getElementById('paletteMatchesStatus'),
  quickTags: document.querySelectorAll('.quick-tag'),
  cmdItems: document.querySelectorAll('.cmd-item'),

  // Project Modal
  projectModal: document.getElementById('projectModal'),
  closeProjectModalBtn: document.getElementById('closeProjectModalBtn'),
  modalProjectNum: document.getElementById('modalProjectNum'),
  modalProjectCategory: document.getElementById('modalProjectCategory'),
  modalProjectYear: document.getElementById('modalProjectYear'),
  modalProjectTitle: document.getElementById('modalProjectTitle'),
  modalProjectSubtitle: document.getElementById('modalProjectSubtitle'),
  modalProjectRole: document.getElementById('modalProjectRole'),
  modalProjectArt: document.getElementById('modalProjectArt'),
  modalMetricsGrid: document.getElementById('modalMetricsGrid'),
  modalProjectDesc: document.getElementById('modalProjectDesc'),
  modalHighlightsList: document.getElementById('modalHighlightsList'),
  modalStackChips: document.getElementById('modalStackChips'),
  modalGithubLink: document.getElementById('modalGithubLink'),
  modalDemoLink: document.getElementById('modalDemoLink'),

  // About Modal
  aboutModal: document.getElementById('aboutModal'),
  closeAboutBtn: document.getElementById('closeAboutBtn'),
  skillsMatrixContainer: document.getElementById('skillsMatrixContainer'),
  timelineContainer: document.getElementById('timelineContainer'),

  // Canvas
  ambientCanvas: document.getElementById('ambientCanvas'),
  labsCanvas: document.getElementById('labsCanvas'),
  labSimMode: document.getElementById('labSimMode'),
  labBurstBtn: document.getElementById('labBurstBtn'),
  labClearBtn: document.getElementById('labClearBtn')
};

// ==========================================================================
// 1. Pixel Crosshair Cursor Physics (Cathy Dollé Signature Interaction)
// ==========================================================================
let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
let crosshairX = mouseX;
let crosshairY = mouseY;

function initCrosshair() {
  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function updateCrosshair() {
    // Smooth LERP interpolation
    crosshairX += (mouseX - crosshairX) * 0.3;
    crosshairY += (mouseY - crosshairY) * 0.3;

    if (DOM.crosshair) {
      DOM.crosshair.style.transform = `translate3d(${crosshairX}px, ${crosshairY}px, 0)`;
    }
    requestAnimationFrame(updateCrosshair);
  }
  requestAnimationFrame(updateCrosshair);
}

function setCrosshairText(text, isHovering = false) {
  if (DOM.crosshairAction) {
    DOM.crosshairAction.textContent = text;
  }
  if (isHovering) {
    document.body.classList.add('crosshair-hover');
  } else {
    document.body.classList.remove('crosshair-hover');
  }
}

// ==========================================================================
// 2. Project Filtering & Dataset Calculation
// ==========================================================================
function getFilteredProjects() {
  return projects.filter(p => {
    // Category filter check
    if (state.activeFilter !== 'all' && p.category !== state.activeFilter) {
      return false;
    }
    // Search query check
    if (state.searchQuery.trim() !== '') {
      const q = state.searchQuery.toLowerCase().trim();
      const matchTitle = p.title.toLowerCase().includes(q);
      const matchSubtitle = p.subtitle.toLowerCase().includes(q);
      const matchSummary = p.summary.toLowerCase().includes(q);
      const matchCategory = p.category.toLowerCase().includes(q);
      const matchStack = p.stack.some(s => s.toLowerCase().includes(q));
      return matchTitle || matchSubtitle || matchSummary || matchCategory || matchStack;
    }
    return true;
  });
}

function updateCounts() {
  const allFiltered = getFilteredProjects();
  if (DOM.resultsCount) {
    DOM.resultsCount.textContent = `SHOWING ${allFiltered.length} / ${projects.length} ARTIFACTS`;
  }
}

// ==========================================================================
// 3. Render List View (Architectural 2-Column Numbered Layout)
// ==========================================================================
function renderListView() {
  if (!DOM.projectListContainer) return;
  const filtered = getFilteredProjects();

  if (filtered.length === 0) {
    DOM.projectListContainer.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 0; color: var(--fg-muted);">
        <p style="font-size: 16px; font-weight: 700;">[ 0 MATCHING ARTIFACTS ]</p>
        <p style="font-size: 11px; margin-top: 8px;">No projects matched filter "${state.activeFilter}" or search query "${state.searchQuery}".</p>
        <button id="resetFiltersBtn" style="margin-top: 16px; padding: 6px 14px; border: 1px solid var(--border-active); font-size: 11px; font-weight: 700; text-transform: uppercase;">RESET FILTERS</button>
      </div>
    `;
    const resetBtn = document.getElementById('resetFiltersBtn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        state.activeFilter = 'all';
        state.searchQuery = '';
        DOM.filterPills.forEach(p => p.classList.toggle('active', p.dataset.filter === 'all'));
        renderAllViews();
      });
    }
    return;
  }

  DOM.projectListContainer.innerHTML = filtered.map((p, idx) => `
    <div class="project-list-row" data-id="${p.id}" tabindex="0" role="listitem">
      <div class="row-main-line">
        <span class="row-num">${p.num}/</span>
        <h2 class="row-title">${p.title}</h2>
      </div>
      <div class="row-meta">
        <span>${p.category.toUpperCase()}</span>
        <span>//</span>
        <span>${p.year}</span>
        <span>//</span>
        <span>${p.role}</span>
      </div>
      <div class="row-tags">
        ${p.stack.slice(0, 4).map(st => `<span class="row-tag-badge">${st}</span>`).join('')}
      </div>
    </div>
  `).join('');

  // Row Interactions (Hover Preview & Click Expansion)
  const rows = DOM.projectListContainer.querySelectorAll('.project-list-row');
  rows.forEach(row => {
    const id = row.dataset.id;
    const project = projects.find(p => p.id === id);

    row.addEventListener('mouseenter', () => {
      sfx.click();
      setCrosshairText(`VIEW [${project.num}]`, true);
      showHoverPreview(project);
    });

    row.addEventListener('mouseleave', () => {
      setCrosshairText('EXPLORE', false);
      hideHoverPreview();
    });

    row.addEventListener('click', () => {
      sfx.modalChirp(true);
      openProjectModal(project);
    });

    row.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        openProjectModal(project);
      }
    });
  });
}

function showHoverPreview(p) {
  if (!DOM.hoverPreviewBox) return;
  DOM.previewNum.textContent = `${p.num}/`;
  DOM.previewCategory.textContent = p.category.toUpperCase();
  DOM.previewYear.textContent = p.year;
  DOM.previewTitle.textContent = p.title;
  DOM.previewSubtitle.textContent = p.subtitle;
  DOM.previewArt.innerHTML = getSvgPattern(p.svgPattern, p.title);
  DOM.previewStack.innerHTML = p.stack.map(st => `<span class="preview-tag">${st}</span>`).join('');
  DOM.hoverPreviewBox.classList.add('visible');
}

function hideHoverPreview() {
  if (!DOM.hoverPreviewBox) return;
  DOM.hoverPreviewBox.classList.remove('visible');
}

// ==========================================================================
// 4. Render Slider View (Kinetic Drag & Scroll Carousel)
// ==========================================================================
function renderSliderView() {
  if (!DOM.sliderTrack) return;
  const filtered = getFilteredProjects();

  DOM.sliderTrack.innerHTML = filtered.map(p => `
    <article class="slider-card" data-id="${p.id}" tabindex="0">
      <div class="card-top">
        <span class="card-num">${p.num}/</span>
        <span class="card-category">${p.category.toUpperCase()} // ${p.year}</span>
      </div>
      <div class="card-art">
        ${getSvgPattern(p.svgPattern, p.title)}
      </div>
      <div class="card-body">
        <h3 class="card-title">${p.title}</h3>
        <p class="card-desc">${p.summary}</p>
        <div class="card-metrics">
          ${p.metrics.map(m => `
            <div class="card-metric-item">
              <span class="metric-val">${m.val}</span>
              <span class="metric-lbl">${m.label}</span>
            </div>
          `).join('')}
        </div>
      </div>
      <div class="card-bottom">
        <div class="card-stack">
          ${p.stack.slice(0, 3).map(st => `<span class="row-tag-badge">${st}</span>`).join('')}
        </div>
        <button class="card-view-btn" data-id="${p.id}">DOSSIER [↵]</button>
      </div>
    </article>
  `).join('');

  // Slider navigation & card clicks
  DOM.sliderTrack.querySelectorAll('.slider-card').forEach(card => {
    const id = card.dataset.id;
    const project = projects.find(p => p.id === id);

    card.addEventListener('mouseenter', () => {
      setCrosshairText(`OPEN [${project.num}]`, true);
    });
    card.addEventListener('mouseleave', () => {
      setCrosshairText('SLIDE', false);
    });
    card.addEventListener('click', (e) => {
      sfx.modalChirp(true);
      openProjectModal(project);
    });
  });

  updateSliderCounter();
}

function updateSliderCounter() {
  if (!DOM.sliderTrack || !DOM.sliderCounter) return;
  const cards = DOM.sliderTrack.querySelectorAll('.slider-card');
  if (cards.length === 0) {
    DOM.sliderCounter.textContent = '00 / 00';
    return;
  }
  const trackScroll = DOM.sliderTrack.scrollLeft;
  const cardWidth = 460 + 32;
  const activeIndex = Math.min(Math.floor((trackScroll + cardWidth / 2) / cardWidth) + 1, cards.length);
  DOM.sliderCounter.textContent = `${String(activeIndex).padStart(2, '0')} / ${String(cards.length).padStart(2, '0')}`;
}

// Slider momentum scroll listeners
if (DOM.sliderTrack) {
  DOM.sliderTrack.addEventListener('scroll', updateSliderCounter, { passive: true });
  DOM.sliderTrack.addEventListener('wheel', (e) => {
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      DOM.sliderTrack.scrollLeft += e.deltaY;
    }
  }, { passive: true });

  // Touch and mouse drag
  let isDown = false;
  let startX;
  let scrollLeft;

  DOM.sliderTrack.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - DOM.sliderTrack.offsetLeft;
    scrollLeft = DOM.sliderTrack.scrollLeft;
  });
  window.addEventListener('mouseup', () => { isDown = false; });
  DOM.sliderTrack.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - DOM.sliderTrack.offsetLeft;
    const walk = (x - startX) * 1.5;
    DOM.sliderTrack.scrollLeft = scrollLeft - walk;
  });
}

if (DOM.sliderPrevBtn && DOM.sliderNextBtn) {
  DOM.sliderPrevBtn.addEventListener('click', () => {
    sfx.click();
    DOM.sliderTrack.scrollBy({ left: -492, behavior: 'smooth' });
  });
  DOM.sliderNextBtn.addEventListener('click', () => {
    sfx.click();
    DOM.sliderTrack.scrollBy({ left: 492, behavior: 'smooth' });
  });
}

// ==========================================================================
// 5. Layout View Switching (List vs Slider vs Labs)
// ==========================================================================
function switchView(viewName) {
  state.activeView = viewName;
  sfx.click();

  // Button States
  DOM.toggleList.classList.toggle('active', viewName === 'list');
  DOM.toggleSlider.classList.toggle('active', viewName === 'slider');
  DOM.toggleLabs.classList.toggle('active', viewName === 'labs');

  // Section States
  DOM.listViewSection.hidden = (viewName !== 'list');
  DOM.sliderViewSection.hidden = (viewName !== 'slider');
  DOM.labsViewSection.hidden = (viewName !== 'labs');

  if (viewName === 'slider') {
    renderSliderView();
  } else if (viewName === 'labs') {
    startLabsSimulation();
  } else {
    renderListView();
  }
}

DOM.toggleList.addEventListener('click', () => switchView('list'));
DOM.toggleSlider.addEventListener('click', () => switchView('slider'));
DOM.toggleLabs.addEventListener('click', () => switchView('labs'));

// ==========================================================================
// 6. Filter Pills Interaction
// ==========================================================================
DOM.filterPills.forEach(pill => {
  pill.addEventListener('click', () => {
    sfx.click();
    DOM.filterPills.forEach(p => p.classList.remove('active'));
    pill.classList.add('active');
    state.activeFilter = pill.dataset.filter;
    renderAllViews();
  });
  pill.addEventListener('mouseenter', () => {
    setCrosshairText(`FILTER [${pill.dataset.filter.toUpperCase()}]`, true);
  });
  pill.addEventListener('mouseleave', () => {
    setCrosshairText('EXPLORE', false);
  });
});

function renderAllViews() {
  updateCounts();
  if (state.activeView === 'list') {
    renderListView();
  } else if (state.activeView === 'slider') {
    renderSliderView();
  }
}

// ==========================================================================
// 7. Command Palette & Multi-Field Search Engine (Cmd+K / "/")
// ==========================================================================
function openCommandPalette(initialQuery = '') {
  sfx.modalChirp(true);
  DOM.paletteInput.value = initialQuery;
  state.selectedPaletteIndex = 0;
  executePaletteSearch(initialQuery);
  DOM.searchModal.showModal();
  setTimeout(() => DOM.paletteInput.focus(), 50);
}

function closeCommandPalette() {
  sfx.modalChirp(false);
  DOM.searchModal.close();
}

function highlightMatch(text, query) {
  if (!query.trim()) return text;
  const regex = new RegExp(`(${query.trim()})`, 'gi');
  return text.replace(regex, '<mark style="background: #fff; color: #000; padding: 0 2px;">$1</mark>');
}

function executePaletteSearch(query) {
  const q = query.toLowerCase().trim();
  DOM.paletteClearBtn.hidden = (q === '');

  const matches = projects.filter(p => {
    if (!q) return true;
    return p.title.toLowerCase().includes(q) ||
           p.subtitle.toLowerCase().includes(q) ||
           p.summary.toLowerCase().includes(q) ||
           p.category.toLowerCase().includes(q) ||
           p.stack.some(st => st.toLowerCase().includes(q));
  });

  state.paletteResults = matches;
  DOM.paletteMatchesStatus.textContent = `${matches.length} matching artifacts`;

  if (matches.length === 0) {
    DOM.paletteResultsList.innerHTML = `
      <div style="padding: 24px 14px; text-align: center; color: var(--fg-muted); font-size: 11px;">
        No artifacts matching query "<strong>${query}</strong>". Try searching for "Rust", "TypeScript", "AI", or "WebGL".
      </div>
    `;
    return;
  }

  DOM.paletteResultsList.innerHTML = matches.map((p, idx) => `
    <div class="palette-item ${idx === state.selectedPaletteIndex ? 'selected' : ''}" data-index="${idx}" data-id="${p.id}">
      <div class="palette-item-left">
        <span class="palette-item-num">${p.num}/</span>
        <div>
          <span class="palette-item-title">${highlightMatch(p.title, q)}</span>
          <span class="palette-item-subtitle">${highlightMatch(p.subtitle, q)}</span>
        </div>
      </div>
      <div class="palette-item-right">
        <span class="palette-item-tag">${p.category}</span>
        ${p.stack.slice(0, 2).map(st => `<span class="palette-item-tag">${highlightMatch(st, q)}</span>`).join('')}
      </div>
    </div>
  `).join('');

  // Add click handlers on palette items
  DOM.paletteResultsList.querySelectorAll('.palette-item').forEach(item => {
    item.addEventListener('click', () => {
      const idx = parseInt(item.dataset.index, 10);
      selectPaletteItem(idx);
    });
  });
}

function selectPaletteItem(index) {
  if (state.paletteResults[index]) {
    const project = state.paletteResults[index];
    closeCommandPalette();
    openProjectModal(project);
  }
}

// Palette Event Listeners
DOM.searchTriggerBtn.addEventListener('click', () => openCommandPalette());
DOM.closePaletteBtn.addEventListener('click', closeCommandPalette);
DOM.paletteClearBtn.addEventListener('click', () => {
  DOM.paletteInput.value = '';
  executePaletteSearch('');
  DOM.paletteInput.focus();
});

DOM.paletteInput.addEventListener('input', (e) => {
  state.selectedPaletteIndex = 0;
  executePaletteSearch(e.target.value);
});

DOM.paletteInput.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowDown') {
    e.preventDefault();
    sfx.click();
    if (state.paletteResults.length > 0) {
      state.selectedPaletteIndex = (state.selectedPaletteIndex + 1) % state.paletteResults.length;
      updatePaletteSelection();
    }
  } else if (e.key === 'ArrowUp') {
    e.preventDefault();
    sfx.click();
    if (state.paletteResults.length > 0) {
      state.selectedPaletteIndex = (state.selectedPaletteIndex - 1 + state.paletteResults.length) % state.paletteResults.length;
      updatePaletteSelection();
    }
  } else if (e.key === 'Enter') {
    e.preventDefault();
    selectPaletteItem(state.selectedPaletteIndex);
  }
});

function updatePaletteSelection() {
  const items = DOM.paletteResultsList.querySelectorAll('.palette-item');
  items.forEach((item, idx) => {
    item.classList.toggle('selected', idx === state.selectedPaletteIndex);
    if (idx === state.selectedPaletteIndex) {
      item.scrollIntoView({ block: 'nearest' });
    }
  });
}

// Quick filter tags inside palette
DOM.quickTags.forEach(tag => {
  tag.addEventListener('click', () => {
    sfx.click();
    const tagVal = tag.dataset.tag === 'all' ? '' : tag.dataset.tag;
    DOM.paletteInput.value = tagVal;
    executePaletteSearch(tagVal);
    DOM.paletteInput.focus();
  });
});

// Quick action shortcuts in palette
DOM.cmdItems.forEach(cmd => {
  cmd.addEventListener('click', () => {
    const action = cmd.dataset.action;
    closeCommandPalette();
    switch (action) {
      case 'open-substack': window.open(developerBio.substack, '_blank'); break;
      case 'open-github': window.open(developerBio.github, '_blank'); break;
      case 'open-linkedin': window.open(developerBio.linkedin, '_blank'); break;
      case 'view-list': switchView('list'); break;
      case 'view-slider': switchView('slider'); break;
      case 'view-labs': switchView('labs'); break;
      case 'open-about': openAboutModal(); break;
      case 'toggle-theme': toggleTheme(); break;
    }
  });
});

// Global Keyboard Shortcut: Cmd+K / Ctrl+K or "/"
window.addEventListener('keydown', (e) => {
  const isInput = ['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName);
  if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
    e.preventDefault();
    if (DOM.searchModal.open) {
      closeCommandPalette();
    } else {
      openCommandPalette();
    }
  } else if (e.key === '/' && !isInput && !DOM.searchModal.open) {
    e.preventDefault();
    openCommandPalette();
  }
});

// ==========================================================================
// 8. Project Details Modal Drawer
// ==========================================================================
function openProjectModal(p) {
  DOM.modalProjectNum.textContent = `${p.num}/`;
  DOM.modalProjectCategory.textContent = p.category.toUpperCase();
  DOM.modalProjectYear.textContent = p.year;
  DOM.modalProjectTitle.textContent = p.title;
  DOM.modalProjectSubtitle.textContent = p.subtitle;
  DOM.modalProjectRole.textContent = p.role;
  DOM.modalProjectDesc.textContent = p.description;

  DOM.modalProjectArt.innerHTML = getSvgPattern(p.svgPattern, p.title);

  DOM.modalMetricsGrid.innerHTML = p.metrics.map(m => `
    <div class="metric-stat-card">
      <span class="metric-stat-val">${m.val}</span>
      <span class="metric-stat-lbl">${m.label}</span>
    </div>
  `).join('');

  DOM.modalHighlightsList.innerHTML = p.highlights.map(h => `
    <li>${h}</li>
  `).join('');

  DOM.modalStackChips.innerHTML = p.stack.map(st => `
    <span class="stack-chip">${st}</span>
  `).join('');

  DOM.modalGithubLink.href = p.github;
  DOM.modalDemoLink.href = p.demo;

  DOM.projectModal.showModal();
}

DOM.closeProjectModalBtn.addEventListener('click', () => {
  sfx.modalChirp(false);
  DOM.projectModal.close();
});

// ==========================================================================
// 9. About Modal Dossier
// ==========================================================================
function openAboutModal() {
  sfx.modalChirp(true);

  // Populate skills matrix
  DOM.skillsMatrixContainer.innerHTML = developerBio.skills.map(sc => `
    <div class="skill-category-card">
      <h4 class="skill-cat-title">${sc.category}</h4>
      <div class="skill-pill-list">
        ${sc.items.map(it => `<span class="skill-pill">${it}</span>`).join('')}
      </div>
    </div>
  `).join('');

  // Populate timeline
  DOM.timelineContainer.innerHTML = developerBio.experience.map(exp => `
    <div class="timeline-item">
      <span class="timeline-period">${exp.period}</span>
      <h4 class="timeline-role">${exp.title} // ${exp.company}</h4>
      <p class="timeline-desc">${exp.description}</p>
    </div>
  `).join('');

  DOM.aboutModal.showModal();
}

DOM.aboutTriggerBtn.addEventListener('click', openAboutModal);
DOM.closeAboutBtn.addEventListener('click', () => {
  sfx.modalChirp(false);
  DOM.aboutModal.close();
});

// ==========================================================================
// 10. Utilities (Clock, Theme, Audio)
// ==========================================================================
function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  if (DOM.liveClock) {
    DOM.liveClock.textContent = `INDIA ${hours}:${minutes}:${seconds} IST`;
  }
}
setInterval(updateClock, 1000);
updateClock();

function toggleTheme() {
  sfx.click();
  const nextTheme = state.theme === 'dark' ? 'light' : 'dark';
  state.theme = nextTheme;
  document.documentElement.setAttribute('data-theme', nextTheme);
}
DOM.themeToggleBtn.addEventListener('click', toggleTheme);

DOM.audioToggleBtn.addEventListener('click', () => {
  state.audioEnabled = !state.audioEnabled;
  DOM.audioStatusText.textContent = state.audioEnabled ? 'SFX: ON' : 'SFX: OFF';
  sfx.click();
});

// ==========================================================================
// 11. Generative Labs Simulation (Canvas Attractor Physics)
// ==========================================================================
let labAnimId = null;
const particles = [];

function startLabsSimulation() {
  const canvas = DOM.labsCanvas;
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  function resize() {
    canvas.width = canvas.parentElement.clientWidth;
    canvas.height = canvas.parentElement.clientHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  // Initialize Particles
  particles.length = 0;
  const count = 120;
  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 1.5,
      vy: (Math.random() - 0.5) * 1.5,
      size: Math.random() * 2 + 1,
      origX: Math.random() * canvas.width,
      origY: Math.random() * canvas.height
    });
  }

  function loop() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const mode = DOM.labSimMode.value;
    const rect = canvas.getBoundingClientRect();
    const localMouseX = mouseX - rect.left;
    const localMouseY = mouseY - rect.top;

    ctx.strokeStyle = '#333333';
    ctx.lineWidth = 0.5;

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];

      // Attraction/repulsion from mouse
      const dx = localMouseX - p.x;
      const dy = localMouseY - p.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 180) {
        p.vx -= (dx / dist) * 0.8;
        p.vy -= (dy / dist) * 0.8;
      }

      p.x += p.vx;
      p.y += p.vy;

      // Friction
      p.vx *= 0.96;
      p.vy *= 0.96;

      // Boundary wraps
      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;
      if (p.y < 0) p.y = canvas.height;
      if (p.y > canvas.height) p.y = 0;

      // Render mode
      if (mode === 'matrix') {
        ctx.fillStyle = '#ffffff';
        ctx.font = '10px monospace';
        ctx.fillText((i % 2 === 0 ? '0' : '1'), p.x, p.y);
      } else {
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(p.x, p.y, p.size, p.size);
      }

      // Connect neighbor particles
      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const ndx = p.x - p2.x;
        const ndy = p.y - p2.y;
        const nDist = Math.sqrt(ndx * ndx + ndy * ndy);
        if (nDist < 65) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }
      }
    }

    labAnimId = requestAnimationFrame(loop);
  }

  if (labAnimId) cancelAnimationFrame(labAnimId);
  loop();
}

if (DOM.labBurstBtn) {
  DOM.labBurstBtn.addEventListener('click', () => {
    sfx.click();
    particles.forEach(p => {
      p.vx += (Math.random() - 0.5) * 12;
      p.vy += (Math.random() - 0.5) * 12;
    });
  });
}

if (DOM.labClearBtn) {
  DOM.labClearBtn.addEventListener('click', () => {
    sfx.click();
    startLabsSimulation();
  });
}

// ==========================================================================
// 12. Ambient Canvas Animation (Background Subtle Tech Noise)
// ==========================================================================
function initAmbientCanvas() {
  const canvas = DOM.ambientCanvas;
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  let frame = 0;
  function render() {
    frame++;
    if (frame % 3 === 0) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.03)';
      const step = 60;
      for (let x = 0; x < canvas.width; x += step) {
        for (let y = 0; y < canvas.height; y += step) {
          if ((x + y + frame) % 180 === 0) {
            ctx.fillRect(x, y, 1, 1);
          }
        }
      }
    }
    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);
}

// ==========================================================================
// 13. Application Initialization
// ==========================================================================
function init() {
  initCrosshair();
  initAmbientCanvas();
  renderListView();
  updateCounts();
  console.log('Devashree Naik Portfolio initialized. Press ⌘K or / to search.');
}

window.addEventListener('DOMContentLoaded', init);
