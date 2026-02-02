import ImageGallery from '../components/ImageGallery';
import Link from 'next/link';

// ISR: Revalidate every 60 seconds
export const revalidate = 60;

// Simulate data fetching delay (represents real DB/API calls)
async function fetchGalleryData() {
  // Simulate network latency for data fetching
  await new Promise(resolve => setTimeout(resolve, 100));
  
  return {
    title: 'Image Gallery',
    description: 'A collection of optimized images for benchmark testing',
    generatedAt: new Date().toISOString(),
    imageCount: 50,
  };
}

export default async function GalleryPage() {
  const data = await fetchGalleryData();
  
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <Link href="/" className="text-blue-600 dark:text-blue-400 hover:underline mb-4 inline-block">
            ← Back to Dashboard
          </Link>
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">
            {data.title}
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400">
            {data.description}
          </p>
          <p className="text-sm text-zinc-500 dark:text-zinc-500 mt-2">
            Generated at: {data.generatedAt} | {data.imageCount} images
          </p>
        </div>
        
        <ImageGallery count={20} />
        
        <div className="mt-8 grid grid-cols-2 md:grid-cols-5 gap-4">
          {Array.from({ length: 10 }, (_, i) => (
            <Link
              key={i}
              href={`/gallery/${i + 1}`}
              className="bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 p-4 hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
                Gallery {i + 1}
              </h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-500">
                View images {i * 5 + 1}-{(i + 1) * 5}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
