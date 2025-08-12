import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, Search } from 'lucide-react';

const allArticles = [
  {
    id: 'building-a-modern-web-app',
    title: 'Building a Modern Web App with Next.js and TypeScript',
    excerpt: 'Learn how to build a production-ready web application using Next.js 13, TypeScript, and modern development practices.',
    date: '2024-01-15',
    readTime: '8 min read',
    category: 'Development',
    tags: ['Next.js', 'TypeScript', 'Web Development'],
  },
  {
    id: 'the-future-of-web-development',
    title: 'The Future of Web Development: What to Expect in 2024',
    excerpt: 'Exploring the latest trends and technologies that will shape the web development landscape in the coming year.',
    date: '2024-01-10',
    readTime: '6 min read',
    category: 'Technology',
    tags: ['Web Development', 'Trends', 'Technology'],
  },
  {
    id: 'optimizing-react-performance',
    title: 'Optimizing React Performance: A Comprehensive Guide',
    excerpt: 'Deep dive into React performance optimization techniques, from memoization to code splitting and beyond.',
    date: '2024-01-05',
    readTime: '12 min read',
    category: 'Development',
    tags: ['React', 'Performance', 'Optimization'],
  },
  {
    id: 'css-grid-vs-flexbox',
    title: 'CSS Grid vs Flexbox: When to Use Each',
    excerpt: 'A practical guide to choosing between CSS Grid and Flexbox for different layout scenarios.',
    date: '2023-12-20',
    readTime: '10 min read',
    category: 'CSS',
    tags: ['CSS', 'Grid', 'Flexbox', 'Layout'],
  },
  {
    id: 'typescript-best-practices',
    title: 'TypeScript Best Practices for 2024',
    excerpt: 'Essential TypeScript patterns and practices that will make your code more maintainable and robust.',
    date: '2023-12-15',
    readTime: '15 min read',
    category: 'Development',
    tags: ['TypeScript', 'Best Practices', 'Code Quality'],
  },
  {
    id: 'web-accessibility-guide',
    title: 'A Complete Guide to Web Accessibility',
    excerpt: 'Everything you need to know about making your web applications accessible to all users.',
    date: '2023-12-10',
    readTime: '20 min read',
    category: 'Accessibility',
    tags: ['Accessibility', 'WCAG', 'Inclusive Design'],
  },
];

const categories = ['All', 'Development', 'Technology', 'CSS', 'Accessibility'];

export default function ArticlesPage() {
  return (
    <main className="min-h-screen pt-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to home
        </Link>
        
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Articles
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Thoughts, tutorials, and insights from my journey in software development
          </p>
        </div>
        
        {/* Search and Filter */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    category === 'All'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Articles Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {allArticles.map((article) => (
            <article
              key={article.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                    {article.category}
                  </span>
                </div>
                
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 line-clamp-2">
                  {article.title}
                </h2>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
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
                
                <Link
                  href={`/articles/${article.id}`}
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
                >
                  Read full article
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
