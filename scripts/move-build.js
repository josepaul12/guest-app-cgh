const fs = require('fs');
const path = require('path');

const buildDir = path.join(__dirname, '..', 'build');
const distDir = path.join(__dirname, '..', 'dist');

// If build directory exists, move it to dist
if (fs.existsSync(buildDir)) {
  // Remove dist if it exists
  if (fs.existsSync(distDir)) {
    fs.rmSync(distDir, { recursive: true, force: true });
  }
  
  // Move build to dist
  fs.renameSync(buildDir, distDir);
  console.log('✓ Build moved to dist folder');
} else if (fs.existsSync(distDir)) {
  // If build doesn't exist but dist does, that's fine (already moved)
  console.log('✓ Build already in dist folder');
} else {
  console.error('✗ Build folder not found');
  process.exit(1);
}
