# MVP HLS Backend — NestJS Boilerplate

NestJS boilerplate for building the Video Upload & HLS Streaming backend. Pre-configured with TypeORM, BullMQ, Cloudinary storage, Swagger, and validation — clone and code.

## Tech Stack

- **NestJS 11** — framework
- **PostgreSQL** + TypeORM — database
- **Redis** + BullMQ — background job queue
- **Cloudinary** — media storage
- **FFmpeg** — HLS transcoding (worker)
- **Swagger** — API docs at `/docs`

## Quick Start

### 1. Clone & install

```bash
git clone <repo-url>
cd backend
pnpm install
```

### 2. Environment

```bash
cp .env.example .env
# Edit .env with your Cloudinary credentials
```

### 3. Start local services (Docker)

```bash
docker compose up -d
# PostgreSQL → localhost:5432
# Redis      → localhost:6379
```

### 4. Run the app

```bash
pnpm start:dev
```

| URL | Description |
|-----|-------------|
| `http://localhost:3000/api` | REST API base |
| `http://localhost:3000/docs` | Swagger UI |
| `http://localhost:3000/health` | Health check |

---

## Project Structure

```
src/
├── config/
│   └── configuration.ts        # Typed env config
├── modules/
│   └── videos/                 # Video feature module
│       ├── controllers/
│       ├── services/
│       ├── repositories/
│       ├── dto/
│       ├── entities/
│       └── modules/
├── infra/
│   ├── database/               # TypeORM setup + migrations
│   ├── storage/                # IStorageAdapter + Cloudinary impl
│   ├── queue/                  # BullMQ producer
│   └── ffmpeg/                 # FFmpeg wrapper
└── workers/
    └── video.worker.ts         # BullMQ consumer
```

> See `agents/ARCHITECTURE.md` for the full architecture reference.

---

## Scripts

```bash
pnpm start:dev          # Dev server with watch
pnpm build              # Production build
pnpm start:prod         # Run built output
pnpm test               # Unit tests
pnpm test:cov           # Coverage report
pnpm lint               # ESLint fix
pnpm format             # Prettier format

# Database migrations
pnpm migration:generate -- src/infra/database/migrations/MigrationName
pnpm migration:run
pnpm migration:revert
```

---

## Agent Instructions

AI coding agents should read these files before implementing any feature:

1. `agents/PROJECT_CONTEXT.md` — goals, tech stack, modules to build
2. `agents/ARCHITECTURE.md` — folder structure, data flow diagrams
3. `agents/CODING_RULES.md` — NestJS patterns, naming conventions
4. `agents/DATABASE_RULES.md` — TypeORM, entity rules, migrations
5. `agents/API_RULES.md` — endpoints, request/response format

---

## Environment Variables

| Variable | Description |
|----------|-------------|
| `PORT` | Server port (default `3000`) |
| `NODE_ENV` | `development` or `production` |
| `FRONTEND_URL` | Allowed CORS origin |
| `DATABASE_URL` | PostgreSQL connection string |
| `REDIS_HOST` | Redis host |
| `REDIS_PORT` | Redis port |
| `CLOUDINARY_CLOUD_NAME` | Cloudinary cloud name |
| `CLOUDINARY_API_KEY` | Cloudinary API key |
| `CLOUDINARY_API_SECRET` | Cloudinary API secret |
