import Link from 'next/link';
import { CheckCircle, Mail, ArrowLeft } from 'lucide-react';

export default function ThankYouPage() {
  return (
    <main className="min-h-screen pt-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto text-center">
        <Link
          href="/"
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to home
        </Link>
        
        <div className="mb-8">
          <CheckCircle className="w-20 h-20 mx-auto text-green-500 mb-6" />
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Thank you for subscribing!
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            You've successfully joined my newsletter. I'm excited to share insights, tutorials, and updates with you.
          </p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg mb-8">
          <Mail className="w-12 h-12 mx-auto text-blue-600 dark:text-blue-400 mb-4" />
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            What to expect
          </h2>
          <ul className="text-left text-gray-600 dark:text-gray-300 space-y-2">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">•</span>
              Weekly articles on web development and technology
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">•</span>
              Exclusive insights and behind-the-scenes content
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">•</span>
              Early access to new projects and tutorials
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">•</span>
              Speaking event announcements and resources
            </li>
          </ul>
        </div>
        
        <div className="space-y-4">
          <p className="text-gray-600 dark:text-gray-300">
            Your first email should arrive within the next few minutes. If you don't see it, check your spam folder.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/articles"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              Browse articles
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              View projects
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
