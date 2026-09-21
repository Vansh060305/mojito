# Run Doc — MOJITO / Prime Pour (Vite dev server)

## Artifacts to reproduce (fresh checkout)

1. **Install dependencies** (npm is the project's package manager; a `package-lock.json` is present):
   ```bash
   npm install
   ```
   Requires Node.js 20.19+ (Vite 7 requirement).

2. **Environment files:** none required. The app is a frontend-only static site
   (no API calls, no `process.env` usage). If a `.env.local` exists in the main
   checkout (e.g. the Vercel CLI's auto-generated `VERCEL_OIDC_TOKEN`), copy it
   over manually — it is not needed for the dev server:
   ```
   copy D:\MOJITO-main\.env.local <worktree>\.env.local
   ```

3. **No build step needed** — `npm run dev` compiles on the fly.

## How to run the server

```bash
npm run dev
```

- Vite default port: **5173** (config-free; no port overrides anywhere in the repo).
- URL: `http://localhost:5173/`
- If 5173 is taken, Vite auto-increments the port — check the log output for the
  actual URL, or pin one explicitly with `npm run dev -- --port 5174 --strictPort`.

### Detached start (Windows, for preview registration)

```powershell
powershell -NoProfile -Command "(Start-Process -FilePath 'npm.cmd' -ArgumentList 'run','dev' -RedirectStandardOutput '<log>' -RedirectStandardError '<log>.err' -WindowStyle Hidden -PassThru).Id"
```

Notes:
- Use `npm.cmd` exactly (Start-Process does not resolve shell shims).
- stdout and stderr MUST go to different files (PowerShell fails otherwise).
- The `Start-Process` invocation can report a timeout even when the server
  starts fine — verify via the log file / `netstat -ano | findstr :5173` /
  `Get-Process -Id <pid>` instead of retrying blindly.
- Confirm health with `curl http://localhost:5173/` (expect HTTP 200) before
  calling `register_preview` with the printed pid.

## Production build (for reference / deploys)

```bash
npm run build     # outputs to dist/
npm run preview   # serve dist/ locally (default port 4173)
```

Deployed production URL: https://mojito-prime-pour.vercel.app
(Vercel project `pika-e309/mojito-prime-pour`, linked via `.vercel/`;
redeploy with `npx vercel --prod`.)
