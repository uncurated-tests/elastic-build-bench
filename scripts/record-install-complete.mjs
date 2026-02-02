#!/usr/bin/env node
/**
 * Records when npm install completes
 * This timestamp is used to calculate install phase duration
 */

import { writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = join(__dirname, '..');

try {
  const timestamp = new Date().toISOString();
  const generatedDir = join(projectRoot, 'src', 'generated');
  mkdirSync(generatedDir, { recursive: true });
  
  const installCompleteFile = join(generatedDir, 'install-complete.json');
  writeFileSync(installCompleteFile, JSON.stringify({ 
    installCompleteAt: timestamp,
    nodeVersion: process.version,
    platform: process.platform,
    arch: process.arch
  }, null, 2));
  
  console.log(`[POSTINSTALL] Recorded install completion at ${timestamp}`);
} catch (error) {
  console.warn('[POSTINSTALL] Failed to record install completion:', error.message);
}
