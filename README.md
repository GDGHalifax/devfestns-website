# DevFest Nova Scotia 2026

[![CI](https://github.com/GDGHalifax/devfestns-website/actions/workflows/ci.yml/badge.svg)](https://github.com/GDGHalifax/devfestns-website/actions/workflows/ci.yml)
[![Deploy](https://github.com/GDGHalifax/devfestns-website/actions/workflows/deploy.yml/badge.svg)](https://github.com/GDGHalifax/devfestns-website/actions/workflows/deploy.yml)
[![CodeQL](https://github.com/GDGHalifax/devfestns-website/actions/workflows/codeql.yml/badge.svg)](https://github.com/GDGHalifax/devfestns-website/actions/workflows/codeql.yml)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=GDGHalifax_devfestns-website&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=GDGHalifax_devfestns-website)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=GDGHalifax_devfestns-website&metric=coverage)](https://sonarcloud.io/summary/new_code?id=GDGHalifax_devfestns-website)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=GDGHalifax_devfestns-website&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=GDGHalifax_devfestns-website)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=GDGHalifax_devfestns-website&metric=reliability_rating)](https://sonarcloud.io/summary/new_code?id=GDGHalifax_devfestns-website)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=GDGHalifax_devfestns-website&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=GDGHalifax_devfestns-website)
[![Known Vulnerabilities](https://snyk.io/test/github/GDGHalifax/devfestns-website/badge.svg)](https://snyk.io/test/github/GDGHalifax/devfestns-website)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

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
