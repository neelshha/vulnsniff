import { Code, Palette, Zap, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react'; // Import useRef for scroll animations if needed

// Reusable animation variants
const viewportSettings = { once: true, amount: 0.2 }; // Animate when 20% is visible

const fadeInFromBottom = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }, // Smoother cubic bezier
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Slightly increased stagger
      delayChildren: 0.1,
    },
  },
};


export default function Home() {
  // Optional: Ref for more complex scroll parallax if desired later
  // const targetRef = useRef(null);
  // const { scrollYProgress } = useScroll({
  //   target: targetRef,
  //   offset: ["start end", "end start"],
  // });
  // Example: const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);


  return (
    // Adding a subtle noise texture via background image (ensure noise.svg is available or use CSS)
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-white dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950 text-neutral-900 dark:text-neutral-100 relative overflow-x-hidden">
      {/* Subtle background noise pattern */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'4\' height=\'4\' viewBox=\'0 0 4 4\'%3E%3Cpath fill=\'%239C92AC\' fill-opacity=\'0.4\' d=\'M1 3h1v1H1V3zm2-2h1v1H3V1z\'%3E%3C/path%3E%3C/svg%3E")' }}></div>

      {/* Hero Section */}
      <div className="relative isolate pt-14 z-10"> {/* Ensure content is above noise */}
        {/* Background Glow Element 1 */}
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#80caff] to-[#4f46e5] opacity-30 dark:opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>

        <motion.div // Stagger container for hero elements
          className="mx-auto max-w-7xl px-6 py-28 sm:py-36 lg:px-8" // Increased padding
          variants={staggerContainer}
          initial="hidden"
          animate="visible" // Initial animation on load
        >
          <div className="mx-auto max-w-3xl text-center">
             <motion.div // Animated badge
              variants={fadeInFromBottom} // Use reusable variant
              className="mb-8 inline-flex items-center space-x-2.5 rounded-full bg-blue-100 dark:bg-blue-900/40 px-5 py-2 text-base font-medium text-blue-700 dark:text-blue-300 ring-1 ring-inset ring-blue-200 dark:ring-blue-800/50 shadow-sm"
            >
              <Sparkles className="h-5 w-5 animate-pulse text-blue-500 dark:text-blue-400" />
              <span>Now Available</span>
            </motion.div>

            <motion.h1 // Animated heading
              variants={fadeInFromBottom}
              className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl !leading-tight" // Force tighter leading
            >
              Build stunning UIs with{' '}
              <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent dark:from-blue-400 dark:to-cyan-300">
                NilUI
              </span>
            </motion.h1>

            <motion.p // Animated paragraph
              variants={fadeInFromBottom}
              className="mt-8 text-lg leading-8 text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto" // Slightly narrower max-width
            >
              An intuitive & modern UI library packed with beautiful, accessible components made for React & Tailwind CSS.
            </motion.p>

            <motion.div // Animated buttons
              variants={fadeInFromBottom}
              className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6" // Stack on mobile
            >
              <Link
                to="/components"
                // Further enhanced button styling with subtle glow on hover
                className="group relative inline-block rounded-lg bg-blue-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-blue-500/30 dark:shadow-blue-800/40 transform transition duration-300 ease-in-out hover:scale-[1.03] hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 active:scale-95 w-full sm:w-auto" // Added active scale
              >
                 {/* Subtle glow element */}
                 <span className="absolute inset-0 rounded-lg bg-blue-500 opacity-0 transition-opacity duration-300 group-hover:opacity-20 blur-md"></span>
                 <span className="relative">Get Started</span> {/* Text needs to be relative */}
              </Link>
              <a
                href="#" // Replace with actual link
                className="group text-base font-semibold leading-6 text-neutral-800 dark:text-neutral-200 transition duration-300 ease-in-out hover:text-blue-600 dark:hover:text-blue-400 w-full sm:w-auto text-center" // Center text on mobile
              >
                Learn more{' '}
                <span aria-hidden="true" className="inline-block transition-transform duration-300 ease-in-out group-hover:translate-x-1.5">
                  →
                </span>
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* --- Feature Grid Section --- */}
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <motion.div // Animate section title into view
             className="mx-auto max-w-2xl text-center mb-16 lg:mb-20"
             initial="hidden"
             whileInView="visible"
             viewport={viewportSettings}
             variants={fadeInFromBottom}
          >
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
              Why Choose NilUI?
            </h2>
            <p className="mt-4 text-lg leading-8 text-neutral-600 dark:text-neutral-400">
              Everything you need to build modern web applications, faster.
            </p>
          </motion.div>

          <motion.div // Stagger children as they scroll into view
            className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible" // Trigger stagger on scroll
            viewport={viewportSettings} // Use viewport settings
          >
            {features.map((feature, index) => (
              <motion.div // Use fadeInFromBottom for individual card entrance
                key={feature.name}
                variants={fadeInFromBottom} // Each card fades in from bottom
                whileHover={{ scale: 1.04, y: -6, transition: { type: 'spring', stiffness: 300, damping: 15 }}} // Slightly increased hover scale/lift
                className="relative group flex flex-col rounded-2xl bg-white/60 dark:bg-neutral-800/60 backdrop-blur-lg p-8 shadow-lg ring-1 ring-black ring-opacity-5 dark:ring-white dark:ring-opacity-10 transition-shadow duration-300 hover:shadow-xl hover:shadow-blue-500/10 dark:hover:shadow-blue-900/20 overflow-hidden" // Added overflow-hidden for potential border effect
              >
                 {/* Optional: Animated Gradient Border on Hover (more complex) */}
                 {/* <span className="absolute inset-[-1px] rounded-2xl z-[-1] bg-gradient-to-r from-blue-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span> */}

                 {/* Enhanced Icon Container with subtle hover effect */}
                 <motion.div
                    className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-800/50 dark:to-blue-900/50 shadow-inner dark:shadow-none mb-6 transition-transform duration-300 ease-out group-hover:scale-110" // Scale icon container on card hover
                 >
                   {/* Wrap icon for potential individual animation */}
                   <motion.div whileHover={{ rotate: 15 }}>{feature.icon}</motion.div>
                 </motion.div>

                 <h3 className="text-xl font-semibold leading-7 text-neutral-900 dark:text-white mb-3">
                   {feature.name}
                 </h3>
                 <p className="text-base leading-7 text-neutral-600 dark:text-neutral-400 flex-grow">
                   {feature.description}
                 </p>
                 {/* Subtle arrow hint on hover */}
                 <span className="absolute bottom-4 right-4 text-blue-400 dark:text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -translate-x-2 group-hover:translate-x-0">
                   <Zap className="h-5 w-5" /> {/* Or use an arrow icon */}
                 </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Background Glow Element 2 */}
        <div
          className="absolute inset-x-0 top-[calc(100%-25rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-50rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#a0e9ff] to-[#9333ea] opacity-20 dark:opacity-10 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" // Adjusted colors/opacity
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
    </div>
  );
}

// Simple features data (assuming it's defined elsewhere or above)
const features = [
  {
    name: 'Modern Design',
    description: 'Beautiful, accessible components built with modern design principles.',
    icon: <Palette className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
  },
  {
    name: 'Developer Friendly',
    description: 'Easy to use, well-documented components with TypeScript support.',
    icon: <Code className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
  },
  {
    name: 'Performance',
    description: 'Optimized for performance with minimal bundle size impact.',
    icon: <Zap className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
  },
];