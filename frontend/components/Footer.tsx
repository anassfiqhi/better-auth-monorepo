import Link from 'next/link';
import { Github, Twitter, Linkedin, Mail, Code, Users, Globe } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">Anass FIQHI</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Senior Frontend Engineer specializing in React, Next.js, and modern web technologies. 
              Expert in REST API design and backend integration. I build scalable, performant applications 
              and share knowledge with the developer community.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:anassfiqhi@gmail.com"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Me
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-400 hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/articles" className="text-gray-400 hover:text-white transition-colors">
                  Articles
                </Link>
              </li>
              <li>
                <Link href="/speaking" className="text-gray-400 hover:text-white transition-colors">
                  Speaking
                </Link>
              </li>
              <li>
                <Link href="/uses" className="text-gray-400 hover:text-white transition-colors">
                  Uses
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:anassfiqhi@gmail.com?subject=Frontend%20Development%20Services" className="text-gray-400 hover:text-white transition-colors">
                  Frontend Development
                </a>
              </li>
              <li>
                <a href="mailto:anassfiqhi@gmail.com?subject=React%20Consulting" className="text-gray-400 hover:text-white transition-colors">
                  React Consulting
                </a>
              </li>
              <li>
                <a href="mailto:anassfiqhi@gmail.com?subject=Code%20Review%20Services" className="text-gray-400 hover:text-white transition-colors">
                  Code Review
                </a>
              </li>
              <li>
                <a href="mailto:anassfiqhi@gmail.com?subject=Team%20Training" className="text-gray-400 hover:text-white transition-colors">
                  Team Training
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Skills & Technologies */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <h3 className="text-lg font-semibold mb-4 text-center">Technologies & Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS', 'PostgreSQL', 'MongoDB',
              'REST API', 'TanStack Query', 'Zustand', 'Zod', 'shadcn/ui', 'Drizzle', 'Jest', 'Docker', 'AWS', 'Vercel', 'Git'
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Professional Stats */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-blue-400">5+</div>
              <div className="text-sm text-gray-400">Years Experience</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-400">50+</div>
              <div className="text-sm text-gray-400">Projects Delivered</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-400">100+</div>
              <div className="text-sm text-gray-400">Articles Written</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-yellow-400">10+</div>
              <div className="text-sm text-gray-400">Technologies</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">
              Ready to work together?
            </h3>
            <p className="text-gray-400 mb-6 max-w-md mx-auto">
              I&apos;m always interested in new opportunities and exciting projects. 
              Let&apos;s discuss how I can help bring your ideas to life.
            </p>
            <a
              href="mailto:anassfiqhi@gmail.com?subject=Let's%20Discuss%20Opportunities"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Anass FIQHI. All rights reserved. | 
            Built with Next.js, React, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
