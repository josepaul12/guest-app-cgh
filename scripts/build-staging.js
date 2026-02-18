const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const rootDir = path.join(__dirname, '..');
const envFile = path.join(rootDir, '.env');
const envStagingFile = path.join(rootDir, '.env.staging');
const envBackupFile = path.join(rootDir, '.env.backup');

try {
  // Backup current .env file if it exists
  if (fs.existsSync(envFile)) {
    fs.copyFileSync(envFile, envBackupFile);
    console.log('✓ Backed up current .env file');
  }

  // Copy .env.staging to .env
  if (fs.existsSync(envStagingFile)) {
    // Read both files and merge them
    const stagingContent = fs.readFileSync(envStagingFile, 'utf8');
    const stagingLines = stagingContent.split('\n').filter(line => line.trim());
    
    // Read base .env if it exists to preserve PUBLIC_URL and BUILD_PATH
    let baseEnvContent = '';
    if (fs.existsSync(envBackupFile)) {
      baseEnvContent = fs.readFileSync(envBackupFile, 'utf8');
    }
    
    // Merge: keep PUBLIC_URL and BUILD_PATH from base, add staging vars
    const mergedLines = [];
    const stagingVars = new Set();
    
    // First, add staging variables
    stagingLines.forEach(line => {
      if (line.trim() && !line.startsWith('#')) {
        const key = line.split('=')[0].trim();
        stagingVars.add(key);
        mergedLines.push(line);
      }
    });
    
    // Then add base env vars that aren't in staging (like PUBLIC_URL, BUILD_PATH)
    if (baseEnvContent) {
      baseEnvContent.split('\n').forEach(line => {
        if (line.trim() && !line.startsWith('#')) {
          const key = line.split('=')[0].trim();
          if (!stagingVars.has(key) && (key === 'PUBLIC_URL' || key === 'BUILD_PATH')) {
            mergedLines.push(line);
          }
        }
      });
    }
    
    // Write merged content
    fs.writeFileSync(envFile, mergedLines.join('\n') + '\n');
    console.log('✓ Copied staging environment variables to .env');
  } else {
    console.error('✗ .env.staging file not found');
    process.exit(1);
  }

  // Run the build
  console.log('Building for staging...');
  execSync('npm run build', { stdio: 'inherit', cwd: rootDir });

  // Restore original .env file
  if (fs.existsSync(envBackupFile)) {
    fs.copyFileSync(envBackupFile, envFile);
    fs.unlinkSync(envBackupFile);
    console.log('✓ Restored original .env file');
  }

  console.log('✓ Staging build completed successfully');
} catch (error) {
  console.error('✗ Build failed:', error.message);
  
  // Restore original .env file on error
  if (fs.existsSync(envBackupFile)) {
    fs.copyFileSync(envBackupFile, envFile);
    fs.unlinkSync(envBackupFile);
    console.log('✓ Restored original .env file');
  }
  
  process.exit(1);
}
