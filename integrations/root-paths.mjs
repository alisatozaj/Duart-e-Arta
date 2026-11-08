// Adds the site's `base` (e.g. "/Duart-e-Arta") to every root-relative path
// in the built files: href="/x", src="/x", data-src="/x", srcset, and CSS url(/x).
// Astro only does this for the files it bundles itself, not for plain "/logo.png" strings.
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const escape = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

export function prefixPaths(text, base) {
  const b = escape(base.replace(/^\//, '')); // name after the first slash
  // not "//host", and not already prefixed with the base
  const notPrefixed = `(?!/|${b}(?:[/"'?#)\\s]|$))`;
  return text
    .replace(
      new RegExp(`(\\b(?:href|src|data-src|poster|action)\\s*=\\s*["'])/${notPrefixed}`, 'g'),
      `$1${base}/`
    )
    .replace(new RegExp(`(\\burl\\(\\s*["']?)/${notPrefixed}`, 'g'), `$1${base}/`);
}

async function walk(dir) {
  const out = [];
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walk(p)));
    else if (/\.(html|css)$/.test(e.name)) out.push(p);
  }
  return out;
}

export default function rootPaths(base) {
  const clean = base.replace(/\/$/, '');
  return {
    name: 'root-paths',
    hooks: {
      'astro:build:done': async ({ dir }) => {
        if (!clean) return; // base is "/", nothing to do
        for (const file of await walk(fileURLToPath(dir))) {
          const before = await readFile(file, 'utf8');
          const after = prefixPaths(before, clean);
          if (after !== before) await writeFile(file, after);
        }
      },
    },
  };
}
