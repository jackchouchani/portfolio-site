"use client";

import React from "react";
import { LucideProps } from "lucide-react";

const LinkedinIcon = React.forwardRef<SVGSVGElement, LucideProps>(
  ({ color = "currentColor", size = 24, strokeWidth = 2, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <path 
          key="linkedin-rect" 
          d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" 
        />
        <rect key="linkedin-square" x="2" y="9" width="4" height="12" />
        <circle key="linkedin-circle" cx="4" cy="4" r="2" />
      </svg>
    );
  }
);

LinkedinIcon.displayName = "LinkedinIcon";

export default LinkedinIcon; 