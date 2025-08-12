import Link from 'next/link';
import { ArrowLeft, ExternalLink } from 'lucide-react';

const categories = [
  {
    name: 'Development Tools',
    items: [
      {
        name: 'VS Code',
        description: 'My primary code editor with extensions like Prettier, ESLint, and GitLens.',
        link: 'https://code.visualstudio.com/',
        category: 'Editor',
      },
      {
        name: 'iTerm2',
        description: 'Terminal emulator for macOS with split panes and custom themes.',
        link: 'https://iterm2.com/',
        category: 'Terminal',
      },
      {
        name: 'Postman',
        description: 'API testing and development tool for building and testing REST APIs.',
        link: 'https://www.postman.com/',
        category: 'API Testing',
      },
      {
        name: 'Docker Desktop',
        description: 'Containerization platform for development and deployment.',
        link: 'https://www.docker.com/products/docker-desktop',
        category: 'DevOps',
      },
    ],
  },
  {
    name: 'Design & Prototyping',
    items: [
      {
        name: 'Figma',
        description: 'Collaborative design tool for UI/UX design and prototyping.',
        link: 'https://www.figma.com/',
        category: 'Design',
      },
      {
        name: 'Sketch',
        description: 'Vector graphics editor for macOS, great for icon and interface design.',
        link: 'https://www.sketch.com/',
        category: 'Design',
      },
      {
        name: 'InVision',
        description: 'Digital product design platform for prototyping and collaboration.',
        link: 'https://www.invisionapp.com/',
        category: 'Prototyping',
      },
    ],
  },
  {
    name: 'Productivity',
    items: [
      {
        name: 'Notion',
        description: 'All-in-one workspace for notes, docs, and project management.',
        link: 'https://www.notion.so/',
        category: 'Note Taking',
      },
      {
        name: 'Slack',
        description: 'Team communication platform for work and collaboration.',
        link: 'https://slack.com/',
        category: 'Communication',
      },
      {
        name: 'Trello',
        description: 'Visual project management tool using boards and cards.',
        link: 'https://trello.com/',
        category: 'Project Management',
      },
      {
        name: 'RescueTime',
        description: 'Time tracking and productivity monitoring tool.',
        link: 'https://www.rescuetime.com/',
        category: 'Time Tracking',
      },
    ],
  },
  {
    name: 'Hardware',
    items: [
      {
        name: 'MacBook Pro 16"',
        description: 'M2 Max with 32GB RAM and 1TB SSD. My primary development machine.',
        link: null,
        category: 'Computer',
      },
      {
        name: 'Dell UltraSharp 27"',
        description: '4K monitor for development and design work.',
        link: null,
        category: 'Monitor',
      },
      {
        name: 'Apple Magic Keyboard',
        description: 'Wireless keyboard with numeric keypad for comfortable typing.',
        link: null,
        category: 'Input',
      },
      {
        name: 'Logitech MX Master 3',
        description: 'Wireless mouse with customizable buttons and smooth scrolling.',
        link: null,
        category: 'Input',
      },
    ],
  },
  {
    name: 'Browser Extensions',
    items: [
      {
        name: 'React Developer Tools',
        description: 'Browser extension for debugging React applications.',
        link: 'https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi',
        category: 'Development',
      },
      {
        name: 'Lighthouse',
        description: 'Chrome extension for auditing web app performance and accessibility.',
        link: 'https://developers.google.com/web/tools/lighthouse',
        category: 'Performance',
      },
      {
        name: 'ColorZilla',
        description: 'Color picker and eyedropper tool for web development.',
        link: 'https://www.colorzilla.com/',
        category: 'Design',
      },
    ],
  },
];

export default function UsesPage() {
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
            What I Use
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            A comprehensive list of the tools, software, and hardware I use for development, design, and productivity
          </p>
        </div>
        
        <div className="space-y-12">
          {categories.map((category) => (
            <section key={category.name}>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {category.name}
              </h2>
              
              <div className="grid gap-6 md:grid-cols-2">
                {category.items.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {item.name}
                      </h3>
                      {item.link && (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                          aria-label={`Visit ${item.name} website`}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-3 leading-relaxed">
                      {item.description}
                    </p>
                    
                    <span className="inline-block px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded">
                      {item.category}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Have a recommendation?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            I'm always looking for new tools and software to improve my workflow. If you have a great recommendation, I'd love to hear about it!
          </p>
          <a
            href="mailto:anassfiqhi@gmail.com?subject=Tool%20Recommendation"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            Send me a recommendation
          </a>
        </div>
      </div>
    </main>
  );
}
