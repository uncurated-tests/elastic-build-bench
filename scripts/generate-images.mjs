#!/usr/bin/env node
/**
 * Generate placeholder images for Next.js image optimization testing
 * Creates SVG images that will be processed by Next.js during build
 */

import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = join(__dirname, '..');
const imagesDir = join(projectRoot, 'public', 'images');

// Ensure directory exists
if (!existsSync(imagesDir)) {
  mkdirSync(imagesDir, { recursive: true });
}

const NUM_IMAGES = 50; // Number of images to generate
const SIZES = [
  { width: 1200, height: 800, name: 'large' },
  { width: 800, height: 600, name: 'medium' },
  { width: 400, height: 300, name: 'small' },
];

// Generate SVG placeholder images
function generateSVG(width, height, index, variant) {
  const hue = (index * 37) % 360; // Vary colors
  const backgroundColor = `hsl(${hue}, 70%, 80%)`;
  const textColor = `hsl(${hue}, 70%, 30%)`;
  
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <rect width="100%" height="100%" fill="${backgroundColor}"/>
  <rect x="10" y="10" width="${width - 20}" height="${height - 20}" fill="none" stroke="${textColor}" stroke-width="2" rx="8"/>
  <text x="50%" y="45%" dominant-baseline="middle" text-anchor="middle" font-family="system-ui, sans-serif" font-size="${Math.min(width, height) / 8}" fill="${textColor}">
    Image ${index + 1}
  </text>
  <text x="50%" y="60%" dominant-baseline="middle" text-anchor="middle" font-family="system-ui, sans-serif" font-size="${Math.min(width, height) / 12}" fill="${textColor}">
    ${width}×${height} ${variant}
  </text>
</svg>`;
}

console.log(`[IMAGES] Generating ${NUM_IMAGES * SIZES.length} placeholder images...`);

for (let i = 0; i < NUM_IMAGES; i++) {
  for (const size of SIZES) {
    const filename = `placeholder-${i + 1}-${size.name}.svg`;
    const filepath = join(imagesDir, filename);
    const svg = generateSVG(size.width, size.height, i, size.name);
    writeFileSync(filepath, svg);
  }
  
  if ((i + 1) % 10 === 0) {
    console.log(`[IMAGES]   Generated ${i + 1}/${NUM_IMAGES} image sets`);
  }
}

console.log(`[IMAGES] Done! Generated ${NUM_IMAGES * SIZES.length} images in public/images/`);
