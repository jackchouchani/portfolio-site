"use client";

import React from "react";
import { LucideProps } from "lucide-react";

const MailIcon = React.forwardRef<SVGSVGElement, LucideProps>(
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
        <rect key="mail-rect" x="2" y="4" width="20" height="16" rx="2" />
        <path key="mail-path" d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    );
  }
);

MailIcon.displayName = "MailIcon";

export default MailIcon; 