# Devashree Naik // Developer's Portfolio

A minimalist Swiss-brutalist interactive portfolio inspired by [Cathy Dollé](https://www.cathydolle.com/), engineered for **Devashree Naik** — Software Engineer, AI Explorer, and Author of [Code & Capital](https://devashreenaik.substack.com/?utm_campaign=profile_chips).


## 1. Core Features

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
