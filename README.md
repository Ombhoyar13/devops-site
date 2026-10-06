# My First DevOps Website

A lightweight Node.js & Express web application designed for learning DevOps fundamentals (containerization, CI/CD, cloud deployments).

## Prerequisites

- Node.js 20+

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run tests:**
   ```bash
   npm test
   ```

3. **Start the application:**
   ```bash
   npm start
   ```

4. **Start in development mode (with file watching):**
   ```bash
   npm run dev
   ```

Once started, open [http://localhost:3000](http://localhost:3000) in your browser.

## Configuration

Configuration is managed via environment variables:

| Variable | Default | Description |
|---|---|---|
| `PORT` | `3000` | Port for the HTTP server |
| `APP_VERSION` | `1.0.0` | Application version reported by `/api/info` |

Example of running with custom environment variables:
```bash
PORT=8080 APP_VERSION=2.0.0 npm start
```

## Available Routes

- `GET /` — Serves static landing page displaying app version and hostname
- `GET /health` — Returns JSON `{ "status": "ok", "uptime": <seconds> }`
- `GET /api/info` — Returns JSON `{ "version": "<version>", "hostname": "<hostname>" }`
