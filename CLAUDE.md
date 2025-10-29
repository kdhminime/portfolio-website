# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a simple static portfolio website for Dohyun Kim, deployed on GitHub Pages. The site consists of a single landing page with clean, modern styling.

## Architecture

- **Static HTML/CSS**: No build process, framework, or dependencies required
- **Single page application**: [index.html](index.html) contains the main content
- **Styling**: [styles.css](styles.css) provides responsive design with a gradient background and centered card layout
- **Deployment**: GitHub Pages serves directly from the main branch root

## Deployment

The site is deployed at: https://kdhminime.github.io/portfolio-website/

Changes pushed to the main branch are automatically deployed by GitHub Pages (typically within 1-2 minutes).

## Local Development

To preview locally, simply open [index.html](index.html) in a browser. No local server required for basic viewing.

For live reload during development, you can use any simple HTTP server:
```bash
python3 -m http.server 8000
# or
npx serve
```

## Design System

- **Color scheme**: Purple gradient background (#667eea to #764ba2)
- **Typography**: System font stack for native appearance
- **Responsive breakpoint**: 768px for mobile devices
- **Card design**: White centered container with shadow on gradient background
