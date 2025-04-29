import { Code, Palette, Zap, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const features = [
  {
    name: 'Modern Design',
    description: 'Beautiful, accessible components built with modern design principles',
    icon: <Palette className="h-6 w-6" />,
  },
  {
    name: 'Developer Friendly',
    description: 'Easy to use, well-documented components with TypeScript support',
    icon: <Code className="h-6 w-6" />,
  },
  {
    name: 'Performance',
    description: 'Optimized for performance with minimal bundle size',
    icon: <Zap className="h-6 w-6" />,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900">
      {/* Hero Section */}
      <div className="relative isolate">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 rounded-full bg-blue-50/30 dark:bg-blue-900/30 px-4 py-1 text-sm font-medium text-blue-600 dark:text-blue-400 ring-1 ring-inset ring-blue-200/30 dark:ring-blue-800/30"
            >
              <Sparkles className="h-4 w-4" />
              <span>Now Available</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 text-4xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-6xl"
            >
              Build beautiful React applications with{' '}
              <span className="text-blue-600 dark:text-blue-400">NilUI</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-lg leading-8 text-neutral-600 dark:text-neutral-400"
            >
              A modern UI library with beautiful, accessible components built with Tailwind CSS and React.
              Perfect for building your next project.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-10 flex items-center justify-center gap-x-6"
            >
              <Link
                to="/components"
                className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Get Started
              </Link>
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-neutral-900 dark:text-white hover:text-neutral-600 dark:hover:text-neutral-400"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </motion.div>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex flex-col rounded-xl bg-white/30 p-8 ring-1 ring-neutral-200/30 dark:bg-neutral-900/30 dark:ring-neutral-800/30"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50/30 dark:bg-blue-900/30">
                    {feature.icon}
                  </div>
                  <h3 className="mt-6 text-lg font-semibold leading-7 text-neutral-900 dark:text-white">
                    {feature.name}
                  </h3>
                  <p className="mt-2 text-base leading-7 text-neutral-600 dark:text-neutral-400">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 