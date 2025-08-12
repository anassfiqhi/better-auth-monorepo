import Link from 'next/link';
import { ArrowLeft, ExternalLink, Github, Globe, Code, Users, TrendingUp } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce platform built with Next.js 15, TypeScript, and Stripe. Features include user authentication, product management, shopping cart, payment processing, and admin dashboard.',
    longDescription: 'This project demonstrates advanced Next.js patterns including App Router, Server Components, and API routes. Implemented real-time inventory updates, advanced search with filters, and a responsive design system.',
    technologies: ['Next.js 15', 'TypeScript', 'Stripe', 'PostgreSQL', 'Tailwind CSS', 'Prisma', 'TanStack Query', 'Zod', 'Drizzle'],
    github: 'https://github.com/yourusername/ecommerce-platform',
    live: 'https://ecommerce-demo.com',
    image: '/project1.jpg',
    featured: true,
    metrics: {
      users: '10K+',
      performance: '95+',
      uptime: '99.9%'
    }
  },
  {
    title: 'React Component Library',
    description: 'A comprehensive component library built with React, TypeScript, and Storybook. Includes 50+ reusable components with full accessibility support and comprehensive testing.',
    longDescription: 'Built with modern React patterns including hooks, context, and compound components. Features dark mode support, responsive design, and extensive documentation with interactive examples.',
    technologies: ['React 18', 'TypeScript', 'Storybook', 'Jest', 'Testing Library', 'Rollup', 'shadcn/ui', 'Zustand', 'Drizzle'],
    github: 'https://github.com/yourusername/react-component-library',
    live: 'https://component-library-demo.com',
    image: '/project2.jpg',
    featured: true,
    metrics: {
      components: '50+',
      downloads: '100K+',
      coverage: '95%'
    }
  },
  {
    title: 'Real-time Dashboard',
    description: 'A real-time analytics dashboard built with Next.js, WebSockets, and Chart.js. Provides live data visualization, user analytics, and customizable widgets.',
    longDescription: 'Features real-time data streaming, interactive charts, drag-and-drop widget customization, and role-based access control. Optimized for performance with virtual scrolling and efficient data handling.',
    technologies: ['Next.js', 'WebSockets', 'Chart.js', 'Redis', 'PostgreSQL', 'MongoDB', 'Docker', 'TanStack Query', 'Drizzle'],
    github: 'https://github.com/yourusername/analytics-dashboard',
    live: 'https://dashboard-demo.com',
    image: '/project3.jpg',
    featured: false,
    metrics: {
      users: '5K+',
      dataPoints: '1M+',
      latency: '<100ms'
    }
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
    longDescription: 'Built with React and Node.js, featuring real-time collaboration, file attachments, time tracking, and comprehensive reporting. Includes mobile-responsive design and offline support.',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express', 'JWT', 'Zustand', 'Zod', 'Drizzle'],
    github: 'https://github.com/yourusername/task-manager',
    live: 'https://task-manager-demo.com',
    image: '/project4.jpg',
    featured: false,
    metrics: {
      teams: '500+',
      tasks: '50K+',
      efficiency: '+40%'
    }
  }
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen pt-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to home
        </Link>

        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            A showcase of my work in React, Next.js, and modern web development. Each project demonstrates different aspects of frontend engineering, from performance optimization to user experience design.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Featured Work
          </h2>
          <div className="grid gap-8 lg:grid-cols-2">
            {projects.filter(p => p.featured).map((project, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700"
              >
                <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <Code className="w-16 h-16 text-white" />
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full font-medium">
                      Featured
                    </span>
                    <div className="flex space-x-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                          aria-label={`View ${project.title} source code`}
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                          aria-label={`Visit ${project.title} live demo`}
                        >
                          <Globe className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {project.longDescription}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    {Object.entries(project.metrics).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-lg font-bold text-blue-600 dark:text-blue-400">
                          {value}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400 capitalize">
                          {key}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        View Code
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                      >
                        <Globe className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Projects */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            All Projects
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                  <Code className="w-16 h-16 text-gray-400 dark:text-gray-500" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                      >
                        <Globe className="w-4 h-4 mr-2" />
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Approach */}
        <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            My Development Approach
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <Code className="w-12 h-12 mx-auto text-blue-600 dark:text-blue-400 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Clean Architecture
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Well-structured, maintainable code with clear separation of concerns and modern React patterns
              </p>
            </div>
            <div className="text-center">
              <TrendingUp className="w-12 h-12 mx-auto text-green-600 dark:text-green-400 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Performance First
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Optimized for speed, accessibility, and Core Web Vitals with modern optimization techniques
              </p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 mx-auto text-purple-600 dark:text-purple-400 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                User Experience
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Intuitive interfaces, responsive design, and accessibility compliance for all users
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to build something amazing together?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            I&apos;m always excited to work on new projects and collaborate with teams to create exceptional web experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:anassfiqhi@gmail.com?subject=Project%20Collaboration"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              Let&apos;s discuss your project
            </a>
            <a
              href="/about"
              className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              Learn more about me
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
