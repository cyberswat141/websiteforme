/* ==========================================================
   EDIT THIS FILE to add your content.
   Everything on the homepage is generated from these objects —
   you shouldn't need to touch index.html or main.js.
   ========================================================== */

const SITE = {
  name: "Your Name",            // shown in the hero
  handle: "0xyourhandle",       // used in footer
  blurb:
    "Security researcher & CTF player. I hunt bugs, write up my findings, " +
    "and build tools along the way.",
  skills: [
    "Web exploitation",
    "Reverse engineering",
    "Burp Suite / Caido",
    "Python & Bash",
    "Ghidra / pwntools",
  ],
  contacts: [
    { label: "email", url: "mailto:you@example.com" },
    { label: "github", url: "https://github.com/cyberswat141" },
    { label: "hackerone", url: "https://hackerone.com/yourhandle" },
    { label: "x / twitter", url: "https://x.com/yourhandle" },
  ],
};

/* ---- CTF writeups ----------------------------------------
   category: web | pwn | rev | crypto | forensics | misc
   link: point at a page in writeups/ (copy the template) or
         an external gist/blog post.
----------------------------------------------------------- */
const WRITEUPS = [
  {
    title: "Baby SQLi — Example CTF 2026",
    event: "Example CTF 2026",
    category: "web",
    points: 150,
    description:
      "Classic UNION-based SQL injection behind a naive keyword filter. " +
      "Bypassed with inline comments and dumped the flag from an unlisted table.",
    link: "writeups/example-sqli.html",
  },
  {
    title: "ret2libc warmup — Example CTF 2026",
    event: "Example CTF 2026",
    category: "pwn",
    points: 300,
    description:
      "Stack buffer overflow with NX enabled. Leaked libc via puts@GOT, " +
      "computed base, and returned to system('/bin/sh').",
    link: "writeups/example-pwn.html",
  },
  {
    title: "Spinning VM — replace me",
    event: "Some CTF",
    category: "rev",
    points: 450,
    description:
      "This is a placeholder card. Duplicate this object in js/data.js, " +
      "copy writeups/_template.html, and write up your own solve.",
    link: "writeups/_template.html",
  },
];

/* ---- Bug bounty findings ----------------------------------
   severity: critical | high | medium | low
   Only list disclosed/resolved reports; keep details within
   what the program's disclosure policy allows.
----------------------------------------------------------- */
const BOUNTIES = [
  {
    title: "IDOR exposing order history",
    program: "Redacted e-commerce program (private)",
    severity: "high",
    bounty: "$1,500",
    date: "2026-03",
    description:
      "Sequential order IDs with a missing ownership check on the invoice " +
      "endpoint allowed reading any customer's order details.",
    link: "", // optional: link to the disclosed report
  },
  {
    title: "Stored XSS in profile display name",
    program: "Redacted SaaS program",
    severity: "medium",
    bounty: "$500",
    date: "2026-01",
    description:
      "Display name rendered unescaped in the admin dashboard, allowing " +
      "session takeover of admin users. Placeholder — replace with your finding.",
    link: "",
  },
];

/* ---- Projects --------------------------------------------- */
const PROJECTS = [
  {
    title: "recon-buddy",
    description:
      "Placeholder project. A small wrapper that chains subdomain enumeration, " +
      "port scanning, and screenshotting into one command. Replace me in js/data.js.",
    tags: ["python", "recon", "automation"],
    link: "https://github.com/cyberswat141",
  },
  {
    title: "this website",
    description:
      "This portfolio itself — hand-written HTML/CSS/JS, no frameworks, " +
      "no build step, deployable straight to GitHub Pages.",
    tags: ["html", "css", "javascript"],
    link: "https://github.com/cyberswat141/websiteforme",
  },
];
