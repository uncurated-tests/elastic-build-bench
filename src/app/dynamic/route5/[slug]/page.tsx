// Dynamic Route 5 - v13
// Generates 500 static pages at build time

export function generateStaticParams() {
  return Array.from({ length: 500 }, (_, i) => ({
    slug: `dynamic-5-${i}`,
  }));
}

export default function DynamicPage({ params }: { params: { slug: string } }) {
  const pageNum = parseInt(params.slug.split('-').pop() || '0', 10);
  
  return (
    <div className="p-4 min-h-screen bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-800">
      <h1 className="text-xl font-bold mb-4">Dynamic Page: {params.slug}</h1>
      <div className="grid grid-cols-3 gap-4">
        {Array.from({ length: 6 }, (_, i) => (
          <div key={i} className="p-4 bg-white dark:bg-zinc-800 rounded-lg shadow">
            <div className="font-medium">Section {i + 1}</div>
            <div className="text-zinc-500">Route 5, Page {pageNum}</div>
            <div className="text-sm mt-2">Value: {Math.sin(pageNum * 6 + i).toFixed(4)}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
