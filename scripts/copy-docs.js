import fs from 'node:fs';

try {
  if (fs.existsSync('dist')) {
    fs.mkdirSync('docs', { recursive: true });
    fs.cpSync('dist', 'docs', { recursive: true });
    // Keep CNAME in docs if exists in root
    if (fs.existsSync('CNAME')) {
      fs.copyFileSync('CNAME', 'docs/CNAME');
    }
  }
} catch (e) {
  console.warn('Note: docs sync skipped', e.message);
}
