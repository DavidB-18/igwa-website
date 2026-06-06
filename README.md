# International Women's Global Academy — Website

Official marketing website for the International Women's Global Academy (IWGA), 
a global academy empowering women through mindset transformation, leadership, 
skills, wealth education and generational impact.

---

## Live Site

> Coming soon

---

## Tech Stack

- HTML5 — semantic structure and content
- CSS3 — vanilla, modular architecture with custom properties
- JavaScript — vanilla, no frameworks or libraries

---

## Project Structure
iwga-website/
├── index.html              ← single page, all sections live here
├── README.md
├── .gitignore
├── .editorconfig
├── LICENSE
│
├── css/
│   ├── reset.css           ← wipes browser default styles
│   ├── variables.css       ← design tokens (colors, fonts, spacing)
│   ├── main.css            ← imports all css files in order
│   └── sections/
│       ├── navbar.css
│       ├── hero.css
│       ├── about.css
│       ├── mission.css
│       ├── leaders.css
│       ├── pillars.css
│       ├── courses.css
│       ├── impact.css
│       ├── cta.css
│       └── footer.css
│
├── js/
│   ├── main.js             ← bio expand/collapse toggle
│   └── navbar.js           ← mobile hamburger menu toggle
│
└── assets/
├── images/             ← hero photo, leader portraits, logo
├── icons/              ← svg icons for cards and sections
└── fonts/              ← custom fonts if self hosted
---

## Sections

| Section | Description |
|---|---|
| Navbar | Fixed top nav with logo, links and CTA button. Collapses to hamburger on mobile |
| Hero | Bold headline, subtext, two CTAs and hero group photo |
| About | Two column layout — brand description left, 4 feature cards right |
| Mission & Vision | Centered header with two cards — white mission card and purple vision card |
| Meet Our Leaders | Two leader cards with photo, bio preview and expand/collapse full bio |
| Core Pillars | 6 program cards in a 3x2 grid on a light purple background |
| Programs & Courses | 4 course track cards with purple icon backgrounds |
| Global Impact | 4 stat cards showing reach and impact numbers |
| CTA Banner | Full width purple banner with gold elevated button |
| Footer | 4 column dark footer with quick links, programs, contact and copyright |

---

## CSS Architecture

All CSS is modular. `main.css` acts as the entry point and imports every 
section file in order:

```css
@import './reset.css';
@import './variables.css';
@import './sections/navbar.css';
@import './sections/hero.css';
/* ...and so on */
```

Design tokens are defined once in `variables.css` and used everywhere:

```css
:root {
  --color-primary:  #6B46C1;   /* main purple */
  --color-accent:   #D4A017;   /* gold */
  --color-light-bg: #F9F6FF;   /* light lavender */
  --color-dark-bg:  #1A1A2E;   /* footer dark */
}
```

---

## JavaScript

**`navbar.js`** — handles the mobile hamburger menu. Toggles an `open` 
class on the nav links which CSS uses to show and hide the dropdown.

**`main.js`** — handles the leader bio expand/collapse. Toggles an 
`expanded` class on the bio container which CSS uses to switch between 
the preview text and the full bio. Button label switches between 
"Read Full Bio" and "See Less".

---

## Branching Strategy

| Branch | Purpose |
|---|---|
| `main` | Clean production branch. Only receives merges from dev |
| `dev` | Active development branch. All work happens here |

Workflow: code on `dev` → test in browser → merge into `main` when a 
section is complete and working.

---

## Design Reference

Designed in Figma. Key design decisions:

- **Primary color:** Purple `#6B46C1`
- **Accent color:** Gold `#D4A017`
- **Section backgrounds** alternate between white and light lavender `#F9F6FF`
- **Footer background:** Deep dark purple `#2D1B69`
- Cards use subtle purple-tinted shadows that deepen on hover
- Icons use `filter: brightness(0) invert(1)` to turn white on colored backgrounds

---

## Getting Started

No installation or build step needed. Just clone and open in a browser.

```bash
git clone https://github.com/DavidB-18/igwa-website.git
cd iwga-website
```

Then open `index.html` in your browser directly or use the 
Live Server extension in VS Code for auto-reload on save.

---

## Status

🚧 In development

---

## License

© 2026 International Women's Global Academy. All Rights Reserved.

This source code is the property of International Women's Global Academy. 
Unauthorized copying, distribution, or use of this code, in whole or in 
part, is strictly prohibited without express written permission.