import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// ISR: Revalidate every 60 seconds
export const revalidate = 60;

// Generate static params for all gallery pages
export async function generateStaticParams() {
  // Simulate fetching list of gallery IDs from a database
  await new Promise(resolve => setTimeout(resolve, 50));
  
  return Array.from({ length: 10 }, (_, i) => ({
    id: String(i + 1),
  }));
}

// Simulate fetching gallery data from a database/API
async function fetchGalleryById(id: string) {
  const galleryId = parseInt(id, 10);
  
  if (isNaN(galleryId) || galleryId < 1 || galleryId > 10) {
    return null;
  }
  
  // Simulate database query latency (50-150ms per page)
  const delay = 50 + Math.random() * 100;
  await new Promise(resolve => setTimeout(resolve, delay));
  
  const startImage = (galleryId - 1) * 5 + 1;
  const endImage = galleryId * 5;
  
  return {
    id: galleryId,
    title: `Gallery ${galleryId}`,
    description: `Images ${startImage} through ${endImage}`,
    images: Array.from({ length: 5 }, (_, i) => ({
      id: startImage + i,
      sizes: ['large', 'medium', 'small'] as const,
    })),
    fetchedAt: new Date().toISOString(),
    latencyMs: Math.round(delay),
  };
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function GalleryDetailPage({ params }: PageProps) {
  const { id } = await params;
  const gallery = await fetchGalleryById(id);
  
  if (!gallery) {
    notFound();
  }
  
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <Link href="/gallery" className="text-blue-600 dark:text-blue-400 hover:underline mb-4 inline-block">
            ← Back to Gallery
          </Link>
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">
            {gallery.title}
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400">
            {gallery.description}
          </p>
          <p className="text-sm text-zinc-500 dark:text-zinc-500 mt-2">
            Fetched at: {gallery.fetchedAt} | Simulated latency: {gallery.latencyMs}ms
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gallery.images.map((image) => (
            <div key={image.id} className="bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 overflow-hidden">
              <div className="p-4 border-b border-zinc-200 dark:border-zinc-800">
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
                  Image {image.id}
                </h3>
              </div>
              <div className="space-y-2 p-4">
                {image.sizes.map((size) => (
                  <div key={size} className="relative aspect-[4/3] overflow-hidden rounded bg-zinc-100 dark:bg-zinc-800">
                    <Image
                      src={`/images/placeholder-${image.id}-${size}.svg`}
                      alt={`Image ${image.id} (${size})`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                    <span className="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
                      {size}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Navigation */}
        <div className="mt-8 flex justify-between">
          {gallery.id > 1 && (
            <Link
              href={`/gallery/${gallery.id - 1}`}
              className="bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 px-4 py-2 hover:shadow-md transition-shadow"
            >
              ← Gallery {gallery.id - 1}
            </Link>
          )}
          <div className="flex-1" />
          {gallery.id < 10 && (
            <Link
              href={`/gallery/${gallery.id + 1}`}
              className="bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 px-4 py-2 hover:shadow-md transition-shadow"
            >
              Gallery {gallery.id + 1} →
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
