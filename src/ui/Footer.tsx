import React from 'react';
import { Github, Twitter, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-neutral-200 dark:bg-[#000000] border-t border-neutral-300 dark:border-neutral-700">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm text-[#000000]/80 dark:text-neutral-200/80">
            &copy; {new Date().getFullYear()} NilUI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 