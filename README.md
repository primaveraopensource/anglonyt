# YTAnglo Agent
Aplicación selft-hosted y open source para aprender ingles por medio de videos de youtube y IA.

## Features
- Youtube Client
- AI Integrations
- Chat para resolver dudas sobre el tema del video
- Notas Interactivas deacuerdo al contenido del video, para reforzar los expuesto
- Preguntas y ejercicios exporadicos sobre el tema del video
- docker => simple deployment
- Poder generar resumenes del video o clase

## Demo
video

## Tech Stack
- **Frontend**
  - Vite
  - React
  - React Query
  - Zustand
  - TailwindCSS
- **Backend**
  - Flask
- **APIs**
  - Youtube API
  - Gemini API
- **Deployment**
  - Docker
  - Github Actions

## Run App
Copy content of `.env.example` to `.env` and replace variable values for your own keys

- Gemini API Key
- Youtube API Key

## Quick Setup 🛠️
1. Clone and Setup Environment:
```bash
git clone https://github.com/primaveraopensource/anglonyt.git
cd anglonyt
cp .env.example .env
```

1. Start Development Environment:
```bash
# Build and start all services
docker-compose up -d

# Start web application
npm install
npm run dev:web
```
## Project Struture

```markmap
#### Root Directory
- ****
```

## Architecture