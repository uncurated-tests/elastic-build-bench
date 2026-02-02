import Image from 'next/image';

interface ImageGalleryProps {
  count?: number;
  showAll?: boolean;
}

/**
 * Image gallery component that uses Next.js Image optimization
 * This triggers image processing during build, increasing deployment overhead
 */
export default function ImageGallery({ count = 10, showAll = false }: ImageGalleryProps) {
  const totalImages = 50;
  const displayCount = showAll ? totalImages : Math.min(count, totalImages);
  
  const sizes = ['large', 'medium', 'small'] as const;
  
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4">
      {Array.from({ length: displayCount }, (_, i) => (
        <div key={i} className="space-y-2">
          {sizes.map((size) => (
            <div key={`${i}-${size}`} className="relative aspect-[4/3] overflow-hidden rounded-lg bg-zinc-100 dark:bg-zinc-800">
              <Image
                src={`/images/placeholder-${i + 1}-${size}.svg`}
                alt={`Placeholder image ${i + 1} (${size})`}
                fill
                sizes={size === 'large' ? '(max-width: 768px) 100vw, 33vw' : '(max-width: 768px) 50vw, 20vw'}
                className="object-cover"
                priority={i < 3} // Priority load first few images
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

// Export image paths for static generation
export function getImagePaths() {
  const paths: string[] = [];
  const sizes = ['large', 'medium', 'small'];
  
  for (let i = 0; i < 50; i++) {
    for (const size of sizes) {
      paths.push(`/images/placeholder-${i + 1}-${size}.svg`);
    }
  }
  
  return paths;
}
