import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Use default components with optional overrides
    h1: ({ children }) => (
      <h1 className="text-3xl font-bold mt-8 mb-4">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-semibold mt-6 mb-3">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-medium mt-4 mb-2">{children}</h3>
    ),
    p: ({ children }) => (
      <p className="my-4 text-zinc-700 dark:text-zinc-300">{children}</p>
    ),
    code: ({ children, className }) => {
      // Inline code vs code blocks
      if (className) {
        return (
          <code className={`${className} block p-4 rounded bg-zinc-100 dark:bg-zinc-800 overflow-x-auto`}>
            {children}
          </code>
        );
      }
      return (
        <code className="px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-sm">
          {children}
        </code>
      );
    },
    pre: ({ children }) => (
      <pre className="my-4 p-4 rounded-lg bg-zinc-900 text-zinc-100 overflow-x-auto">
        {children}
      </pre>
    ),
    ul: ({ children }) => (
      <ul className="my-4 pl-6 list-disc space-y-2">{children}</ul>
    ),
    li: ({ children }) => (
      <li className="text-zinc-700 dark:text-zinc-300">{children}</li>
    ),
    ...components,
  };
}
