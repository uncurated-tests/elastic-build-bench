#!/usr/bin/env node
import { list, del } from '@vercel/blob';

async function flushAllBlobs() {
  console.log('Fetching all blobs with prefix "timing/"...');
  
  let allBlobs = [];
  let cursor;
  
  do {
    const result = await list({ prefix: 'timing/', cursor, limit: 1000 });
    allBlobs = allBlobs.concat(result.blobs);
    cursor = result.cursor;
    console.log(`Fetched ${allBlobs.length} blobs so far...`);
  } while (cursor);
  
  console.log(`\nTotal blobs found: ${allBlobs.length}`);
  
  if (allBlobs.length === 0) {
    console.log('No blobs to delete.');
    return;
  }
  
  console.log('\nDeleting blobs...');
  
  // Delete in batches
  const batchSize = 100;
  for (let i = 0; i < allBlobs.length; i += batchSize) {
    const batch = allBlobs.slice(i, i + batchSize);
    const urls = batch.map(b => b.url);
    
    await del(urls);
    console.log(`Deleted ${Math.min(i + batchSize, allBlobs.length)}/${allBlobs.length} blobs`);
  }
  
  console.log('\nAll blobs deleted successfully!');
}

flushAllBlobs().catch(console.error);
