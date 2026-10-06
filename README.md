# DevFest Nova Scotia 2026

![Build Status](https://github.com/GDGHalifax/devfestns-website/actions/workflows/deploy.yml/badge.svg)
![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)

Official website for **DevFest Nova Scotia 2026**, co-hosted by GDG Halifax and GDG Sydney. Join developers, students, and tech enthusiasts from across Atlantic Canada for a day of hands-on Cloud and AI workshops, agent-building codelabs, and community networking.

🌐 **Live Site:** [devfestns.com](https://devfestns.com)
🎟️ **RSVP Here:** [GDG Community Event Page](https://gdg.community.dev/events/details/google-gdg-halifax-presents-devfest-2026-nova-scotia-edition/cohost-gdg-halifax)

## Local Development

### Prerequisites
- Node.js (v24 or higher recommended)
- npm

### Installation
Clone the repository and install dependencies:
```bash
npm install
```

### Running Locally
Start the Vite development server:
```bash
npm run dev
```
Visit `http://localhost:5173` to view the site.

## Deployment
This repository is configured with a fully automated CI/CD pipeline. Every push to the `main` branch triggers:
1. Unit tests via Vitest
2. Semantic Versioning and Release Management
3. Vite Build
4. Deployment to GitHub Pages

## Contributing
We welcome contributions from the community! Please read our [Contributing Guidelines](CONTRIBUTING.md) and [Code of Conduct](CODE_OF_CONDUCT.md).

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
