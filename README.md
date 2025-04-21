# Curate.fun Boilerplate Site
The following is a newsfeed site for your curate fun feed that includes newsfeed and SEO optimized. 
- Resources page for relevant docs

What to change
- Favicon
- Metaimage
- API Endpoint
- Resrouces Page
- Logo
- Theme
- Metadescription, tags, etc


## In the Future
- Content Produced
- Weekly Newsletter
- Make it easy

## What technologies are used for this project?

This project is built with .

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS



# About Curate.fun
<div align="center">

<img src="https://www.curate.fun/meta.png" alt="curate.fun banner" width="100%" />

<h1 style="font-size: 2.5rem; font-weight: bold;">curate.fun</h1>

  <p>
    <strong>curate news on socials & build community-owned autonomous brands</strong>
  </p>

  <p>
    <a href="https://docs.curate.fun" target="_blank"><strong>📚 Documentation</strong></a> •
    <a href="https://github.com/potlock/curatedotfun" target="_blank"><strong>💻 GitHub</strong></a> •
    <a href="https://x.com/curatedotfun" target="_blank"><strong>🐦 Twitter</strong></a> •
    <a href="https://t.me/+UM70lvMnofk3YTVh" target="_blank"><strong>💬 Telegram</strong></a>
  </p>

</div>


## Getting Started

Choose your path to get started with curate.fun ⚡

### For Curators

If you want to submit and curate content:

1. 🎯 Head to the [User Guide](https://docs.curate.fun/docs/user-guides/curation)
2. 🔗 Learn how to submit content and moderate feeds
3. 🌟 Apply to become a curator for specific feeds

### For Developers

If you want to build and customize feeds:

1. 📖 Start with the [Configuration Guide](https://docs.curate.fun/docs/developers/configuration)
2. 🚀 Learn about [Deployment](https://docs.curate.fun/docs/developers/deployment)
3. 🔌 Explore [Plugin Development](https://docs.curate.fun/docs/developers/plugins)

# News Site Template

A modern, customizable news site template built with React, TypeScript, and Tailwind CSS.

## Quick Start

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start development server:
   ```bash
   npm run dev
   ```

## Configuration Guide

### 1. Site Configuration (`src/config/site.ts`)

The main configuration file where you can customize:
- Site name and description
- Logo and favicon paths
- Social media links
- API endpoint
- Topic and hashtag
- SEO settings
- Footer content
- Submission form text

### 2. Data Configuration (`src/config/data.ts`)

Content configuration for different pages:
- Resources page content and tags
- News page settings
- Home page content
- Search placeholders
- Submission text templates

### 3. Theme Customization (`tailwind.config.js`)

Customize the site's appearance:
- Brand colors
- Typography
- Spacing
- Breakpoints
- Component styles

### 4. Required Changes

1. **Assets**:
   - Replace `/public/favicon.ico`
   - Replace `/public/meta.png`
   - Replace `/public/logo.png`

2. **Content**:
   - Update resources in `src/config/data.ts`
   - Customize page content in `src/pages/`
   - Update API endpoint in `src/config/site.ts`

3. **Branding**:
   - Update colors in `tailwind.config.js`
   - Customize fonts
   - Update social media links

## Features

- 📱 Responsive design
- 🔍 Search functionality
- 📰 News feed with filtering
- 📚 Resources page
- 📝 News submission form
- 🔗 Social media integration
- 🎨 Customizable theme
- 🔒 SEO optimized

## Development

### Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

### Project Structure

```
src/
├── components/     # Reusable UI components
├── config/        # Configuration files
├── pages/         # Page components
├── services/      # API and data services
├── styles/        # Global styles
└── utils/         # Utility functions
```

## Deployment

1. **Environment Setup**:
   - Set up your API endpoint
   - Configure environment variables
   - Set up CORS settings

2. **Build & Deploy**:
   ```bash
   npm run build
   ```
   - Deploy the `dist` folder to your hosting provider
   - Set up proper caching and CDN

## Maintenance

1. **Regular Updates**:
   - Update content in `src/config/data.ts`
   - Monitor API performance
   - Check for broken links
   - Update dependencies

2. **Monitoring**:
   - Set up analytics
   - Monitor site performance
   - Track user engagement
   - Monitor API uptime

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

MIT License - see LICENSE file for details
