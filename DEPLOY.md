# Publishing TODOTODAY online (GitHub Pages — free)

Your app is a **single static page**, so it can be hosted for free on GitHub
Pages — no server, no cost. This guide walks you through it.

## 1. Create a GitHub repository

1. Sign in (or sign up) at <https://github.com>.
2. Click the **+** (top right) → **New repository**.
3. Name it, e.g. `todotoday`. Keep it **Public**.
4. Do **not** add a README, .gitignore, or license (you already have files).
5. Click **Create repository**.

## 2. Connect this folder and push

In a terminal, from this project folder:

```bash
git remote add origin https://github.com/<your-username>/todotoday.git
git push -u origin main
```

(Replace `<your-username>` with your GitHub username. GitHub may ask you to sign
in — follow its prompts.)

## 3. Turn on GitHub Pages

1. In your new repository, open **Settings** → **Pages** (left sidebar).
2. Under **Build and deployment** → **Source**, choose **Deploy from a branch**.
3. **Branch**: `main`, **Folder**: `/ (root)` → click **Save**.

## 4. Open your app

Wait about a minute, then open:

```
https://<your-username>.github.io/todotoday/
```

That's your live app. 🎉

## Updating it later

Whenever your app changes and you push:

```bash
git push
```

GitHub Pages republishes automatically (a minute or so).

## Good to know

- **Free** — no server, no monthly cost.
- **Your list stays private to each visitor** — tasks are saved in the browser, so
  everyone who opens the page gets their own list (that's the "personal" design).
- The `.nojekyll` file in this project tells GitHub Pages to serve the files
  exactly as they are (no extra processing).
- **Alternative hosts** (same idea, also free): Netlify or Cloudflare Pages — drag
  the project folder onto their dashboard and it's live.
