import { Code, Zap, Database, Palette, Server, Globe } from 'lucide-react';

const skillCategories = [
  {
    name: 'Frontend Development',
    icon: Code,
    skills: [
      { name: 'React', level: 'Expert', years: '5+', description: 'Advanced patterns, hooks, context, performance optimization' },
      { name: 'Next.js', level: 'Expert', years: '4+', description: 'App Router, Server Components, API routes, deployment' },
      { name: 'TypeScript', level: 'Advanced', years: '4+', description: 'Type safety, generics, utility types, strict mode' },
      { name: 'Tailwind CSS', level: 'Advanced', years: '3+', description: 'Custom components, responsive design, dark mode' },
      { name: 'TanStack Query', level: 'Advanced', years: '3+', description: 'Server state management, caching, real-time updates' },
      { name: 'Zustand', level: 'Advanced', years: '3+', description: 'Lightweight state management, hooks-based store' },
    ]
  },
  {
    name: 'Backend & APIs',
    icon: Server,
    skills: [
      { name: 'Node.js', level: 'Advanced', years: '4+', description: 'Express, REST APIs, middleware, authentication' },
      { name: 'REST API', level: 'Expert', years: '5+', description: 'API design, authentication, rate limiting, documentation, microservices architecture' },
      { name: 'PostgreSQL', level: 'Intermediate', years: '3+', description: 'Database design, queries, migrations' },
      { name: 'MongoDB', level: 'Advanced', years: '3+', description: 'NoSQL database, aggregation pipelines, indexing' },
    ]
  },
  {
    name: 'Development Tools',
    icon: Zap,
    skills: [
      { name: 'Git & GitHub', level: 'Expert', years: '5+', description: 'Workflow management, CI/CD, collaboration' },
      { name: 'VS Code', level: 'Advanced', years: '4+', description: 'Extensions, debugging, productivity tools' },
      { name: 'Docker', level: 'Intermediate', years: '2+', description: 'Containerization, development environments' },
      { name: 'shadcn/ui', level: 'Advanced', years: '2+', description: 'Component library, design system, accessibility' },
      { name: 'Drizzle', level: 'Advanced', years: '2+', description: 'Type-safe ORM, schema management, migrations' },
    ]
  },
  {
    name: 'Testing & Quality',
    icon: Code,
    skills: [
      { name: 'Jest', level: 'Advanced', years: '3+', description: 'Unit testing, mocking, coverage reports' },
      { name: 'React Testing Library', level: 'Advanced', years: '3+', description: 'Component testing, accessibility testing' },
      { name: 'ESLint & Prettier', level: 'Advanced', years: '4+', description: 'Code quality, formatting, team standards' },
      { name: 'Zod', level: 'Advanced', years: '3+', description: 'Runtime validation, type inference, schema design' },
    ]
  },
  {
    name: 'Performance & Optimization',
    icon: Zap,
    skills: [
      { name: 'Webpack/Vite', level: 'Intermediate', years: '3+', description: 'Bundle optimization, code splitting' },
      { name: 'Lighthouse', level: 'Advanced', years: '2+', description: 'Performance auditing, Core Web Vitals' },
      { name: 'React Profiler', level: 'Intermediate', years: '2+', description: 'Component optimization, memoization' },
    ]
  },
  {
    name: 'Deployment & DevOps',
    icon: Globe,
    skills: [
      { name: 'Vercel', level: 'Expert', years: '3+', description: 'Next.js deployment, edge functions, analytics' },
      { name: 'AWS', level: 'Intermediate', years: '2+', description: 'S3, CloudFront, Lambda functions' },
      { name: 'CI/CD', level: 'Intermediate', years: '2+', description: 'GitHub Actions, automated testing, deployment' },
    ]
  }
];

const getLevelColor = (level: string) => {
  switch (level) {
    case 'Expert':
      return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
    case 'Advanced':
      return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
    case 'Intermediate':
      return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
    default:
      return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200';
  }
};

export function Skills() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills & Expertise
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Deep expertise in modern web technologies with a focus on React, Next.js, and scalable frontend architecture
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <div
              key={category.name}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <category.icon className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {category.name}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="border-l-2 border-gray-200 dark:border-gray-700 pl-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-gray-900 dark:text-white">
                        {skill.name}
                      </h4>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getLevelColor(skill.level)}`}>
                        {skill.level}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                      {skill.years} years experience
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-500 leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
            Also Proficient In
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Redux Toolkit', 'TanStack Query', 'Zustand', 'React Hook Form', 'Framer Motion', 'Storybook', 'Cypress',
              'PostCSS', 'Sass', 'CSS Modules', 'Web Components', 'PWA Development',
              'SEO Optimization', 'Accessibility (WCAG)', 'Internationalization', 'Micro-frontends'
            ].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Looking for a React/Next.js expert to join your team?
          </p>
          <a
            href="mailto:anassfiqhi@gmail.com?subject=Frontend%20Engineering%20Opportunity"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            Let&apos;s discuss opportunities
          </a>
        </div>
      </div>
    </section>
  );
}
