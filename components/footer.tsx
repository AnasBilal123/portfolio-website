import React from "react";

function Footer() {
  return (
    <footer className="mb-10 text-center mx-10 text-gray-600 dark:text-gray-200">
      <small className="mb-2 text-xs">
        &copy; 2024 Anas Bilal. All rights reserved.
      </small>
      <p className="text-xs mt-1">
        <span className="font-bold">About this website: </span>
        Build with React & Next.js (App Router & Server Actions), TypeScript,
        Tailwind CSS, Framer Motion, React Email & Resend, Vercel Hosting.
      </p>
    </footer>
  );
}

export default Footer;
