'use client';

import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

export default function Logo({ className = "", size = 32 }: LogoProps) {
  return (
    <svg 
      width={size} 
      height={(size * 61.8) / 81} 
      viewBox="0 0 81 61.8" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
      id="vibe-logo-svg"
    >
      <path 
        fill="#D7D7D7" 
        d="M30 59H20c-9 0-17-8-17-17V3s5 11 22 11S47 3 47 3v39c0 9-8 17-17 17z"
      />
      <path 
        fill="#ef4444" 
        d="M61 59H32s5 0 10-6 5-11 5-11V3h31v39c0 9-7 17-17 17z"
      />
      <path 
        className="fill-black dark:fill-slate-500 transition-colors duration-300"
        d="M20 62C9 62 0 53 0 42V3a3 3 0 0 1 6 0v39c0 7 6 14 14 14a3 3 0 1 1 0 6zM30 62a3 3 0 1 1 0-6c7 0 14-7 14-14V3a3 3 0 1 1 6 0v39c0 11-9 20-20 20zM61 62a3 3 0 1 1 0-6c8 0 14-7 14-14V3a3 3 0 1 1 6 0v39c0 11-9 20-20 20z"
      />
    </svg>
  );
}
