import Link from 'next/link';
import { Calendar, Clock, ArrowRight, Code, TrendingUp, BookOpen } from 'lucide-react';

const articles = [
  {
    id: 'building-a-modern-web-app',
    title: 'Building a Modern Web App with Next.js 15 and TypeScript',
    excerpt: 'A comprehensive guide to building production-ready web applications using Next.js 15 App Router, TypeScript, and modern development practices. Learn about Server Components, streaming, and performance optimization.',
    date: '2024-01-15',
    readTime: '12 min read',
    category: 'Next.js',
    tags: ['Next.js', 'TypeScript', 'App Router', 'Performance'],
    featured: true,
  },
  {
    id: 'react-performance-optimization',
    title: 'Advanced React Performance Optimization Techniques',
    excerpt: 'Deep dive into React performance optimization including memoization, code splitting, lazy loading, and profiling. Real-world examples and performance measurement strategies.',
    date: '2024-01-08',
    readTime: '15 min read',
    category: 'React',
    tags: ['React', 'Performance', 'Optimization', 'Profiling'],
    featured: true,
  },
  {
    id: 'typescript-best-practices',
    title: 'TypeScript Best Practices for React Developers',
    excerpt: 'Essential TypeScript patterns and practices specifically for React development. Learn about proper typing, generics, utility types, and avoiding common pitfalls.',
    date: '2024-01-01',
    readTime: '10 min read',
    category: 'TypeScript',
    tags: ['TypeScript', 'React', 'Best Practices', 'Type Safety'],
    featured: false,
  }
];

export function ArticlesList() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Latest Articles & Tutorials
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            In-depth technical content about React, Next.js, and modern web development
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <article
              key={article.id}
              className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ${
                article.featured ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              {article.featured && (
                <div className="bg-blue-500 text-white text-xs font-medium px-3 py-1 text-center">
                  Featured
                </div>
              )}
              
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <span className={`text-sm font-medium px-2 py-1 rounded-full ${
                    article.category === 'Next.js' 
                      ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
                      : article.category === 'React'
                      ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                      : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                  }`}>
                    {article.category}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 line-clamp-2">
                  {article.title}
                </h3>

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
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Article Categories */}
        <div className="mt-12 bg-gray-50 dark:bg-gray-900 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 text-center">
            Article Categories
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Next.js', count: 8, icon: Code, color: 'purple' },
              { name: 'React', count: 12, icon: Code, color: 'blue' },
              { name: 'TypeScript', count: 6, icon: Code, color: 'green' },
              { name: 'Performance', count: 4, icon: TrendingUp, color: 'orange' },
            ].map((category) => (
              <Link
                key={category.name}
                href={`/articles?category=${category.name.toLowerCase()}`}
                className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg hover:shadow-md transition-shadow duration-300"
              >
                <category.icon className={`w-8 h-8 mx-auto mb-2 text-${category.color}-600 dark:text-${category.color}-400`} />
                <div className="font-medium text-gray-900 dark:text-white">{category.name}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">{category.count} articles</div>
              </Link>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            href="/articles"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            <BookOpen className="w-4 h-4 mr-2" />
            View all articles
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
