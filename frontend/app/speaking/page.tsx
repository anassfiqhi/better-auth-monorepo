import Link from 'next/link';
import { ArrowLeft, Calendar, MapPin, ExternalLink, Video } from 'lucide-react';

const speakingEngagements = [
  {
    title: 'Building Scalable React Applications',
    event: 'React Summit 2024',
    date: '2024-06-15',
    location: 'San Francisco, CA',
    description: 'A deep dive into building React applications that scale from startup to enterprise. Covering architecture patterns, performance optimization, and team collaboration.',
    type: 'Conference Talk',
    duration: '45 minutes',
    slides: 'https://slides.com/yourusername/react-summit-2024',
    video: 'https://youtube.com/watch?v=example',
    tags: ['React', 'Architecture', 'Performance'],
  },
  {
    title: 'Next.js 13: The Future of Full-Stack Development',
    event: 'Next.js Conf',
    date: '2024-05-20',
    location: 'Virtual',
    description: 'Exploring the latest features in Next.js 13, including the App Router, Server Components, and how they revolutionize full-stack development.',
    type: 'Workshop',
    duration: '2 hours',
    slides: 'https://slides.com/yourusername/nextjs-conf-2024',
    video: null,
    tags: ['Next.js', 'Full-Stack', 'Workshop'],
  },
  {
    title: 'TypeScript Best Practices for Teams',
    event: 'TypeScript Meetup',
    date: '2024-04-10',
    location: 'New York, NY',
    description: 'Sharing lessons learned from implementing TypeScript in production applications. Covering team adoption, code quality, and common pitfalls.',
    type: 'Meetup Talk',
    duration: '30 minutes',
    slides: 'https://slides.com/yourusername/typescript-meetup-2024',
    video: null,
    tags: ['TypeScript', 'Team Development', 'Best Practices'],
  },
  {
    title: 'Web Performance: Beyond the Basics',
    event: 'Web Performance Summit',
    date: '2024-03-25',
    location: 'Austin, TX',
    description: 'Advanced techniques for optimizing web performance, including Core Web Vitals, user experience metrics, and performance monitoring.',
    type: 'Conference Talk',
    duration: '40 minutes',
    slides: 'https://slides.com/yourusername/web-performance-summit-2024',
    video: 'https://youtube.com/watch?v=example2',
    tags: ['Performance', 'Core Web Vitals', 'Monitoring'],
  },
];

export default function SpeakingPage() {
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
            Speaking
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            I love sharing knowledge and experiences with the developer community through talks, workshops, and meetups
          </p>
        </div>
        
        <div className="space-y-8">
          {speakingEngagements.map((engagement, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {engagement.title}
                    </h3>
                    <p className="text-lg font-medium text-blue-600 dark:text-blue-400 mb-2">
                      {engagement.event}
                    </p>
                  </div>
                  <span className={`px-3 py-1 text-sm font-medium rounded-full ${
                    engagement.type === 'Conference Talk' 
                      ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
                      : engagement.type === 'Workshop'
                      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                      : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                  }`}>
                    {engagement.type}
                  </span>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {engagement.description}
                </p>
                
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <time dateTime={engagement.date}>
                      {new Date(engagement.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span>{engagement.location}</span>
                  </div>
                  <span className="text-gray-600 dark:text-gray-300">
                    {engagement.duration}
                  </span>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {engagement.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  {engagement.slides && (
                    <a
                      href={engagement.slides}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Slides
                    </a>
                  )}
                  {engagement.video && (
                    <a
                      href={engagement.video}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 transition-colors"
                    >
                      <Video className="w-4 h-4 mr-2" />
                      Watch
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Interested in having me speak at your event?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            I'm always excited to share knowledge and connect with developer communities around the world.
          </p>
          <a
            href="mailto:anassfiqhi@gmail.com?subject=Speaking%20Opportunity"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            Get in touch
          </a>
        </div>
      </div>
    </main>
  );
}
