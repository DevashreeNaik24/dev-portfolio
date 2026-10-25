# Devashree Naik // Developer's Portfolio

A minimalist Swiss-brutalist interactive portfolio inspired by [Cathy Dollé](https://www.cathydolle.com/), engineered for **Devashree Naik** — Software Engineer, AI Explorer, and Author of [Code & Capital](https://devashreenaik.substack.com/?utm_campaign=profile_chips).

---

## 1. Analysis: How Search Works on `cathydolle.com` (The Evidence)

Through deep inspection of `https://www.cathydolle.com/`, including its DOM layout, static Next.js chunks, and network payloads:

- **Absence of Keyword Search**: `cathydolle.com` contains **no `<input type="search">`**, no search icon, and no text query search bar.
- **Pre-Rendered Dataset**: All projects (`01/ ARD`, `02/ Pierre Cathala`, `03/ Lucky Losers`, etc.) are bundled directly from Sanity CMS into the initial React Server Component (RSC) payload.
- **Spatial & Visual Discovery Paradigm**:
  - Rather than typing queries, users discover work through an **ordered 2-column numbered index (`01/`, `02/`, ...)**.
  - Users toggle between **List View** (alternating left/right text alignment) and **Slider View** (fullscreen horizontal kinetic canvas track with inertia).
  - A custom **Pixel Crosshair Cursor** (`mix-blend-mode: difference`) tracks cursor dynamics and displays contextual action labels (`OPEN PROJECT`).
  - Separate pages exist for **Playground** (interactive sandbox with arrow key navigation) and **Shop** (product catalog).

### The Upgrade for This Developer Portfolio
While visual discovery is ideal for high-fashion interactive design, developer portfolios have **codebases, tech stacks (Rust, TypeScript, WebGL, eBPF), metrics, and GitHub repos**. We enhanced the Cathy Dollé foundation with a **Global Command Palette & Multi-Field Search Engine (`Cmd+K` / `/`)**.

---

## 2. Core Features

### 🔍 Dual Search & Discovery System
1. **Interactive Command Palette (`⌘K` / `Ctrl+K` or `/`)**:
   - Fuzzy multi-field search across titles, summaries, categories, and technical stacks.
   - Real-time token highlighting with `<mark>` tags.
   - Full keyboard navigation (`↑`, `↓`, `Enter`, `Esc`).
   - Direct quick-command shortcuts (`[L]` List, `[S]` Slider, `[P]` Labs, `[A]` About, `[T]` Invert Theme).
2. **Category & Stack Filtering**:
   - One-click discipline filters: `ALL`, `SYSTEMS`, `AI / AGENTS`, `CREATIVE TECH`, `FRONTEND`, `FULL-STACK`.
   - Real-time artifact count metrics (`Showing 10 / 10 Artifacts`).

### ✦ Visual Aesthetics & Interactivity
- **Signature Pixel Crosshair Cursor**: 14px square frame + inner pixel dot with `mix-blend-mode: difference` and dynamic velocity-tracked contextual tooltips (`VIEW [01]`, `SELECT`, `EXPAND DOSSIER`).
- **Architectural Numbered List (Cathy Dollé Native)**: 2-column brutalist list alternating `text-start` and `text-end`.
- **Floating Hover Preview Box**: Hovering over any project in the list smoothly reveals an architectural schematic, technical tags, and year.
- **Horizontal Kinetic Slider**: Fullscreen card deck with drag momentum, touch swipe, and mouse wheel horizontal scrolling.
- **Generative Labs Playground**: Interactive vector field simulation responding to cursor attraction and shockwave pulses (`[SPACE]`).
- **Tactile Web Audio Feedback**: Zero-dependency mechanical clicks and frequency chirps synthesized via the Web Audio API (toggleable with `SFX: ON/OFF`).
- **Modern Dialog Components**: Native HTML5 `<dialog>` with `@starting-style` and discrete top-layer entry transitions.

---

## 3. Keyboard Shortcuts

| Shortcut | Action |
| :--- | :--- |
| `⌘K` or `Ctrl+K` | Open Command Palette / Search |
| `/` | Quick-search trigger |
| `↑` / `↓` | Navigate search results |
| `Enter` | Expand selected project dossier |
| `Esc` | Close any active modal / drawer |
| `Space` (in Labs) | Pulse particle vector field |

---

## 4. Quick Start

Run locally with standard static server:

```bash
# Using npm script:
npm start

# Or using Python:
python -m http.server 3000

# Or simply open index.html in any modern browser!
```
