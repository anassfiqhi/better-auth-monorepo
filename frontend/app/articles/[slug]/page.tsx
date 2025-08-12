import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';
import { notFound } from 'next/navigation';

const articles = {
  'building-a-modern-web-app': {
    title: 'Building a Modern Web App with Next.js and TypeScript',
    excerpt: 'Learn how to build a production-ready web application using Next.js 13, TypeScript, and modern development practices.',
    date: '2024-01-15',
    readTime: '8 min read',
    category: 'Development',
    tags: ['Next.js', 'TypeScript', 'Web Development'],
    content: `
      <p>Building modern web applications requires a solid foundation and the right tools. In this comprehensive guide, we'll explore how to create a production-ready web application using Next.js 13, TypeScript, and modern development practices.</p>
      
      <h2>Why Next.js 13?</h2>
      <p>Next.js 13 introduces the App Router, which provides a more intuitive and powerful way to build React applications. With features like Server Components, streaming, and improved performance, it's the perfect choice for modern web development.</p>
      
      <h2>Setting Up TypeScript</h2>
      <p>TypeScript adds type safety to your JavaScript code, making it more maintainable and less prone to runtime errors. We'll configure TypeScript with Next.js and set up proper type definitions.</p>
      
      <h2>Project Structure</h2>
      <p>A well-organized project structure is crucial for maintainability. We'll create a scalable folder structure that follows Next.js 13 conventions and best practices.</p>
      
      <h2>Component Architecture</h2>
      <p>Learn how to design reusable components that are both performant and maintainable. We'll cover Server Components, Client Components, and when to use each.</p>
      
      <h2>Styling with Tailwind CSS</h2>
      <p>Tailwind CSS provides utility-first styling that makes it easy to create beautiful, responsive designs. We'll integrate it with Next.js and create a design system.</p>
      
      <h2>State Management</h2>
      <p>Explore different state management solutions for Next.js applications, from React hooks to more complex solutions like Zustand or Redux Toolkit.</p>
      
      <h2>Testing Strategy</h2>
      <p>A comprehensive testing strategy ensures your application works correctly and remains stable as it evolves. We'll set up unit tests, integration tests, and end-to-end tests.</p>
      
      <h2>Deployment</h2>
      <p>Deploy your application to production with confidence. We'll cover deployment strategies, environment configuration, and monitoring.</p>
      
      <p>By the end of this guide, you'll have a solid understanding of how to build modern web applications with Next.js 13 and TypeScript, along with the confidence to tackle real-world projects.</p>
    `,
  },
  'the-future-of-web-development': {
    title: 'The Future of Web Development: What to Expect in 2024',
    excerpt: 'Exploring the latest trends and technologies that will shape the web development landscape in the coming year.',
    date: '2024-01-10',
    readTime: '6 min read',
    category: 'Technology',
    tags: ['Web Development', 'Trends', 'Technology'],
    content: `
      <p>The web development landscape is constantly evolving, with new technologies and approaches emerging every year. Let's explore what 2024 has in store for web developers.</p>
      
      <h2>WebAssembly (WASM)</h2>
      <p>WebAssembly continues to gain traction, enabling high-performance applications to run in the browser. We'll see more frameworks and tools built around WASM.</p>
      
      <h2>Edge Computing</h2>
      <p>Edge computing brings computation closer to users, reducing latency and improving performance. This trend will continue to grow in 2024.</p>
      
      <h2>AI-Powered Development</h2>
      <p>AI tools are becoming increasingly sophisticated, helping developers write code, debug issues, and optimize performance.</p>
    `,
  },
  'optimizing-react-performance': {
    title: 'Optimizing React Performance: A Comprehensive Guide',
    excerpt: 'Deep dive into React performance optimization techniques, from memoization to code splitting and beyond.',
    date: '2024-01-05',
    readTime: '12 min read',
    category: 'Development',
    tags: ['React', 'Performance', 'Optimization'],
    content: `
      <p>Performance is crucial for user experience. In this comprehensive guide, we'll explore various techniques to optimize React applications.</p>
      
      <h2>React.memo and useMemo</h2>
      <p>Learn when and how to use React.memo and useMemo to prevent unnecessary re-renders.</p>
      
      <h2>Code Splitting</h2>
      <p>Implement code splitting to reduce bundle size and improve initial load times.</p>
      
      <h2>Lazy Loading</h2>
      <p>Use lazy loading to defer the loading of non-critical components and resources.</p>
    `,
  },
};

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articles[params.slug as keyof typeof articles];
  
  if (!article) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/articles"
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to articles
        </Link>
        
        <article>
          <header className="mb-8">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                {article.category}
              </span>
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {article.title}
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
              {article.excerpt}
            </p>
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-6">
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <time dateTime={article.date}>
                  {new Date(article.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>{article.readTime}</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-sm rounded-full"
                >
                  <Tag className="w-3 h-3 mr-1" />
                  {tag}
                </span>
              ))}
            </div>
          </header>
          
          <div 
            className="prose prose-lg dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </article>
      </div>
    </main>
  );
}
