import { ArrowRight, Code, Palette, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

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
    <div className="min-h-screen bg-neutral-200 dark:bg-[#000000]">
      <div className="relative overflow-hidden">
        <main>
          <div className="pt-10 bg-neutral-200 dark:bg-[#000000] sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
            <div className="mx-auto max-w-7xl lg:px-8">
              <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
                  <div className="lg:py-24">
                    <h1 className="mt-4 text-4xl font-bold tracking-tight text-[#000000] dark:text-neutral-200 sm:mt-5 sm:text-6xl lg:mt-6">
                      <span className="block">A modern UI library</span>
                      <span className="block">for React</span>
                    </h1>
                    <p className="mt-3 text-base text-[#000000]/80 dark:text-neutral-200/80 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                      Beautiful, responsive, and accessible React components built with Tailwind CSS.
                    </p>
                    <div className="mt-10 sm:mt-12">
                      <div className="sm:flex sm:justify-center lg:justify-start">
                        <div className="rounded-md">
                          <Link
                            to="/components"
                            className="flex w-full items-center justify-center rounded-md border border-transparent bg-[#000000] px-8 py-3 text-base font-medium text-neutral-200 hover:bg-[#000000]/90 md:py-4 md:text-lg md:px-10 transition-colors duration-200"
                          >
                            Get Started
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature section */}
          <div className="relative bg-neutral-200 dark:bg-[#000000] py-16 sm:py-24 lg:py-32">
            <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
              <h2 className="text-base font-semibold uppercase tracking-wider text-[#000000] dark:text-neutral-200">
                Why NilUI?
              </h2>
              <p className="mt-2 text-3xl font-extrabold tracking-tight text-[#000000] dark:text-neutral-200 sm:text-4xl">
                Everything you need to build modern React applications
              </p>
              <div className="mt-12">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  {features.map((feature) => (
                    <div key={feature.name} className="pt-6">
                      <div className="flow-root rounded-lg bg-neutral-200 dark:bg-[#000000] border border-neutral-300 dark:border-neutral-700 px-6 pb-8">
                        <div className="-mt-6">
                          <div>
                            <span className="inline-flex items-center justify-center rounded-md bg-[#000000] dark:bg-neutral-200 p-3">
                              {feature.icon}
                            </span>
                          </div>
                          <h3 className="mt-8 text-lg font-medium tracking-tight text-[#000000] dark:text-neutral-200">
                            {feature.name}
                          </h3>
                          <p className="mt-5 text-base text-[#000000]/80 dark:text-neutral-200/80">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
} 