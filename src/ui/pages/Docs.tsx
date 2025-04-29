import React from 'react';
import { BookOpen, Code2, Settings, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const sections = [
  {
    title: 'Getting Started',
    description: 'Learn how to install and set up NilUI in your project',
    icon: <Terminal className="h-6 w-6" />,
    steps: [
      'Install the package',
      'Configure your project',
      'Import components',
    ],
  },
  {
    title: 'Components',
    description: 'Detailed documentation for each component',
    icon: <Code2 className="h-6 w-6" />,
    steps: [
      'Button variants',
      'Form controls',
      'Layout components',
    ],
  },
  {
    title: 'Customization',
    description: 'Learn how to customize components to match your design',
    icon: <Settings className="h-6 w-6" />,
    steps: [
      'Theme configuration',
      'Color schemes',
      'Component props',
    ],
  },
  {
    title: 'Best Practices',
    description: 'Guidelines for using NilUI effectively',
    icon: <BookOpen className="h-6 w-6" />,
    steps: [
      'Accessibility',
      'Performance',
      'Responsive design',
    ],
  },
];

export default function Docs() {
  return (
    <div className="min-h-screen bg-neutral-200 dark:bg-[#000000] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#000000] dark:text-neutral-200 sm:text-4xl">
            Documentation
          </h1>
          <p className="mt-4 text-lg text-[#000000]/80 dark:text-neutral-200/80">
            Everything you need to know about using NilUI components.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {sections.map((section) => (
            <div
              key={section.title}
              className="relative rounded-lg border border-neutral-300 dark:border-neutral-700 bg-neutral-200 dark:bg-[#000000] p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex items-center">
                <div className="flex-shrink-0 text-indigo-600 dark:text-indigo-400">
                  {section.icon}
                </div>
                <div className="ml-4">
                  <h2 className="text-xl font-semibold text-[#000000] dark:text-neutral-200">
                    {section.title}
                  </h2>
                  <p className="mt-2 text-[#000000]/80 dark:text-neutral-200/80">
                    {section.description}
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <Link
                  to={`/docs/${section.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-flex items-center text-[#000000] dark:text-neutral-200 hover:underline"
                >
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 