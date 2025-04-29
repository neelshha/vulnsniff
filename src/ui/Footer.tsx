export function Footer() {
  return (
    <footer className="bg-white dark:bg-neutral-800 border-t border-neutral-200 dark:border-neutral-700">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h6 className="text-sm font-semibold text-neutral-800 dark:text-neutral-100 uppercase mb-3">
              About Us
            </h6>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              NilUI is a collection of accessible and customizable UI components built with Tailwind CSS and React.
            </p>
          </div>
          <div>
            <h6 className="text-sm font-semibold text-neutral-800 dark:text-neutral-100 uppercase mb-3">
              Links
            </h6>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-100"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-100"
                >
                  Components
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-100"
                >
                  Examples
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-100"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="text-sm font-semibold text-neutral-800 dark:text-neutral-100 uppercase mb-3">
              Follow Us
            </h6>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-100"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-100"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-100"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-xs text-neutral-500 dark:text-neutral-500">
            &copy; {new Date().getFullYear()} NilUI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}