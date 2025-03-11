"use client";

import React from "react";
import { LucideProps } from "lucide-react";

const ArrowUpRightIcon = React.forwardRef<SVGSVGElement, LucideProps>(
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
        <path key="arrow-up-right-path-1" d="M7 17 17 7" />
        <path key="arrow-up-right-path-2" d="M7 7h10v10" />
      </svg>
    );
  }
);

ArrowUpRightIcon.displayName = "ArrowUpRightIcon";

export default ArrowUpRightIcon; 