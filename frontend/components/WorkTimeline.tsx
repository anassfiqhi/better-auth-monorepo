import { Calendar, MapPin, ExternalLink, Code, Users, TrendingUp } from 'lucide-react';

const workExperience = [
  {
    company: 'Tech Company Inc.',
    position: 'Senior Frontend Engineer',
    period: '2022 - Present',
    location: 'San Francisco, CA',
    description: 'Leading frontend development for a SaaS platform serving 100K+ users. Architected and implemented React-based micro-frontend system, improved Core Web Vitals by 40%, and mentored 5 junior developers.',
    achievements: [
      'Redesigned component library using React 18, TypeScript, and Storybook',
      'Implemented Next.js App Router migration, reducing bundle size by 25%',
      'Led performance optimization initiatives achieving 95+ Lighthouse scores',
      'Established testing standards with Jest and React Testing Library',
      'Integrated TanStack Query for efficient server state management',
      'Implemented Drizzle ORM for type-safe database operations'
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Jest', 'Storybook', 'TanStack Query', 'Zustand', 'Drizzle'],
    url: 'https://techcompany.com',
  },
  {
    company: 'StartupXYZ',
    position: 'Full Stack Developer',
    period: '2020 - 2022',
    location: 'Remote',
    description: 'Built and scaled web applications from MVP to production. Developed REST APIs, implemented real-time features, and optimized database queries for high-traffic scenarios.',
    achievements: [
      'Developed React SPA with 50K+ monthly active users',
      'Built Node.js backend APIs handling 1000+ requests/minute',
      'Designed and implemented RESTful API architecture with authentication and rate limiting',
      'Reduced page load times by 60% through optimization',
      'Implemented Zustand for lightweight client state management',
      'Designed MongoDB schemas and implemented Drizzle ORM for type safety'
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'MongoDB', 'WebSockets', 'Redis', 'Docker', 'Zustand', 'Zod', 'Drizzle'],
    url: 'https://startupxyz.com',
  },
  {
    company: 'Digital Agency',
    position: 'Frontend Developer',
    period: '2019 - 2020',
    location: 'New York, NY',
    description: 'Created responsive websites and e-commerce solutions for clients across various industries. Collaborated with designers and backend developers to deliver pixel-perfect implementations.',
    achievements: [
      'Built 15+ client websites using React and modern CSS',
      'Implemented responsive design patterns for mobile-first approach',
      'Optimized images and assets for better performance',
      'Collaborated with cross-functional teams on 8+ projects'
    ],
    technologies: ['React', 'CSS3', 'JavaScript', 'Responsive Design', 'Performance'],
    url: 'https://digitalagency.com',
  }
];

export function WorkTimeline() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            My journey in software development, focusing on React, Next.js, and modern web technologies
          </p>
        </div>

        <div className="space-y-8">
          {workExperience.map((work, index) => (
            <div key={index} className="relative">
              {/* Timeline connector */}
              {index < workExperience.length - 1 && (
                <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700" />
              )}

              <div className="flex items-start space-x-4">
                {/* Timeline dot */}
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <Code className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <div className="flex-1 bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {work.position}
                      </h3>
                      <p className="text-lg font-medium text-blue-600 dark:text-blue-400">
                        {work.company}
                      </p>
                    </div>
                    {work.url && (
                      <a
                        href={work.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                        aria-label={`Visit ${work.company} website`}
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{work.period}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{work.location}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                    {work.description}
                  </p>

                  {/* Key Achievements */}
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2 flex items-center">
                      <TrendingUp className="w-4 h-4 mr-2 text-green-500" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-1">
                      {work.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-sm text-gray-600 dark:text-gray-300 flex items-start">
                          <span className="text-green-500 mr-2 mt-1">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies Used */}
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2 flex items-center">
                      <Code className="w-4 h-4 mr-2 text-blue-500" />
                      Technologies & Tools
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {work.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to bring React/Next.js expertise to your team?
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              I&apos;m passionate about building scalable, performant applications and sharing knowledge with development teams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/projects"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                View My Projects
              </a>
              <a
                href="mailto:anassfiqhi@gmail.com?subject=Frontend%20Engineering%20Opportunity"
                className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
