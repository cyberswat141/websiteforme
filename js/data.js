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
    { label: "email", url: "cyberswat750@gmail.com" },
    { label: "github", url: "https://github.com/cyberswat141" },
    { label: "Linkedin", url: "https://www.linkedin.com/in/milosz-bilas-35679a2a0?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
    { label: "HackTheBox", url: "https://profile.hackthebox.com/profile/019e7fba-8479-7167-8ab6-c55562a2662d" },
  ],
};

/* ---- CTF writeups ----------------------------------------
   category: web | pwn | rev | crypto | forensics | misc
   link: point at a page in writeups/ (copy the template) or
         an external gist/blog post.
----------------------------------------------------------- */
const WRITEUPS = [
     {
    title: "Reactor — Hack The Box",
    event: "Hack The Box",
    category: "web",
    points: 30,
    description:
      "Next.js 15.0.3 RCE (CVE-2025-55182) for foothold, cracked an MD5 from " +
      "reactor.db to SSH in, then abused a root Node --inspect debugger to reach root.",
    link: "writeups/reactor.html",
  },
     {
    title: "facts — Hack The Box",
    event: "Hack The Box",
    category: "web",
    points: 30,
    description:
      "Camaleon CMS mass-assignment (CVE-2025-2304) to admin, looted MinIO S3 for an " +
      "SSH key, cracked its passphrase, then rooted via a passwordless sudo facter.",
    link: "writeups/facts.html",
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
