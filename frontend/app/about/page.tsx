import Link from 'next/link';
import { ArrowLeft, Code, Users, TrendingUp, BookOpen, Globe } from 'lucide-react';

export default function AboutPage() {
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

        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          About Me
        </h1>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Senior Frontend Engineer & React/Next.js Specialist
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Hi, I&apos;m Anass FIQHI. I&apos;m a passionate frontend engineer with over 5 years of experience 
              building scalable, performant web applications. I specialize in React, Next.js, and 
              modern web technologies, with a focus on creating exceptional user experiences and 
              maintainable codebases.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              My journey in web development started with a curiosity about how things work on the web, 
              which evolved into a deep passion for building robust, user-friendly applications. 
              I believe in writing clean, efficient code and sharing knowledge with the developer community.
            </p>
          </div>

          {/* Core Values */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
              <Code className="w-12 h-12 mx-auto text-blue-600 dark:text-blue-400 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Technical Excellence
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Writing clean, maintainable code with best practices and modern patterns
              </p>
            </div>
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
              <Users className="w-12 h-12 mx-auto text-green-600 dark:text-green-400 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Team Collaboration
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Mentoring developers, sharing knowledge, and fostering collaborative environments
              </p>
            </div>
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
              <TrendingUp className="w-12 h-12 mx-auto text-purple-600 dark:text-purple-400 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Continuous Learning
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Staying current with latest technologies and industry best practices
              </p>
            </div>
          </div>

          {/* Technical Background */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Technical Background & Expertise
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Frontend Development
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-3">
                  I specialize in building modern, responsive web applications using React and Next.js. 
                  My expertise includes component architecture, state management, performance optimization, 
                  and creating reusable design systems.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'TanStack Query', 'Zustand', 'Zod', 'shadcn/ui'].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Backend & APIs
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-3">
                  Experience building scalable backend services and APIs using Node.js, Express, 
                  and various databases. I focus on creating efficient, secure, and well-documented APIs.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'REST API', 'REST APIs', 'Authentication'].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Development Tools & Practices
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-3">
                  Strong focus on development workflow optimization, testing, and deployment. 
                  I believe in the importance of code quality, testing, and continuous integration.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Git', 'Jest', 'Testing Library', 'ESLint', 'Docker', 'CI/CD', 'Drizzle'].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-sm rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Professional Philosophy */}
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              My Development Philosophy
            </h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p className="flex items-start">
                <span className="text-blue-500 mr-3 mt-1">•</span>
                <strong>User-First Approach:</strong> Every technical decision should ultimately serve the end user&apos;s needs and experience.
              </p>
              <p className="flex items-start">
                <span className="text-blue-500 mr-3 mt-1">•</span>
                <strong>Performance Matters:</strong> Fast, responsive applications are not just nice-to-have, they&apos;re essential for user satisfaction.
              </p>
              <p className="flex items-start">
                <span className="text-blue-500 mr-3 mt-1">•</span>
                <strong>Maintainable Code:</strong> Code is read more often than it&apos;s written, so clarity and maintainability are paramount.
              </p>
              <p className="flex items-start">
                <span className="text-blue-500 mr-3 mt-1">•</span>
                <strong>Continuous Learning:</strong> The web development landscape evolves rapidly, and staying current is crucial for delivering the best solutions.
              </p>
            </div>
          </div>

          {/* What I'm Working On */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              What I&apos;m Currently Working On
            </h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <BookOpen className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-1" />
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">Technical Writing</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Creating comprehensive tutorials and guides on React, Next.js, and modern web development
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Code className="w-5 h-5 text-green-600 dark:text-green-400 mt-1" />
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">Open Source</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Contributing to React ecosystem projects and building reusable components
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Globe className="w-5 h-5 text-purple-600 dark:text-purple-400 mt-1" />
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">Community</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Speaking at meetups and conferences, mentoring junior developers
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Let&apos;s Work Together
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              I&apos;m always interested in new opportunities and exciting projects. 
              Whether you need a React/Next.js expert for your team or want to discuss a potential collaboration, 
              I&apos;d love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/projects"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                View My Projects
              </a>
              <a
                href="mailto:anassfiqhi@gmail.com?subject=Let's%20Discuss%20Opportunities"
                className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
