# AITherapy.support Website

Modern marketing website for AI Therapy Support platform, built with Astro, Tailwind CSS, and deployed on Azure Static Web Apps.

## 🚀 Tech Stack

- **Framework:** Astro 5.x
- **Styling:** Tailwind CSS 4.x
- **Deployment:** Azure Static Web Apps
- **CI/CD:** GitHub Actions

## 📦 Project Structure

```
├── public/              # Static assets (images, favicons)
├── src/
│   ├── components/      # Reusable components
│   │   ├── layout/      # Header, Footer, Navigation
│   │   ├── sections/    # Homepage sections
│   │   └── ui/          # UI components (Button, Card, etc.)
│   ├── content/         # Content Collections (blog posts)
│   ├── data/            # Data files (navigation, features, etc.)
│   ├── layouts/         # Page layouts
│   ├── pages/           # Page routes
│   └── styles/          # Global CSS and Tailwind config
├── scripts/             # Build and utility scripts
└── .github/workflows/   # CI/CD workflows
```

## 🛠️ Development

### Prerequisites

- Node.js 20+
- npm

### Install Dependencies

```bash
npm install
```

### Start Dev Server

```bash
npm run dev
```

Server runs at `http://localhost:4321`

### Build for Production

```bash
npm run build
```

Output in `dist/` directory

### Preview Production Build

```bash
npm run preview
```

## 🌐 Deployment

### Testing Subdomain

The site is deployed to `https://new.aitherapy.support` for testing.

### Production Domain

After QA approval, the site will be deployed to `https://aitherapy.support`

### Azure Configuration

Azure Static Web App is configured via:
- `staticwebapp.config.json` - Routes, redirects, headers
- `.github/workflows/azure-swa-deploy.yml` - CI/CD pipeline

## 📝 Content Management

### Blog Posts

Blog posts use Astro Content Collections in `src/content/blog/`.

To add a new post:

1. Create a new `.md` file in `src/content/blog/`
2. Add frontmatter:

```yaml
---
title: "Post Title"
description: "Post description"
pubDate: 2026-02-15
author: "Author Name"
category: "Inne"
tags: ["tag1", "tag2"]
draft: false
---
```

3. Write content in Markdown
4. Build and deploy

### Static Pages

Static pages are in `src/pages/` as `.astro` files.

## 🔧 Configuration

### Update Site URL

When switching from test to production:

1. Update `astro.config.mjs`:
   ```javascript
   site: 'https://aitherapy.support',
   ```

2. Update `public/robots.txt`:
   ```
   Sitemap: https://aitherapy.support/sitemap-index.xml
   ```

3. Rebuild and deploy

## 📊 Analytics

- Google Tag Manager: GTM-M9G6HVT5

## 🔐 Security

- HTTPS enforced via Azure SWA
- Security headers configured in `staticwebapp.config.json`
- Content Security Policy
- CORS protection

## 📄 License

Proprietary - AI Therapy Support

## 🤝 Contributing

This is a private project. For questions, contact the team.
# Force rebuild
