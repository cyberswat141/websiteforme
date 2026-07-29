# Security portfolio

A single-page portfolio for showcasing **CTF writeups**, **bug bounty findings**,
and **projects**. Hand-written HTML/CSS/JS — no frameworks, no build step. Just
open `index.html` or drop it on any static host.

## Editing your content

Almost everything is driven by **`js/data.js`**. Open it and edit the objects:

| What | Where |
|------|-------|
| Your name, blurb, skills, contact links | `SITE` |
| CTF writeup cards | `WRITEUPS` |
| Bug bounty findings | `BOUNTIES` |
| Projects | `PROJECTS` |

You should not need to touch `index.html` or `js/main.js` for normal edits.

### Adding a CTF writeup

1. Copy `writeups/_template.html` to `writeups/my-challenge.html` and fill it in.
2. Add a new object to the `WRITEUPS` array in `js/data.js`, pointing `link`
   at your new file. Set `category` to one of: `web`, `pwn`, `rev`, `crypto`,
   `forensics`, `misc` (this drives the color coding and filters).

### Adding a bug bounty finding

Add an object to `BOUNTIES`. Set `severity` to `critical`, `high`, `medium`,
or `low`. Only list disclosed/resolved reports and stay within each program's
disclosure policy.

## Theming

All colors live as CSS variables at the top of `css/style.css` (`:root`).
Change `--accent` to re-skin the whole site.

## Deploying to GitHub Pages

1. Push to GitHub (this repo).
2. Repo **Settings → Pages → Build and deployment**, source **Deploy from a
   branch**, pick your branch and the `/ (root)` folder.
3. Your site goes live at `https://<username>.github.io/<repo>/`.

The `.nojekyll` file is included so GitHub Pages serves the files as-is.
