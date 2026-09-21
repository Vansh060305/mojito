# Prime Pour — MOJITO 🍹

**Prime Pour (MOJITO)** is a single-page, GSAP-animated cocktail & mocktail bar landing site built with **React 19**, **Vite**, **Tailwind CSS v4**, and **GSAP** (ScrollTrigger + SplitText).

This is a **frontend-only static application** — there is currently **no backend, database, or authentication**. All content is defined in local constants.

## ✨ Features

- Scroll-scrubbed hero video and parallax leaves (GSAP ScrollTrigger)
- SplitText char/line animations on headings (initialized after `document.fonts.ready`)
- Pinned, mask-reveal "The Art" section
- Interactive cocktail menu carousel (tabs + prev/next arrows)
- Fully responsive layout (Tailwind CSS v4 utility classes)

## 🛠️ Tech Stack

| Layer | Tech |
|---|---|
| UI | React 19 |
| Build tool | Vite 7 |
| Styling | Tailwind CSS v4 (`@tailwindcss/vite`) |
| Animation | GSAP 3 + ScrollTrigger + SplitText, `@gsap/react` |
| Responsive helpers | `react-responsive` |

## 📁 Project Structure

```bash
MOJITO/
├── index.html              # Vite entry HTML (title, favicon, meta)
├── vite.config.js          # Vite + React + Tailwind plugins
├── constants/
│   └── index.js            # All site content/data (nav, menus, hours, socials)
├── src/
│   ├── main.jsx            # React entry point
│   ├── App.jsx             # Root component (section order, GSAP registration)
│   ├── index.css           # Tailwind v4 theme + component styles
│   └── components/
│       ├── Navbar.jsx      # Fixed nav, backdrop blur on scroll
│       ├── Hero.jsx        # Title, leaves, scroll-scrubbed video
│       ├── Cocktails.jsx   # Popular cocktails & mocktails lists
│       ├── About.jsx       # Story, rating, image grid
│       ├── Art.jsx         # Pinned mask-reveal section
│       ├── Menu.jsx        # Carousel (tabs + arrows)
       └── Contact.jsx      # Footer: address, hours, socials
```

## ▶️ Getting Started

Requires **Node.js 20.19+** (Vite 7 requirement).

```bash
# 1. Clone the repository
git clone https://github.com/Deepanshi-0103/MOJITO.git
cd MOJITO

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

The app runs at the URL Vite prints (default: `http://localhost:5173`).

## 📜 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the dev server with HMR |
| `npm run build` | Production build into `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint |

## 🚀 Deployment

The site is a static SPA — build it and host the output anywhere static files are served:

```bash
npm run build
```

- Upload the generated **`dist/`** folder to Netlify, Vercel, GitHub Pages, S3, or any static host.
- **No environment variables required.**

## 👤 Author

Created by [Deepanshi-0103](https://github.com/Deepanshi-0103)
