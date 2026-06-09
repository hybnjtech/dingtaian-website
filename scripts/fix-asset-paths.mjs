// Post-process static export HTML to fix asset paths for GitHub Pages deployment
import { readFileSync, writeFileSync, readdirSync, existsSync, mkdirSync } from 'node:fs';
import { join, extname } from 'node:path';

const OUT_DIR = new URL('../out', import.meta.url).pathname.replace(/^\/([A-Z]:)/, '$1');
const BASE_PATH = '/dingtaian-website';

function processFile(filePath) {
  let content = readFileSync(filePath, 'utf-8');
  const original = content;
  
  // Fix public asset paths
  content = content.replace(/src="\/images\//g, `src="${BASE_PATH}/images/`);
  content = content.replace(/href="\/images\//g, `href="${BASE_PATH}/images/`);
  content = content.replace(/url\(\/images\//g, `url(${BASE_PATH}/images/`);
  
  // Fix favicon and SVG assets at root
  for (const asset of ['favicon.ico', 'file.svg', 'globe.svg', 'next.svg', 'vercel.svg', 'window.svg']) {
    content = content.replace(new RegExp(`href="\/${asset}`, 'g'), `href="${BASE_PATH}/${asset}`);
    content = content.replace(new RegExp(`src="\/${asset}`, 'g'), `src="${BASE_PATH}/${asset}`);
  }
  
  if (content !== original) {
    writeFileSync(filePath, content, 'utf-8');
    return true;
  }
  return false;
}

function walkDir(dir) {
  let count = 0;
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      count += walkDir(full);
    } else if (extname(entry.name) === '.html') {
      if (processFile(full)) count++;
    }
  }
  return count;
}

const modified = walkDir(OUT_DIR);
console.log(`Fixed asset paths in ${modified} HTML files`);