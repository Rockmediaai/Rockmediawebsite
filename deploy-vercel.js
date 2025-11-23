#!/usr/bin/env node

// Simple deployment script for Vercel
// Run with: node deploy-vercel.js

const { spawn } = require('child_process');

console.log('🚀 Deploying RockMedia AI site to Vercel...\n');

// Install Vercel CLI if not present
const vercelDeploy = spawn('npx', ['vercel', '--prod'], {
  stdio: 'inherit',
  shell: true
});

vercelDeploy.on('close', (code) => {
  if (code === 0) {
    console.log('\n✅ Deployment successful!');
    console.log('🌐 Your site is now live on Vercel');
  } else {
    console.log('\n❌ Deployment failed');
    console.log('ℹ️  Make sure you have Vercel CLI installed and are logged in:');
    console.log('   npm i -g vercel');
    console.log('   vercel login');
  }
});