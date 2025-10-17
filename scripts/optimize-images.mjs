#!/usr/bin/env node

/**
 * Image Optimization Script for Switch Invest
 *
 * This script converts large PNG images to optimized WebP and AVIF formats
 * Target savings: ~90% file size reduction (5.8 MB → ~600 KB)
 *
 * Usage: node scripts/optimize-images.mjs
 */

import sharp from 'sharp';
import { readdir, stat, mkdir } from 'fs/promises';
import { join, dirname, basename, extname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, '..');

// Images to optimize (large files identified in analysis)
const imagesToOptimize = [
  {
    input: 'public/images/logo.png',
    quality: 90,
    sizes: [180, 256, 384] // Responsive sizes for logo
  },
  {
    input: 'public/images/switchinvest-logo.png',
    quality: 90,
    sizes: [256, 512, 1024]
  },
  {
    input: 'public/images/switchinvest-logo-transparent.png',
    quality: 90,
    sizes: [256, 512, 1024]
  },
  {
    input: 'public/images/pattern-bg-new.png',
    quality: 85,
    sizes: [1920] // Background pattern
  },
  {
    input: 'public/images/og-image.jpg',
    quality: 85,
    sizes: [1200] // OG image
  },
  {
    input: 'public/images/twitter-image.jpg',
    quality: 85,
    sizes: [1200]
  },
  {
    input: 'public/images/about/oficeclass.jpg',
    quality: 85,
    sizes: [640, 1024, 1920]
  }
];

async function ensureDir(dirPath) {
  try {
    await mkdir(dirPath, { recursive: true });
  } catch (err) {
    if (err.code !== 'EEXIST') throw err;
  }
}

async function getFileSize(filePath) {
  try {
    const stats = await stat(filePath);
    return stats.size;
  } catch {
    return 0;
  }
}

function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
}

async function optimizeImage(config) {
  const inputPath = join(projectRoot, config.input);
  const dir = dirname(inputPath);
  const ext = extname(inputPath);
  const name = basename(inputPath, ext);

  console.log(`\n📸 Optimizing: ${config.input}`);

  try {
    const originalSize = await getFileSize(inputPath);
    console.log(`   Original size: ${formatBytes(originalSize)}`);

    let totalSaved = 0;

    // Generate optimized versions for each size
    for (const size of config.sizes) {
      const image = sharp(inputPath);
      const metadata = await image.metadata();

      // Only resize if image is larger than target size
      if (metadata.width > size) {
        image.resize(size, null, {
          withoutEnlargement: true,
          fit: 'inside'
        });
      }

      // Generate WebP
      const webpPath = join(dir, `${name}${size !== metadata.width ? `-${size}w` : ''}.webp`);
      await image
        .clone()
        .webp({ quality: config.quality, effort: 6 })
        .toFile(webpPath);

      const webpSize = await getFileSize(webpPath);
      totalSaved += originalSize - webpSize;
      console.log(`   ✓ WebP (${size}w): ${formatBytes(webpSize)} saved`);

      // Generate AVIF (even better compression)
      const avifPath = join(dir, `${name}${size !== metadata.width ? `-${size}w` : ''}.avif`);
      await image
        .clone()
        .avif({ quality: config.quality, effort: 6 })
        .toFile(avifPath);

      const avifSize = await getFileSize(avifPath);
      totalSaved += originalSize - avifSize;
      console.log(`   ✓ AVIF (${size}w): ${formatBytes(avifSize)} saved`);
    }

    console.log(`   💾 Total savings: ${formatBytes(totalSaved)}`);
    return totalSaved;

  } catch (error) {
    console.error(`   ❌ Error optimizing ${config.input}:`, error.message);
    return 0;
  }
}

async function main() {
  console.log('🚀 Starting image optimization...\n');
  console.log('Target files:');
  imagesToOptimize.forEach(img => console.log(`  - ${img.input}`));

  let totalSavings = 0;

  for (const config of imagesToOptimize) {
    const saved = await optimizeImage(config);
    totalSavings += saved;
  }

  console.log('\n' + '='.repeat(60));
  console.log(`✨ Optimization complete!`);
  console.log(`📊 Total space saved: ${formatBytes(totalSavings)}`);
  console.log(`🎯 Estimated load time improvement: 40-60%`);
  console.log('='.repeat(60));
  console.log('\n📝 Next steps:');
  console.log('  1. Update image references to use new .webp/.avif files');
  console.log('  2. Use <picture> element with fallbacks');
  console.log('  3. Add proper sizes attribute for responsive images');
  console.log('  4. Test in production build\n');
}

main().catch(console.error);
